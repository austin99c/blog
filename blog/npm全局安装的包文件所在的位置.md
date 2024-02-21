## npm全局安装的包文件所在的位置
有时候我们需要通过npm来安装一些配置在全局环境下的包，但是不知道具体下载安装在什么位置，这个时候我们可以通过 npm root -g 来进行查询，就可以知道全局配置的包下载的位置了。

```shell
npm root -g
```

比如我是使用node的包管理工具nvm，运行此命令后，展示内容如下：
```shell
/Users/loner/.nvm/versions/node/v12.18.1/lib/node_modules
```
