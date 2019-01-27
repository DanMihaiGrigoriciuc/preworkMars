// Rover Object Goes Here
// ======================

// ======================

var rover1 = {
	direction: 'N',
	x: 0,
	y: 0,
	travelLog: [{ x: 0, y: 0 }],
};

var board = [
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
];

console.log(board);

function turnLeft(rover) {
	console.log('turnLeft was called!');

	switch (rover.direction) {
		case 'N':
			rover.direction = 'W';
			break;
		case 'W':
			rover.direction = 'S';
			break;
		case 'S':
			rover.direction = 'E';
			break;
		case 'E':
			rover.direction = 'N';
			break;
	}

	console.log(rover);
}

function turnRight(rover) {
	console.log('turnRight was called!');
	switch (rover.direction) {
		case 'N':
			rover.direction = 'E';
			break;
		case 'E':
			rover.direction = 'S';
			break;
		case 'S':
			rover.direction = 'W';
			break;
		case 'W':
			rover.direction = 'N';
			break;
	}

	console.log(rover);
}

function moveForward(rover) {
	console.log('moveForward was called');
	switch (rover.direction) {
		case 'N':
			if (rover.y - 1 > 0 && rover.y - 1 < 10) {
				rover.y = rover.y - 1;
			} else {
				console.log('Overflow...');
			}
			break;
    case 'S':
    if (rover.y + 1 > 0 && rover.y + 1 < 10){
      rover.y = rover.y + 1;
    }else{
      console.log('Overflow...');
    }
			break;
    case 'E':
    if (rover.x + 1 > 0 && rover.x + 1 < 10){
      rover.x++;
    }else{
      console.log('Overflow...');
    }
			break;
    case 'w':
    if (rover.x - 1 > 0 && rover.x - 1 < 10){
      rover.x -= 1;
    }else{
      console.log('Overflow...');
    }
			break;
	}
	console.log(rover);
}

function drive(rover, move) {
	for (var i = 0; i < move.length; i++) {
		if (move[i] == 'r') {
			turnRight(rover);
		} else if (move[i] == 'l') {
			turnLeft(rover);
		} else if (move[i] == 'f') {
			moveForward(rover);
			rover.travelLog.push({ x: rover.x, y: rover.y });
		}else{
      console.log("Wrong mesage");
    }
	}
	console.log(rover.travelLog);
}

drive(rover1, 'rffrfflfrff');
