import React, {useState} from "react";
import { ColorForm } from "./components/ColorForm";
import { ColorList } from "./components/ColorList";
import { IColor } from "./interfaces";
import {Header} from "./components/Header";
import { Filters } from "./components/Filters";

const App: React.FC = () => {
  const [color, setColor] = useState<IColor[]>([])

  const addHandler = (color:string) => {
    const newColor: IColor = {
      color: color,
      id: Date.now()
    }
    setColor(prev => [newColor, ...prev])
  }

  return (
    <div className="App">
      <Header/>
      <Filters/>
      <div className="app-wrapper">
        <ColorForm onAdd={addHandler}/>
        <ColorList colors={color}/>
      </div>
    </div>
  );
}

export default App;
