document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;
document.getElementById('reverse').onclick = reverse;

function tempConvert() {

    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;

    if (fahrenheit != '') {
         celsius = (parseFloat(fahrenheit) -32) /1.8;
    } else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }

    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
}

function clearForm() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
}

function reverse() {
    x=document.getElementById('number').value;
    var hsl,p;
    hsl="";
    p=x.length;
    for(a=p-1;a>=0;a--){
        hsl=hsl+x.charAt (a);
    }
    document.getElementById('fahrenheit').value=parseFloat(celsius).toFixed(1);
    document.getElementById('celcius').value=parseFloat(fahrenheit).toFixed(1);
}
//sorry ka aku stuck di reverse masih bingung