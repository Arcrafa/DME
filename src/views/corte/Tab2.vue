<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lo que as cortado</ion-title>
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

        <ion-card-title> Resumen del corte</ion-card-title>
        <br>

      </ion-card>


      <div>

        <ion-card>
          <ion-card-title> Resumen por equipos</ion-card-title>


          <ion-list>
            <ion-item>
              <ion-title>equipo : cantidad</ion-title>
              <br>
            </ion-item>
            <ion-item v-for="r in store.getters.getResumenTucas.equipo">
              <ion-title>Rango {{ r.equipo }}: {{ r.cant }}</ion-title>
              <br>
            </ion-item>


          </ion-list>
        </ion-card>
        <br>
        <!--
        <ion-card>
          <ion-card-title> Resumen por tipo</ion-card-title>

          <ion-list>
            <ion-item>
              <ion-title>tipo : cantidad</ion-title>
              <br>
            </ion-item>
            <ion-item v-for="r in store.getters.getResumenTucas.tipo">
              <ion-title>{{ r.tipo }}: {{ r.cant }}</ion-title>
              <br>
            </ion-item>


          </ion-list>
        </ion-card>
        -->
        <ion-card>
          <ion-card-title> Resumen por estado</ion-card-title>

          <ion-list>
            <ion-item>
              <ion-title>estado : cantidad</ion-title>
              <br>
            </ion-item>
            <ion-item v-for="est in store.getters.getResumenTucas.estado">
              <ion-title>{{ est.estado }}: {{ est.cant }}</ion-title>
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
