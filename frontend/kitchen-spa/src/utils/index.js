export function trimListSpace(lst) {
    var cpy = lst.split(',');
    var res = []
    for (var ele of cpy) {
        var ele_trim = ele.trim();
        if (ele_trim.length == 0) {
            continue;
        }
        res.push(ele.trim());
    }
    return res;
}

export function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}