<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Contar</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <br>
    <br>
    <ion-card>
      <br>
      <br>

      <ion-item>
        <ion-title>Seleccione una medida</ion-title>

      </ion-item>
      <br>
      <br>
      <ion-item>

        <ion-label>Medida en Centimetros</ion-label>
        <ion-select value="brown" ok-text="Ok" cancel-text="cancelar" v-model="data.medida">
          <template v-for="i in 70">
            <ion-select-option :value="i+50">{{ i + 50 }}</ion-select-option>
          </template>
        </ion-select>
      </ion-item>
      <br>
      <br>
      <ion-button expand="block" v-if="data.medida!=0" v-on:click="guardaMedida(data.medida)">Guardar medida
      </ion-button>

    </ion-card>
    <br>
    <br>
    <ion-card>
      <ion-grid>
        <ion-row>
          <ion-col>

          </ion-col>

          <ion-col>
          </ion-col>

        </ion-row>
        <ion-row>
          <ion-col>
            <div>
              <ion-icon :icon="clipboard" style="font-size: 100px"/>
            </div>
          </ion-col>
          <ion-col>
            <div>
              <br>
              <ion-title>Llevas</ion-title>
              <ion-title>{{data.numArboles }}</ion-title>
              <ion-title>Arboles</ion-title>
              <ion-title>Registrados</ion-title>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>


    </ion-card>

    <!-- fab placed to the top start -->
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button v-on:click="$emit('exitModal')">
        <ion-icon :icon="arrowForwardCircle"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-content>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonSelectOption,
  IonSelect,
  IonLabel,
  IonButton,
  IonCard,
  IonFabButton,
  IonFab,
  IonIcon,
  IonCol,
  IonGrid,
  IonRow,
  alertController,
  IonTabButton,

} from '@ionic/vue';
import {computed, defineComponent, reactive} from 'vue';
import {arrowForwardCircle, clipboard} from 'ionicons/icons';
import {useStore} from "vuex";
import router from "@/router";

export default defineComponent({
  name: 'Modal',

  setup() {


    const store = useStore();
    const data = reactive({

      medida: 0,
      numArboles: store.getters.getN_arboles
    })
    const presentAlert = async (nombre: string) => {
      const alert = await alertController
          .create({
            cssClass: 'my-custom-class',
            header: 'Arbol registrado',
            subHeader: 'Esta es su identificacion',
            message: nombre,
            buttons: ['Continuar'],
          });

      return alert.present();
    }
    const guardaMedida = async (newMedida: number) => {
      var nombre = await store.dispatch("newArbol", newMedida);


      presentAlert(nombre)

      data.medida = 0
      data.numArboles = store.getters.getN_arboles
    };
    const exitCount = () => {
      console.log("pasando a tab2")
      router.push('/tabs/tab2')
    }

    return {

      arrowForwardCircle,
      clipboard,
      guardaMedida,
      data,
      exitCount
    }
  }
  ,
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonSelectOption,
    IonSelect,
    IonLabel,
    IonButton,
    IonCard,
    IonFabButton,
    IonFab,
    IonIcon,
    IonCol,
    IonGrid,
    IonRow,
    IonTabButton
  }
  ,

})
;
</script>