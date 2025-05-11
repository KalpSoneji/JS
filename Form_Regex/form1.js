const submitHandler = (event)=>{
    event.preventDefault();

    const name = document.getElementById("name")
    const mobile = document.getElementById("mobile")
    const email = document.getElementById("email")

    const nameErr = document.getElementById("nameErr")
    const mobileErr = document.getElementById("mobileErr")
    const emailErr = document.getElementById("emailErr")


    // console.log(name.value);
    // console.log(mobile.value);
    // console.log(email.value);

    const nameRegex = /[A-Z]{1}[a-zA-Z]+$/;
    // Aashiq
    // aashiq
    if(name.value.length <= 0)
        nameErr.innerHTML = "Name is required..."
    
    else if(!name.value.match(nameRegex))
        nameErr.innerHTML = "Name not matched.."
        // alert("Name is not matched...")
    
    else
        // alert(name.value)
        nameErr.innerHTML = name.value

    const mobileRegex = /[6-9]{1}[0-9]{9}$/;

    if(mobile.value.length <= 0)
        mobileErr.innerHTML = "Mobile is required..."
    
    else if(mobile.value.match(mobileRegex))
        mobileErr.innerHTML = mobile.value
    
    else
        mobileErr.innerHTML = "Invalid Mobile number..."

    // aashiqsingh56789@gmail.com

    const emailRegex = /^[a-z0-9]+@{1}[a-z]+\.[a-z]+$/;

    if(email.value == "")
        emailErr.innerHTML = "Email is required..."
    
    else if(email.value.match(emailRegex))
        emailErr.innerHTML = email.value 
    
    else 
        emailErr.innerHTML = "Invalid email address..."
    
}