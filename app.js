const entryForm = document.querySelector('#entry-form');
const imageURL = document.querySelector('#image-url');
const textTop = document.querySelector('#text-top');
const textBottom = document.querySelector('#text-bottom');
const memeDiv = document.querySelector('#meme-div');

entryForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const newMeme = document.createElement('div');
    newMeme.classList.add('meme');
    memeDiv.append(newMeme);
    
    const newMemeImg = document.createElement('img');
    newMemeImg.setAttribute('src', `${imageURL.value}`);
    newMeme.append(newMemeImg);
    imageURL.value = '';

    const newTopText = document.createElement('div');
    newTopText.classList.add('text-div');
    newTopText.classList.add('text-top-div');
    newTopText.innerText = textTop.value;
    newMeme.append(newTopText);
    textTop.value = '';

    const newBottomText = document.createElement('div');
    newBottomText.classList.add('text-div');
    newBottomText.classList.add('text-bottom-div');
    newBottomText.innerText = textBottom.value;
    newMeme.append(newBottomText);
    textBottom.value = '';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.innerText = "Delete";
    newMeme.append(deleteBtn);
    
    deleteBtn.addEventListener('click', function (e) {
        e.target.parentElement.remove();
    })
})

