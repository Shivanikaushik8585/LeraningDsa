import { atom } from "recoil";
type AuthModelsState = {
    isOpen: boolean;
    type:'Login'|'register'|'forgetPassword';
};
const initalAuthModelsState : AuthModelsState ={
isOpen :false,
type:'Login',
};
export const authModelsState =atom<AuthModelsState>({
    key:'authModelsState',
  default:initalAuthModelsState,
});