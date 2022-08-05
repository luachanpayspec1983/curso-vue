new Vue({
    el: '#app',
    data: {
        myLife: 100,
        enemyLife: 100,
        myAtk: 0,
        enemyAtk: 0,
        iniciado: false,
        dano1: false,
        dano2: false,
        status: false,
        resultado: false,
        logMyLife: '',
        logEnLife: ''
    },
    watch: {
        dano1(newAtk, oldAtk){
            this.logMyLife = this.logMyLife += newAtk
        },
        dano2(newEAtk, oldAtk){
            this.logEnLife = this.logEnLife += newEAtk
        }
    },
    methods: {
        ataque(myMax, myMin, enMax = 15, enMin = 6){
            this.dano1 = Math.round(Math.random() * (myMax - myMin) + myMin)
            this.myAtk = this.enemyLife -= this.dano1
            this.dano2 = Math.round(Math.random() * (enMax - enMin) + enMin)
            this.enemyAtk = this.myLife -= this.dano2
            this.status = 'fight';

            if(this.myAtk <= 0 && this.enemyAtk > 0){
                this.enemyLife = 0
                this.resultado = 'win'
                this.iniciado = false
                this.status = 'end'
            }else if(this.enemyAtk <= 0 && this.myAtk > 0){
                this.myLife = 0
                this.resultado = 'lose'
                this.iniciado = false
                this.status = 'end'
            }else if(this.myAtk <= 0 && this.enemyAtk <= 0){
                this.myLife = 0
                this.enemyLife = 0
                this.resultado = 'tie'
                this.iniciado = false
                this.status = 'end'
            }
        },
        curar(){
            this.enemyAtk = this.myLife -= Math.round(Math.random() * (20 - 5) + 5)
            this.myLife += Math.round(Math.random() * (20 - 5) + 5)
            console.log(this.enemyAtk)
            if(this.myLife >= 100){
                this.myLife = 100
            }
        }
    },
})