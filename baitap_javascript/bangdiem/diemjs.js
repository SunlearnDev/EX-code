function myFunction(){
    var a = document.getElementsByName("kh1").values;
    a = parseFloat(a);
    var b = document.getElementsByName("hk2").values;
    b = parseFloat(b);
    var c = document.getElementById("hk");
    var valuse = c.options[c.selectedIndex].value;
    valuse = parseInt(valuse);
    var k;
    switch(valuse){
        case 1:
            k = (a + b)/2;
            document.getElementById("kq").innerHTML=k;
            break;
        case 2:
            k = (a + b*2)/3;
            document.getElementById("kq").innerHTML=k;
            break;
        case 3:
            k = (a + b*3)/4;
            document.getElementById("kq").innerHTML=k;
            break;
    }
    if(k>=9){
        document.getElementById("hs").innerHTML="Học sinh giỏi";
    }else if(k>=6 && k<9){
        document.getElementById("hs").innerHTML="Học sinh thường";
    }else if(k>=4,5 && k<6){
        document.getElementById("hs").innerHTML="Học sinh yếu";
    }
}