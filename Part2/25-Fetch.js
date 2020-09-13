// const userList = document.querySelector('.user-list');
const registerForm = document.querySelector('.register-form');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input')

// fetch('https://reqres.in/api/users')
//     .then((response) => {
//         return response.json();
//     })
//     .then((json) => {
//         const users = json.data;
//         users.forEach(user => {
//             const userItem = document.createElement('div');
//             userItem.classList.add('user-item');

//             const avatarImg = document.createElement('img');
//             avatarImg.classList.add('avatar');
//             avatarImg.src = user.avatar;

//             const fullnameText = document.createElement('h3');
//             fullnameText.classList.add('fullname');
//             fullnameText.innerHTML = user.first_name + ' ' + user.last_name;

//             const emailText = document.createElement('p');
//             emailText.classList.add('email');
//             emailText.innerHTML = user.email;

//             userItem.append(avatarImg, fullnameText, emailText);
//             userList.append(userItem);
//         });
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

function registerSubmit(event) {
    event.preventDefault();

    const user = {
        email: emailInput.value,
        password: passwordInput.value
    }

    fetch('https://reqres.in/api/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            alert('สมัครสมาชิก id =' + json.id + ' เรียบร้อย');
        })
        .catch((error) => {
            console.log(error.message);
        });
}

registerForm.addEventListener('submit', registerSubmit);