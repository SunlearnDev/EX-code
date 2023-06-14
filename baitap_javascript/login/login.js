var userName = [`abc`, `bac`, `cba`];
var passname =[`123`,`456`,`789`];
function dangnhap(){
var uName =  document.getElementById('txt_use').value;
var uPass = document.getElementById('txt_pass').value;
// for (var i = 0; i < userName.length; i++){
//     if(uName == userName[i]){
//      if(uPass == passname[i]){
//         window.location.href = `https://xem1080.com/cho-san-cong-ly/tap-1`;
//     }
//     else{
//         alert(`that bai`);
//     }
    
// } else {
//   alert('Thất bại');
// }
// }
if(userName.includes(uName) ){
    var indexx =userName.indexOf(uName);
    if(passname[indexx]===uPass){
        window.location.href = `https://xem1080.com/cho-san-cong-ly/tap-1`;
    }
    else{
        alert(`that bai`);
    }
    
} else {
  alert('Thất bại');
}

    
}