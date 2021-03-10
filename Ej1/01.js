//https://www.youtube.com/watch?v=4sF1Kifpaqs&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=6
const app = new Vue({
    el: '#app', //todo lo de app se gestiona con vue
    data:{
        titulo: 'Hola mundoooo',
        list: [
            {nombre: 'Pera', cant: 10},
            {nombre: 'Uva', cant:2},
            {nombre: 'uva', cant: 1}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods:{
        agregarFruta () {
            console.log('clickkk')
            this.list.push({
                nombre: this.nuevaFruta, 
                cant: 0
            })
            this.nuevaFruta = ''
        }
    }, 
    computed:{ //son un arreglo para crear funciones casi como methods
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.list){
                this.total = this.total + fruta.cant;
            }
            return this.total;
        }
    }
})