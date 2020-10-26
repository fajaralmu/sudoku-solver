/**
 * 
 * @param {JSON} availableValues 
 * @param {Number} maxSize 
 * @param {Array} exclude 
 */
function getKeyForMinValues(availableValues, maxSize, exclude = []){
    let min = maxSize;
    let _ret = 0;
    for (const key in availableValues) {
        if (availableValues.hasOwnProperty(key)) {
            const element = availableValues[key];
            if(element <= min && element > 0 && exclude.indexOf(key) == -1){
                _ret = key
                min = element;
            }
        } 
    }
    return _ret;
}