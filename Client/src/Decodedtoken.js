const jwt_decode = require('jwt-decode');

let token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWVhNzI3YjA1YzhmYjIxNzY2N2ZjNCIsInJvbGUiOiJNZW50b3IiLCJpYXQiOjE2NTAzODAyMTIsImV4cCI6MTY1MTI0NDIxMn0.RFszFchzFP_MK4Y0zK2FfVR5sDchmgYdllFdUyPdKzU';

let decoded = jwt_decode(token);

console.log(decoded);
