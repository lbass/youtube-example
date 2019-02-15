const server = require('node-http-server');
server.beforeServe=beforeServe;
server.deploy(
    {
        port:25000,
        root:'./'
    },
    serverReady
);

function beforeServe(request, response, body, encoding) {
    const sKey = request.uri.query.skey;
    if(!sKey || sKey !== 'xbwmqjrj') {
        console.error('key missmatch');
        body.value = 'key missmatch'
        return;
    }
}

function serverReady(server) {
   console.log( `Server on port ${server.config.port} is now up`);
}
