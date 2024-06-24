import { useState, useEffect } from "react"
import { CiLocationOn } from "react-icons/ci";


export default function JobCard() {
    const [show, setShow] = useState(false)
    const [jobs, setjobs] = useState([])
    useEffect(() => {
        const FetchJobs = async () => {
            const res = await fetch('http://localhost:3001/Jobs')
            const data = await res.json()
            setjobs(data)
        }
        FetchJobs();
    }, [])
    let pair = show ? jobs : jobs.slice(0, 3);
    return (
        <div className="bg-blue-200 border-t border-black">
            <div className=" mx-40 grid grid-cols-3 p-5 gap-10">
                {pair.map((work, index) => (
                    <div key={index} className='bg-white p-10 space-y-2 rounded-xl border border-black'>
                        <p className="border-b-2 border-black">{work.type} </p>
                        <h1 className=' font-bold text-2xl'> {work.title}  </h1>
                        <p>{work.description}</p>
                        <p className="text-green-700 font-semibold">{work.salary}</p>
                        <div className="flex justify-between  border-t-2 border-black pt-2">
                            <p className="pt-1 flex">
                                <div className="pt-0.5 pe-1">
                                    <CiLocationOn />
                                </div>
                                {work.location}
                            </p>
                            <button className='border border-black bg-slate-400 hover:text-white hover:bg-black rounded-lg px-3 py-1'>
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center'>
                <button onClick={() => { setShow(~show) }} className="bg-white hover:text-white hover:bg-black px-72 py-2 border border-black my-10 rounded-3xl">
                    {show ? `Show Less` : `View All`}
                </button>
            </div>

        </div>
    )
}