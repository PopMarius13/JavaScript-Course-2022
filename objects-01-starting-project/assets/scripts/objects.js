// const person = {
//     name: 'Pop',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     greet: function() {
//         alert('Hi there!')
//     },
//     'can do this': true
// }
// // person.greet()
// delete person.age
// person.isAdmin = true
// console.log(person)
//
// const movieList = document.getElementById('movie-list')
// movieList.style.backgroundColor = 'red'
// // movieList.style['backgroundColor'] = 'blue'
// movieList.style.display = 'block'
//

const addMovieBtn = document.getElementById('add-movie-btn')
const searchMovieBtn = document.getElementById('search-btn')

const movies = []

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list')

    if (movies.length === 0) {
        movieList.classList.remove('visible')
        return
    }
    movieList.classList.add('visible')
    movieList.innerHTML = ''

    const filteredMovies = !filter ?
        movies :
        movies.filter(movie => movie.info.title.includes(filter))

    filteredMovies.forEach((movie) => {
        const movieEL = document.createElement('li')
        // if('info' in movie) { //movie.info === undefined
        //     console.log("info in movie")
        // }
        const { info, ...otherProps } = movie
        console.log(otherProps)

        let { getFormattedTitle } = movie
        // getFormattedTitle = getFormattedTitle.bind(movie)
        let text = getFormattedTitle.call(movie) + ' - '

        for (const key in info) {
            if (key !== 'title' && key !== '_title') {
                text = text + `${key}: ${info[key]}`
            }
        }
        movieEL.textContent = text
        movieList.append(movieEL)
    })
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value
    const extraName = document.getElementById('extra-name').value
    const extraValue = document.getElementById('extra-value').value

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return
    }
    const newMovie = {
        info: {
            set title(val) {
                if (val.trim() === ''){
                    this._title = 'DEFAULT'
                    return
                }
                this._title = val
            },
            get title() {
                return this._title.toUpperCase()
            },
            [extraName]: extraValue
        },
        id: Math.random(),
        getFormattedTitle() {
            return this.info.title.toUpperCase()
        }
    }
    newMovie.info.title = title
    movies.push(newMovie)
    renderMovies()
}

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value
    renderMovies(filterTerm)
}


addMovieBtn.addEventListener('click', addMovieHandler)
searchMovieBtn.addEventListener('click', searchMovieHandler)























