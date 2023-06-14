var userName = [`abc`, `bac`, `cba`];
var passname =[`123`,`456`,`789`];
function dangnhap(){
    // ------------------------------------------------------
    // -------------------------Cách 1-----------------------
    // ------------------------------------------------------
// var uName =  document.getElementById('txt_use').value;
// var uPass = document.getElementById('txt_pass').value;
// for (var i = 0; i < userName.length; i++){
//     if(uName === userName[i]){
//         console.log(userName[i]);
//      if(uPass === passname[i]){
//         console.log(passname[i]);
//         window.location.href = `https://xem1080.com/cho-san-cong-ly/tap-1`;
//     }
//     else{
//         alert(`that bai`);
//     }
//     break;
// } else {
//   alert('Thất bại');
// }
// }
// -----------------------------end---------------------------------

    // ------------------------------------------------------
    // -------------------------Cách 2-----------------------
    // ------------------------------------------------------

    // ------dùng phương thức includes kiểm tra dữ liệu Boolean
if(userName.includes(uName) ){
    
    var indexx =userName.indexOf(uName);
    // nếu tồn tại tiếp tục dùng indexOf để tương ứng với với mảng cùng vị trí
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