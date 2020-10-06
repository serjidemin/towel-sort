
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined) {
        return [];
    }
    let arr = [];
    matrix.forEach(function(item, i) {
        if (i > 0 && i % 2 != 0) {
            arr.push(item.reverse());
        } else {
            arr.push(item);
        }
    });
    return arr.flat();
}
