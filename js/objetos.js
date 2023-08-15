let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) { //busca el valor de las propiedades
 
  return foods[scannedItem]
  
  }
  
  console.log(checkInventory("apples")); //muestra su valor 25

delete foods.orages; //elimina propiedades del objeto

//Verifica si un objeto tiene una propiedad en especicica, se hace de estas dos formas
users.hasOwnProperty('Alan');
'Alan' in users; 

//verifica si el objeto tiene estas propiedades
function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
    );
  }
  //otra forma de hacerlo o sustituyendo userObj.hasOwnProperty("Alan") por 'Alan' in users; 
  function isEveryoneHere(userObj) {
    return userObj.hasOwnProperty("Alan") &&
       userObj.hasOwnProperty("Jeff") &&
       userObj.hasOwnProperty("Sarah") &&
       userObj.hasOwnProperty("Ryan");
   }

   //devuelve todas las claves o propiedades de un objeto en una matriz
   Object.keys(obj)

//esta funcion admite dos parametros el objeto y el nombre agregar
   function addFriend(userObj, friend) {
   
  user.data.friends.push(friend); //agrega el nombre al objeto que tiene un propiedad data que a la ves contiene un array
  return user.data.friends; //retorna el array dentro del objeto
    
  }
  
  console.log(addFriend(user, 'Pete'));