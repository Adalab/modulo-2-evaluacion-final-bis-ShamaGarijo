"use stric";

const container = document.querySelector(".js-container");

// Pintar los datos
//a) petición de datos --> fetch
fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json()) // convertir la respuesta en json
    .then((data) => { 
        console.log(data);
        const users = data.results; // para coger del API solo 4 características(nombre,ciudad,etc)
        console.log(users);
        // pintar los ususarios en html e itirar en esos 4 detalles de mi 
    
    

});        

 /*  
 console.log(data);
 const dataUser = data.user[10];
 console.log(dataUser);
*/


