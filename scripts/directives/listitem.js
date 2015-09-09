todoapp.directive('myListitem', ['localStorageService' ,function (localStorageService) {
	return {
		restrict: 'E'
		,templateUrl: "../../scripts/templates/listitem.html"
		,scope: false
		,link: function (scope, element, attrs) {
			angular.element(element.find("form")).hide();

			element.find("button.edit_item").on("click", function () {
				$button = angular.element(element.find("button")); $button.hide();

				$span = angular.element(element.find("span")); $span.hide();

				$form = angular.element(element.find("form")); $form.show();
				angular.element($form.find("input")).focus();

				angular.element(element.find("li")).addClass("focus");
			})

			var editItem = function () {
				if($form.find("input").val() == "" || $form.find("input").val() == null){
					alert("Empty item!");
					return;
				}

				$button = angular.element(element.find("button")); $button.show();
				$span = angular.element(element.find("span")); $span.show();
				$form = element.find("form"); $form.hide();
				angular.element($form.find("input")).focus();

				scope.list[scope.$index] = $form.find("input").val();
				localStorageService.set("item1", scope.list);

				element.find("span").html($form.find("input").val());
				angular.element(element.find("li")).removeClass("focus");
			};

			element.find("form").on("submit", editItem);

			element.find("input").on("blur", editItem);

			return;
		}
	}
}])