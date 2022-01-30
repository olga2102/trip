let personalMovieDB = {
count: 0,
movies: {},
actors: {},
genres: [],
privat: false,
start: function () {
  personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");

  while (personalMovieDB.count == "" ||  personalMovieDB.count == null ||  isNaN(personalMovieDB.count)) {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
  }
},
rememberMyFilms: function() {
  for (let i = 0; i < 2; i++) {
    const q1 = prompt("Один из последних просмотренных фильмов?");
    const q2 = prompt("Га сколько вы оцените его?");

    if (q1 != null && q2 != null && q1 != "" && q2 != "" && q1.length < 50 && q2.length < 50) {
      personalMovieDB.movies[q1] =  q2;
      console.log(personalMovieDB.movies);
    } else {
      i--;
    };
  };
},
detectPersonalLevel: function () {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Ошибка');
  };
},
showMyDB: function () {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
},
showMyGenres: function () {
  for (let i = 1; i < 4; i ++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);

    if (genre == null || genre == "") {
      i--;
    } else {
      personalMovieDB.genres[i - 1] = genre;
    }
  }
  personalMovieDB.genres.forEach((genre, i) => {
console.log(`Любимый жанр ${i + 1} - это ${genre}`)
  })
},
toggleVisibleMyDB: function () {
  if (personalMovieDB.privat) {
    personalMovieDB.privat = false;
  } else {
    personalMovieDB.privat = true;
  }
}
};
