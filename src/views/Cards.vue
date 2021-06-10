<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Cards</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col
            size="12"
            size-sm="6"
            size-lg="4"
            v-for="card in cards"
            :key="card.id"
          >
            <PokeCard
              :card="card"
              interactive
              @click="() => router.push(`/card/${card.id}`)"
            />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import PokeCard from "@/components/PokeCard.vue";
import { defineComponent } from "vue";
import { getPokinfos } from "@/data/pokinfos";

export default defineComponent({
  name: "Cards",
  data() {
    return {
      cards: getPokinfos(),
    };
  },
  methods: {},
  components: {
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    PokeCard,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

<style scoped lang="scss">
ion-grid {
  --ion-grid-padding: 10px;
}
ion-col {
  --ion-grid-column-padding: 10px;
}
</style>
