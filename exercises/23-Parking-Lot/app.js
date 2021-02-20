let parking_state = [
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 2]
]



let spaces = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
}


function getParkingLotState(matrix) {

    for (let y = 0; y < parking_state.length; y++) {
        for (let x = 0; x < parking_state[y].length; x++) {
            if (parking_state[y][x] == 2) {
                spaces.availableSlots++;
                spaces.totalSlots++;
            }
            else if (parking_state[y][x] == 1) {
                spaces.totalSlots++;
                spaces.occupiedSlots++;

            }
            else if (parking_state[y][x] == 0) {

            };
        };

    };
    return spaces;
}


//console.log(parking_state.length);
//console.log(parking_state[2].length);

console.log(getParkingLotState(parking_state));