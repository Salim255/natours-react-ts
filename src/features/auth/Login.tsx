import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import './_login.scss';
import { useReducer, type SyntheticEvent } from "react";
import { loginUser } from './authSlice';

const initialState: LoginFormState = { email: "", password: "", errors: {} };

type LoginFormState = {
  email: string;
  password: string;
  errors: Record<string, string>;
};

type Action = { type: "SET_FIELD"; field: string; value: string } | 
{ type: "SET_ERROR"; field: string; message: string } | 
{ type: "CLEAR_ERRORS" };

function reducer(state: LoginFormState, action: Action) { 
    switch (action.type) { 
        case "SET_FIELD": 
            return { 
                ...state, 
                [action.field]: action.value,
            }; 
        case "SET_ERROR": 
            return { 
                ...state, 
                errors: { 
                    ...state.errors, 
                    [action.field]: action.message,
                 } 
            }; 
        case "CLEAR_ERRORS": 
            return { 
                ...state, 
                errors: {},
             }; 
        default: 
            return state; 
    } }

const Login = () => {
    const loginDispatch = useDispatch<AppDispatch>();
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        dispatch({ 
            type: "SET_FIELD", 
            field: event.target.name, 
            value: event.target.value,
        }); 
    };

    const validate = () => { 
        dispatch({ type: "CLEAR_ERRORS" }); 
        let valid = true;
        if (!state.email.includes("@")) { 
            dispatch({ type: "SET_ERROR", field: "email", message: "Invalid email" }); 
            valid = false; 
        } 
        if (state.password.length < 6) { 
            dispatch({ 
                type: "SET_ERROR", 
                field: "password", 
                message: "Password must be at least 6 characters",
            }); 
            valid = false; 
        } 
        return valid; 
    };

   
    const handleSubmit = (event: SyntheticEvent) => { 
        event.preventDefault();
        if (!validate()) return; 
        loginDispatch(loginUser({email: state.email, password: state.password}))
        console.log("Form submitted:", state); 
    };

   return (
    <div>
        <main className="main login-form">
            <h2 className="heading-secondary ma-bt-lg"> Log into your account </h2>
            <form onSubmit={handleSubmit}  className="form form--login">
                <div className="form__group">
                    <label className="form__label"> Email address </label>
                    <input 
                        className="form__input"
                        id="email"
                        type='email' 
                        name="email"
                        value={state.email}
                        placeholder='you@example.com' 
                        onChange={handleChange} 
                        required />
                    {state.errors.email && (
                        <p className="error">{state.errors.email}</p>
                    )}
                </div>
                <div className="form__group ma-bt-md">
                    <label className="form__label">Password</label>
                    <input 
                        className="form__input"
                        id="password"
                        type='password' 
                        placeholder='••••••••' 
                        onChange={handleChange} 
                        name="password"
                        value={state.password}
                        required 
                        minLength={8}/>
                    {state.errors.password && (
                        <p className="error">{state.errors.password}</p>
                    )
                    }
                </div>
                <div className='form__group'>
                    <button type="submit" className='btn btn--green' > Login </button>
                </div>
            </form>
        </main>
    </div>
   )
}
export default Login;