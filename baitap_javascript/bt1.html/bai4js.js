function myFunction (){
    var  iDname = document.getElementById('nhap').value;
    switch(iDname){
        case '1':
            alert('nước suối 15k');
            
        case '2':
            alert('Coca 17k');
            break;
        case '3':
                alert('7 Up 17k');
                break;
        case '4':
                alert('Pesi 17k');
                break;
        case '5':
                alert('Nước mía 10k');
                break;
    default :
        alert('nhạp không hợp lệ');
        break;
    };

}