const express = require ("express");
const app = express();
const port = 3008

// middlewere
app.use('/api/v1/posts', routerPosts);


//server stars listening
app.listen(port, () =>{
    console.log(`You're running the server on http://localhost:${port}`)
})
