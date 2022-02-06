
import throttle from 'lodash.throttle';/*из  библиотеки lodash используем только throttle */

const formData = {};
const STORAGE_KEY = "feedback-form-state"; /* избавляемся от строк где можно допустить ошибку - патерн"магические строки"*/
const ref = {
    form: document.querySelector('.feedback-form'),
    formInput: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),/*добавил т.к. не смог вспомнить/найти метод записать значения в форму*/
    email: document.querySelector('.feedback-form input'),
};

ref.form.addEventListener('submit', onFormSubmit);
ref.formInput.addEventListener('input', throttle(onFormInput, 500));/*используем throttle чтоб уменьшить частоту вызова ф-ии */

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    // console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));/*сохраняем в локалСторидж в виде строки*/
}   

/* останавливаем поведение по умолчанию*/
/*убираем сообщение из хранилища и очищаем форму + */
function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(`E-mail: ${ref.email.value}, Message: ${ref.textarea.value}`);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    /*корректно не работает
    // if (ref.email.value === "" || ref.textarea.value === "") {
    //     alert("Пожалуйста, заполните все поля")
    //     return;
    // }*/
}
populateFormData();

/*получаем значение из локалСторидж, если там чё есть - обнавляем DOM (заполняем поля формy)*/
function populateFormData(){
    const saveFormData = localStorage.getItem(STORAGE_KEY);
    if (saveFormData){
        const parsedFormData = JSON.parse(saveFormData);/*достаем из локалСторидж, парсим строку в объект*/
        ref.email.value = parsedFormData.email;
        ref.textarea.value = parsedFormData.message;
    };
}





// В HTML есть разметка формы.Напиши скрипт который будет сохранять значения полей 
// в локальное хранилище когда пользователь что - то печатает.
// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище 
// объект с полями email и message, в которых сохраняй текущие значения полей формы.
// Пусть ключом для хранилища будет строка "feedback-form-state".+
// 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные,
// заполняй ими поля формы.В противном случае поля должны быть пустыми.+
// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message 
// и текущими их значениями в консоль.
// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
// Для этого добавь в проект и используй библиотеку lodash.throttle.+




/*по А.Репете форма с одним полем textarea*/

// import throttle from 'lodash.throttle';/*из  библиотеки lodash используем только throttle */

// const STORAGE_KEY = "feedback-form-state"; /* избавляемся от строк где можно допустить ошибку - патерн"магические строки"*/
// const ref = {
//    form: document.querySelector('.feedback-form'),
//    textarea: document.querySelector('.feedback-form textarea'),
// }
// populateTextarea();

// ref.form.addEventListener('submit', onFormSubmit);
// ref.textarea.addEventListener('input', throttle(onTextareaInput, 500));/*используем throttle чтоб уменьшить частоту вызова ф-ии */

// /* останавливаем поведение по умолчанию*/
// /*убираем сообщение из хранилища и очищаем форму*/
// function onFormSubmit(evt) {
//      evt.preventDefault(); 
//     console.log('send form');

//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(evt) {  
//     const message = evt.target.value; /* получаем значение поля*/
//     console.log(message);
//     localStorage.setItem(STORAGE_KEY, message);/*сохраняем в локалСторидж "message"- и так(уже)строка*/
// }

// /*получаем значение из локалСторидж, если там чё есть - обнавляем DOM*/
// function populateTextarea() {
//     const saveMessage = localStorage.getItem(STORAGE_KEY);
//     if (saveMessage) {
//         ref.textarea.value = saveMessage;
//     console.log(saveMessage);
// }
// }


