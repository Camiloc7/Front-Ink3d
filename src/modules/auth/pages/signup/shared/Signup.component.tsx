import { formFields } from "./Signup.config"
import { SignupInterface } from "./Signup.interface"
import { Question } from "@/modules/auth/shared/components/Question.component"
import { VariantQuestion } from "@/modules/auth/shared/components/Question.component"
import { BtnVariant, ButtonBase } from "../../../shared/components/buttons/Button.component"
import { FormComponent } from "@/modules/auth/shared/components/Form.component"
import { Routes } from "../../../shared/enums/Routes"
import { LoginFields } from "../../login/shared/LoginForm.component"
import { FcGoogle } from "react-icons/fc"
import Swal from "sweetalert2"
import { Divider } from "../../../shared/components/Divider.component"


interface SignupFormProps {
    form: SignupInterface
    handlerChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    formErrors: Record<string, string>
    handlerSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean
}

export const SignupForm: React.FC<SignupFormProps> = ({
    form,
    handlerChange,
    formErrors,
    handlerSubmit,
    isLoading,
}) => {
    return (
        <form onSubmit={handlerSubmit} className="flex flex-col px-4 mx-auto max-w-[402px] h-screen">  
            <FormComponent 
                inputs={formFields} 
                form={form} 
                handlerChange={handlerChange} 
                formErrors={formErrors}
            />
            <div className={`h-[34px]`}></div>
            <ButtonBase name={LoginFields.REGISTER} isLoading={isLoading} variant={BtnVariant.PRIMARY}/>
            
            <Question href={Routes.LOGIN} question={"¿Ya tienes una contraseña?"}variant={VariantQuestion.TERCIARY}/>

            <Divider letter={LoginFields.OR}/>

            <button
                type="button"
                className="flex items-center justify-center py-2 rounded-md font-medium text-[14px] bg-white text-black border-gray-400"
                onClick={() => Swal.fire("Función no disponible aún")}
                >
                <FcGoogle size={20} /> 
                <span>Registrarse con Google</span>
            </button>
        </form>   
    )
}

export default SignupForm