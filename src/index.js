module.exports = function groupBy(cb = (cb) => cb) {
    const pre = this.map((d, i) => new Object( {[cb(d)]: d} ));
    let result = new Set();
    for (let i = 0; i < pre.length; i++) {
      result.add(Number(Object.keys(pre[i])));
    }

    let obj = Object.create(null);
    for (let item of result) {
      obj[item] = pre.filter(d => d.hasOwnProperty(item)).map(d => d[item]);
    }
    return obj;
}
