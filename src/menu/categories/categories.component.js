(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
	templateUrl: 'src/menu/categories/categorieslist.template.html',
	bindings: {
		categories: '<'
	}
});

})();