'use strict';

/* Controllers */

angular.module('mc.controllers', [])
  .controller('Calculator', ['$scope', function($scope) {
    $scope.calcTarget = 'tot'; //cog | cos | tot
    
    
    $scope.coreProps = {
      cog: 100,
      cos: 10,
      slp: 200
    };
    
    
    $scope.calcProps = {
      tot: {
        val: 0,
        calc: function() {
          this.val = $scope.coreProps.cog + $scope.coreProps.cos;
        },
        onChange: function() {
          $scope.coreProps.cos = $scope.coreProps.cog - this.val;
        }
      },
      mgd: {
        val: 0,
        calc: function() {
          this.val = $scope.coreProps.slp - $scope.calcProps.tot.val;
        },
        onChange: function() {
        }
      },
      mgp: {
        val: 0,
        calc: function() {
          this.val = $scope.calcProps.mgd.val / $scope.coreProps.slp;
        },
        onChange: function() {
        }
      },
      mkp: {
        val: 0,
        calc: function() {
          this.val = $scope.coreProps.slp / $scope.calcProps.tot.val - 1;
        },
        onChange: function() {
        }
      }
    }
    
    $scope.updateCalcProps = function() {
      var props = ['tot', 'mgd', 'mgp', 'mkp'];
      for (var i = 0; i < props.length; i++) {
        $scope.calcProps[props[i]].calc(false);
      }
    };
    
    $scope.init = function() {
      $scope.updateCalcProps();
    }
    
    $scope.init();
    
  }])
  .controller('Settings', [function() {

  }]);
