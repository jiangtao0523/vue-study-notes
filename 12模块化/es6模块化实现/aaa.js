var name = 'jiangtao'
var flag = true

function sum(a,b) {
    return a + b
}

export {
    flag,
    sum
}

export var one = 1


/*
    note:
        1. export {}
        2. export default {}
        3. export 变量名 = 值

        通过第一种方式导出可以写多个  第二种方式只能有一个默认导出
        要导入第一种方式导出的对象,需要取名和导出一样     使用第二种方式可以自定义变量名称
 */