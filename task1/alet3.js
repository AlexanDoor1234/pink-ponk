let n = 10;
prch:
for (let i = 2; i <= n; i++) {
    for(let a = 2; a != i; a++){
    if (i % a == 0){
        continue prch;
    }
    }
  document.write( i  + '<br>');
}