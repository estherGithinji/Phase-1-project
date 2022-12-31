document.addEventListener("DOMContentLoaded", () => {
  fetchImage();
  imageCartegory
})

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function fetchImage(art){
  fetch("http://localhost:3000/art")
  .then(res => res.json())
  .then(displayimage)
}

function displayimage(art){
  art.forEach(imageCartegory)
}

function imageCartegory(art){
  const favArt = document.querySelector('#fav-art')
  const ul = document.createElement('ul')
  const list = document.createElement('li')
  list.textContent = art.type
  ul.appendChild(list)
  favArt.appendChild(ul)
  list.style.cursor = "pointer"

  list.addEventListener("click", (e) =>{
    e.preventDefault()
    const CardImage = document.querySelector('#img');
    CardImage.src = art.url
    const imageCartegory = document.querySelector('.card-title')
    imageCartegory.textContent = art.type
  })
}

const postImage = document.querySelector('#form')
postImage.addEventListener("submit", (e) =>{
  e.preventDefault();

  const imageType = document.querySelector('#img-type').value
  const imageUrl = document.querySelector('#img-link').value

  fetch("http://localhost:3000/art", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type: imageType,
      url: imageUrl
    })
  })
  .then(res => res.json())
  .then(postTheImage)

  function postTheImage(data){
    // const postDisp = document.querySelector ('.card')
    const imagePost = document.querySelector ('#img')
    imagePost.scr = data.imageUrl
  }
})

const postBtn = document.querySelector ('#post').addEventListener ('click',()=> {
  console.log ('This is it')
  const createList = document.createElement ('li')
  const input = document.querySelector ('#comment-box').value
  const unordered = document.querySelector ('#unordered')
  createList.textContent = input
  unordered.appendChild (createList)
})

const lykBtn = document.querySelector ('#like-button').addEventListener ('click', ()=>{
  const likes = document.querySelector ('#likes').textContent =('liked')
})