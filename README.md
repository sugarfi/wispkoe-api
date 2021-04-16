# wispkoe api

api for [wispkoe](https://wispkoe.repl.co/), a really neat little bbs. it exposes two functions:

- `getPosts([n])`
  gets the latest `n` posts, or if `n` is unspecified, all of them. new posts will come first.
  the result is an array of objects with the following keys:
  
  - `title`: the post title
  - `username`: the author of the post
  - `content`: the content
- `addPost(title, username, content)`
  adds a post, with the given title, username, and content.

both of these functions are asynchronous, and return promises.
