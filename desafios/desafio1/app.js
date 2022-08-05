new Vue({
    el: '#desafio',
    data:{
        nome: 'Vinicius Beltran',
        idade: 18,
        linkImg: 'https://i1.wp.com/files.agro20.com.br/uploads/2020/02/gaviao1.jpg?fit=1024%2C680&ssl=1'
    },
    methods: {
        idadex3(){
            return this.idade * 3
        },
        randomNum(){
            return Math.random()
        }
    },
})