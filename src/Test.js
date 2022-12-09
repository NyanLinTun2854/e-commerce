import React from 'react'

const Test = () => {

    const MAMA = {
        age: 18,
        name: "Tin Zar Win"
    }

    console.log(MAMA)

    const something = () => {
        MAMA['age'] = 20
        console.log(12)
    }
  return (
    <>
    <div id='something'>{MAMA.age}</div>
    <button onClick={something}>Add</button>
    </>
  )
}

export default Test