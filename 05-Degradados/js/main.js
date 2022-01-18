const app = Vue.createApp({

    data: () => ({
        title: "Gradient Generator",
        fcolor: "#d5ee11",
        scolor: "#f59e24",
        orientation: "1",
    }),
    computed:{
        setColor(){
            if (this.orientation == 1) {
                 // css para degradiente en right
                return `background: linear-gradient(to right, ${this.fcolor}, ${this.scolor});`;
            }else if(this.orientation == 2){
                 // css para degradiente left
            return `background: linear-gradient(to left,  ${this.fcolor}, ${this.scolor});`
            }else if(this.orientation == 3){
                 // css para degradiente top
            return `background: linear-gradient(to top,  ${this.fcolor}, ${this.scolor});`
            }else{
                 // css para degradiente bottom
            return `background: linear-gradient(to bottom,  ${this.fcolor}, ${this.scolor});`
            }
           
        },
    },
});