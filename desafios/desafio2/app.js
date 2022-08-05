new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        clickAlert(){
            alert('Você clicou no botão');
        },
        textoDigitado(event){
            this.valor = event.target.value
            console.log(valor)
        }  
    },
})