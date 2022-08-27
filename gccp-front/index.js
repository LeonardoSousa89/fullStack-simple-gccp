const doc=document

function load(){
    const URL='http://localhost:3003'

    fetch(URL,{method:'GET'}).then(response=>response.json())
                             .then(response=>{
                                response.map(e=>{
                                    let idDb=e.id
                                    let msgDb=e.msg

                                    
                                })
                             })
                             .catch(err=>console.log(err))
}
load()  