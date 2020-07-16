#!/usr/bin/env bash
find src/lib/generated-clients -name "*.ts" | xargs sed -i '' -e "s/= require('request')/from 'request'/g" -e "s/= require('http')/from 'http'/g"
