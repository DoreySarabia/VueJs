const app = Vue.createApp({
    data (){
        return{
            title: "Calculadora Vue",
            n1: 0,
            n2: 0,
        }
    },
    // propuedad computada --> funcion que retorna valor, cachean la respuesta de momento
    // usar siempre y cuando retornen un valor
    computed:{
        suma(){
            return this.n1 + this.n2
        },
        resta(){
            return this.n1 - this.n2
        }, 
        multi(){
            return this.n1 * this.n2
        },
        dividir(){
            const res = this.n1 / this.n2
            return res === Infinity || res === -Infinity ? "Error no calculable" : res;
        }
    }
})