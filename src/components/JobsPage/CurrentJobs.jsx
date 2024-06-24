import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";

export default function AllJobs() {
    const [jobs, setjobs] = useState([])
    useEffect(() => {
        const FetchJobs = async () => {
            const res = await fetch('http://localhost:3001/Jobs')
            const data = await res.json()
            setjobs(data)
        }
        FetchJobs();
    }, [])
    return (
        <section className="bg-blue-200 h-screen">
            <div className=" mx-40 my-16 grid grid-cols-3 gap-10 ">
                {jobs.map((work, index) => (
                    <div key={index} className=' p-10 space-y-2 bg-white shadow-2xl rounded-xl border border-black'>
                        <p className="border-b-2 border-black">{work.type} </p>
                        <h1 className=' font-bold text-2xl'> {work.title}  </h1>
                        <p>{work.description}</p>
                        <p className="text-green-700 font-semibold">{work.salary}</p>
                        <div className="flex justify-between border-t-2 border-black pt-2">
                            <p className="pt-1 flex">
                                <div className="pt-0.5 pe-1">
                                    <CiLocationOn />
                                </div>
                                {work.location}
                            </p>
                            <NavLink to={`/src/components/JobsPage/CurrentJobs.jsx/${work.id}`}>
                                <button className='hover:text-white hover:bg-black border border-black rounded-lg bg-slate-400 px-3 py-1'>
                                    Read More
                                </button>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}