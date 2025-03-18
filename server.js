const express = require ("express");
const app = express();
const port = 3008
const postsRoute = require('./routers/postsRoutes');
const serverError = require('./middleware/serverError')

// body-parrser
app.use(express.json())
// middlewere
app.use('/api/v1/posts', postsRoute);

app.use(serverError);


//server stars listening
app.listen(port, () =>{
    console.log(`You're running the server on http://localhost:${port}`)
})
