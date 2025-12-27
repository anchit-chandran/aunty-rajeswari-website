# Scripts

## Review Scraper

This directory contains a Python script to scrape patient reviews from iwantgreatcare.org.

### Manual Usage

Run the scraper manually:
```bash
python scripts/scrape_reviews.py
```

This will:
- Fetch the top 3 reviews from iwantgreatcare.org
- Save them to `src/data/reviews.json`
- The website will automatically use these reviews in the Testimonials section

### Automated Updates

The reviews are automatically updated quarterly (every 3 months) via GitHub Actions:
- Runs on: January 1, April 1, July 1, October 1
- Creates a pull request with the updated reviews
- You can also manually trigger the workflow from the GitHub Actions tab

### Troubleshooting

If the scraper fails to find reviews:
- The website structure may have changed
- Update the CSS selectors in `scrape_reviews.py`
- The script will use fallback reviews if scraping fails

### Files

- `scrape_reviews.py` - Main scraper script
- `requirements.txt` - Python dependencies
- `../src/data/reviews.json` - Output file with scraped reviews
- `../.github/workflows/update-reviews.yml` - GitHub Actions workflow
