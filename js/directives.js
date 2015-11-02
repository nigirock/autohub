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
            scope.visiblePopupMark = false;
            scope.visiblePopupPrice = false;
            scope.defaultLeftMenu =["Цена до 100 000$","Любая марка","Любая модель","Не старше 2008 года","Любой тип топлива","Объем не менее 1.0","Любая коробка передач","пробег до 200 000 км"];
            scope.addPopup = function(index){
                switch (index){
                    case(index = 0):
                        scope.visiblePopupPrice = true;
                        break;
                    case (index = 1):
                        scope.visiblePopupMark = true;
                        break;
                }
                console.log(scope.visiblePopupPrice);
            };
            scope.addPopupLeave = function(index){
                switch (index){
                    case(index = 0):
                        scope.visiblePopupPrice = false;
                        break;
                    case (index = 1):
                        scope.visiblePopupMark = false;
                        break;
                }
                console.log(scope.visiblePopupPrice);
            };

            scope.addCarSearch = function(nameCar){
                scope.defaultLeftMenu[1] = nameCar;
            };
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
app.directive("ngPopover",function(){
    return{
        link: function(scope,element,attributes){

        },
        restrict: "A",
        templateUrl: "popover.html"
    }
});