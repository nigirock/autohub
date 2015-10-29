app.directive("ngHeader",function(){
    return{
        link: function(scope,element,attributes){
        },
        restrict: "A",
        templateUrl: "header.html"
    }
});
app.directive("ngLeftMenu",function(){
    return{
        link: function(scope,element,attributes){
        },
        restrict: "A",
        templateUrl: "left_menu.html"
    }
});
app.directive("ngCatalog",function(){
    return{
        link: function(scope,element,attributes){

        },
        restrict: "A",
        templateUrl: "catalog.html"
    }
});
app.directive("ngFooter",function(){
    return{
        link: function(scope,element,attributes){

        },
        restrict: "A",
        templateUrl: "footer.html"
    }
});