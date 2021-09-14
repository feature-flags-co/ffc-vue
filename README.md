# ffc-vue
The official SDK for vuejs

# 安装
```
npm install ffc-vue --save
```

#使用

## 引用
```javascript
import FFCPlugin from "../src/plugins";

Vue.use(FFCPlugin, {
  environmentSecret: "",
  user: {
    userName: "",
    email: "",
    key: "",
    country: "",
    customizeProperties: [
      {
        name: "",
        value: "",
      },
    ],
  },
  baseUrl: "https://api.feature-flags.co",
});

```

## 调用方法
```vue
export default {
  methods: {
    track() {
      this.$FfcPlugins.track([
        {
          route: 'string',
          timeStamp: 1631633649000,
          type: 'string',
          methodName: 'string',
          applicationType: 'string'
        }
      ])
    },
    variation() {
      this.$FfcPlugins.variation("sdk");
    },
  }
}
```
