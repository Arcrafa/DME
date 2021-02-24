<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Iniciar sesion</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-title>Bienvenido</ion-title>

    <ion-card>

      <ion-item>
        <ion-label position="floating">cedula</ion-label>
        <ion-input v-model="form.username" id="username" required></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">clave</ion-label>
        <ion-input type="password" v-model="form.password" id="password" required></ion-input>
      </ion-item>

      <ion-item>

        <ion-button shape="round" href="tabs" >
          Iniciar
        </ion-button>
      </ion-item>

    </ion-card>


    <ion-img :src="require('/public/assets/static/cropped-logoNew.png')"></ion-img>
    <br>
    <br>
  </ion-page>

</template>

<script>
import {
  IonLabel,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonInput,
  IonItem,
  IonButton
} from "@ionic/vue";


export default {
  name: "Login",
  components: {IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonCard, IonInput, IonItem, IonButton},
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>

</style>