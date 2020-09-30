//var api = apimock;
var api = apiclient;
var app = (function (){
    var currentCinema = {
    movie:{
     name: null ,
     genre: null
     },
    seats:[],
    date:null}
	var cine;
	var functions =[];
	var date;
	var hour;
	var movie;

	var _map = function (list){
    	return list.map(function(cinema){
    			return {name:cinema.movie.name, genre:cinema.movie.genre, date: cinema.date.split(" ")[1]}
    	})
    }
    var setCinema = function(cinema){
    	currentCinema = cinema;
    };
	var setCine = function(cinema_name){
		cine = cinema_name;
	};
	var setDate = function(cinema_date){
		date = cinema_date;
	};
	var setMovie = function(cinema_movie){
    	movie = cinema_movie;
    };
    var setHour = function(cinema_hour){
        	hour = cinema_hour;
    };

	function table(cinemas) {
	    cinemas = _map(cinemas);
	    $("#body").html("");
    	cinemas.map(function(cinema) {
    		$('#body')
    			.append(
    			  `<tr>
    				<td>`+cinema.name+`</td>
    				<td>`+cinema.genre+`</td>
    				<td>`+cinema.date+`</td>`+
    				"<td><form><button type='button' class='btn btn-primary' onclick='app.getFunctionsByCinemaAndDateAndMovie( \"" +  cinema.date +'" , "' + cinema.name +"\")'>Open</button></form></td>,"+
    				//<input type='button' class='show' value='Consult seats' onclick='app.getFunctionsByCinemaAndDate(\""+cinema.name+"\",\""+cinema.date+"\",\""+getSeats+"\")'></input>"+
    			  `</tr>`
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
	var getFunctionsByCinemaAndDateAndMovie =  function (cinema_date,cinema_movie) {
	    //console.log("entra");
	    //console.log(cine);
	    //console.log(date+' '+   cinema_date);
	    //console.log(cinema_date);
	    //console.log(cinema_movie);
	    //setCinema(cinema.date);
        console.log(hour);
        console.log(cinema_date);
        setMovie(cinema_movie);
        if (cine != "" && cinema_date != "" ) {
            api.getFunctionsByCinemaAndDateAndMovie(cine,cinema_date,cinema_movie,getSeats);
        }
    };
    var updateAndSave =  function () {
        setHour(date.split(" ")[0]+" "+$("#fhour").val());
       // setDate(date+" "+currentCinema.date);
        console.log(date);
        console.log(movie);
        console.log(hour);

        if (cine != ""){
            api.updateFunction(cine,currentCinema).then(
            function () {
                getFunctionsByCinemaAndDateAndMovie(date,movie);
            })
        }
    };
    var getFunctionsByCinema =  function (cinema_name) {

    };
    var getSeats =  function (func) {
       /* var seats = func.seats;
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");*/
        //console.log(currentCinema);
        setDate(func.date);
       // console.log(date);
        setCinema(func);
        console.log(currentCinema.date);
        console.log(hour);
        if(hour!=null){
            currentCinema.date=hour;
        }
        console.log(currentCinema);
        var dispo = func.seats;
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var y1=40;
        for (x of dispo){
            var x1=0;
            for (y of x){
                if(y==true){
                    ctx.fillStyle = "blue";
                }
                else{ctx.fillStyle = "red";}
                x1+=40;
                ctx.fillRect(x1, y1  ,30, 30);
            }
            y1  +=45;
        }

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
		updateAndSave : updateAndSave,
	};
})();
