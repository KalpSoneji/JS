const response = {
      message: "Data fetched successfully",
      data: [{"_id":"683d95a657bf0a8e7f19c4d8","name":"kush","email":"kush78@gmail.com","age":19,"isActive":true,"__v":0},
        {"_id":"683da860e57eaecebde56655","name":"Neel","email":"koyanineel45@gmail.com","age":22,"isActive":true,"__v":0},
        {"_id":"683daab7e57eaecebde56670","name":"raj","email":"raj@gmail.com","age":22,"isActive":true,"__v":0},
        {"_id":"683daabce57eaecebde56673","name":"ramesh","email":"ramesh123@gmail.com","age":20,"__v":0},
        {"_id":"683daac1e57eaecebde56676","name":"kush","email":"bhavsarkush78@gmail.com","age":19,"__v":0},
        {"_id":"683daac2e57eaecebde56678","name":"ajay","email":"ajay@gmail.com","age":24,"isActive":true,"__v":0},
        {"_id":"683daad1e57eaecebde5667c","name":"nayan","email":"nayan@gmail.com","age":25,"isActive":true,"__v":0},
        {"_id":"683daad5e57eaecebde5667f","name":"jay","email":"jay2royal@gmail.com","age":22,"isActive":true,"__v":0},
        {"_id":"683daad9e57eaecebde56682","name":"neeraj","email":"neeraj@gmail.com","age":21,"isActive":false,"__v":0},
        {"_id":"683daadbe57eaecebde56684","name":"ankit","email":"ankit123@gmail.com","age":22,"isActive":false,"__v":0},
        {"_id":"683daadce57eaecebde56687","name":"neeraj","email":"neeraj@gmail.com","age":21,"isActive":true,"__v":0},
        {"_id":"683daadee57eaecebde5668a","name":"seeta","email":"seeta@gmail.com","age":28,"isActive":false,"__v":0},
        {"_id":"683daae4e57eaecebde5668e","name":"jay2","email":"jayroyal@gmail.com","age":1,"isActive":true,"__v":0},
        {"_id":"683dcb31bd34f41ebd06b3d5","name":"test","email":"test@gmail.com","password":"test123","age":22,"isActive":true,"__v":0},
        {"_id":"683dcd62bd34f41ebd06b3db","__v":0},{"_id":"683dcd7abd34f41ebd06b3dd","email":"nishkal0810@gmail.com","password":"2424","__v":0},
        {"_id":"683dce06bd34f41ebd06b3df","email":"zipunaben@mailinator.com","password":"Pa$$w0rd!","__v":0},
        {"_id":"683dce07bd34f41ebd06b3e1","email":"zipunaben@mailinator.com","password":"Pa$$w0rd!","__v":0},
        {"_id":"683dce0cbd34f41ebd06b3e3","email":"zipunaben@mailinator.com","password":"Pa$$w0rd!","__v":0},
        {"_id":"683dce33bd34f41ebd06b3e5","email":"juheruwy@mailinator.com","password":"Pa$$w0rd!","__v":0},
        {"_id":"683dce56bd34f41ebd06b3e7","email":"zewif@mailinator.com","password":"Pa$$w0rd!","__v":0},
        {"_id":"683dce75bd34f41ebd06b3e9","email":"zewif@mailinator.com","password":"Pa$$w0rd!","__v":0},
        {"_id":"683dce76bd34f41ebd06b3eb","email":"zewif@mailinator.com","password":"Pa$$w0rd!","__v":0},
        {"_id":"683dce8ebd34f41ebd06b3ed","email":"zewif@mailinator.com","password":"Pa$$w0rd!","__v":0},
        {"_id":"683dce9fbd34f41ebd06b3ef","email":"zewif@mailinator.com","password":"Pa$$w0rd!","__v":0},
        {"_id":"683dd122bd34f41ebd06b3f1","email":"nishkal0810@gmail.com","password":"3433","__v":0},
        {"_id":"683de01cbd34f41ebd06b513","email":"nishkal0810@gmail.com","password":"243","__v":0},
        {"_id":"683de058bd34f41ebd06b517","email":"nishkal0810@gmail.com","password":"232","__v":0},
        {"_id":"683ed728f69af3cd7128d7d0","name":"ajay","email":"ajay@gmail.com","age":24,"isActive":true,"__v":0}]
    };

    function showData() {
      const tbody = document.querySelector('#userTable tbody');
      tbody.innerHTML = '';

      response.data.forEach(user => {
        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${user._id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.age}</td>
          <td>${user.password}</td>
          <td>${user.isActive !== undefined ? user.isActive : 'N/A'}</td>
        `;

        tbody.appendChild(row);
      });
    }