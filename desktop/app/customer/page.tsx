"use client"

import Box from "@/components/box";

export default function Page() {
    const sayHello = () => {
        console.log('hello')
    }
    return (
        <>
            <Box sayHello={sayHello}/>
        </>
    )
}