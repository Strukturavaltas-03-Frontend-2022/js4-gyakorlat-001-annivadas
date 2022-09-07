/*
1. Írj egy függvényt, `convertToUppercase()` néven, mely paraméterként kap egy tömböt. A függvény visszatérési érték egy Promise.  
Amennyiben a tömb minden eleme string, és sikeresen nagybetűssé alakíthatók a Promise resolved lesz és visszaad egy új tömböt, ami az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.  
Ellenkező esetben a Promise rejected lesz, a visszatérési érték a következő string: 'Error: Not all items in the array are strings!'
*/
const convertToUppercase = (arr=[]) => {
  
   return new Promise( (resolve, reject) => {
    
     if (arr.every( el => typeof el === 'string')) {
      let newArray = arr.map( el => el.toUpperCase());
      resolve(newArray);
    } else {
      reject(new Error('Error: Not all items in the array are strings!'));
    }
  });
};

/* const convertToUppercase = (arr = ['a', 'b', 'c']) => {
  return new Promise((resolve, reject) => {
    let upperCaseArr = [];
    try {
      arr.forEach((el) => {
        upperCaseArr.push(el.toUpperCase());
      });

      resolve(upperCaseArr);

    } catch (error) {  
      reject(new Error('Error: Not all items in the array are strings!'));
    }
  });
}; */

/* const convertToUppercase = (array) => {
  return new Promise((resolve, reject) => {
    if (array.every(element => typeof element === 'string')) {
      let newArray = array.map(element => element.toUpperCase());
      resolve(newArray);
    } else {
      reject(new Error('Error: Not all items in the array are strings!'));
    }
  })
} */




export default convertToUppercase;
