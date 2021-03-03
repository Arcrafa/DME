<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/corte/tab1">
          <ion-icon :icon="cut"/>
          <ion-label>Cortar</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/corte/tab2">
          <ion-icon :icon="clipboard"/>
          <ion-label>Resumen</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/corte/tab3">
          <ion-icon :icon="cloudUpload"/>

          <ion-label>Publicar</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage} from '@ionic/vue';
import {ellipse, square, triangle, cut, clipboard, cloudUpload} from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: {IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage},
  setup() {
    return {
      ellipse,
      square,
      triangle,
      cut,
      clipboard,
      cloudUpload

    }
  }
}
</script>
