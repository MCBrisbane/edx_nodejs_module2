module.exports = {
	getPosts(req, res) {
		//console.log("In getPosts")

    	res.status(200)
    	res.send(req.store.posts)
	},
	addPost(req, res) {
		//console.log("In addPost")
			
	    req.store.posts.push(req.body)
    	res.status(201)
    	res.send({postId: req.store.posts.length})

	},
	updatePost(req, res) {
		//console.log("In updatePost")

		if(!req.store.posts[req.params.postId]) {   // Post not found 
			res.status(302)
			res.end()
	    }
	    else {
		    req.store.posts[req.params.postId] = Object.assign(req.store.posts[req.params.postId], req.body)
	    	res.status(202)
	    	res.send(req.store.posts[req.params.postId])
	    }
	},
	removePost(req, res) {
		//console.log("In deletePost")

		if(!req.store.posts[req.params.postId]) {   // Post not found 
			res.status(302)
			res.end()
	    }
	    else {
	        req.store.posts.splice(req.params.postId, 1)	
	        res.status(203)	
			res.send()
		}
	}

}