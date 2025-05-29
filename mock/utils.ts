/** 获取当前时间 */
export const getCurrentDate = () => {
    const d = new Date()
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
}

/** 生成随机 token 值 */
export function genRandomToken() {
    var chars = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ]
    var token = ''
    const splitIndex = [8, 13, 17, 22]
    for (var i = 0; i < 35; i++) {
        if (splitIndex.includes(i)) token += '-'
        else {
            const ri = Math.floor(Math.random() * chars.length)
            token += chars[ri]
        }
    }
    return token
}
