import jobs from "/src/jobs.json"
import { useState } from "react"
import { CiLocationOn } from "react-icons/ci";


export default function JobCard() {
    const [show, setShow] = useState(false)
    let pair = show ? jobs : jobs.slice(0, 3);

    return (
        <>
            <div className=" mx-40 grid grid-cols-3 border border-black p-5 space-x-4 space-y-4">
                {pair.map((work) =>
                    <div className=' mx-auto w-fit p-10 space-y-2 rounded-xl border border-black'>
                        <p>{work.type} </p>
                        <h1 className=' font-bold text-2xl'> {work.title}  </h1>
                        <p>{work.description}</p>
                        <p>{work.salary}</p>
                        <div className="flex justify-between border border-black">
                            <p className="pt-1 flex">
                                <div className="pt-0.5 pe-1">
                                    <CiLocationOn />
                                </div>
                                {work.location}
                            </p>
                            <button className='border border-black rounded-lg px-3 py-1'>
                                Read More
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className='flex justify-center'>
                <button onClick={() => { setShow(~show) }} className=" px-72 py-2 border border-black my-10 rounded-3xl">
                    {show ? `Show Less` : `View All`}
                </button>
            </div>

        </>
    )
}