import {useContext, useRef} from "react";
import classes from "./NewTodo.module.css";
import {TodosContext} from "../store/todos-context";

const NewTodo: React.FC = () => {

    const todosCtx = useContext(TodosContext);
    
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }
        todosCtx.addTodo(enteredText);
    }
    return <form className={classes.form} onSubmit={submitHandler} action="">
        <label htmlFor="text" >Todo text</label>
        <input id="text" type="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
};

export default NewTodo;