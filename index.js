let a = 1;
let b = 1;
let x = 0;
let y = 0;
let k = 0; 
let result2Number =''; 
let result2 = '';
let number = '';
let massiveMax = [];
let massiveMini = [];
  while(b<=4){
  for(a=1;a<=25000;a++ ){
  x = a**3;
  y= b**3;
  let c = 0;
  c = x + y;
  let result = Math.cbrt(c);
  let str = String(result);
  let length = str.length;
  let integers = Math.trunc(result);
  let integersStr = String(integers);
  let length2 = integersStr.length;
  if (length2 == '3' && length == '18'){
    result2 = String(result).slice(-14);
  }else if (length2 == '3' && length == '17'){
    result2 = String(result).slice(-13);
  } else if (length2 == '3' && length == '16'){
    result2 = String(result).slice(-12);
  } else if (length2 == '1' && length == '18'){
    result2 = String(result).slice(-16);
  } else if (length2 == '2' && length == '18'){
    result2 = String(result).slice(-15);
  } else if (length2 == '2' && length == '17'){
    result2 = String(result).slice(-14);
  } else if (length2 == '2' && length == '16'){
    result2 = String(result).slice(-13);
  } else if (length2 == '1' && length == '17'){
    result2 = String(result).slice(-15);
  } else if (length2 == '1' && length == '16'){
    result2 = String(result).slice(-14);
  } else if (length2 == '4' && length == '18'){
    result2 = String(result).slice(-13);
  } else if (length2 == '4' && length == '17'){
    result2 = String(result).slice(-12);
  } else if (length2 == '4' && length == '16'){
    result2 = String(result).slice(-11);}
  let proverka = (result2[0]);
  if (proverka == '0' || proverka == '1' || proverka == '2' || proverka == '3' || proverka == '4' || proverka == '5' || proverka == '6' || proverka == '7' || proverka == '8' ){
    number = 0;
  } else { 
    number = (result2[0]+result2[1]+result2[2]+result2[3]+result2[4]+result2[5]+result2[6]+result2[7]+result2[8]+result2[9]+result2[10]+result2[11]);
  }
  number = Number(number);
  result2Number = Number(result2);
  massiveMax.push(number + '');
  massiveMini.push(result2 + '');
  k++;
  console.log( 'Номер '+ k + '   ' + a + "^3" + " + " + b + "^3 " + " = " + result );
  let proverkaInteger = Number.isInteger(result);

  }
  b++;
  }
  let largest = Math.max.apply(Math, massiveMax);
  let mini = Math.min.apply(Math, massiveMini)
  console.log(largest);
  console.log( 'Номер примера '+massiveMax.indexOf('999995502333')+ '(так как счет начинается с 0, поэтому на 1 больше)');
  console.log(mini);0
  console.log( 'Номер примера '+massiveMini.indexOf('000001528428')+ '(так как счет начинается с 0, поэтому на 1 больше)');