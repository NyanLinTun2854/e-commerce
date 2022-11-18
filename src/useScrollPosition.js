import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    window.addEventListener("scroll",()=>{
        setScrollPosition(window.pageYOffset)
    })

    // useEffect(() => {
    //     const updatePosition = () => {
    //         setScrollPosition(window.pageYOffset);
    //     }

    //     window.addEventListener('scroll', updatePosition)

    //     return "Hla Hla"

    //     // updatePosition()

    //     // return () => window.addEventListener('scroll', updatePosition)
    // }, [])

    return scrollPosition
}