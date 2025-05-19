function getData(){

    const promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Data fetched successfully....");
            // reject("Error in fetching data...");
        },4000)
    })

    console.log(promise);
    promise.then((data)=>{
        console.log(data);

        console.log("Ending...");
        
    })
    promise.catch((err)=>{
        console.log(err);
    })
    
}

getData()