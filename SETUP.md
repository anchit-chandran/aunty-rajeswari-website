# Review Scraper Setup

## What Was Created

I've set up an automated system to scrape patient reviews from iwantgreatcare.org and update your website quarterly.

### Files Created

1. **[scripts/scrape_reviews.py](scripts/scrape_reviews.py)** - Python scraper that:
   - Fetches reviews from iwantgreatcare.org
   - Extracts only 4+ star reviews
   - Saves top 3 to [src/data/reviews.json](src/data/reviews.json)
   - Has fallback reviews if scraping fails

2. **[scripts/requirements.txt](scripts/requirements.txt)** - Python dependencies:
   - beautifulsoup4 (HTML parsing)
   - requests (HTTP requests)

3. **[src/data/reviews.json](src/data/reviews.json)** - JSON file containing review data

4. **[.github/workflows/update-reviews.yml](.github/workflows/update-reviews.yml)** - GitHub Actions workflow that:
   - Runs quarterly (Jan 1, Apr 1, Jul 1, Oct 1)
   - Can be manually triggered
   - Creates a PR with updated reviews

5. **[scripts/test_local.py](scripts/test_local.py)** - Test script for local HTML validation

### Files Modified

1. **[src/components/Testimonials.tsx](src/components/Testimonials.tsx)**:
   - Now imports reviews from JSON file
   - Updated link to point to iwantgreatcare.org

2. **[.gitignore](.gitignore)**:
   - Added Python-specific ignores

## How It Works

### HTML Structure
The scraper looks for:
- Review containers: `<div class="entity-review">`
- Review text: `<p class="review-text" itemprop="text">`
- Overall rating: `<span itemprop="ratingValue">` (filters for 4+ stars)
- Author type: Extracted from `<div class="review-writtenby">`
- Hospital location: Extracted from link in `review-writtenby`
- Review date: `<div class="review-date">`
- Sub-ratings (Recommend/Trust/Listening): Counted from `review-numerics-row` star images

### Manual Usage

```bash
# Install dependencies
pip install -r scripts/requirements.txt

# Run the scraper
python scripts/scrape_reviews.py
```

### Automated Updates

The GitHub Actions workflow:
1. Runs every 3 months automatically
2. Can be manually triggered from Actions tab
3. Creates a PR for review (not auto-merged)
4. You review and approve the PR

## Testing

The scraper was tested with actual HTML from the site. It correctly:
- Identifies review containers
- Extracts review text and ratings
- Filters for 4+ star reviews only
- Limits to top 3 reviews

## Next Steps

1. **Test the scraper**: Run `python scripts/scrape_reviews.py` to fetch live reviews
2. **Commit changes**: Commit all the new files to your repository
3. **Push to GitHub**: The workflow will be active once pushed
4. **Manual trigger**: Test the workflow by manually triggering it from GitHub Actions tab

## Notes

- Reviews are filtered to only include 4+ stars
- The scraper has fallback data if the site structure changes
- PRs are created automatically but require manual approval for safety
- The workflow requires `contents: write` and `pull-requests: write` permissions (already configured)
