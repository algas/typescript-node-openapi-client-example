#!/usr/bin/env bash
openapi-generator generate -i ./spec.yaml -g typescript-node -o src/lib/generated-clients --additional-properties supportsES6=true
