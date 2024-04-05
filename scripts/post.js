let customer = [
    {
        id: '1',
        'name': 'Bobby Fisher',
        'image': 'http',
        'sotials': 'img',
        'feedback': 'grossmeister'
    },

    {
        id: '2',
        'name': 'Elvis Presly',
        'image': 'http',
        'sotials': 'img',
        'feedback': 'singer'
    }
]
     
let keysOfSecondObject = Object.keys(customer[1]);
console.log(keysOfSecondObject);
let valuesOfSecondObject = Object.values(customer[1]);
console.log(valuesOfSecondObject);



const customerBox = document.querySelector('.client-box')
const arrowLeft = document.querySelector('img.left')
const arrowRight = document.querySelector('img.right')

customerBox.closest('.client').addEventListener('click', (event)=>{
    if(event.target == arrowLeft){
        console.log('hi');
    }
    if(event.target == arrowRight){
        console.log('bye');
    }
})
