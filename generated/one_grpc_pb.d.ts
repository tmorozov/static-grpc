// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: one.proto

import * as one_pb from "./one_pb";
import * as grpc from "grpc";

interface IServiceOneService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  action: grpc.MethodDefinition<one_pb.SomeRequest, one_pb.SomeReply>;
}

export const ServiceOneService: IServiceOneService;

export class ServiceOneClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  action(argument: one_pb.SomeRequest, callback: grpc.requestCallback<one_pb.SomeReply>): grpc.ClientUnaryCall;
  action(argument: one_pb.SomeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<one_pb.SomeReply>): grpc.ClientUnaryCall;
  action(argument: one_pb.SomeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<one_pb.SomeReply>): grpc.ClientUnaryCall;
}
