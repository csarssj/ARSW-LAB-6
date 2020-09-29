apiclient= (function () {
            var url = "http://localhost:8080/cinemas"
            var  getFunctionsByCinemaAndDate = function(cinema_name,cinema_date,callback){
                $.getJSON(url+"/"+cinema_name+"/"+cinema_date,(data)=>{
                    callback(data);
                },null)
            };
            var  getFunctionsByCinemaAndDateAndMovie = function(cine,cinema_date,cinema_movie,callback){
               $.getJSON(url+"/"+cine+"/"+"/"+cinema_date+"/"+cinema_movie,(data)=>{
                  // console.log(cine);
                  // console.log(cinema_date);
                  // console.log(cinema_movie);
                  // console.log(data);
                   callback(data);
               },null)
            };
            var updateFunction= function (Function) {
                var put=$.ajax({
                    url:url+"/"+Function.name,
                    type:'PUT',
                    data:JSON.stringify(Function),
                    contentType: "application/json",
                });
                return put;
            }
            return {
                getFunctionsByCinemaAndDate:getFunctionsByCinemaAndDate,
                getFunctionsByCinemaAndDateAndMovie:getFunctionsByCinemaAndDateAndMovie,
                updateFunction:updateFunction
            }

 })();