app.directive("ngHeader",function(){
    return{
        link: function(scope,element,attributes){
            scope.toggleBool = false;
            scope.toggleMenu = function(){
              scope.toggleBool = scope.toggleBool == false ? true : false;
                console.log(scope.toggleBool);
            };
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

            scope.toggleMenu = function(){
                scope.toggleBool = scope.toggleBool == false ? true : false;
                console.log(scope.toggleBool);
            };
            scope.addPopup = function(index){
                switch (index){
                    case(index = 0):
                        scope.visiblePopupPrice = true;
                        break;
                    case (index = 1):
                        scope.visiblePopupMark = true;
                        break;
                }
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
            };
            /*debugger;*/
            scope.addCarMoney = function(money){
                scope.menu[0].Title = "Цена до " + money + "$";
                for(var i=0;i<scope.menu.length;i++){
                    scope.menu[i].selected = false;
                }
                scope.menu[0].selected = true;
            };
            scope.addCarSearch = function(nameCar){
                scope.menu[1].Title = nameCar;
                for(var i=0;i<scope.menu.length;i++){
                    scope.menu[i].selected = false;
                }
                scope.menu[1].selected = true;
            };
            scope.removeItem = function(){
/*                for(var i in scope.menu){
                    scope.y = scope.menu[i];
                    console.log(scope.y.Title[i]);
                    scope.menu.Title = scope.y;
                    debugger;
                };*/
                scope.menu[0].Title = "Цена до 100 000$";
                for(var i =0;i<scope.menu.length;i++){
                    scope.menu[i].selected = false;
                }
                scope.menu[1].Title = "Любая марка";
                console.log(scope.menu.Title)
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
            scope.arrMoney = [1000,3000,5000,10000,50000]
        },
        restrict: "A",
        templateUrl: "popover.html"
    }
});