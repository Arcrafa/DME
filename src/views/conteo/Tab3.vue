<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Publicar conteo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" style=" text-align: center;">
      <div id="container">
        <br>
        <ion-icon horizontal="end" :icon="cloudUpload" style="font-size: 250px; color: #2dd36f"/>
        <br>
        <ion-title>Estado de la conexion: <span style="color:#2dd36f;">ACTIVA</span></ion-title>
        <br>
        <br>
        <ion-title size="large">¿Estas seguro de querer</ion-title>
        <br>
        <ion-title>terminar tu jornada?</ion-title>
        <br>
        <ion-button @click="presentActionSheet">Ver opciones</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  actionSheetController,
  IonIcon,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard
} from '@ionic/vue';

import {} from '@ionic/vue';
import {caretForwardCircle, close, heart, trash, share, cloudUpload, refreshCircle} from 'ionicons/icons';
import {useStore} from "vuex";


export default {
  name: 'Tab3',
  setup() {
    const store = useStore();

    const presentActionSheet = async () => {
      const actionSheet = await actionSheetController
          .create({
            header: 'Opciones',
            cssClass: 'my-custom-class',
            buttons: [

              {
                text: 'Publicar',
                icon: share,
                handler: () => {
                  console.log('Share clicked')
                  store.dispatch("publicarConteo")
                },
              },
              {
                text: 'Refrescar conexion ',
                icon: refreshCircle,
                handler: () => {
                  console.log('Play clicked')
                },
              },

              {
                text: 'Cancel',
                icon: close,
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked')
                },
              },
              {
                text: 'Eliminar',
                role: 'destructive',
                icon: trash,
                handler: () => {
                  console.log('Delete clicked')
                },
              }
            ],
          });
      return actionSheet.present();
    }
    return {
      cloudUpload,
      presentActionSheet
    }
  },
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonIcon, IonCard},


}
</script>
