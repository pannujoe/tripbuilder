"use strict";

angular.module("psFramework").controller("psFrameworkController", function(){
	['$scope',
		function($scope, $rootScope, $window, $timeout){

			$scope.isMenuVisible = true;
			$scope.isMenuButtonVisible = true;

			$scope.$on('ps-menu-item-selected-event', function (evt, data) {
				$scope.routeString = data.route;
			});

			$($window).on('resize.psFramework', function () {
				$scope.$apply(function () {
					checkWidth();
				});
			});
			$scope.$on("$destroy", function () {
				$($window).off("resize.psFramework");
			});

			var checkWidth = function () {
				var width = Math.max($($window).width(), $window.innerWidth);
				$scope.isMenuButtonVisible = (width >= 768);
				$scope.isMenuButtonVisible = !$scope.isMenuVisible;
			};

			$scope.menuButtonClicked = function () {
				$scope.isMenuVisible = !scope.isMenuVisible;
				broadcastMenuState();
				$scope.$apply();
			}

			$timeout ( function () {
				checkWidth();
			}, 0);
		}

]});

