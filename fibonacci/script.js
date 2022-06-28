function Fibonacci(n) {

    var num3;
    if(n <= 0) return 0; //si n est inferieur ou égale a 0 retourne 0
    if(n == 1) return 1; //si n est égale a 1 retourne 1

    var num1 = 0; 
    var num2 = 1;

    for(var i=2; i <= n; i++) 
    
    { num3 = num1 + num2 ; num1 = num2; num2 = num3;};

    return num2;
}    
    for ( var I = 0 ; I <= 100 ; I++ ) 
    { document.write("Fibonacci("+I+")="+Fibonacci(I)+"<br>"); }
