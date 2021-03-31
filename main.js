const btn=document.querySelector('.search-button')
const img_result=document.querySelector('.box-result')
btn.addEventListener('click',function get_dog(element){
    element.preventDefault();
document.querySelectorAll('.box-result img').forEach(function(item){
     item.remove()})

const input_id=document.getElementsByClassName('search-engine').value;
const link_api=`https://dog.ceo/api/breed/${input_id}/images/random&limit=1`;
fetch(link_api)
.then(res => {
    return res.json(); 
 })
 .then(data => {
    const dog_img=document.createElement('img')
    dog_img.src=`https://dog.ceo/api/breed/hound/images${data.poster_path}`
       dog_img.alt='Dog poster'
       img_result.appendChild(dog_img) 
    })
      .catch(err =>  console.log('error',erorr));

})
