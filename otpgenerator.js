let otp = '';

for (i = 0; i < 6; i++) 
  otp += Math.floor(Math.random() * 10);

console.log(otp);