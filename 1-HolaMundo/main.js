//Instanciar objeto de Vue
const app = Vue.createApp({
    //Método 
    data(){
        return{
            user:{
                title: "Hola mundo",
                name: "Version",
                age: 20,
                movies:["Peli1", "Peli2", "Peli3", "Peli4", "Peli5"],
                url: "https://google.com",
                picture: "https://cdn.pixabay.com/photo/2021/12/13/19/10/nature-6868923_960_720.jpg",
                classValue: "good"
            }
        }
    }
})


console.log(app.title);