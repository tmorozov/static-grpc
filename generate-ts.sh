#!/usr/bin/env bash
PROTOC_PATH="../protoc-3.10.1-osx-x86_64/bin"

# Path to this plugins
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/grpc-tools/bin/grpc_node_plugin"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./generated"

mkdir -p ${OUT_DIR}

#${PROTOC_PATH}/protoc \
#    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
#    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
#    --ts_out="${OUT_DIR}" \
#    one.proto

${PROTOC_PATH}/protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --plugin="protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-node:${OUT_DIR}" \
    --grpc_out="${OUT_DIR}" \
    one.proto
