"use client"

import {useEffect, useState} from "react";

type Props = {
    sayHello: Function;
};

export default function Box({sayHello}: Props) {
    const [customer, setCustomer] = useState('Stuart Creed')
    useEffect(() => {
        console.log('mounted')
        sayHello()
    }, [customer]);
    return (
        <>
            <div className="bg-blue-800 text-white w-[400px] h-[400px]">Hello</div>
            { customer === 'Stuart Creed' ? <div>Customer Set</div> : <div>Not Set</div>}
        </>
    )
}