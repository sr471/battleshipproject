// sets grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;

// gets the container element
var gameBoardContainer = document.getElementById("gameboard");

// you can use this to convert your letters into numbers for use
// with the 2D array
var letterConversion = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9
}

	var letterArray = ["A","B","C","D","E","F","G","H","I","J"];

// makes the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;
		square.className = "boardSquare";

		// THIS IS WHERE YOU WILL ADD CODE FOR PART 1 TO ADD TEXT TO EACH SQUARE
			square.textContent = letterArray[j] + (i + 1);
		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}

// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

				var shipsHit = 0;

	function fireTorpedo()
	{	var gameOver = false;
			// Your game logic will go here!
		var userInput = $("#Input").val();
		var rowInput = userInput.substring(0,1)
		var columnInput = userInput.substring(1,3)

		var rowNumber = letterConversion[rowInput];
		var columnNumber = columnInput - 1;
		var coordinates = "s" + rowNumber + columnNumber;
		var battleShip = gameBoard[rowNumber][columnNumber];

		if (battleShip == 1)
		{
		$("#" + coordinates).css("background-color", "DeepPink");
				shipsHit += 1;
		}
		else {
			$("#" + coordinates).css("background-color", "indigo");
		}

		console.log(coordinates);

		if(shipsHit == 17){
			gameOver = true;
		}

		if(gameOver){
			$("#instructions").text("YOU SUNK All MY BATTLESHIPS!!!");
			$("#inputBox").fadeOut();
		}
}
