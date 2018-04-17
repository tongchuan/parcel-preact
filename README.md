### yarn
yarn global add parcel-bundler
### npm
npm install -g parcel-bundler

接下来，创建 index.html 和 index.js 文件。

parcel index.html
不会启动 web 服务
parcel watch index.html
生产环境
parcel build entry.js

yarn add node-sass
yarn add less
Babel 是一个流行的 JavaScript 转换器，拥有大型的插件生态系统。Babel 与 Parcel 一起使用的方式与单独使用或与其他打包工具一起使用的方式相同。

在你的应用程序中安装 presets 和 plugins :


yarn add babel-preset-env
PostCSS 是一个使用插件转换 CSS 的工具， 例如 autoprefixer，cssnext 以及 CSS Modules 。你可以使用这些名称之一创建配置，从而达到使用 Parcel 配置 PostCSS 的目的: .postcssrc (JSON)，.postcssrc.js， 或 postcss.config.js.
yarn add postcss-modules autoprefixer
PostHTML 是一个通过插件转换 HTML 的工具。你可以使用这些名称之一创建配置，从而达到使用 Parcel 配置 PostHTML 的目的: .posthtmlrc (JSON) ，posthtmlrc.js ，或者 posthtml.config.js。
yarn add posthtml-img-autosize

TypeScript 是 JavaScript 的超集，并且支持类型检查，它可以编译成普通的 JavaScript，同时也支持现代 ES2015+ 的特性。转换 TypeScript 无需任何额外配置，开箱即用。


注意: 如果你仍然想在本地浏览器中使用不支持的语法 async/await ，切记需要在你的应用程序引入 babel-polyfill 或在你的库中引入 babel-runtime + babel-plugin-transform-runtime 。

yarn add babel-polyfill


设置输出目录
默认值："dist" 目录

parcel build entry.js --out-dir build/output
or
parcel build entry.js -d build/output

设置对外提供服务的 URL 地址
默认值：--out-dir option

parcel build entry.js --public-url ./
<link rel="stylesheet" type="text/css" href="1a2b3c4d.css">
or
<script src="e5f6g7h8.js"></script>

#### 关闭 source-maps

默认值：source-maps 开启

```bash
parcel build entry.js --no-source-maps
关闭压缩（minification ）
默认值：压缩（minification ）开启

parcel build entry.js --no-minify
关闭文件系统缓存
默认值：缓存开启

parcel build entry.js --no-cache


用法
React
首先为 React 安装所有依赖。

参考博文

npm install --save react
npm install --save react-dom
npm install --save-dev parcel-bundler
npm install --save-dev babel-preset-env
npm install --save-dev babel-preset-react
或者使用 Yarn 包管理器

yarn add react
yarn add react-dom
yarn add --dev parcel-bundler
yarn add --dev babel-preset-env
yarn add --dev babel-preset-react
确保存在如下所示的 Babel 配置信息。

 // .babelrc
{
  "presets": ["env", "react"]
}
在 package.json 文件中添加 start 命令：

// package.json
"scripts": {
  "start": "parcel index.html"
}
Preact
首先为 Preact 安装所有依赖。

npm install --save preact
npm install --save preact-compat
npm install --save-dev parcel-bundler
npm install --save-dev babel-preset-env
npm install --save-dev babel-preset-preact
或者使用 Yarn 包管理器

yarn add preact
yarn add preact-compat
yarn add --dev parcel-bundler
yarn add --dev babel-preset-env
yarn add --dev babel-preset-preact
确保存在如下所示的 Babel 配置信息。

// .babelrc
{
  "presets": ["env", "preact"]
}
在 package.json 文件中添加 start 命令：

// package.json
"scripts": {
  "start": "parcel index.html"
}