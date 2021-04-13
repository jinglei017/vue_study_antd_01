import Mock from 'mockjs' // 引入mockjs

let logindata = {
    "username": "admin",
    "password": "123",
    "success": true
}

let userlist = [{
        "key": "1",
        "id": "1",
        "name": "小黄",
        "age": 32,
        "address": "0",
        "createtime": new Date()
    },
    {
        "key": "2",
        "id": "2",
        "name": "小绿",
        "age": 42,
        "address": "1",
        "createtime": new Date()
    },
    {
        "key": "3",
        "id": "3",
        "name": "小驴",
        "age": 32,
        "address": "1",
        "createtime": new Date()
    }
]
let count = 1

Mock.mock('http://mock/adminlogin', 'post', (options) => {
    var params = JSON.parse(options.body)
    if (params.username == logindata.username && params.password == logindata.password) {
        return Mock.mock(logindata)
    } else {
        return { "success": false }
    }
})
Mock.mock('http://mock/userlist', 'get', { userlist, count })
Mock.mock('http://mock/delUser', 'post', (options) => {
    var params = JSON.parse(options.body)
    var find = false
    for (var i = 0; i < userlist.length; i++) {
        if (params.id == userlist[i].id) {
            find = true;
            userlist.splice(i, 1);
            var result = {
                list: userlist,
                success: true
            }
            return Mock.mock(result)
        }
    }
    if (!find) {
        return Mock.mock({ success: false })
    }
})
Mock.mock('http://mock/saveUser', 'post', (options) => {
    var params = JSON.parse(options.body)
    console.log(params)
    var item = {
        "key": (userlist.length + 1).toString(),
        "id": (userlist.length + 1).toString(),
        "name": params.name,
        "age": params.age,
        "address": params.address,
        "createtime": new Date()
    }
    userlist.push(item);
    return Mock.mock({ success: true })
})