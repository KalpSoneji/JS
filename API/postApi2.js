const submitHandler = async(event)=>{
    event.preventDefault();

    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const email = document.getElementById("email").value
    const isActive = document.getElementById("isActive").value

    const user = {
        name:name,
        email:email,
        age:age,
        isActive:isActive
    }
    console.log(user);

    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            age,
            isActive
        })
    })

    const res = await response.json();
    console.log(res);
}