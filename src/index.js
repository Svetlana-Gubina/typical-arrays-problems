exports.min = function min(array) {
    if (arguments.length === 0 || arguments[0].length === 0) {
        return 0;
    }

    let min = 0;
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i]) && array[i] < min) {
            min = array[i];
        }
    }

    return min;
};

exports.max = function max(array) {
    return 0;
};

exports.avg = function avg(array) {
    return 0;
};
