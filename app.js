document.addEventListener('DOMContentLoaded', function(){
    const search= document.getElementById("searchButton");
    const field= document.getElementById("field");
    const result=document.getElementById("result");
    search.addEventListener("click", function(){
        const query= field.value;
        let clean = DOMPurify.sanitize(query);
        let url = 'http://localhost/INFO2180/info2180-lab4/superheroes.php';
        if (clean) { 
            url += `?query=${clean}`;  
        }

        fetch(url)
        .then(response => response.text())
        .then(data => {
            result.innerHTML = data; 
        })
        .catch(error => {
            console.log(error);
        });
       
    })
})
