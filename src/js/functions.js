export default { 
    id : (x)=>{
        return document.getElementById(x);
    },
    post_request : async (url, body, auth=false) => {
        return await new Promise((resolve, reject)=>{
            const options = {
                method : "POST",
                mode: "cors",
                credentials: "same-origin",
                headers : {
                    "content-type" : "application/json",
                    Accept : 'application/json',
                    "Access-Control-Allow-Origin" : "no-cors",
                    origin: "*",
                    "edulens_api_custom_key" : auth===false ? null : localStorage.getItem('auth_key')
                },
                body : JSON.stringify(body)
            }
            fetch(`https://edulens.curiousnews.com.ng/${url}`, options).then((res)=>{
                res.json().then((json)=>{
                        resolve(json);
                }).catch(err=>{reject("Please check your internet connection!")})
            }).catch(err=>{reject("Please check your internet connection!")})

            setTimeout(()=>{reject("Connection Timeout, Please check your Internet connection!")}, 30000);
        });
    },
    get_request : async (url, auth=false) => {
        return await new Promise((resolve, reject)=>{
            const options = {
                method : "GET",
                mode:'cors',
                credentials:"same-origin",
                "Access-Control-Allow-Origin": "*",
                headers : {
                    "content-type" : "application/json",
                    Accept : 'application/json',
                    "edulens_api_custom_key" : auth===false ? null : localStorage.getItem('auth_key')
                },
            }
            fetch(`https://edulens.curiousnews.com.ng/${url}`, options).then((res)=>{
                res.json().then((json)=>{
                        resolve(json);
                }).catch(err=>{reject("Please check your internet connection!")})
            }).catch(err=>{reject("Please check your internet connection!")})

            setTimeout(()=>{reject("Connection Timeout, Please check your Internet connection!")}, 30000);
        });
    },
    load_next : ()=>{
        const options = {
            method : "GET",
            mode:'cors',
            credentials:"same-origin",
            "Access-Control-Allow-Origin": "*",
            headers:{
                'Content-Type': 'application/json',
                Accept : 'application/json',
                "edulens_api_custom_key" : localStorage.getItem('auth_key')
            },
        }
        fetch(`https://edulens.curiousnews.com.ng/user/remaining_details`, options).then((res)=>{
            res.json().then((res)=>{
                if(res.status === true){
                    if(res.msg != null){
                        localStorage.added_details = res.msg.added_data;
                        switch(res.msg.name){
                            case 'date_of_birth':
                                window.location = '/profiling';
                                break;
                            case 'location':
                                window.location = '/select-location';
                                break;
                            case 'user_type':
                                window.location = '/account-type-selection';
                                break;
                            case 'speciality':
                                window.location = '/select-preferences';
                                break;
                            default:
                                window.location = '/select-institution';
                                break;
                        }
                    }
                }
            }).catch()
        }).catch()
    }
}
