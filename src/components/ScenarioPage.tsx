import React from 'react'
import {addItemToItems} from "../features/scenarioActiveSlice"

interface ScenarioPageTypes {
    name: string,
    id: number,
    items?: number[]
}

export default function ScenarioPage({ name, id, items }: ScenarioPageTypes) {

    const handleAddItem = () => {
        addItemToItems([id, 10])
    }

  return (
    <div className="scenario-page">
        <h2>name: {name} id: {id}</h2>
        <div className="items-adder">
            <button onClick={handleAddItem}>Add</button>
        </div>
        <div className="items-displayer">
            {items ? `${items} here` : "No items in this scenario!"}
        </div>
    </div>
  )
}
