/* Creamos un estado para la app */
let state = {
    // DOM
    advice_id_element: document.querySelector("#advice_id"),
    advice_phrase_element: document.querySelector("#advice"),
    button: document.querySelector(".btn"),
    getRandomPhrase(){
        $.ajax({
            type : 'GET',            
            url: "https://api.adviceslip.com/advice",
        }).then(async function(json) {            
            writeData(JSON.parse(json));
        });
    }
};

state.button.addEventListener("click",  function (){
    state.getRandomPhrase();    
});

function writeData(json){
    console.log(json);
    /* Modificamos el Dom */
    state.advice_id_element.innerHTML = "ADVICE #"+json.slip.id
    state.advice_phrase_element.innerHTML = json.slip.advice
}