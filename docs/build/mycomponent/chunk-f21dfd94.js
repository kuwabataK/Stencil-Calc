const h = window.mycomponent.h;

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
/**
 * 文字列をパースして計算します
 *
 * @param input 例: '12+4'
 */
function calc(input) {
    const inputNums = input.split(/\+|\-|\*|\//).map(s => parseInt(s));
    // const inputNums = input.split(/ \+ | \- | \* | \/ /)
    const inputOpe = input.split(/\d+/).filter(s => s !== "");
    if (inputNums == null || inputOpe == null) {
        return 0;
    }
    if (inputNums.length <= 1 || inputOpe.length <= 0) {
        return 0;
    }
    if (inputNums.length - inputOpe.length !== 1) {
        return 0;
    }
    return inputOpe.reduce((acc, cur, index) => {
        return _calc(acc, inputNums[index + 1], cur);
    }, inputNums[0]);
}
function _calc(first, last, ope) {
    switch (ope) {
        case '+':
            return first + last;
        case '-':
            return first - last;
        case '*':
            return first * last;
        case '/':
            return first / last;
    }
}

export { calc as a, format as b };
