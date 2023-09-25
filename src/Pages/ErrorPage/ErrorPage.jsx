import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }
    console.log(error);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="space-y-4 text-center">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary">404</h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-medium">Page Not Found</p>
                <button 
                    onClick={handleClick}
                    className="btn btn-error bg-primary text-white rounded"
                >go back</button>
            </div>
        </div>
    );
};

export default ErrorPage;