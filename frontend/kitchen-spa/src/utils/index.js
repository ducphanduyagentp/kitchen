export function trimListSpace(lst) {
    var cpy = lst.split(',');
    var res = []
    for (var ele of cpy) {
        res.push(ele.trim());
    }
    return res;
}