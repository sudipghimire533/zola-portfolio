#!/bin/sh

BUILD_DIR=$ZOLA_BUILD_DIR

if [ $BUILD_DIR="" ]; then
    BUILD_DIR=$1
fi

if [ $BUILD_DIR="" ]; then
    BUILD_DIR="public"
fi

echo "Build directory set to $BUILD_DIR .."

rm -rf $BUILD_DIR/contact
rm -rf $BUILD_DIR/about-me
rm -rf $BUILD_DIR/sidebar
rm -rf $BUILD_DIR/education
rm -rf $BUILD_DIR/projects
rm -rf $BUILD_DIR/cover
rm -rf $BUILD_DIR/skills

