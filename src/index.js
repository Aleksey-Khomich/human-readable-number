module.exports = function toReadable (number) {
    const a = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const b = ['', '','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    if ((number = number.toString()).length > 9) return 'overflow';
    let n = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    let str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + a[n[1][1]]) + ' crore' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + a[n[2][1]]) + ' lakh' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + a[n[3][1]]) + ' thousand' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + a[n[4][1]]) + ' hundred' : '';
    if (n[5] !== '00') {
            if (str == '') {
                str += (a[Number(n[5])] || b[n[5][0]]);
                if (b[n[5][0]]) {
                    if (n[5][1] == '0') return str;
                    str += ' ' + a[n[5][1]];
                    return str;
                }
                if (a[Number(n[5])]) return str;
            }
            else if (str != '') {
                str += ' ' + (a[Number(n[5])] || b[n[5][0]]);
                if (a[Number(n[5])]) return str;
                else if (n[5][1] !== '0') {
                    str += ' ' + a[n[5][1]];
                }
            }
        }
        else if (n[4] == '0') {
            str += a[n[4][0]];
        }
    /* str += (n[5] != 0) ? (str != '' ? (a[Number(n[5])] || b[n[5][0]]) : n[5][1] !== '0' ? ' ' + a[n[5][1]] : '') : ''; */
    return str;
}
