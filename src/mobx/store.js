import {observable, action} from 'mobx'


class RootStore {
    @observable
    phoneNumber = ''

    @observable
    userId = ''
    @observable
    token = ''

    @action
    getUserInfo(phoneNumber, userId, token){
        this.phoneNumber = phoneNumber
        this.userId = userId
        this.token = token
    }

}



export default new RootStore()