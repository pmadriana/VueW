Vue.component('hijo',{
    template://html
    `
    <div class="p-2 bg-success text-white ">
        <h4> Componente hijo</h4>
        <h5> {{numero}} </h5>

        <h4> nombre: {{nombre}}</h4>
    </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: "ignacio"
        }
    },
    mounted(){ //una vez que el nombre ya esta instanciado y pintado en el html(dom)
        this.$emit('nombreHijo', this.nombre)
    }
    

});