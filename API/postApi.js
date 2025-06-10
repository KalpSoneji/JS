const postData = async()=>{

    var user = {
        name:"amitabh",
        age:80,
        email:"rekha@gmail.com",
        isActive:false
    }

    const response = await fetch("https://node5.onrender.com/user/user",{

        method:"POST",
        
        headers:{
            "Content-Type":"application/json"
        },
        // body:JSON.stringify({
        //     name:"harsh",
        //     age:20,
        //     email:"harsh@gmail.com",
        //     isActive:true
        // })
        body:JSON.stringify(user)
    })

    // console.log(response);
    const res = await response.json();
    console.log(res);
    
}