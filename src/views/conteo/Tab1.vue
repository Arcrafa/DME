<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>¿Donde vas a contar?</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <br>

        <ion-card-title>   Escoge una finca</ion-card-title>
        <br>

      </ion-card>

      <ion-card>
        <div v-if="store.getters.isconFinca">
          <br>
          <br>
          <br>
          <ion-title size="large">Lista de fincas en Conteo</ion-title>

          <br>
          <ion-list>
            <ion-item v-for="finca in fincas" @click="setOpen(true,finca)">
              <ion-title>{{ finca }}</ion-title>
              <br>
            </ion-item>

            <br>
            <br>
            <br>
          </ion-list>
        </div>
        <br>
        <br>
        <div v-if="!store.getters.isconFinca">

          <ion-title size="large">Ya estas contando en la finca:</ion-title>
          <br>

          <ion-title> {{ store.getters.getFinca }}</ion-title>
          <br>
          <br>
          <ion-title>Opciones disponibles</ion-title>
          <br>
          <br>
          <ion-title>-1 Continuar la jornada de conteo</ion-title>
          <br>

          <ion-button expand="block" v-on:click="setOpen(true)">Seguir contando</ion-button>
          <br>
          <br>
          <ion-title>-2 Terminar la jornada de conteo</ion-title>
          <br>

          <ion-button href="/tabs/tab3" expand="block" v-on:click="setOpen(true)">Dejar de contar</ion-button>
          <br>
          <br>
        </div>
      </ion-card>
      <ion-modal
          :is-open="isOpenRef"
          css-class="my-custom-class"
          @onDidDismiss="setOpen(false)"
      >
        <Modal @exitModal="setOpen(false)"></Modal>


      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLabel, IonItem, IonList,
  IonSelectOption, IonSelect, IonModal, IonButton, IonCard, IonCardTitle, IonCardContent
} from '@ionic/vue';

import {ref, computed} from 'vue';
import Modal from './component/Modal.vue'
import {useStore} from "vuex";

export default {
  name: 'Tab1',
  data() {
    return {

      fincas: ["La Luz", "La Esperanza", "Doña Emilia", "Alejita", "El Bosque"]
    }
  },
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonModal,
    IonButton,

    IonLabel,
    IonItem,
    IonList,
    IonSelectOption,
    IonSelect,
    Modal,
    IonCard
  },
  setup() {
    const store = useStore();
    const isOpenRef = ref(false);
    const setOpen = (state: boolean, finca: string) => {
      isOpenRef.value = state;
      if (finca != undefined)
        store.commit("setFinca", finca)

    }
    const data = {
      content: 'New Content',
    };
    return {isOpenRef, setOpen, data, store}
  }
}
</script>