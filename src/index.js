exports.min = function min(array) {
    if (!arguments[0] || array.length === 0) {
        return 0;
    } else {
        array.sort((a, b) => a - b);
        return array[0];
    }
};

exports.max = function max(array) {
    if (!arguments[0] || array.length === 0) {
        return 0;
    } else {
        array.sort((a, b) => a - b);
        return array[array.length - 1];
    }
};

exports.avg = function avg(array) {
    if (!arguments[0] || array.length === 0) {
        return 0;
    } else {
        return array.reduce((sum, current) => sum + current, 0) / array.length;
    }
};
