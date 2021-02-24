#!/bin/bash

ENV=$1
PROXY_PREFIX_PATH=$2

[ "$BUILD_SH_LOG" == "debug" ] && ps -a

function main() {
  echo

  # Removing the dist folder
  if [ -d ./dist ]; then
    echoYellow "     -> Removing all files from the /dist folder"
    rm -rf ./dist/*
  fi

  # Create dist folder  
  mkdir -p ./dist

  # Create ckeditor folders 
  mkdir -p ./dist/ckeditor
  mkdir -p ./dist/ckeditor/plugins

  # Copy ckEditor css files to the dist folder
  echo -e "     -> Copying ckEditor css files from /node_modules/@kth/kth-ckeditor-build/cssOverrides/ to dist folder"
  cp -R ./node_modules/@kth/kth-ckeditor-build/cssOverrides/. ./dist/ckeditor

  # Copy ckEditor custom config file to the dist folder
  echo -e "     -> Copying ckEditor custom files from /node_modules/@kth/kth-ckeditor-build/customConfig/customConfig.js to dist folder"
  cp -R ./node_modules/@kth/kth-ckeditor-build/customConfig/customConfig.js ./dist/ckeditor

  # Copy ckEditor plugin file to the dist folder
  echo -e "     -> Copying ckEditor plugin files from /node_modules/@kth/kth-ckeditor-build/plugins/ to dist folder"
  cp -R ./node_modules/@kth/kth-ckeditor-build/plugins/. ./dist/ckeditor/plugins

  # Copy ckEditor build files to the dist folder
  echo -e "     -> Copying ckEditor plugin files from /node_modules/@kth/kth-ckeditor-build/ckeditor/ to dist folder${nc}"
  cp -R ./node_modules/@kth/kth-ckeditor-build/ckeditor/. ./dist/ckeditor
}

function echoYellow() {
  MSG=$1
  printf "\033[1;33m$MSG\033[0m\n"
}

main
