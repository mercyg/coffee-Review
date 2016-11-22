var app = angular.module("myApp")

app.service("HomeService",["$http", function($http){
    this.getAllReview = function(){
        return $http.get("/coffees")
            .then(function(response){
                return response.data;
        })
    }
    
    this.updateRating = function(review){
        return $http.put("/coffees/" + review._id + "/rating", review)
            .then(function(response){
               console.log(response);
                 return response.data;
        })
    }
    
     this.creatReview = function(input){
        // console.log("Service" + input)
        return $http.post("/coffees/", input)
            .then(function(response){
                //console.log(response)
                return response.data;
        })
    }
    
    
}])




//
//app.service("AboutService", ["$http", function($http){
//   
//    
//    
//}])