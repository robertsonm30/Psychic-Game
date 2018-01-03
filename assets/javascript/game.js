		var win = 0;
		var loss = 0;
		var gleft = 9;


		var pcchoice = [ 

			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z"

		];

		var word = pcchoice[Math.floor(Math.random()*pcchoice.length)];

		console.log(word)

		var key = "";

		document.addEventListener("keypress", userkeypress, false);




		function userkeypress(event) 
		{
			key = String.fromCharCode(event.charCode);

			console.log(key)
			
			if (key == word )
			{
				console.log("match");
				win++
				console.log(win)
			} 
			else if (key != word) 
			{
				gleft--
				document.getElementById("guessed").innerHTML = key;
				console.log("guessleft" +gleft)

				if  (gleft == 0)
				{

				loss++
				console.log("losses" + loss)

				}

			} 

		document.getElementById("wintracker").innerHTML = win;
		document.getElementById("losstracker").innerHTML = loss;
		document.getElementById("guesstracker").innerHTML = gleft;
		}




 



