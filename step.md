一、新建项目  
1、使用【git clone [-url]】克隆项目  
2、使用【git add .】加入本地文件  
3、使用【git commit -m '注释'】提交文件到本地  
4、使用【git push】同步到远程  
二、使用yarn  
1、使用【npm install yarn -g】安装  
2、使用【yarn init】初始化项目  
三、简单webpack搭建
1、新建webpack.config.js文件，输入  
const path = require("path");  
module.exports = {  
    entry: "./src/app.js",  
    output: {  
        path: path.resolve(__dirname, "dist"),//路径  
        filename: "bundle.js"//文件名称  
    }  
};  
2、打包。使用node_modules/.bin/webpack完成打包。  
四、HtmlWebpackPlugin   
1、更改 webpack.config.js，内容如下：   
const HtmlWebpackPlugin  = require("html-webpack-plugin");  
const path = require("path");  

module.exports = {  
    entry: "./src/app.js",  
    output: {  
        path: path.resolve(__dirname, "dist"),//路径  
        filename: "bundle.js"//文件名称  
    },  
    plugins:[new HtmlWebpackPlugin()]  
};  
2、安装html-webpack-plugin插件，使用【yarn add html-webpack-plugin】  
3、打包  
六、处理脚本  
1、安装babel
七、使用react,安装react，使用【yarn add react react-dom】
八、处理css文件【yarn add style-loader css-loader】
九、分离css文件到单独文件夹下，使用插件mini-css-extract-plugin
十、配置字体