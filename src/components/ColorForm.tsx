import React, {useState} from "react";

interface ColorForms {
    onAdd(color: string): void
}

export const ColorForm: React.FC<ColorForms> = props => {

    const [color, setColor] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        if (value[0] === "#") {
            if (value.length === 8) {
                return false;
            }
        } else {
            return false;
        }

        setColor(e.target.value)
        
    }

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        addColor();
    }

    const addColorToLocalStorage = () => {
        localStorage.setItem(color, color);
    }

    const addColor = () => {
        addColorToLocalStorage()
        props.onAdd(color);
        setColor('');
    }


    return (
        <div className="color-form">
            <form onSubmit={handleSubmit} >
                <input type="text" 
                    id="color"
                    value={color}
                    onChange={changeHandler}
                />
                <button className="btn btn-sub" type="submit">ADD</button>
            </form>
        </div>
        
    )
}