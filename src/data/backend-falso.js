const base_de_datos = [
    {
        nombre: "luigi bosca",
        uva: "malbec",
        precio: 8000,
        img: "https://acdn.mitiendanube.com/stores/001/211/660/products/d-v-catena-cabernet-malbec1-6615d89e4c11cb17f916155700260382-640-0.jpg"
    },
    {
        nombre: "dv catena",
        uva: "cabernet",
        precio: 16000, 
        img: "https://acdn.mitiendanube.com/stores/001/211/660/products/d-v-catena-cabernet-malbec1-6615d89e4c11cb17f916155700260382-640-0.jpg"
    },
    {
        nombre: "Enemigo",
        uva: "malbec",
        precio: 17000, 
        img: "https://acdn.mitiendanube.com/stores/001/211/660/products/d-v-catena-cabernet-malbec1-6615d89e4c11cb17f916155700260382-640-0.jpg"
        
    },
    {
        nombre: "Yacochuya",
        uva: "torrontes",
        precio: 25000, 
        img: "https://acdn.mitiendanube.com/stores/001/211/660/products/d-v-catena-cabernet-malbec1-6615d89e4c11cb17f916155700260382-640-0.jpg"
        
    },
    {
        nombre: "Termidor",
        uva: "tinto",
        precio: 1000, 
        img: "https://acdn.mitiendanube.com/stores/001/211/660/products/d-v-catena-cabernet-malbec1-6615d89e4c11cb17f916155700260382-640-0.jpg"
    }
]


export const getProducts = () => {
    return new Promise((res, rej) => {
        console.log("soy el back me pidieron datos")
        setTimeout(() => {
          res(base_de_datos)
          rej("no hay mas")
        }, 3000);
      });
}

export const getProductsByCategory = (uva) => {
    return new Promise((res, rej) => {
        console.log("soy el back me pidieron datos")
        setTimeout(() => {
          res(base_de_datos.filter(e => e.uva === uva))
          rej("no hay mas")
        }, 3000);
      });
}
