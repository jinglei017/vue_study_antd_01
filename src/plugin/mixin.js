import axios from './utils/request.js'
export default options => {
    return {
        data() {
            return {}
        },
        methods: {
            $get(url, params) {
                console.log("get请求了")
                let pro = axios.get(url, { params })
                pro.catch(() => {
                    this.$me('系统出现预期外错误！')
                })
                return pro
            },
            $post(url, params) {
                console.log("post请求了")
                let pro = axios.post(url, params)
                pro.catch(() => {
                    this.$me('系统出现预期外错误！')
                })
                return pro
            },
            $ms(content, onClose, duration = 1) {
                return this.$message.success(content, duration, onClose);
            },
            $mc(content, onOK) {
                this.$confirm({
                    title: "系统提示",
                    content: content,
                    okText: "确定",
                    cancelText: "取消",
                    onOk: onOK,
                });
            },
            $me(content, onClose, duration = 2) {
                return this.$message.error(content, duration, onClose);
            },
            $mw(content, onClose, duration = 2) {
                return this.$message.warning(content, duration, onClose);
            }
        }
    }
}