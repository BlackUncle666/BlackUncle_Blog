let canPlaceFlowers = function(flowerbed, n) {
    let result = 0, count = 0;
    flowerbed.push(0);
    flowerbed.unshift(0);
    for (let i = 1, len = flowerbed.length; i < len; i++) {
        if (
            flowerbed[i-1] === 0 && 
            flowerbed[i] === 0 && 
            flowerbed[i+1] === 0
        ) {
            flowerbed[i] = 1;
            result++;
        }
    }
    return result >= n ? true : false;
};
canPlaceFlowers([1,0,0,0,1],1)