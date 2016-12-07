(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'src/menu/home.template.html'
	})

	.state('categories', {
		url: '/categories',
		templateUrl: 'src/menu/categories/categories.template.html',
		controller: 'CategoriesController as ctrl',
		resolve: {
			categories: ['MenuDataService', function (MenuDataService) {
				return MenuDataService.getAllCategories();
			}]
		}
	})

	.state('items', {
		url: '/categories/{categoryId}',
		templateUrl: 'src/menu/items/items.template.html',
		controller: 'ItemsController as ctrl',
		resolve: {
			items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
				return MenuDataService.getItemsForCategory($stateParams.categoryId);
			}]
		}
	})
}
})();