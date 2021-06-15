<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Three</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div ref="container"></div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import { defineComponent } from "vue";
// import { init } from "@/composables/threeExample";
import { init } from "@/composables/threeLittlestTokyo";

export default defineComponent({
  name: "Three",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonTitle,
  },
  setup() {
    return {};
  },
  mounted() {
    init(this.$refs["container"]);
  },
});
</script>
