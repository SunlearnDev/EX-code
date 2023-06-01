function myFunction(){
    var number = Document.getElementById('nhap').value;
    var getting;
    if(number == 0){
            document.getElementById('demo').innerHTML ='Ban duoc 0 diem';
            document.getElementById('demo').style.backgroundColor = 'yellow';
        }else if(number >0){
            document.getElementById('demo').innerHTML ='Ban duoc';
            document.getElementById('demo').style.backgroundColor ='red';
        }
        else{
            document.getElementById('demo').innerHTML ='so am';
            document.getElementById('demo').style.backgroundColor = 'green';
        }
}