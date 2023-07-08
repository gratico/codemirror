
.SHELL := /usr/bin/bash

.PHONY: build
build:
	npx tsc --resolveJsonModule -p ./tsconfig.json --outDir ./dist --emitDeclarationOnly --declaration
	npx rollup -c
	#npx esbuild ./src/index  --bundle --sourcemap --platform=browser --target=es2022 --outdir=build --format=esm --packages=external
