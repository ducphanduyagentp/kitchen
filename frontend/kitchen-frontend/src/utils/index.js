import Vue from 'vue'

export const EventBus = new Vue();

export function isValidJwt(jwt) {
  if (!jwt || jwt.split('.').length < 3) {
    return false
  }
  const data = JSON.parse(atob(jwt.split('.')[1]))
  const exp = new Date(data.exp * 1000) // JS deals with dates in milliseconds since epoch
  const now = new Date()
  return now < exp
}

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