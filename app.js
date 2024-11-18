document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
        searchButton.addEventListener("click", function(){

            fetch('http://localhost/INFO2180/info2180-lab4/superheroes.php')
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.log(error);
            });
        })
})

           
