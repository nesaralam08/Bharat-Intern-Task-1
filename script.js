var temp = document.getElementById("temp");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");

temp.addEventListener("input",function(){
    let t = this.value;
    let i = ((t*1.8)+32);
    if(!Number.isInteger(i))
    {
        i=i.toFixed(2);
    };
    fah.value = i;
    let f = (+t +273.15);
    if(!Number.isInteger(f))
    {
        f=f.toFixed(2);
    };
    kel.value = f;
});
fah.addEventListener("input",function(){
    let t = this.value;
    let i = ((t -32)*(5/9));
    if(!Number.isInteger(i))
    {
        i=i.toFixed(2);
    };
    temp.value = i;
    let f =(+i+273.15);
    if(!Number.isInteger(f))
    {
        f=f.toFixed(2);
    };
    kel.value = f;
});
kel.addEventListener("input",function(){
    let t = this.value;
    let i = ((t-273.15)*(1.8 + +32));
    if(!Number.isInteger(i))
    {
        i=i.toFixed(2);
    };
    fah.value = i;
    let  f =(t-273.15);
    if(!Number.isInteger(f))
    {
        f=f.toFixed(2);
    };
    temp.value = f;
});