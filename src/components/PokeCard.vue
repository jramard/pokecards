<template>
  <ion-card :button="interactive" class="pokecard">
    <ion-img
      :src="getPokimage(card.id)"
      :alt="card.title"
      class="pokecard__image"
    ></ion-img>
    <ion-card-header>
      <ion-card-subtitle>{{ card.subtitle }}</ion-card-subtitle>
      <ion-card-title>{{ card.title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>{{ card.content }}</ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { getPokimage } from "@/data/pokinfos";

export default defineComponent({
  name: "PokeCard",
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonImg,
  },
  props: {
    card: Object,
    interactive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getPokimage,
  },
});
</script>

<style scoped lang="scss">
.pokecard {
  margin: 0;
  .pokecard__image {
    height: 200px;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    .pokecard__image {
      height: 300px;
    }
  }
}
</style>
