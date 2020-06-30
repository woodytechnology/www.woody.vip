#!/bin/sh

yarn generate
scp -r dist kaive@wuyun.pro:/srv/index3
