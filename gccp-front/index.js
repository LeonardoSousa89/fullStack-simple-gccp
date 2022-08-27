const doc=document

function load(){
    const URL='http://localhost:3003'

    fetch(URL,{method:'GET'}).then(response=>console.log(response.json()))
}
load()  