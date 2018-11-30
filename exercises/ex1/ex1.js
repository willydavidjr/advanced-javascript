(function(){

		//A();

		function C() {
			console.log("OOPS!");
		}

		function E(f) {
			console.log("E");
			f();
			var f = F;
		}

		function A() {
			console.log("A");
			B();
		};

		var C;

		function G() {
			console.log("G");
			H();

			var H = function() {
				console.log("H");
				I();
			};
		}

		var D = d; //This will not be executed if the A is run at the beginning before of function expression

		//Put this expression above before A() if you want to call this during A() execution
		function d() {
			console.log("D");
			E();
		}

		function I() {
			console.log("I");
			J();
			J();
		}

		function B() {
			console.log("B");
			C();
		};

		var F = function() {
			console.log("F");
			G();
		};

		var rest = "KLMNOPQRSTUVWXYZ".split("");
		for (var i=0; i<rest.length; i++) {
			(function(i){
				// define the current function
				window[rest[i]] = function() {
					console.log(rest[i]);
					if (i < (rest.length-1)) {
						// TODO: call the next function
					}
				};
			})(i);
		}

		var J = function() {
			J = function() {
				console.log("J");
				K();
			};
		};

		function C() {
			console.log("C");
			D();
		};

		return A;

})()();