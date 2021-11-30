export function synergyWith(championId, selectedChampions) {

    // La tabla representa, dado el id de tu campion, con que campeones tienes sinergia, de los seleccionados.
    const dataTable = {
        1: [13,  4,  9,  7,  5],
        2: [1,  6,  16,  7],
        3: [16,  10,  6,  5],
        4: [12,  16,  13],
        5: [2,  10],
        6: [12,  11,  3],
        7: [14,  7],
        8: [13,  1],
        9: [1,  4],
        10: [16,  6],
        11:  [12,  15,  4],
        12:  [4,  8,  6,  2],
        13: [13,  9,  4,  1,  11],
        14: [13, 8],
        15: [16,  9,  4,  11,  15, 3,  6,  2],
        16: [9,  1,  13,  12]
    }

    var counter = 1;
    dataTable[championId].forEach(c => {
        if (selectedChampions.includes(c)) {
            counter += 1;
        }
    })

    return counter;
}