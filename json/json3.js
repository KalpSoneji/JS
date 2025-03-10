let house = {
    flat: {
        type1: { RK: ['1 Room', '1 Kitchen'], },
        type2: { BH: ['1 Bedroom', '1 Combined Hall and Kitchen'] },
        type3: { BHK: ['1 Bedroom', '1 Hall', '1 Kitchen'], },
        type4: { WBHK: ['1 Bedroom', '1 Verandah', '1 Hall', '1 Kitchen'] }
    },
    bungalow: {
        floor0: {
            parking: ['car', 'bike'],
            entrance: ['front', 'back', 'secret']
        },
        floor1: {
            gym: 'bodybuilding',
            sports: 'table tennis',
            room: 'guest',
            bathroom: 'common'
        },
        floor2: {
            bedrooms: ['master', 'children', 'study'],
            hall: 'wooden',
            kitchen: 'modular'
        },
        floor3: {
            room: 'storage',
            attic: 'ventilation',
            terrace: 'open'
        }
    }
}

console.log(house);
