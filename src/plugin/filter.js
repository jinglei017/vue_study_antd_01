export default {
    fmtEmployeeAddress(val) {
        return ['Hangzhou', 'Shanghai'][val]
    },
    fmtTime(val) {
        var d = new Date(val);
        return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    }
}