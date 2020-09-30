apiclient= (function () {
            var url = "http://localhost:8081/cinemas"
            var  getFunctionsByCinemaAndDate = function(cinema_name,cinema_date,callback){
                $.getJSON(url+"/"+cinema_name+"/"+cinema_date,(data)=>{
                    callback(data);
                },null)
            };
            var  getFunctionsByCinemaAndDateAndMovie = function(cine,cinema_date,cinema_movie,callback){
               $.getJSON(url+"/"+cine+"/"+cinema_date+"/"+cinema_movie,(data)=>{
                  // console.log(cine);
                  // console.log(cinema_date);
                  // console.log(cinema_movie);
                  // console.log(data);
                   callback(data);
               },null)
            };
            var updateFunction= function (cinema_name,Function) {
                //console.log(Function);
                var put=$.ajax({
                    url:url+"/"+cinema_name,
                    type:'PUT',
                    data:JSON.stringify(Function),
                    contentType: "application/json",
                });
                return put;
            }
            var createFunction = function (cinema_name,Function){
                var create = $.ajax({
                    url:url+"/"+cinema_name,
                    type: 'POST',
                    data: JSON.stringify(Function),
                    contentType: "application/json",
                });
                return create;
            }
            var deleteFunction= function(cinemaName,Function){
                var deleteF = $.ajax({
                    url:url+"/"+cinema_name,
                    type: 'DELETE',
                    data: JSON.stringify(Function),
                    contentType: "application/json",
                });
                return deleteF;
            }
            return {
                getFunctionsByCinemaAndDate:getFunctionsByCinemaAndDate,
                getFunctionsByCinemaAndDateAndMovie:getFunctionsByCinemaAndDateAndMovie,
                updateFunction:updateFunction,
                createFunction:createFunction,
                deleteFunction:deleteFunction,
            }

 })();