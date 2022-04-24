import { IColor } from "../interfaces";

type ColorListProps = {
    colors: IColor[],
}

export const ColorList:React.FC<ColorListProps> = ({colors}) => {
    const allColors: string[] = [];

    const transformHEXtoRGB = (color:string) => {
        let rgbArr = [];
        const pattern = /^#?[A-Fa-f0-9]{6}$/;
        if(pattern.test(color)) {
            for(let i = 1; i<color.length; i+=2) {
                rgbArr.push(parseInt(color[i] + color[i+1], 16))
            }
        }
        return `rgb(${rgbArr})`
    }
    const getAllColors = () => {

        let keys = Object.keys(localStorage),
        i = keys.length;

        while ( i-- ) {
            allColors.push( localStorage.getItem(keys[i]) || "" );
        }
    }

    getAllColors()

    return (
        <ul>
            {allColors.map(color => {
                return (
                    <div className="item-wrap">
                        <li className="color-item" 
                        key={color}
                        style={{boxShadow:`10px 5px 5px ${color}`}}>
                        <label htmlFor="" className="item">
                            <span className="color-text">{color}</span>
                        </label>
                        <label htmlFor="" className="item">
                            <span className="color-text">{transformHEXtoRGB(color)}</span>
                        </label>
                        </li>
                        <div className="color-demonstration"
                        style={{backgroundColor:`${color}`}}></div>
                        
                    </div>
                    
                )
            })}
            
        </ul>
    )
}