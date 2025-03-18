function notFound(res, req, next){
    res.status(404).json({
        error: "error 404",
        messagge: 'page not found'
    });
}

module.exports = notFound;