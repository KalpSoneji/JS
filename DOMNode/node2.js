var students = [
    {
        id: 1,
        name: "Kalp",
        age: 20,
        address: "Ahmedabad",
        email: "kalpsoneji5@gmail.com",
        gender: "male"
    },
    {
        id: 2,
        name: "Vidhi",
        age: 19,
        address: "Jamnagar",
        email: "vv146@gmail.com",
        gender: "female"
    },
    {
        id: 3,
        name: "Hash",
        age: 30,
        address: "Lucknow",
        email: "hash2601@gmail.com",
        gender: "female"
    },
    {
        id: 4,
        name: "rahul",
        age: 35,
        address: "surat",
        email: "rahul@gmail.com",
        gender: "male"
    }
]


let thead = document.getElementById("thead");
thead.style.display = "none"
// console.log(students);


const getData = () => {
    thead.style.display = ""
    let tbody = document.getElementById("tbody");

    for (let i = 0; i < students.length; i++) {
            let tr = document.createElement("tr");
            let tdId = document.createElement("td");
            let tdName = document.createElement("td");
            let tdAge = document.createElement("td");
            let tdAddress = document.createElement("td");
            let tdEmail = document.createElement("td");
            let tdGender = document.createElement("td");

            tdId.innerHTML = students[i].id;
            tdName.innerHTML = students[i].name;
            tdAge.innerHTML = students[i].age;
            tdAddress.innerHTML = students[i].address;
            tdEmail.innerHTML = students[i].email;
            tdGender.innerHTML = students[i].gender;

            tbody.appendChild(tr);
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdAge);
            tr.appendChild(tdAddress);
            tr.appendChild(tdEmail);
            tr.appendChild(tdGender);
    }
}