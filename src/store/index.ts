import {createStore} from 'vuex'
const axios = require('axios');
const instance = axios.create({
    //baseURL: 'https://cors-anywhere.herokuapp.com/https://conteo-corte.herokuapp.com/api/',
    baseURL:'http://localhost:5000/api/',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});
instance.get('/')
    .then(function (response:any) {
        // handle success
        console.log(response);
    })
    .catch(function (error:any) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

const conteo = {
    state: () => ({arboles: [],}),
    mutations: {
        newArbol(state: any, idArbol: { id: string,rango:number }) {
            state.arboles.push(idArbol)
        },
        getN_arboles: (state: any) => {
            return state.arboles.length
        },

    },
    actions: {
        newArbol(context: any, rango: number) {
            var indice = 0;

            indice = context.state.arboles.filter(
                (arbol: { id: string, rango: number, }) => {
                    if (arbol.rango == rango ) return true;
                    else return false;
                }).length + 1
            var id = rango.toString() + '-' + indice.toString()
            context.commit('newArbol', {id,rango})

            return id;
        },
        publicarConteo(context:any){
            console.log("entro aqui")
            instance.post('/conteo', {
                arboles:context.state.arboles
            })
                .then(function (response:any) {
                    console.log(response);
                })
                .catch(function (error:any) {
                    console.log(error);
                });
        }
    },
    getters: {
        getResumenArboles: (state: any) => {
            var resumen = [
                {rango: 50, cant: 0},
                {rango: 60, cant: 0},
                {rango: 70, cant: 0},
                {rango: 80, cant: 0},
                {rango: 90, cant: 0},
                {rango: 100, cant: 0},
                {rango: 110, cant: 0},
                {rango: 120, cant: 0}]
            if (state.arboles.length == 0) return resumen
            resumen.forEach((r) => {
                r.cant = state.arboles.filter(
                    (arbol: { id: string, rango: number, medida: number }) => {
                        if (arbol.rango == r.rango) return true;
                        else return false;
                    }).length
            })
            return resumen
        },
    }
}
const corte = {
    state: () => ({arboles: new Set(), tucas: [],}),
    mutations: {
        newTuca(state: any, newtuca: any) {
            state.arboles.add({
                nombre: newtuca.nombreArbol,
                estado: 'bueno'
            })
            state.tucas.push(newtuca)
        },
        descartarArbol(state: any, arbol:object) {
            state.arboles.add(arbol)
        }
    },
    actions: {
        newTuca(context: any, tuca: object) {
            context.commit('newTuca', tuca)
        },
        descartarArbol(context: any, arbol:object) {
            context.commit('descartarArbol', arbol)

        },
    },
    getters: {
        getResumenTucas: (state: any) => {
            var resumen = {

                equipo: [
                    {equipo: 'rojo', cant: 0},
                    {equipo: 'verde', cant: 0},
                    {equipo: 'azul', cant: 0},
                ],
                tipo: [
                    {tipo: 'TIPO-A', cant: 0},
                    {tipo: 'TIPO-B', cant: 0}
                ],
                estado:[
                    {estado:'bueno',cant:0},
                    {estado:'hueco',cant:0},
                    {estado:'nocumple',cant:0},
                ]
            }

            if (state.tucas.length == 0) return resumen
            resumen.equipo.forEach((e) => {
                e.cant = state.tucas.filter(
                    (tuca: {
                        nombreArbol: string,
                        equipo: string,
                        rango: number,
                        largo: number,
                        algura: number,
                        duramen: number,
                        nombre: string,
                        tipo: string,
                        porcentaje: number
                    }) => {
                        if (tuca.equipo == e.equipo) return true;
                        else return false;
                    }).length
            })




            resumen.tipo.forEach((t) => {
                t.cant = state.tucas.filter(
                    (tuca: {
                        nombreArbol: string,
                        equipo: string,
                        rango: number,
                        largo: number,
                        algura: number,
                        duramen: number,
                        nombre: string,
                        tipo: string,
                        porcentaje: number
                    }) => {
                        console.log(tuca.tipo)
                        if (tuca.tipo == t.tipo) return true;
                        else return false;
                    }).length
            })

            resumen.estado.forEach((est) => {
                est.cant = [...state.arboles].filter(
                    (arbol: {
                        nombre: string,
                        estado:string
                    }) => {
                        if (arbol.estado == est.estado) return true;
                        else return false;
                    }).length
            })
            return resumen
        },
        getTucas(state:any){
            return state.tucas
        }
    }
}
const admin = {
    state: () => ({}),
    mutations: {},
    actions: {}
}
const traslado = {
    state: () => ({}),
    mutations: {},
    actions: {}
}

const acopio = {
    state: () => ({}),
    mutations: {},
    actions: {}
}
const despacho = {
    state: () => ({}),
    mutations: {},
    actions: {}
}
const recibo = {
    state: () => ({}),
    mutations: {},
    actions: {}
}
const store = createStore({
    modules: {
        admin,
        conteo,
        corte,
        traslado,
        despacho,
        acopio,
        recibo
    },
    state() {
        return {

            finca: '',


        }
    },
    mutations: {

        setFinca(state: any, nombre: string) {

            state.finca = nombre
            console.log(state.finca)
        }
    },

    actions: {},
    getters: {
        // ...

        isconFinca: (state: any) => {
            return !(state.finca == '')
        },
        getFinca: (state: any) => {
            return state.finca
        },


    }
})

export default store;
