app.directive("ngHeader",function(){
    return{
        link: function(scope,element,attributes){
            console.log(scope);
            console.log(element);
            console.log(attributes)
        },
        restrict: "A",
        templateUrl: "header.html"
    }
});
