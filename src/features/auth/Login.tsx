import { useReducer, type SyntheticEvent } from "react";

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
        if (!validate())
        return; console.log("Form submitted:", state); 
    };
   return (
    <main>
        <h2> Log into your account </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label> Email address </label>
                <input 
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
            <div>
                <label>Password</label>
                <input 
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
            <button type="submit" > Login </button>
        </form>
    </main>
   )
}
export default Login;