#!/usr/bin/env

docker run --rm --interactive --tty \
  --volume $PWD:/app \
  composer $@
