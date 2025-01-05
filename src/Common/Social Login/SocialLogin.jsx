import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {

    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleGogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
    }

    return (
        <div>
            <div>
                <button
                    onClick={handleGogleSignIn}
                    className="bg-[#3B9DF8] text-white rounded-md py-1 pl-1 pr-4 flex items-center gap-[10px] text-[1rem] hover:bg-blue-500 transition-all duration-200">
                    <div className="py-2 px-2.5 rounded-l-md bg-white">
                        <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                            alt="google logo"
                            className="w-[23px]" />
                    </div>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;