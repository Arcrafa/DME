<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lo que as contado</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <br>

        <ion-card-title> Resumen del conteo</ion-card-title>
        <br>

      </ion-card>


      <div>

        <ion-card>

          <ion-list>
            <ion-item>
              <ion-title>equpo : cantidad</ion-title>
              <br>
            </ion-item>
            <ion-item v-for="r in store.getters.getResumenTucas.equipo">
              <ion-title>Rango {{ r.equipo }}: {{ r.cant }}</ion-title>
              <br>
            </ion-item>


          </ion-list>
        </ion-card>
      </div>
      <div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList} from '@ionic/vue';
import {useStore} from "vuex";

export default {
  name: 'Tab2',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonItem, IonList},
  setup() {
    const store = useStore();


    return {
      store
    }

  }
}
</script>
