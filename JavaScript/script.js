
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
