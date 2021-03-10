//
const app = new Vue({ //beforeCreate
    el: '#app', //todo lo de app se gestiona con vue
    data:{
        saludo: 'saluditos '
    },
    beforeCreate(){ //insatnciamos vue
        console.log('beforeCreate');
    },
    created() {
        //Al crear los metodos, observadores y eventps, pero aun no accede al DOM
        //Aun no se puede acceder a el
        console.log('created');
    },
    beforeMount() {
        //Se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted() {
        //se ejecuta al insertar el DOM
        console.log('mounted');
    },
    beforeUpdate() {
        //Al detectar un cambio
        console.log('beforeUpdate')
    },
    updated() {
        //al realizar los cambios
        console.log('updated')
    },
    beforeDestroy(){
        //antes de destruir la instancia
        console.log('beforeDestroy')
    },
    destroyed() {
        //Se destruye toda la instacia
        console.log('destroyed')
    },
    methods: {
        destruir(){
            this.$destroy();
        }
    },
})