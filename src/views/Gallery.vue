<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Gallery</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col
            size="6"
            size-md="4"
            size-lg="3"
            size-xl="2"
            v-for="photo in photos"
            :key="photo"
          >
            <ion-img
              :src="photo.webviewPath"
              @click="showActionSheet(photo)"
            ></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  actionSheetController,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import { camera, close, trash } from "ionicons/icons";
import { defineComponent } from "vue";
import { usePhotoGallery, UserPhoto } from "@/composables/usePhotoGallery";

export default defineComponent({
  name: "Gallery",
  components: {
    IonCol,
    IonContent,
    IonFab,
    IonFabButton,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonPage,
    IonRow,
    IonToolbar,
    IonTitle,
  },
  setup() {
    const { photos, takePhoto, deletePhoto } = usePhotoGallery();

    const showActionSheet = async (photo: UserPhoto) => {
      const actionSheet = await actionSheetController.create({
        header: "Actions",
        buttons: [
          {
            text: "Delete",
            role: "destructive",
            icon: trash,
            handler: () => {
              deletePhoto(photo);
            },
          },
          {
            text: "Cancel",
            role: "cancel",
            icon: close,
            handler: () => {
              // Nothing to do, action sheet is automatically closed
            },
          },
        ],
      });
      await actionSheet.present();
    };

    return {
      photos,
      takePhoto,
      showActionSheet,
      camera,
      close,
      trash,
    };
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
