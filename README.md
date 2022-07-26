# nuxtjs-demo

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

### `项目结构说明`

本项目采用static静态部署

`/pages`目录下为各页面文件，每个页面文件按照内容和布局拆分成多个组件（`Content1.vue`预留给页面顶部图片）

组件位于`/components`目录下,设置有5个公用组件：

			 `Carousel.vue`---跑马灯

			 `ContentB.vue`---多数页面使用的左右交错内容介绍

			 `Navigation.vue`---顶部导航栏

			 `Footer.vue`---底部导航栏

			 `Products.vue`---相关产品

图片资源位于`/static`目录下。

路由位于`/.nuxt`目录下`router.js`，由Nuxt.js自动生成。

布局文件位于`/layouts`目录下，设定了顶部和底部导航栏。

Nuxt.js配置文件位于`/nuxt.config.js`,本地部署默认端口3000。

插件位于`/plugins`目录下，本项目主要使用[ElementUI](https://element.eleme.cn/#/zh-CN)开源组件。

各依赖文件版本位于`/package.json`,初始化项目控制台输入`$ npm install`自动安装。

### `遗留问题`

首页`服务客户`滚动卡片：`/components/Home/ScrollButton_2.vue`的卡片排布逻辑需要改进。

解决方案下`IT运维管理`，`可观察性`与`新一代安全运营平台`的`相关产品`：

`/components/ITOM/Content_4.vue`，`/components/Observation/Content_4.vue`与`/components/Platform/Content_3.vue`，卡片内链接图标`>`悬浮触发动画效果暂未实现

### `Github 仓库地址`

https://github.com/Shadows2049/ShinyInfo-Official-Website-Demo


