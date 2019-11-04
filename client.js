const grpc = require('grpc');

const { ServiceOneClient } = require('./generated/one_grpc_pb');
const { SomeRequest } = require('./generated/one_pb');

const client = new ServiceOneClient(
    'localhost:50500',
    grpc.credentials.createInsecure()
);

const request = new SomeRequest();
request.setName('Client static');

client.action(request, (err, response) => {
    console.log(response.getMessage(), response.getAge())
});
