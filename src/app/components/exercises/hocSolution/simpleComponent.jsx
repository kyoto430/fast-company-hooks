import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <div className="container">
            <button
                className="btn btn-primary"
                onClick={!isAuth ? onLogin : onLogOut}
            >
                {!isAuth ? "Войти" : "Выйти из системы"}
            </button>
        </div>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
