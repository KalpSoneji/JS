var employees = [
    {
        id:1,
        name:"rahul",
        salary:5000,
        department:"It",
        email:"rahul@gmail.com",
        isMarried:true,
        age:25
    },
    {
        id:2,
        name:"ramesh",
        salary:6000,
        department:"Finance",
        email:"ramesh@gmail.com",
        isMarried:false,
        age:30
    },
    {
        id:3,
        name:"raju",
        salary:4000,
        department:"HR",
        email:"raju@gmail.com",
        isMarried:true,
        age:35
    },
    {
        id:4,
        name:"Suresh",
        salary:6000,
        department:"Finance",
        email:"ramesh@gmail.com",
        isMarried:false,
        age:30
    }
]

var totalsalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
// console.log(totalsalary);


var avgsalary = totalsalary / employees.length;
console.log(avgsalary);

