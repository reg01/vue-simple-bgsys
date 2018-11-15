import axios from 'axios'

axios.defaults.withCredentials = true

var http = {
    // 登录
    login(params) {
        let url = 'localurl'
        let opts = {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return axios.post(url, params, opts)
    },
    // 注册
    regist(params) {
        let url = 'http://120.79.254.245/shopping/public/index.php/index/index/register'
        let opts = {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return axios.post(url,params,opts)
    },
    // 订单管理：查
    OFindex() {
        let url = 'http://39.108.7.105/chrl/public/index.php/admin/cha/index'
        let opts = {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return axios.get(url, opts)
    },
    // 订单管理：增
    OFadd(params) {
        let url = 'http://39.108.7.105/chrl/public/index.php/admin/cha/add'
        let opts = {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return axios.post(url, params, opts)
    },
    // 订单管理：改
    OFedit(ids,params) {
        let url = `http://39.108.7.105/chrl/public/index.php/admin/cha/edit?ids=${ids}`
        let opts = {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return axios.post(url, params, opts)
    },
    // 订单管理：删
    OFdel(ids) {
        let url = `http://39.108.7.105/chrl/public/index.php/admin/cha/del?ids=${ids}`
        let params = ''
        let opts = {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return axios.post(url, params, opts)
    },

}


export default http
