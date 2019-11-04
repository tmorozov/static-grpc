// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2015 gRPC authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var one_pb = require('./one_pb.js');

function serialize_SomeReply(arg) {
  if (!(arg instanceof one_pb.SomeReply)) {
    throw new Error('Expected argument of type SomeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SomeReply(buffer_arg) {
  return one_pb.SomeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SomeRequest(arg) {
  if (!(arg instanceof one_pb.SomeRequest)) {
    throw new Error('Expected argument of type SomeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SomeRequest(buffer_arg) {
  return one_pb.SomeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// package one;
//
// The greeting service definition.
var ServiceOneService = exports.ServiceOneService = {
  action: {
    path: '/ServiceOne/Action',
    requestStream: false,
    responseStream: false,
    requestType: one_pb.SomeRequest,
    responseType: one_pb.SomeReply,
    requestSerialize: serialize_SomeRequest,
    requestDeserialize: deserialize_SomeRequest,
    responseSerialize: serialize_SomeReply,
    responseDeserialize: deserialize_SomeReply,
  },
};

exports.ServiceOneClient = grpc.makeGenericClientConstructor(ServiceOneService);
