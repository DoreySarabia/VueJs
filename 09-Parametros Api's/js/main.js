const app = Vue.createApp({
  data() {
    return {
      title: "Peticiones con Parámetros",
      post:5,
      datos: {},
    };
  },
  methods: {
    async getPost() {
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.post}`)
      
      const {userId} = data
      const {data:dataUser} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      this.datos = dataUser;
    },
  },
});
