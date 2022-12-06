// function ideal(chisl) {
//var sum1 = 0;
//for(let i =1; i <= (chisl/2); i++){
//    sum1 += i;
//}
//if (sum1 == chisl){
 //   document.write('Число NIIIICE')
//} else{
//    document.write('Число не NIIIICE')
//}
//}
//ideal(12)

function ideal(chisl) {
    var sum1 = 0;
    var sum2 = 0;
    var chisl2 = 3;
    for(let i =1; i <= (chisl/2); i++){
        sum1 += i; 
    }
    for(let i =1; i <= (chisl2/2); i++){
        sum2 += i; 
    }
    if (sum1 == chisl2){
        document.write('дружба')
    } else if (sum2 == chisl){
        document.write('дружба')
    } 
    else{
        document.write('не дружба')
    }
    }
    ideal(4)