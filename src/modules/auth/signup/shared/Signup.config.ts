
import { InputInterface } from "../../shared/interfaces/Input.interface";
import { SignupInterface } from "./Signup.interface";

export const formFields: InputInterface[] = [
    { id: 1, name: "name", type: "text", value:"", placeholder: "Name"},
    { id: 2, name: "email", type: "text", value:"", placeholder: "Email"},
    { id: 3, name: "password", type: "text", value:"", placeholder: "Password"},
    { id: 4, name: "confirmPassword", type: "text", value:"", placeholder: "confirmPassword"},

]

export const formInitial: SignupInterface = {
    id: "",  
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};


export const requiredFields: string[] = ["name", "email", "password", "confirmPassword"]