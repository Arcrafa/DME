<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Cortar</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">

    <ion-card>


      <ion-item>
        <ion-title>Registrar corte</ion-title>

      </ion-item>
      <ion-item>
        <ion-label position="floating">Nobre del arbol</ion-label>
        <ion-input v-model="tuca.nombreArbol"></ion-input>

      </ion-item>

      <ion-item>

        <ion-label>estado del arbol</ion-label>
        <ion-select value="brown" ok-text="Ok" cancel-text="cancelar" v-model="data.estadoArbol">
          <template>
            <ion-select-option value="bueno">Bueno</ion-select-option>
            <ion-select-option value="nocumple">No cumple</ion-select-option>
            <ion-select-option value="hueco">Hueco</ion-select-option>
          </template>
        </ion-select>
      </ion-item>
      <ion-item v-if="data.estadoArbol=='bueno'">

        <ion-label>Equipo de corte</ion-label>
        <ion-select value="brown" ok-text="Ok" cancel-text="cancelar" v-model="tuca.equipo">
          <template>
            <ion-select-option value="rojo">Rojo</ion-select-option>
            <ion-select-option value="verde">Verde</ion-select-option>
            <ion-select-option value="azul">azul</ion-select-option>
          </template>
        </ion-select>
      </ion-item>
      <ion-item v-if="data.estadoArbol=='bueno'">

        <ion-label>Rango de circunferencia</ion-label>
        <ion-select ok-text="Ok" cancel-text="cancelar" v-model="tuca.rango">
          <template v-for="i in 7">
            <ion-select-option :value="(i+5)*10">{{ (i + 5) * 10 }}</ion-select-option>
          </template>
        </ion-select>
      </ion-item>

      <ion-item v-if="data.estadoArbol=='bueno'">

        <ion-label>Largo de tuca</ion-label>
        <ion-select ok-text="Ok" cancel-text="cancelar" v-model="tuca.largo">
          <template>
            <ion-select-option value="225">225</ion-select-option>
            <ion-select-option value="580">580</ion-select-option>
          </template>
        </ion-select>
      </ion-item>
      <ion-item v-if="data.estadoArbol=='bueno'">
        <ion-label>Algura</ion-label>
        <ion-select value="brown" ok-text="Ok" cancel-text="cancelar" v-model="tuca.algura">
          <template v-for="i in 100">
            <ion-select-option :value="i+40">{{ i + 40 }}</ion-select-option>
          </template>
        </ion-select>
      </ion-item>
      <ion-item v-if="data.estadoArbol=='bueno'">
        <ion-label>Duramen</ion-label>
        <ion-select value="brown" ok-text="Ok" cancel-text="cancelar" v-model="tuca.duramen">
          <template v-for="i in 100">
            <ion-select-option :value="i+40">{{ i + 40 }}</ion-select-option>
          </template>
        </ion-select>
      </ion-item>
      <ion-button expand="block" v-if="data.medida!=0" v-on:click="guardaMedida(data.medida)">Guardar medida
      </ion-button>
      <ion-button expand="block" v-if="data.estadoArbol=='hueco'||data.estadoArbol=='nocumple' "
                  v-on:click="descartar()">
        Descartar arbol
      </ion-button>

      <ion-button expand=" block
      "
                  v-if="tuca.nombreArbol != '' &&
      tuca.equipo != '' &&
      tuca.rango != 0 &&
      tuca.largo != 0 &&
      tuca.algura != 0 &&
      tuca.duramen != 0" v-on:click="guardarTuca()">Guardar tuca
      </ion-button>

    </ion-card>

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
              <ion-title>{{ data.numArboles }}</ion-title>
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
  IonInput

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
      numArboles: store.getters.getN_arboles,
      estadoArbol: '',
      ntucaArbol: 0
    })
    const tuca = reactive({
      nombreArbol: '',
      equipo: '',
      rango: 0,
      largo: 0,
      algura: 0,
      duramen: 0,
      nombre: '',
      tipo: '',
      porcentaje: 0
    })


    const presentAlertTipo = async (tipo: string, nombre: string) => {
      const alert = await alertController
          .create({
            cssClass: 'my-custom-class',
            header: 'Tuca registrada',
            subHeader: 'la tuca: ' + nombre + " es de tipo",
            message: tipo,
            buttons: [
              {
                text: 'otro arbol',
                cssClass: 'secondary',
                handler: () => {
                  data.estadoArbol = ''
                  tuca.nombreArbol = ''
                  tuca.equipo = ''
                  tuca.tipo = ''
                  tuca.rango = 0
                  tuca.largo = 0
                  tuca.algura = 0
                  tuca.duramen = 0
                  tuca.porcentaje = 0
                  tuca.nombre = ''
                  data.ntucaArbol = 0
                },
              },
              {
                text: 'Otra tuca',
                role: 'cancel',
                handler: () => {
                  tuca.tipo = ''
                  tuca.rango = 0
                  tuca.largo = 0
                  tuca.algura = 0
                  tuca.duramen = 0
                  tuca.porcentaje = 0
                  tuca.nombre = ''
                },
              },
            ],
          });

      return alert.present();
    }
    const presentAlertNombre = async (tipo: string, nombre: string) => {
      const alert = await alertController
          .create({
            cssClass: 'my-custom-class',
            header: 'Tuca registrada',
            subHeader: 'Esta es su identificacion',
            message: nombre,
            buttons: [{
              text: 'Ok',
              role: 'cancel',
              handler: () => {
                presentAlertTipo(tipo, nombre)
              },
            }],
          });

      return alert.present();
    }
    const guardarTuca = async () => {
      data.ntucaArbol += 1;
      tuca.nombre = tuca.nombreArbol + '-' + data.ntucaArbol.toString()
      tuca.porcentaje = 1 - (tuca.algura - tuca.duramen) / tuca.algura
      console.log(tuca.porcentaje)
      tuca.tipo = tuca.porcentaje >= 0.80 ? 'TIPO-A' : 'TIPO-B'
      console.log(tuca.tipo)
      presentAlertNombre(tuca.tipo, tuca.nombre)
      store.dispatch("newTuca", tuca);

    };
    const descartar = () => {
      store.dispatch("descartarArbol", {nombre: tuca.nombreArbol, estado: data.estadoArbol})

    };
    const exitCount = () => {
      console.log("pasando a tab2")
      router.push('/tabs/tab2')
    }

    return {
      arrowForwardCircle,
      clipboard,
      guardarTuca,
      data,
      exitCount,
      tuca,
      descartar
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
    IonTabButton,
    IonInput
  }
  ,

});
</script>
