import screenNumber from "./screenNumber";

export default {
    install(Vue){
        Vue.component(screenNumber.name,screenNumber)
    }
}