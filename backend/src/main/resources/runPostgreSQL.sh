#!/usr/bin/env bash
docker run --rm --name postgres -e POSTGRES_PASSWORD=s3cret -p 5432:5432 postgres
