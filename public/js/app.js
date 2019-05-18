

const submit = document.querySelector('#submit')
const image = document.querySelector('#image')
const title = document.querySelector('#title')
const link = document.querySelector('#link')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    
    let searchTerm = document.querySelector('#term').value

    fetch('?search=' + searchTerm).then((response) => {
        response.json().then((data) => {
            image.setAttribute('src',data.url)
            title.textContent = data.title
            link.setAttribute('href', data.url)
        })
    })
})