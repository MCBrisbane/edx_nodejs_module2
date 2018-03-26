module.exports = {
  getComments(req, res) {
		// console.log("In getComments")
		
		if(!req.store.posts[req.params.postId]) {   // Post not found so no comments
			res.status(300)
			res.end()
		}
		else {
			res.status(200)
			res.send(req.store.posts[req.params.postId].comments)    
		}
  }, 
  addComment(req, res) {
		// console.log("In addComment")  	

		if(!req.store.posts[req.params.postId]) {   // Post not found so no comments can exist, exit
			res.status(301)
			res.end()
		}
		else {
			res.status(201)
			req.store.posts[req.params.postId].comments.push(req.body)
			res.send({commentId: req.store.posts[req.params.postId].comments.length})
		}

  },
  updateComment(req, res) {
		// console.log("In updateComment")  	

		if(!req.store.posts[req.params.postId] || !req.store.posts[req.params.postId].comments[req.params.commentId]) {   // Post or Comment Not found 
			res.status(302)
			res.end()
		}
		else {
			res.status(202)
			req.store.posts[req.params.postId].comments[req.params.commentId] = Object.assign(req.store.posts[req.params.postId].comments[req.params.commentId], req.body)
			res.send(req.store.posts[req.params.postId].comments)
		}    
  },
  removeComment(req, res) {
		// console.log("In removeComment")  	
		
		if(!req.store.posts[req.params.postId] || !req.store.posts[req.params.postId].comments[req.params.commentId]) {   // Post or Comment Not found 
			res.status(303)
			res.end()
		}
		else {
			res.status(203)
			req.store.posts[req.params.postId].comments.splice([req.params.commentId], 1)
			res.send()
		}    
  }  
}
