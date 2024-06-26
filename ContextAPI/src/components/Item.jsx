

export default function Items({ Product, Price }) {

    return (
        <div className=" border-b border-black flex justify-around mx-72 my-32">
            <div className="text-xl">
                <h1 className="font-bold ">{Product} </h1>
                Price : {Price}
            </div> <br />
            <button className="bg-black text-white px-2 rounded-2xl">
                Add to Cart
            </button>
        </div>
    )
}


