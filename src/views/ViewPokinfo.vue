<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            :text="getBackButtonText()"
            default-href="/cards"
          ></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon slot="icon-only" :icon="heart"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" v-if="pokinfo">
      <ion-img :src="getPokimage(pokinfo.id)" :alt="pokinfo.title"></ion-img>
      <div class="ion-padding">
        <h1>{{ pokinfo.title }}</h1>
        <p>{{ pokinfo.content }}</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { heart } from "ionicons/icons";
import { defineComponent } from "vue";
import { getPokinfo, getPokimage } from "@/data/pokinfos";

export default defineComponent({
  name: "Cards",
  data() {
    return {
      heart,
      getBackButtonText: () => {
        const win = window as any;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === "ios" ? "Cards" : "";
      },
    };
  },
  methods: {
    getPokimage,
  },
  components: {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonImg,
    IonPage,
    IonToolbar,
  },
  setup() {
    const route = useRoute();
    const pokinfo = getPokinfo(parseInt(route.params.id as string, 10));

    return { pokinfo };
  },
});
</script>

<style scoped lang="scss">
.ion-padding {
  padding: 20px;
}
ion-img {
  height: 200px;
  object-fit: cover;
}
h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}
p {
  line-height: 22px;
}
@media (min-width: 576px) {
  ion-img {
    height: 300px;
  }
}
</style>
