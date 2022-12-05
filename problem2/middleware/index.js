module.exports = function middleware(req, res, next) {
    console.log('middleware')
    next();
};