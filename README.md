# website-jgstech

> Website of jgstechnical.com

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ nuxt dev

# build for production
$ nuxt generate
```



## Nuxt Dev
```bash
docker build -f /mnt/c/Projects/kaliatech-utils/dockers/nuxt-dev/Dockerfile .

cd /projects/website-jgstechnical-nuxt2
docker run -p 3000:3000 -u $(id -u ${USER}):$(id -g ${USER})  -v ${PWD}:/app -it 765 /bin/bash

export NUXT_HOST=0.0.0.0
npm run dev
```
