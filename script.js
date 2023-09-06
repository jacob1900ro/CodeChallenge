document.addEventListener("DOMContentLoaded", function () {
    const formreg = document.getElementById("form");

    formreg.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const nombre = document.getElementById("userName").value;
        const apellido = document.getElementById("lastName").value;
        const fechaDeNacimiento = document.getElementById("fechadate").value;

        const update = {
            nombre: nombre,
            apellido: apellido,
            fechaDeNacimiento: fechaDeNacimiento
        };

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(update)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Respuesta del servidor:", data);

            })
            .catch(error => {
                console.error("Error al enviar los datos:", error);
            });
    });
});