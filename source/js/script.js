let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

const q1 = prompt("Один из последних просмотренных фильмов?");
const q2 = prompt("Га сколько вы оцените его?");

personalMovieDB.movies[q1] =  q2;
console.log(personalMovieDB.movies);
