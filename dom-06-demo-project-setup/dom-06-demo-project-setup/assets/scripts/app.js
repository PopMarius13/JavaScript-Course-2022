// const addMovieModal = document.querySelector('#add-modal')
// const addMovieModal = document.body.children[1]
// const startAddMovieButton = document.querySelector('header').lastElementChild
const addMovieModal = document.getElementById('add-modal') /// fast
const startAddMovieButton = document.querySelector('header button')
const backdrop = document.getElementById('backdrop')
const cancelMovieButton = addMovieModal.querySelector('.btn--passive')
const confirmAddMovieButton = cancelMovieButton.nextElementSibling
const userInputs = addMovieModal.querySelectorAll('input')
const entryTextSection = document.getElementById('entry-text')
const listRoot = document.getElementById('movie-list')
const deleteMovieModal = document.getElementById('delete-modal')

const movies = []

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block'
    } else {
        entryTextSection.style.display = 'none'
    }
}

const cancelMovieDeletion = () => {
    toggleBackdrop()
    deleteMovieModal.classList.remove('visible')
}

const deleteMovie = (movieId) => {
    let movieIndex = 0
    for (const movie of movies) {
        if (movie.id === movieId) {
            break
        }
        movieIndex++
    }
    movies.splice(movieIndex, 1)
    listRoot.children[movieIndex].remove()
    cancelMovieDeletion()
}

const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible')
    toggleBackdrop()
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive')
    const confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger')
    cancelDeletionButton.addEventListener('click', cancelMovieDeletion)
    confirmDeletionButton.addEventListener('click', deleteMovie.bind(null, movieId))
}

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li')

    newMovieElement.className = 'movie-element'
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}"> 
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/10 stars</p>
        </div>
    `
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
    listRoot.append(newMovieElement)
}

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible')
}

const showMovieModal = () => {
    addMovieModal.classList.add('visible')
    toggleBackdrop()
}

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = ''
    }
}

const backdropClickHandler = () => {
    closeMovieModal()
    cancelMovieDeletion()
    clearMovieInput()
}

const cancelAddMovieHandler = () => {
    closeMovieModal()
    toggleBackdrop()
    clearMovieInput()
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value
    const imageValue = userInputs[1].value
    const ratingValue = userInputs[2].value

    if (titleValue.trim() === '' || imageValue.trim() === '' || ratingValue === '' || +ratingValue < 1 || +ratingValue > 10) {
        alert('Please enter valid values')
        return
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageValue,
        rating: ratingValue
    }
    movies.push(newMovie)
    closeMovieModal()
    clearMovieInput()
    toggleBackdrop()
    renderNewMovieElement(newMovie.id, titleValue, imageValue, ratingValue)
    updateUI()
}

startAddMovieButton.addEventListener('click', showMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
cancelMovieButton.addEventListener('click', cancelAddMovieHandler)
confirmAddMovieButton.addEventListener('click', addMovieHandler)