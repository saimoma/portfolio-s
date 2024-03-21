
function projects(){
    fetch('./portfolio.json')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
projects();

function displayUsers(data){
    const seeDetails = document.getElementById('projects')
 for(const users of data){
    const div =document.createElement('div');
    div.innerHTML=`
    <img src="${users.image}"/>
    <h3>${users.title}</h3>
    <p>${users.descreption}</p>
   <button><a href="${users.github}"><i class="fa-solid fa-code"></i></a></button>
   <button><a href="${users.netlify}"><i class="fa-solid fa-eye"></i></a></button>
    `;
    div.classList.add('projectss')
    seeDetails.appendChild(div);
 
 console.log(users);
 
 }
}








// <--------->

const form = document.querySelector('form');
const YourName = document.querySelector('#fname');
const email = document.querySelector('#email');
const Subject = document.querySelector('#subject');
const Message = document.querySelector('#message');


form.addEventListener('submit', formhandler);

function formhandler(e){
    e.preventDefault();

    const formInfo = {
        Name:YourName.value,
        Email:email.value,
        Subject:Subject.value,
        Message: Message.value
    }
    console.log(formInfo);

    YourName.value = '',
    email.value = '',
    Subject.value = '',
    Message.value = ''

}
