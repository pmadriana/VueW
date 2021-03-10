Vue.component('padre',{
    template://html
    `
    <div class="p-5 bg-dark text-white ">
        <h3> componente padre: {{numPadre}} </h3>
        <button class="btn btn-danger" @click="numPadre++">+</button>
        {{nombrePadre}}
        <hijo :numero="numPadre" @nombreHijo="nombrePadre = $event"></hijo>  <!-- : para vue binding, @propquevienedelhijo-->
    </div>
    `,
    data(){
        return {
            numPadre:0,
            nombrePadre: ''
        }
    }
    

});