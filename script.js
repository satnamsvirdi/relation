(function () {
	"use strict";
	window.addEventListener(
		"load",
		function () {
			var forms = document.getElementsByClassName("needs-validation");
			var validation = Array.prototype.filter.call(forms, function (
				form
			) {
				form.addEventListener(
					"submit",
					function (event) {
						if (form.checkValidity() === false) {
							event.preventDefault();
							event.stopPropagation();
						}
						form.classList.add("was-validated");
						if (form.checkValidity() === true) {
							if (form.dataset.formType === "login") {
								alert(
									`Congratulations! You are successfully signed in.`
								);
							}
							if (form.dataset.formType === "newsletter") {
								alert(
									`Congratulations! You are successfully subscribed to our newsletter!`
								);
							}
							event.preventDefault();
							form.reset();
							form.classList.remove("was-validated");
						}
					},
					false
				);
			});
		},
		false
	);
})();
