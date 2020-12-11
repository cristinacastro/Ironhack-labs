
// Iteration 1: All directors? - Get the array of all directors.

    let getAllDirectors = (moviesArr) => movies.map(function(movie){
    return movie.director
    })

    //console.log(getAllDirectors
    

    // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
    
    
    let uniqueDirectors = getAllDirectors.filter((el, index) => getAllDirectors.indexOf(el) === index)
    
    //console.log(uniqueDirectors);
    
    
    
    // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
    function howManyMovies (array){
    return movies.filter(function(movies){
    return movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    }).length
    }
    //console.log(howManyMovies(movies));
    
    
    // Iteration 3: All rates average - Get the average of all rates with 2 decimals
    
    function ratesAverage (movies){
        if (movies.length === 0){
            return 0;
        };
    let sum = movies.reduce(function(acc, curr){
        if (curr.rate){
            return acc+curr.rate
        } else {
            return acc
         }
        },0)
    return Math.round((sum/movies.length) *100) /100
    }

    //console.log(ratesAverage(movies));

    
    
    // Iteration 4: Drama movies - Get the average of Drama Movies
    
    function dramaMoviesRate (movies){
       
      let dramaMovies = movies.filter(function(movies){
      return movies.genre.includes("Drama")
      });
      
    
      let sum = dramaMovies.reduce(function(acc, curr){
      return acc+curr.rate
      },0);
      return Math.round((sum/dramaMovies.length)*100)/100
    }
    //console.log(dramaMoviesRate(movies))
    
    
    // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  
    let orderByYear = (movie) => movies.sort(function(a,b){
        if (a.year > b.year) {
        return 1;
        } else if (a.year < b.year){
        return -1;
        } else {
        if (a.title > b.title){
        return 1;
        } else if (b.title > a.title){
        return -1;
        }
        return 0;
        }
        return a+b;
        })
        //console.log(orderByYear(movies)) 
        
    
    
    // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
    
    function orderAlphabetically(movies) {
        let moviesTitle = movies.map(function (movie) {
        return movie.title;
        });
        
        return moviesTitle.sort().slice(0,20);
        }
    
    console.log(orderAlphabetically()); 
    
    
    
    // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
    
    // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
    
    