const btn=document.getElementsByClassName('search-button')
const img_result=document.querySelector('.box-result')
btn.addEventListener('click',function get_dog(element){
    element.preventDefault();
document.querySelectorAll('.box-result img').forEach(function(item){
     item.remove()})

const input_id=document.getElementsByClassName('search-engine').value;
const url_api=`https://dog.ceo/api/breed/${input_id}/images/random&limit=1`;
fetch(url_api)
.then(res => {
    return res.json(); 
 })
 .then(data => {
    const dog_img=document.createElement('img')
      film_img.alt='Film poster' 
      img_result.appendChild(dog_img) 

      .catch(err =>  console.log('err',err));
})















})
