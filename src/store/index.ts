import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            arboles: [],
            finca: ''

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
        getResumen: (state) => {
            var resumen = [
                {rango: 50, cant: 0},
                {rango: 60, cant: 0},
                {rango: 70, cant: 0},
                {rango: 80, cant: 0},
                {rango: 90, cant: 0},
                {rango: 100, cant: 0},
                {rango: 110, cant: 0},
                {rango: 120, cant: 0}]
            if (state.arboles.length==0) return resumen
            resumen.forEach((r)=>{
                r.cant=state.arboles.filter(
                    (arbol: { id: string, rango: number, medida: number }) => {
                        if (arbol.rango == r.rango ) return true;
                        else return false;
                    }).length
            })
            return resumen
        }
    }
})

export default store;
