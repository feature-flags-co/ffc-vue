<template>
  <div>
    <div class="home">
      <button @click="variation">test variation</button>
      <button @click="track" style="margin-left: 5px">test track</button>
    </div>
    <div class="container" v-if="variations.includes(version)">
      <div class="row">
        <h3>{{ version }}</h3>
        <a href="#" style="font-size: 32px" @click="trackCustomEvent"
          >开始使用</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      version: null,
      variations: ["产品经理版1", "程序员版1", "产品经理版2"],
    };
  },
  methods: {
    async variation() {
      const result = await this.$FfcPlugins.variationAsync(
        "主页---话术版本",
        "产品经理版1"
      );
      this.version = result.variationValue;
    },
    track() {
      const data = [
        {
          route: "string",
          timeStamp: 1631633649000,
          type: "string",
          eventName: "string",
          appType: "string",
        },
      ];
      this.$FfcPlugins.track(data);
    },
    async trackCustomEvent() {
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
    },
  },
};
</script>
<style>
.row {
  margin-top: 20px;
  text-align: center;
}

#version-a {
  display: none;
}

#version-b {
  display: none;
}

#version-c {
  display: none;
}
</style>
