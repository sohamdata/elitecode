// https://recoiljs.org/docs/introduction/getting-started#atom

import { atom } from "recoil";

interface AuthModalState {
    isOpen: boolean;
    mode: "login" | "signup" | "forgotPassword";
};

const initialState: AuthModalState = {
    isOpen: false,
    mode: "login",
};

export const authModalState = atom<AuthModalState>({
    key: "authModalState",
    default: initialState,
});
