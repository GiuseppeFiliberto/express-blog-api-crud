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

function store(req, res) {

    // this add a new post 
    const newPost = {

        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPost);
    console.log(posts);
    
    res.status(201);
    res.json(newPost);
    
}

function update(req, res) {

    const slug = req.params.slug

    const singlePost = posts.find(posts => posts.slug.includes(slug))
    console.log(singlePost);

    if (!singlePost){
        return res.status(404).json({
            error: '404 not found',
            message: 'post not found'
        })
    } 
        // this will update the post selected

        posts.title = req.body.title;
        posts.content = req.body.content;
        posts.image = req.body.image;
        posts.tags = req.body.tags;

        res.json(singlePost);
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
    store,
    update,
    destroy
}