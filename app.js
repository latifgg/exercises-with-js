let comments = [
    {name:"alicia", comment:"it looks good",age:"34"},
    {name:"charlie", comment:"I like it very much. ",age:"44"},
    {name:"michael", comment:"I would love to join ",age:"38"},
    {name:"laura", comment:"I dont have any time to do my homework",age:"56"},
    {name:"luciano", comment:"I believe that I can do it",age:"54"}
]

let randomNumber;

function createNewNumber() {
    randomNumber = Math.round(Math.random()*5);
}

setInterval(function() {
    
    createNewNumber();

    document.getElementById("under-box-1").innerHTML = comments[randomNumber].name;
    document.getElementById("top-box").innerHTML = comments[randomNumber].comment;
    document.getElementById("under-box-2").innerHTML = comments[randomNumber].age;

},2000)