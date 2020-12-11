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


## Nuxt Dev with Docker
```bash
docker-compose -f /mnt/c/Projects/kaliatech-utils/dockers/kaliatech-websites/docker-compose.yaml up -d

// Run nuxt
docker exec -it localdev-kaliatech-websites_nuxt_1 /bin/bash
npm run dev

// Generate images
docker exec -it localdev-kaliatech-websites_sigal_1 /bin/bash
sigal build

// Teardown
docker-compose -f /mnt/c/Projects/kaliatech-utils/dockers/kaliatech-websites/docker-compose.yaml down

```
