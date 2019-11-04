// package: 
// file: one.proto

import * as jspb from "google-protobuf";

export class SomeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SomeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SomeRequest): SomeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SomeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SomeRequest;
  static deserializeBinaryFromReader(message: SomeRequest, reader: jspb.BinaryReader): SomeRequest;
}

export namespace SomeRequest {
  export type AsObject = {
    name: string,
  }
}

export class SomeReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getAge(): number;
  setAge(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SomeReply.AsObject;
  static toObject(includeInstance: boolean, msg: SomeReply): SomeReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SomeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SomeReply;
  static deserializeBinaryFromReader(message: SomeReply, reader: jspb.BinaryReader): SomeReply;
}

export namespace SomeReply {
  export type AsObject = {
    message: string,
    age: number,
  }
}

