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
    if (arguments.length === 0 || arguments[0].length === 0) {
        return 0;
    }

    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i]) && array[i] > max) {
            max = array[i];
        }
    }
    return max;
};

exports.avg = function avg(array) {
    if (arguments.length === 0 || arguments[0].length === 0) {
        return 0;
    }

    let sum = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    let avg = sum / array.length;

    return avg;
};
