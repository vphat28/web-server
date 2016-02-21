var middleware = {
    requireAuthentication: function (reg, res, next) {
        console.log('private route hit!');
    },
    logger: function (reg, res, next) {
        console.log('Regquest: ' + new Date().toString() + ' ' + reg.method + ' ' + reg.originalUrl);
        next();
    }
}; 
module.exports = middleware;    