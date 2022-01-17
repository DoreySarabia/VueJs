const app = Vue.createApp({
// Data como arrow funtion
// retornar objeto con los datos 
    data: () => ({
        Title: "Formularios",
        datos: {
            name: "",
            age: 15,
            langs: [],
            gener: "m",
        },
    }),
    methods:{
        // Ejecutar el metodo cada que se llame al evento
        handleSubmit(){
            console.log(this.datos);
        }
    }
})