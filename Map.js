import React from 'react'

export const App = () => {
    //const marks = [10, 20, 30, 40]
    const data = 
    [
        {sName: "Raj" , marks: 20 },{ sName: "Kavya" , marks: 20},
        {sName: "Tony" ,marks: 20 }, {sName: "Sam", marks: 20 }
    ]
    return (
        <div>
            {
                data.map((eachData, index) =><li> {eachData. sName},
                {eachData.marks} </li>)
            }
        </div>
    )
}
export default App;