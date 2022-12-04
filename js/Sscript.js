// var entrerNum= prompt("enter the number ") 
// var mod = entrerNum % 2 
// if(mod == 0) { 
//     alert("the number is zaoji")
// }
// else if (mod == 1) { 
//       alert("the number is fardi")
// } 
// else { 
//     alert("this is not number")
// }
//////////////////////////////////////////////////////////////////////////////////
// var div = document.getElementById("div") 
// var btn = document.getElementById("btn") 

// btn.onclick = function() {
//     div.innerHTML = "ooosls pasl la spasl l asl lsadafsklkfas;lk asl;fkl akf;ls kaflsf aksa f"
// }
/////////////////////////// arthmatic/////////////////////////////////////////////
// var x =  50 
//  x-= 10
// console.log(x)

/////////////////  logical operators///////////////////////////
//  var x = 5 
//  var y = 7 

//  if (x !== 3 ) { 
//     console.log("yes")

//  }
// else {
//     console.log("no")
// }

/////////////// switch ///////////////

// var x = prompt( "enter yor degree")

// switch(x){
//     case "A" : 
//     console.log("wahsh")
//     break
//     case "B" :
//     console.log("heluuu")
//     break 
//     case "f" :  
//     console.log("hatet nefekh")
// }
/////////////// function ///////////////
// var math = prompt("enter your degree in math" )
// var english = prompt("enter your degree in english")
// var arabic = prompt("enter your degree in arabic")
// var history = prompt("enter your degree in history")
// var trafic = prompt("enter your degree in trafic")
// var programing = prompt("enter your degree in programing")




// var x =  parseInt(math)  + parseInt(english) + parseInt(arabic) 
// var y =x/3
// console.log(y)
// if ( y <=30 ) { 
//     console.log("very bad")
// } 
// else if ( y <=50) { 
//     console.log("good")

// }
// else if ( y <=70) { 
//     console.log("very good")

// }
// else  { 

//     console.log("excellent ")
// }


// var x = prompt( "enter your profession")

// switch(x){
//     case "frontend" : 
//     console.log("7500")
//     break
//     case "backend " :
//     console.log("9000")
//     break 
//     case "full-stack" :  
//     console.log("11000")
// }
// console.log(x)


// var salary = prompt("enter your saliry in last 10 mounth" ) 

// var x = parseInt(salary) / 10 

// console.log(x)



// var result =  [
//     {
//      name : "Fatma" ,
//      city : "Mansoura" ,
//     } ,
  
//   {
//      name : "Mariam" ,
//      city : "Paris",
//   } ,

//    { 
//        name : "Ahmed" ,
//        city : "cairo",
//    }  
           
//          ]  
// console.log(result)
// console.log(result[0])


///////////////////////////////
// var math = prompt("enter your degree in math" )
// var english = prompt("enter your degree in english")
// var arabic = prompt("enter your degree in arabic")
// var history = prompt("enter your degree in history")
// var trafic = prompt("enter your degree in trafic")
// var programing = prompt("enter your degree in programing")




// var x =  parseInt(math)  + parseInt(english) + parseInt(arabic) 
// var z =  parseInt(history)  + parseInt(trafic) + parseInt(programing) 
// var y =x+z /6
// console.log(y)
// if ( y <=30 ) { 
//     console.log("very bad")
// } 
// else if ( y <=50) { 
//     console.log("good")

// }
// else if ( y <=70) { 
//     console.log("very good")

// }
// else  { 

//     console.log("excellent ")
// }

// /////////////////

var subject = prompt("enter your subject number" )
var arr1 = []
var arr2 = []
var toplam = 0
var btn = document.getElementById("btn")

for(i = 0 ; i< subject ; i++ ) { 
    var sabName = prompt("enter your subject Name" )
    arr1[i] = sabName 
    var puan = prompt("enter your degree")
    arr2[i] = puan 
}
for (i= 0 ; i < arr2.length; i++ ){
 toplam += parseInt(arr2[i])
} 

toplam /= arr2.length

btn.textContent = toplam +"%"