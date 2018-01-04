- [ ] set up project
- [x] test emoji parser
- [ ] set up sql database?

A user can visit a page and see a 'live' stream of emoji being appended to a page
 - Each time an emoji is reused it grows

A user can visit a page to see the count of all emoji used


- [ ] load from the DB and then stream to the client?

- [ ] build emoji component
- [ ] on mount, make call to /load endpoint
- [ ] render emoji based on response from /load

- [ ] store emoji counts on server
- [ ] return the counts

- [ ] add route to get count for each emoji?

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