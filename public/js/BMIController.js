var BMIController = {

	init: function() {
		BMIController.setForm();
	},

	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			BMIController.calculateBMI(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},

	calculateBMI: function(form) {
		var 
			type = document.getElementById("type").value,
			weightConvertion = 0,
			heightConvertion = 0,
			weight = 0,
			height = 0,
			result = 0;

		if (type == "metric")
		{
			weightConvertion = 1;
			heightConvertion = 0.01;
		}
		else if (type == "standard")
		{
			weightConvertion = 0.453592;
			heightConvertion = 0.3048;
		}

		weight = form.weight.value * weightConvertion;
		height = form.height.value * heightConvertion;
		result = weight / (height * height);

		if (!isNaN(result))
		{
			document.getElementById("result").innerHTML = result.toFixed(2);
		}
		else
		{
			document.getElementById("result").innerHTML = "0.00";
		}
	}
};
//initialization
BMIController.init();