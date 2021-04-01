const btn=document.querySelector('.search-button')
const img_result=document.querySelector('.box-result')
const input_id=document.querySelector('.search-engine');   // there are data in search engin

btn.addEventListener('click',function get_dog(element){
    element.preventDefault();

const input_value=input_id.value;                         // when you click the button git the data from search engin
const link_api=`https://dog.ceo/api/breed/${input_value}/images/random`;
fetch(link_api)
.then(res => {
    return res.json(); 
 })
 .then(data => {
    const dog_img=document.createElement('img')
   //  console.log(data.message,"5")   for test
    dog_img.src= data.message;                               //  git (message) from the console -->
      dog_img.alt='Dog'
       img_result.appendChild(dog_img) 
    })
      .catch(err =>  console.log('error',erorr));
})
