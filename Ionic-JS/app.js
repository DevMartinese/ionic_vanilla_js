'uses strict'

const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const buttonSave = document.querySelector('#buttonSave');
const buttonClear = document.querySelector('#buttonClear');
const productList = document.querySelector('#productList');
const totalPayment = document.querySelector('#totalPayment');

let total = 0;

const createNewProduct = (name, price) => { 
    const ionCard = document.createElement('ion-card');
    const ionCardContent = document.createElement('ion-card-content');
    ionCardContent.textContent = name + ': $' + price;
    ionCard.appendChild(ionCardContent);
    productList.appendChild(ionCard);
};

const clearInputs = () => { 
   productName.value = '';
   productPrice.value = '';
};

const presentAlert = () => {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Data';
    alert.subHeader = 'Please verify your inputs';
    alert.message = 'Incorrect Name or Price';
    alert.buttons = ['Ok'];

    document.body.appendChild(alert);
    return alert.present();
}

const isEmpty = str => !str.trim().length; 

buttonSave.addEventListener('click', () => {
    const name = productName.value;
    const price = productPrice.value;
    
    if (isEmpty(name) || price <= 0 || isEmpty(price)) {
          presentAlert();
          return
    }

    createNewProduct(name, price);
    total += +price;
    totalPayment.textContent = total;
    clearInputs();
 });

 buttonClear.addEventListener('click', clearInputs);