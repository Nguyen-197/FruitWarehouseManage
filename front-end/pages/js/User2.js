
  var user2Post = 'http://localhost:8080/api/auth/signup-user2';
function start() {
    handleCreateUser2();
  }
  start();

  
// post

function createUser2(data, callback){
    var options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
      },
      body: JSON.stringify(data)
    };
    fetch(user2Post, options)
    .then(function(response) {
      if(!response.ok) alert('Thêm thất bại!!!')
      else{
      alert('Thêm thành công!');
      response.json();
      }
    })
    .then(callback);
  }
  
    function handleCreateUser2(){
      var createBtn = document.querySelector('#create-user2');
      createBtn.onclick = function(){
        var preName = document.querySelector('input[name="preName"]').value;
        var name = document.querySelector('input[name="name"]').value;
        // var age = document.querySelector('input[name="age"]').value;
        var birthday = document.querySelector('input[name="birthday"]').value;
        var address = document.querySelector('input[name="address"]').value;
        var phone = document.querySelector('input[name="phoneNumber"]').value;
        var account = document.querySelector('input[name="account"]').value;
        var password = document.querySelector('input[name="password"]').value;
        var formData = {
          account: account,
          address: address,
          // age: age,
          birthday: birthday,
          name: name,
          password: password,
          phoneNumber: phone,
          preName: preName,
        };
  
        console.log(formData);
        createUser2(formData)
    }
  }
  