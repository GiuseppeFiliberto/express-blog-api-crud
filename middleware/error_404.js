function notFound(res, req, next){
    res.status(404).json({
        error: "error 404",
        messagge: 'resource not found'
    });
}

module.exports = notFound;