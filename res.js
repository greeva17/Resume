var app = angular.module('myApp', []);
        var imgs=['1','2','3','4'];
        var i = 0;
        var qualifi = [ {
          qual : 'H.S.C',
          board : "GSEB",
          school : "Advait Vidhyaniketan",
          year : 2017,
          perc : 91,
          }, {
          qual : 'S.S.C',
          board : "CBSE",
          school : "Shree Swaminarayan School",
          year : 2015,
          perc : 10,
          }];
          var res = [ {
            sem : 1,
            spi : 9.59,
            cpi : 9.59,
            }, {
              sem : 2,
            spi : 9.59,
            cpi : 9.59,
            }, {
              sem : 3,
            spi : 9.00,
            cpi : 9.39,
            }, {
              sem : 4,
            spi : 9.00,
            cpi : 9.30,
            }];
        app.controller('myCtrl', function($scope) {
            $scope.x = imgs[0];
            $scope.y = qualifi[0];
            $scope.z = res[0];
            $scope.change = function(){
                $scope.x = imgs[i % 4]; 
                i++;
            }
            $scope.changeq = function(x){
              if(x == '1'){
                //alert(qualifi[0].qual);
                $scope.y = qualifi[0];
              }
              else{
                //alert(qualifi[1].qual);
                $scope.y = qualifi[1];
              }
            }
            $scope.changes = function(x){
              if(x == '1'){
                $scope.z = res[0];
              }
              else if(x == '2'){
                $scope.z = res[1];
              }
              else if(x == '3'){
                $scope.z = res[2];
              }
              else{
                $scope.z = res[3];
              }
        }
          
        });