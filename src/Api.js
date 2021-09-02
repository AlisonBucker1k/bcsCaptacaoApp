const BASE_API = 'https://api.bcsclub.com.br/api';

export default {
    checkToken:async(token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`,{
            method: 'POST',
            header:{
                Accept:'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify({token})
        });

        const json = await req.json();
        return json;
    },
    login:async(email, password) => {
        console.log(`${BASE_API}/auth/login`)
        const req = await fetch(`${BASE_API}/auth/login`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify({email, password})
        });

        const json = await req.json();
        console.log(json)
        return json;

    }
}