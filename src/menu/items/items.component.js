(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
	templateUrl: 'src/menu/items/itemslist.template.html',
	bindings: {
		items: '<'
	}
});

})();