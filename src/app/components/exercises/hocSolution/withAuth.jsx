import React, { useEffect, useState } from "react";

const withAuth = (Component) => (props) => {
    const data = "Ruslan";
    const [isAuth, setIsAuth] = useState();
    useEffect(() => {
        setIsAuth(localStorage.getItem("user") === data);
    }, []);
    const onLogin = () => {
        localStorage.setItem("user", data);
        setIsAuth(true);
    };
    const onLogOut = () => {
        localStorage.setItem("user", "");
        setIsAuth(false);
    };
    console.log(isAuth);

    return (
        <>
            <Component
                {...props}
                onLogin={onLogin}
                onLogOut={onLogOut}
                isAuth={isAuth}
            />
        </>
    );
};

export default withAuth;
