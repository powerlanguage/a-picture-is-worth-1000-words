A user can visit a page and see a 'live' stream of emoji being appended to a page
 - Each time an emoji is reused it grows

A user can visit a page to see the count of all emoji used

- [x] set up project
- [x] test emoji parser

- [x] build emoji component
- [x] on mount, make call to /load endpoint
- [x] render emoji based on response from /load
- [x] scale emoji size

- [x] store emoji counts on server
- [x] return the counts

- [ ] add route to get count for each emoji?
- [ ] load from the DB and then stream to the client?
- [ ] set up sql database?

- [ ] load into memory from DB if empty
- [ ] persist to DB if on each update

- [ ] make sizes relative - find min and max count and scale sizes relative to that?
- [ ] line height?

- [ ] see new additions on response
- [ ] just hand back the count and let the client do the sorting


venmo fetcher - get
 - parse out messages into an array of arrays
emoji extractor - takes a string and returns an array of emoji present

## Little things

- [ ] Refactor frontend to angular
- [ ] put routes in a different file
- [ ] how to correctly send emoji with express

## Don't understand

- [x] module.exports vs export default
- [ ] serving static files with node

## Notes

Uses Kevin Scott's emoji-tree parser
- https://www.npmjs.com/package/emoji-tree
- https://medium.com/reactnative/emojis-in-javascript-f693d0eb79fb