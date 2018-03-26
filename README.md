# edx_nodejs_module2
Module 2 Assignment

Command line example usage:

`node server.js`


Attached is the Module 2 assignment for Introduction to Node.js.

Everything is tested and working as reqired, plus I added in validation for IDs that do not exist.

I followed the standard REST approach of end-points with callbacks.

server.js is very small as per the requirements. In my case it only has one functional line.

routes/index.js does most of decission making, and calls posts.js and comments.js functions as needed.

For testing I created and updated multiple records and comments, and also deleted records without any issues.
Tests are shown in tests.txt file, which can be pasted into the command line.

I also tested for invalid post ID and comment ID so that these were handled cleanly for update/delete processing.
These have a HTTP response code of 30*.

Using 'json_pp' helped during testing to see the data in a tidy format via the command line eg `curl http://localhost:3000/posts | json_pp`

I struggled to see the test data at first, but using 'req.store = store' as middleware on each request resolved that.
Also, the comments in the sample data did not work as they are shown on the adssignment page, so I had to enclose each 
comment in {} so that each was a separate line within the comment array. 
