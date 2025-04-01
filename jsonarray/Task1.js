var company = [
    {
        name: "google",
        employees:[
            {
                id:101,
                name:"meet desai",
                salary:25600,
                email:"meet@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:102,
                name:"jane",
                salary:22000,
                email:"jane@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:103,
                name:"priti",
                salary:27800,
                email:"priti@gmail.com",
                IsMarried:true,
                child:2,
                gender:"female"
            }
        ]
    },
    {
        name:"facebook",
        employees:[
            {
                id:201,
                name:"jim",
                salary:24500,
                email:"jim@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:202,
                name:"sarah",
                salary:21500,
                email:"sarah@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:203,
                name:"akash",
                salary:26200,
                email:"akash@gmail.com",
                IsMarried:true,
                child:2,
                gender:"male"
            }
        ]
    },
    {
        name:"amazon",
        employees:[
            {
                id:301,
                name:"ankit",
                salary:26200,
                email:"ankit@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            },
            {
                id:302,
                name:"riya",
                salary:86000,
                email:"riya@gmail.com",
                IsMarried:true,
                child:1,
                gender:"female"
            },
            {
                id:303,
                name:"kriti",
                salary:62500,
                email:"kriti@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            }
        ]
    },
    {
        name:"flipkart",
        employees:[
            {
                id:401,
                name:"pooja",
                salary:29800,
                email:"pooja@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:402,
                name:"ritesh",
                salary:22500,
                email:"ritesh@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:403,
                name:"bhuwan",
                salary:28700,
                email:"bhuwan@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            }
        ]
    }
    
];

// 1. Find the total number of employees in all companies.
let totalEmployee = 0;
company.forEach((comp) => {
    return totalEmployee += comp.employee.length;
});
console.log("Total number of employees:", totalEmployees);

// 2. Find the company where the employee named "riya" works.
let companyOfRiya = company.find((comp) => {
    return comp.employees.some((emp) => emp.name === "riya");
});
console.log("Company where Riya works:", companyOfRiya.name);

// 3. Calculate the average salary of employees across all companies.
let totalSalary = 0;
let totalEmployees = 0;
company.forEach((comp) => {
    comp.employees.forEach((emp) => {
        totalSalary += emp.salary;
        totalEmployees++;
    });
});
let averageSalary = totalSalary / totalEmployees;
console.log("Average salary of employees:", averageSalary);

// 4. Find the names of all employees who are married.
let marriedEmployees = [];
company.forEach((comp) => {
    comp.employees.forEach((emp) => {
        if (emp.IsMarried) {
            marriedEmployees.push(emp.name);
        }
    });
});
console.log("Names of married employees:", marriedEmployees);

// 5. Count the total number of children across all employees
let totalChildren = 0;
company.forEach((comp) => {
    comp.employees.forEach((emp) => {
        totalChildren += emp.child;
    });
});
console.log("Total number of children:", totalChildren);

// 7. List all female employees.
let femaleEmployees = [];
company.forEach((comp) => {
    comp.employees.forEach((emp) => {
        if (emp.gender === "female") {
            femaleEmployees.push(emp.name);
        }
    });
});
console.log("Names of female employees:", femaleEmployees);

// 8. Count how many employees are not married.
let unmarriedEmployees = 0;
company.forEach((comp) => {
    comp.employees.forEach((emp) => {
        if (!emp.IsMarried) {
            unmarriedEmployees++;
        }
    });
});
console.log("Number of unmarried employees:", unmarriedEmployees);

// 9. Find the email addresses of all employees earning more than 30,000.
let highSalaryEmployees = [];
company.forEach((comp) => {
    comp.employees.forEach((emp) => {
        if (emp.salary > 30000) {
            highSalaryEmployees.push(emp.email);
        }
    });
});
console.log("Email addresses of high salary employees:", highSalaryEmployees);

// 10. Identify the total number of employees for each company.
company.forEach((comp) => {
    console.log(`Total employees in ${comp.name}: ${comp.employees.length}`);
});