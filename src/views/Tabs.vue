<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/home">
          <ion-icon :icon="triangle" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/cards">
          <ion-icon :icon="ellipse" />
          <ion-label>Cards</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/gallery">
          <ion-icon :icon="images" />
          <ion-label>Gallery</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/three">
          <ion-icon :icon="square" />
          <ion-label>Three</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { ellipse, images, square, triangle } from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse,
      images,
      square,
      triangle,
    };
  },
};
</script>
