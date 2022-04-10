import {API} from "./sample";
export const log = user=>{
    return fetch(`${API}/signup`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=> console.log(err));
}