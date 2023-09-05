const url = "https://jsonplaceholder.typicode.com/users";

document.addEventListener("DOMContentLoaded", function(e){
    const update ={
        nombre:'',
        apellido :'',
        fecha : '',
    };

    const btnReg = document.getElementById("btnRegistrar");

    btnReg.addEventListener("click", function(){
        let name = document.getElementById("userName").value;
        let lastname = document.getElementById("lastName").value;
        let fecha = document.getElementById("fechadate").value;

    
        update.nombre =name;
        update.lastname = lastname;
        update.fecha = fecha;
        
    })

    fetch(url, {
        method: 'POST',
        Headers:{
            'contentType':'application/json',
        },
        body: JSON.stringify(update),
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
    });
});