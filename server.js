const grpc = require('grpc');

const { ServiceOneService } = require('./generated/one_grpc_pb');
const { SomeReply } = require('./generated/one_pb');


function action(call, cb) {
    const response = new SomeReply();
    response.setAge(13);
    response.setMessage(`Server static ${call.request.getName()}`);

    cb(null, response);
}

const server = new grpc.Server();
server.addService(ServiceOneService, { action });
server.bind('localhost:50500', grpc.ServerCredentials.createInsecure());
server.start();

