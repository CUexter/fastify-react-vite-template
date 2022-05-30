#!/bin/sh
rm -r release
mkdir release

cp -r client release
# rm -r release/client/src/__test__
rm release/client/.eslintcache

cp -r server release
# rm -r release/server/src/__test__
rm release/server/.eslintcache

cp -r dist release

cp readme.txt release
cp .eslintrc.js release
cp .prettierignore release
cp .prettierrc.json release
cp .stylelintrc.json release
cp *.json release
cp *.js release
