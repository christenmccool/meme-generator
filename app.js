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
    newMemeImg.addEventListener('load', () => {
        let imgHeight = newMemeImg.height;
        const deleteDiv = document.createElement('div');
        deleteDiv.classList.add('delete-div');
        deleteDiv.style.height = `${imgHeight}px`;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "X";
        deleteBtn.style.display = "none";
        deleteDiv.append(deleteBtn);

        newMeme.append(deleteDiv);

        deleteDiv.addEventListener('mouseover', function () {
            deleteDiv.classList.add('grey-div');
            deleteBtn.style.display = "block";
        })

        deleteDiv.addEventListener('mouseout', function () {
            deleteDiv.classList.remove('grey-div');
            deleteBtn.style.display = "none";
        })
        
        deleteBtn.addEventListener('click', function (e) {
            e.target.parentElement.parentElement.remove();
        })

    })

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

    const deleteDiv = document.createElement('div');
})

