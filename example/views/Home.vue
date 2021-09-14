<template>
  <div class="home">
    <button @click="variation">test variation</button>
    <button @click="track" style="margin-left: 5px">test track</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    variation() {
      this.$FfcPlugins.variation("sdk");
    },
    track() {
      const data = [
        {
          route: "string",
          timeStamp: 1631633649000,
          type: "string",
          methodName: "string",
          applicationType: "string",
        },
      ];
      this.$FfcPlugins.track(data);
    },
  },
};
</script>
