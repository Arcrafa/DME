import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            arboles: [],
            finca: '',
            tucas: [],

        }
    },
    mutations: {
        newArbol(state: any, idArbol: { id: string, rango: number, medida: number }) {
            state.arboles.push(idArbol)
        },
        setFinca(state: any, nombre: string) {

            state.finca = nombre
            console.log(state.finca)
        },
        newTuca(state: any, newtuca: object) {
            state.tucas.push(newtuca)
        }
    },

    actions: {
        newArbol(context: any, medida: number) {
            var rango = Math.floor(medida / 10) * 10;
            var indice = 0;


            indice = context.state.arboles.filter(
                (arbol: { id: string, rango: number, medida: number }) => {
                    if (arbol.rango == rango && arbol.medida == medida) return true;
                    else return false;
                }).length + 1
            var id = rango.toString() + '-' + medida.toString() + '-' + indice.toString()
            context.commit('newArbol', {id, rango, medida})

            return id;
        },
        newTuca(context:any,tuca:object){
            context.commit('newTuca',tuca)
        }
    },
    getters: {
        // ...
        getN_arboles: (state) => {
            return state.arboles.length
        },
        isconFinca: (state) => {
            return state.finca == ''
        },
        getFinca: (state) => {
            return state.finca
        },
        getResumenArboles: (state) => {
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
        getResumenTucas: (state) => {
            var resumen = {

                equipo: [
                    {equipo: 'rojo', cant: 0},
                    {equipo: 'verde', cant: 0},
                    {equipo: 'azul', cant: 0},
                ],
                tipo: [
                    {tipo: 'TIPOA', cant: 0},
                    {tipo: 'TIPOA', cant: 0}
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
                        if (tuca.tipo == t.tipo) return true;
                        else return false;
                    }).length
            })
            return resumen
        }
    }
})

export default store;
