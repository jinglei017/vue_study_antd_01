import {get, post } from '@/plugin/utils/request'

export let getUserList = () => get("http://mock/userlist")
export let loginMsg = loginInfo => post("http://mock/adminlogin", loginInfo)
export let delItem = id => post("http://mock/delUser", id)
export let addUser = userInfo => post("http://mock/saveUser", userInfo)