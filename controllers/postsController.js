const posts = require('../data/posts')


function index(req, res){

    let filteredPost = posts;

    if (req.query.tag){
        filteredPost = posts.filter(post => posts.tags && post.tags.includes(req.query.tag))
    }
    
    res.json(filteredPost);
}

function show(req, res){

    const slug = req.params.slug

    const singlePost = posts.find(posts => posts.slug.includes(slug))
    console.log(singlePost);

    if (!singlePost){
        return res.status(404).json({
            error: '404 not found',
            message: 'post not found'
        })
    } else{
    res.json(singlePost)

    }
    
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