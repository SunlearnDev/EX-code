// function producsta_DataTransfer(){
//     const producsta =[
//         {
//             id:1,
//             name:`quan nam`,
//             pice: '231'
//            },
//            {
//             id:2,
//             name:`quan nam`,
//             pice: '2321'
//            }
//     ]
//     return producsta;
// }
// export default producsta_DataTransfer();

var arr = [];
function save(){
    var a = {
        name: document.getElementById('name').value,
        id: document.getElementById('id').value,
        prdname: document.getElementById('prdname').value,
        qty: document.getElementById('qty').value,
        price: document.getElementById('price').value,
    }
    console.log(a);
    arr.push(a);
}
function reset(){
    document.getElementById('name').value = '';
    document.getElementById('id').value = '';
    document.getElementById('prdname').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('price').value = '';
}

function show(){
    let she = '';
    for (let i in arr) {
        let n = parseInt(i) + 1;
        she += "<tr>";
        she += "<td>" + n + "</td>";
        she += "<td>" + arr[i].name + "</td>";
        she += "<td>" + arr[i].id + "</td>";
        she += "<td>" + arr[i].prdname + "</td>";
        she += "<td>" + arr[i].qty + "</td>";
        she += "<td>" + arr[i].price + "</td>";
        she += "<td>" + parseFloat(arr[i].qty) * parseFloat(arr[i].price) + "</td>";
        she += "</tr>";
    }
    console.log(she);
    document.getElementById('tbl').innerHTML = she;
}