
export function weakAgainst(championId, enemyChampions) {
    const dataTable = {
        1: [3,  16,  12,  8,  6,  11,  2,  9,  8,  2],
        2: [3,  16,  4],
        3: [16,  13,  14,  11,  10],
        4: [8,  15,  16,  14,  10],
        5: [6,  8,  10],
        6: [5,  13,  11],
        7: [1,  9,  8],
        8: [5,  12,  3],
        9: [1,  4],
        10: [16,  6],
        11:  [16,  13,  14,  11,  10],
        12:  [4,  8,  6,  2],
        13: [1,  9,  8],
        14: [13, 8],
        15: [1,  4],
        16: [9,  1,  13,  12]
    }

    var counter = 0
    dataTable[championId].forEach(c => {
        if (enemyChampions.includes(c)){
            counter +=1
        }
    })
    return counter;
}



