var app = angular.module("myApp")

app.controller("homeController", ["$scope", "HomeService",function($scope,HomeService){
    $scope.getAllReview = function(){
        HomeService.getAllReview()
            .then(function(coffeeReviews){
                $scope.review = coffeeReviews;
        })
    }
    
    $scope.updateRating = function(newRating, index){
        var review = $scope.review[index];
        review.allRating.push(newRating);
        var rate = parseInt(newRating)
        console.log(newRating)
        HomeService.updateRating(review)
            .then(function(response){
            
           // console.log(response);
        })
        HomeService.getAllReview()
            .then(function(review){
                $scope.review = review;
        })
    }
    
     $scope.creatReview = function(input){
         //console.log( "controller: " + input)
        HomeService.creatReview(input)
            .then(function(response){
            //console.log(response)
               // $scope.review.push(response)
        })
    }
    
function init(){
    $scope.getAllReview();
}
init()
    
}])

//app.controller("aboutController", ["$scope", "AboutService", function($scope, AboutService){
//   
//}]);