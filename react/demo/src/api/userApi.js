import axios from "axios";
class UserApi {
    static addUsers(data) {
        console.log("call back response")
        return new Promise((resolve, reject) => {
            axios.post("http://localhost:5000/addLists", data).then((response) => {
                console.log("call back response", response)
                resolve(response)
            })
        })
    }
    static loadUserLists() {
        console.log("hello from UserApi")
        return new Promise((resolve, reject) => {
            axios.get("http://localhost:5000/list").then((response) => {
                console.log("load user list", response)
                resolve(response)
            })
        })
    }
}
export default UserApi;