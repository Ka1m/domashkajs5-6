let buyMenu = receipt()
let drop = 'Bы заказали '
let cost =9000
for (let key in buyMenu) {
    drop=drop+`${key} `
    for ( nKey in buyMenu[key]) {
    drop = nKey=='info'? drop+`${buyMenu[key][nKey]}, `:drop+'';
    cost = nKey == 'price'?cost +buyMenu[key][nKey] :cost;
    }
}

console.log(`${drop} | Общая стоимость ${cost} сумм с доставкой (9000)` );


