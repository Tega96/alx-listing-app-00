import { ButtonProps } from "@/interfaces";


const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button type='submit' className="flex items-center justify-center bg-black px-4 py-1 rounded-full text-white">{text}</button>
    )
}
export default Button;