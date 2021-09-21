# ffc-vue-sdk

The official SDK for vuejs

## 安装

### 使用npm安装指令

```
npm install ffc-vue-sdk --save
```

### 在目标项目中引入源代码

在根目录下打开example文件夹，参考main.js和Home.vue的调用方法即可

## Demo

Demo程序在文件夹example中可见。

运行demo需要回到跟目录下，执行

```
npm install
npm run serve
```

## 集成SDK到自己的项目中

### 初始化敏捷开关

```javascript
// 初始化sdk，传入环境Secret Key和用户信息
FFCPlugin.initialize({ environmentSecret: 'YThmLWRmZjUtNCUyMDIxMDkxNzA3NTYyMV9fMl9fMjJfXzExNl9fZGVmYXVsdF82NTM3Mg==' })
```

### 在用户登录后传递用户信息给敏捷开关SDK

```javascript
// 初始化用户信息，通常这一步会在登录后被调用
FFCPlugin.initUserInfo({
  userName: 'sdk-sample-js-1252',
  email: 'ts',
  key: 'sdk-sample-js-1252',
  customizeProperties: [
    {
      name: "外放地址",
      value: "?from=zhihu&group=pm"
    }
  ]
})
``` 
### 从敏捷开关服务器获取分配给用户的变量值，并根据业务逻辑执行不同的功能模块

```javascript
async variation()
{
  const result = await this.$FfcPlugin.variationAsync(
    "主页---话术版本",
    "产品经理版1"
  );
  this.version = result.variationValue;
}
```

### 捕捉点击按钮的事件(custom event)

```javascript
async trackCustomEvent(){
  const data = [
    {
      eventName: "开始使用点击事件",
    },
  ];
  const result = await this.$FfcPlugin.trackCustomEventAsync(data);
  if (result) {
    alert("事件发送成功");
  } else {
    alert("事件发送失败");
  }
}
```
