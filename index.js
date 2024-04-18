import fs from "fs"

fs.createWriteStream("TextoDelArray.txt")

const filtrarArray = (arr, condicion) =>{
    try{

      let newArr =  arr.filter(condicion)

      if(typeof newArr[0] === "number"){
        newArr.sort((a,b) => a-b)
      }else{
        newArr.sort()
      }
      

        
        console.log(newArr);
        fs.writeFile("TextoDelArray.txt", newArr.toString(), (error) =>{
        if(error){
          console.log("Ha ocurrido un error: " + error)
        }
      })
      return newArr
    }catch(error){
      console.log("Ocurrió un error : " + error)
    }
    
  }

const arrSinFiltrar = [2, 10, "go", 4, "c#", 6, "nodejs", true, "java", 9, 1,
"python", 12, "ruby", "php", false]

const condicionParaFiltrar = (elemento) =>{
    return  typeof elemento  === "number" 
}

filtrarArray(arrSinFiltrar, condicionParaFiltrar)


