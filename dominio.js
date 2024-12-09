
let pronoun = ['the', 'our'];

let adj = ['great', 'big'];

let noun = ['jogger', 'racoon'];

let dominios = []

function generateDomain() {
    
    for (p of pronoun) {
        for(a of adj){
            for (n of noun ){
                let dominio = `${p}${a}${n}.com`;
                dominios.push(dominio)
                
            }
        }
        
    }
    return  dominios

    
}
resultado = generateDomain()
console.log(resultado)




