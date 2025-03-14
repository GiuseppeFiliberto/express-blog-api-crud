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

const destroy = (req, res) => {

    const postTitle = req.params.title
   
    const post = posts.find(posts => posts.title === postTitle)

    if (!post){
        return res.status(404).json({
            error: '404 not found',
            message: 'post not found'
        })
    } else{
        posts.splice(posts.indexOf(post), 1)
    }

    res.sendStatus(204)

}

module.exports = {
    index,
    show,
    destroy
}