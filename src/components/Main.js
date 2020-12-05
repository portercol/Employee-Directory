import React, { useState } from 'react';
// import Button from 'react';

function Main() {

    const array = ["collin", "chris", "joe", "alex", "josh"]
    const newArray = [
        {
            name: "collin",
            visible: true
        },
        {
            name: "joe",
            visible: true

        },
        {
            name: "chris",
            visible: false

        },
    ]

    const [temp, setTemp] = useState("whatever")
    const [names, setNames] = useState(newArray)

    return (
        <div>
            <h1>Hello</h1>
            {names.map(({ name, visible}) => {
                if (visible) {
                    return <p>{name}</p>
                } else {return ''}
            })}
            <button onClick={() => {
                var newNames = [...names]

                newNames = newNames.sort()

                setNames(newNames)


            }}>Sort</button>
            <button onClick={() => {

                var newNames = [...names]

                newNames = newNames.filter(({ name }) => { return name.includes("o") })

                setNames(newNames)

            }}>Filter</button>

            <button onClick={() => setTemp("yowdy")}>Yowdy</button>


            {temp}
        </div>
    )
}

export default Main;