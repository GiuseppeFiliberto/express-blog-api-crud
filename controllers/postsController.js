const posts = require('../data/posts')


function index(req, res){

    res.json(posts)
}

function show(req, res){

    const tag = req.params.tags

    const singlePost = posts.find(posts => posts.tags.includes(tag))
    console.log(singlePost);
    
    res.json(singlePost)
}

module.exports = {
    index,
    show
}