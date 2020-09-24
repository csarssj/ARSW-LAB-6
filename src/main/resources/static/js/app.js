var api = apimock;
//var api = apiclient;
var app = (function (){
	var cine;
	var functions =[];
	var date;
	var movie;

	var _map = function (list){
    	return list.map(function(cinema){
    			return {name:cinema.movie.name, genre:cinema.movie.genre, date: cinema.date.split(" ")[1]}
    	})
    }

	var setCine = function(cinema_name){
		cine = cinema_name;
	};
	var setDate = function(cinema_date){
		date = cinema_date;
	};
	var setMovie = function(cinema_movie){
    	movie = movie;
    };

	function table(cinemas) {
        cinemas = _map(cinemas);
		$("#table").find('tbody').empty();

		//button  = ;
        cinemas.map(function(cinema) {
            $("#table").append(
				"<tbody><tr> <td>" +
                cinema.name +
                "</td>" +
                "<td>" +
                cinema.genre +
                "</td>" +
                "<td>" +
				cinema.date +
                "</td>" +
                "<td>" +
                 "<tr><td><input type='button' class='show' value='Consult seats' onclick='app.getFunctionsByCinemaAndDate(\""+cinema.name+"\",\""+cinema.date+"\",\""+getSeats+"\")'></input></td><td>"+
                 //"<tr><td><input type='checkbox' name='record'></td><td>" +
                //"<input type='button' class='show' value='Consult seats' onclick='app.getFunctionsByCinemaAndDate(\""+cinema.name+"\",\""+cinema.date+"\",\""+getSeats+"\")'></input>"+
				"</td>" +
                "</tr>" +
				"<tbody>"
            );
        });
    };


	var getFunctionsByCinemaAndDate = function(cinema_name,cinema_date) {
        setCine(cinema_name);
        setDate(cinema_date);
        if (cinema_name != "" && cinema_date != "" ) {
            $('#cinemaname').html(cinema_name);
            api.getFunctionsByCinemaAndDate(cinema_name,cinema_date,table);
            //api.getFunctionsByCinemaAndDate(cinema_name,cinema_date,fun);
            //api.getFunctionsByCinema(cinema_name,fun);
        }
    };
	var getFunctionsByCinemaAndDateAndMovie =  function (cinema_name,cinema_date,cinema_movie) {
        setCine(cinema_name);
        setDate(cinema_date);
        setMovie(cinema_movie);
        if (cinema_name != "" && cinema_date != "" ) {
            $('#cinemaname').html(cinema_name);
            api.getFunctionsByCinemaAndDateAndMovie(cinema_name,cinema_date,cinema_movie,fun);
            //api.getFunctionsByCinemaAndDate(cinema_name,cinema_date,fun);
            //api.getFunctionsByCinema(cinema_name,fun);
        }
    };
    var getFunctionsByCinema =  function (cinema_name) {

    };
    var getSeats =  function (seats) {
        var seat = seats.seats;
        var c = document.getElementById("myCanvas");
        var ctx = a.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(20, 20, 150, 100);
        console.log(seats)

    };
    var fun=function(list){
        console.log(list);
        console.log(cine);
        console.log(date);
        console.log(movie);
    }
     /*api.getFunctionsByCinema("cinemaX",fun);*/
	return {
	    getSeats : getSeats,
	    getFunctionsByCinemaAndDateAndMovie : getFunctionsByCinemaAndDateAndMovie,
		getFunctionsByCinemaAndDate : getFunctionsByCinemaAndDate,
		getFunctionsByCinema :  getFunctionsByCinema,
	};
})();
