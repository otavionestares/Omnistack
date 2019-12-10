function checarIdade(idade){

    var idadePromise = new Promise(function(resolve, reject) {

        

        if (idade > 18) { 
          resolve('Maior que 18');
        } else {
          reject('Menor que 18');
        };
    });  
    
    
};


checarIdade(20)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });

