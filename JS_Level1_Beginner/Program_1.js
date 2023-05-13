

let i;
	for (i=1; i<=100; i++)
	{

	document.writeln('<br>' +FizzBuzz(i)+ '</br>');

	}

	function FizzBuzz(i){
		var value='';

		if(i%3==0){
		   value=value+'Fizz';

		}

		if(i%5==0){
			value=value+'Buzz';
		}

		if(value==''){
			return i;
		}

		return value;
		
}

