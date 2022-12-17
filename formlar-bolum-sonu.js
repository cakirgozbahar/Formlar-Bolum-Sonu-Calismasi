/*
1 : Formu Seç
2 : Input Bilgisini ul içerisine ekle
3 : Form içindeki bilgiyi sıfırla
4 : Forma bilgi girilmezse kullanıcıyı uyar 
*/

let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
let alertDOM = document.querySelector('#alert')
const alertFunction = (title,message,className="warning") => `

<div class="alert alert-${className} d-flex align-items-center alert-dismissible fade show" role="alert">
<strong>${title}!</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    if (USER_NAME.value && SCORE.value) {
        alertDOM.innerHTML = alertFunction("Success", "Welcome", "success")
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""           //gonderdikten sonra sıfırladık
        SCORE.value = ""
        
    }
    else{
        alertDOM.innerHTML = alertFunction("Caution", "İnvalid syntax","danger" )
    }

}

/* <li class="list-group-item d-flex justify-content-between align-items-center">
A list item
<span class="badge bg-primary rounded-pill">14</span>
</li>
*/
let userListDOM = document.querySelector('#userList')
function addItem(username, score) {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${username} <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}