app.controller ('filterFormController', function($scope, Data){
	//initialize hosting object
	$scope.hosting = {};

	$scope.hostingTypes = Data.getHostingTypes();
	$scope.hosting.type = $scope.hostingTypes[0];
	console.log($scope.hosting.type);


	$scope.hosting.budget = {
		min: 5,
		max: 20,
		options: {
			floor: 0,
			ceil: 200,
			translate: function(value) {
				return '$' + value;
			}
		}
	};

	$scope.hosting.bandwidth = {
		min: 10,
		options: {
			floor: 1,
			ceil: 1000
		}
	};

	$scope.hosting.diskSpace = {
		min: 10,
		options: {
			floor: 1,
			ceil: 300
		}
	};

	$scope.hosting.numberOfWebsites = {
		min: 1,
		options: {
			floor: 1,
			ceil: 10
		}
	};

	$scope.hosting.ram = {
		min: 1,
		options: {
			floor: 0,
			stepsArray: [256, 512, 1, 2, 4, 8, 16],
		}
	};
	watchRam();

	$scope.hosting.cpu = {
		min: 2,
		options: {
			floor: 1,
			ceil: 8
		}
	};

	function watchRam() {
		$scope.$watch('hosting.ram.min', function() {
			switch ($scope.hosting.ram.min) {
				case 0:
					$scope.hosting.ram.final = 256;
					break;

				case 1:
					$scope.hosting.ram.final = 512;
					break;

				case 2:
					$scope.hosting.ram.final = 1;
					break;

				case 3:
					$scope.hosting.ram.final = 2;
					break;

				case 4:
					$scope.hosting.ram.final = 4;
					break;

				case 5:
					$scope.hosting.ram.final = 8;
					break;

				case 6:
					$scope.hosting.ram.final = 16;
					break;
			}
		});
	}
});