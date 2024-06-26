import React, { useContext } from "react"
import { CartContext } from "./CartContext";

export default function Cart() {
    const list = useContext(CartContext);
    const total = list ? list.items.reduce((a, b) => a + b.Price, 0) : 0

    return (
        <div className=" border-b border-black flex justify-around mx-72 my-32">
            <div className="text-xl">
                <h1 className="font-bold">Product List</h1>
                {list && list.items && list.items.map((item) => (
                    <li key={item.Product}>
                        {item.Product} - ${item.Price}
                    </li>
                ))}
            </div>
            <h5>
                Total Bill :${total}
            </h5>
        </div>
    )
}


