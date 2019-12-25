const fetch = require('node-fetch')
const parser = require('fast-xml-parser')
const he = require('he')

const { GOODREADS_API_KEY, GOODREADS_ACCOUNT_ID } = process.env
const API_ENDPOINT = `https://www.goodreads.com/review/list?v=2&shelf=currently-reading&key=${GOODREADS_API_KEY}&id=${GOODREADS_ACCOUNT_ID}`

/**
 * A hack to get a higher-resolution image URL from Goodreads API.
 *
 * @param {String} tinyImageUrl
 */
const getLargeImageUrl = tinyImageUrl => tinyImageUrl.replace(/\._SX\d+_\./g, '.')

/**
 * Decode an HTML string.
 * Prone to XSS attacks! Only used on trusted API responses from Goodreads.
 *
 * @param {string} html
 */
const decodeHtml = html => he.decode(html)

exports.handler = () => {
  return fetch(API_ENDPOINT)
    .then(response => response.text())
    .then(xml => {
      const book = parser.parse(xml).GoodreadsResponse.reviews.review[0].book

      return {
        statusCode: 200,
        body: JSON.stringify({
          title: book.title,
          url: book.link,
          cover: getLargeImageUrl(book.image_url),
          description: decodeHtml(book.description),
          author: book.authors.author.name
        })
      }
    })
    .catch(error => ({
      statusCode: 422,
      body: String(error)
    }))
}
