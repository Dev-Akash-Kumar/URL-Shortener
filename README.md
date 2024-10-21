# URL Shortener

URL Shortener using Node.js and MongoDB

## Description

This project is a URL shortener that takes a valid URL and returns a shortened URL, redirecting the user to the previously provided URL. It also keeps track of the total visits/clicks on the URL.

## Routes

### POST /URL

Generates a new short URL and returns the shortened URL in the format: `localhost:8000/random-id`

### GET /:id

Redirects the user to the original URL

### GET /URL/analytics/:id

Returns the clicks for the provided short id

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up a MongoDB database and update the connection string in the project
4. Start the server: `npm start`

## Usage

1. Send a POST request to `localhost:8000/URL` with the URL you want to shorten in the request body (e.g., `{ "url": "https://www.example.com" }`)
2. The server will respond with the shortened URL (e.g., `{ "shortUrl": "localhost:8000/abc123" }`)
3. To access the original URL, visit the shortened URL (e.g., `localhost:8000/abc123`)
4. To get the analytics for a shortened URL, send a GET request to `localhost:8000/URL/analytics/:id` (e.g., `localhost:8000/URL/analytics/abc123`)
