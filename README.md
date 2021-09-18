# ffc-vue

The official SDK for vuejs

# 安装

```
npm install ffc-vue --save
```

# 使用

## 在main.js中注册plugin

```javascript
// 初始化sdk，传入环境Secret Key和用户信息
FFCPlugin.initialize({ environmentSecret: 'YThmLWRmZjUtNCUyMDIxMDkxNzA3NTYyMV9fMl9fMjJfXzExNl9fZGVmYXVsdF82NTM3Mg==' })

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

## 使用方法

### 在用户登录后传递用户信息给敏捷开关SDK

```javascript
async variation()
{
  const result = await this.$FfcPlugins.variationAsync(
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
  const result = await this.$FfcPlugins.trackCustomEventAsync(data);
  if (result) {
    alert("事件发送成功");
  } else {
    alert("事件发送失败");
  }
}
```
