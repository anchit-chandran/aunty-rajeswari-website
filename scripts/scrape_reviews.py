#!/usr/bin/env python3
"""
Scrape top 3 reviews from iwantgreatcare.org for Miss Devanna Rajeswari
and save them to a JSON file for use in the website.
"""

import json
from pathlib import Path
from bs4 import BeautifulSoup
import requests
from pprint import pprint

# URL to scrape
DOCTOR_URL = "https://www.iwantgreatcare.org/doctors/miss-devanna-rajeswari"

# Output file path (relative to project root)
OUTPUT_FILE = Path(__file__).parent.parent / "src" / "data" / "reviews.json"


def scrape_reviews():
    """Scrape the top 3 reviews (4+ stars) from the doctor's page."""
    print(f"Fetching reviews from {DOCTOR_URL}...")

    try:
        # Fetch the page
        headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
        response = requests.get(DOCTOR_URL, headers=headers, timeout=10)
        response.raise_for_status()

        # Parse HTML
        soup = BeautifulSoup(response.text, "html.parser")

        # Find review elements - based on actual HTML structure
        reviews = []
        review_elements = soup.find_all("div", class_="entity-review")

        print(f"Found {len(review_elements)} total reviews")

        for element in review_elements:
            # Extract rating from hidden meta tag
            rating = 5  # Default to 5 stars
            rating_span = element.find("span", itemprop="reviewRating")
            if rating_span:
                rating_value_span = rating_span.find("span", itemprop="ratingValue")
                if rating_value_span:
                    try:
                        rating = int(rating_value_span.get_text(strip=True))
                    except (ValueError, AttributeError):
                        rating = 5

            # Only include reviews with 4+ stars
            if rating < 4:
                print(f"Skipping review with rating {rating} (below 4 stars)")
                continue

            # Extract review text from p.review-text
            review_text_elem = element.find("p", class_="review-text")
            if not review_text_elem:
                continue

            review_text = review_text_elem.get_text(strip=True)
            # Clean up the text (remove extra <br> artifacts)
            review_text = review_text.replace("\n", " ").strip()

            # Extract author type and location - default to "NHS Patient"
            author = "NHS Patient"
            location = ""
            author_elem = element.find("div", class_="review-writtenby")
            if author_elem:
                author_text = author_elem.get_text(strip=True)

                if "NHS patient" in author_text:
                    author = "NHS Patient"
                elif "private patient" in author_text.lower():
                    author = "Private Patient"

                # Extract hospital location from the link
                location_link = author_elem.find("a", class_="green")
                if location_link:
                    location = location_link.get_text(strip=True)

            # Extract review date
            date = ""
            date_elem = element.find("div", class_="review-date")
            if date_elem:
                date = date_elem.get_text(strip=True)

            # Extract detailed sub-ratings (Recommend, Trust, Listening)
            sub_ratings = {}
            numerics_rows = element.find_all("div", class_="review-numerics-row")
            for row in numerics_rows:
                label_elem = row.find("div", class_="star-rating-label")
                stars_elem = row.find("div", class_="star-rating-stars")

                if label_elem and stars_elem:
                    label = label_elem.get_text(strip=True)
                    # Count the number of star images
                    star_count = len(stars_elem.find_all("img", class_="sprite-icons"))
                    sub_ratings[label] = star_count

            if review_text and len(review_text) > 20:  # Ensure meaningful content
                reviews.append(
                    {
                        "quote": review_text,
                        "author": author,
                        "location": location,
                        "date": date,
                        "rating": rating,
                        "subRatings": sub_ratings,
                    }
                )
                print(f"Added review: {rating} stars, {len(review_text)} chars, {location}")

            # Stop after collecting 3 reviews
            if len(reviews) >= 3:
                break

        if not reviews:
            print("Warning: No reviews found. The page structure may have changed.")
            print("Please check the HTML structure and update the selectors.")
            return None

        print(f"Successfully scraped {len(reviews)} review(s) with 4+ stars")
        return reviews[:3]  # Ensure we only return top 3

    except requests.RequestException as e:
        print(f"Error fetching the page: {e}")
        return None
    except Exception as e:
        print(f"Error parsing reviews: {e}")
        import traceback

        traceback.print_exc()
        return None


def save_reviews(reviews):
    """Save reviews to JSON file."""
    if not reviews:
        print("No reviews to save.")
        return False

    # Ensure the directory exists
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    # Save to JSON
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(reviews, f, indent=2, ensure_ascii=False)

    print(f"Reviews saved to {OUTPUT_FILE}")
    return True


def main():
    """Main function to scrape and save reviews."""
    print("Starting review scraper...")

    reviews = scrape_reviews()

    if not reviews:
        raise Exception("No reviews found")

    if reviews:
        save_reviews(reviews)
        print("\nScraped reviews:")
        for i, review in enumerate(reviews, 1):
            print(f"\n{i}. {review['quote'][:100]}...")
            print(f"   Author: {review['author']}, Rating: {review['rating']}")


if __name__ == "__main__":
    main()
