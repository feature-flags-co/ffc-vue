<template>
  <div class="home">
    <button @click="variation">test variation</button>
    <button @click="track" style="margin-left: 5px">test track</button>
    <button @click="trackCustomEvent" style="margin-left: 5px">
      test track custom event
    </button>
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
          eventName: "string",
          appType: "string",
        },
      ];
      this.$FfcPlugins.track(data);
    },
    trackCustomEvent() {
      const data = [
        {
          eventName: "string",
          customizedProperties: [
            {
              name: "age",
              value: "16",
            },
          ],
        },
        {
          eventName: "string1",
          customizedProperties: [
            {
              name: "sex",
              value: "W",
            },
          ],
        },
      ];
      this.$FfcPlugins.trackCustomEvent(data);
    },
  },
};
</script>
