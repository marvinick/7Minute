angular.module("7minWorkout").controller("WorkoutController", ['$scope', '$interval',
	function($scope, $interval) {

		function WorkoutPlan(args) {
        this.exercises = [];
        this.name = args.name;
        this.title = args.title;
        this.restBetweenExercise = args.restBetweenExercise;
    };

		function Exercise(args) {
        this.name = args.name;
        this.title = args.title;
        this.description = args.description;
        this.instructions = args.instructions;
        this.image = args.image;
        this.related = {};
        this.related.videos = args.videos;
        this.related.variations = args.variations;
        this.nameSound = args.Sound;
    };

		var restExercise;
	 	var workoutPlan;

	 	var createWorkout = function() {
	 		var workout = new WorkoutPlan({
	 			name: "7MinWorkout",
	 			title: " 7 Minute Workout",
	 			restBetweenExercise: 10
	 		});

	 		workout.exercises.push({
	 			details: new Exercise({
	 				name: "jumpingJacks",
	 				title: "Jumping Jacks",
	 				description: "Jumping Jacks",
	 				image: "img/JumpingJacks.png",
	 				videos: [],
	 				variations: [],
	 				procedure: ""
	 			});
	 			duration: 30
	 		});
	 		// (TRUNCATED) Other 11 workout exercises data
	 		return workout;
	 	}

	 	var startExercise = function (exercisePlan) {
	 		$scope.currentExercise = exercisePlan;
	 		$scope.currentExerciseDuration = 0;
	 		$interval(function() {
	 			++$scope.currentExerciseDuration;
	 		}
	 		, 1000
	 		, $scope.currentExercise.duration);
	 	};

		var startWorkout = function() {
			workoutPlan = createWorkout();
			restExercise = {
				details: new Exercise({
					name: "rest",
					title: "Relax!",
					description: "Relax a bit!",
					image: "img/rest.png"
				}),
				duration: workoutPlan.restBetweenExercise
			};
			startExercise(workoutPlan.exercises.shift());
		};	 	

	 	var init = function() {
	 		startWorkout();
	 	};
	 	init();
	}
}]);