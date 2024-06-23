import { NavLink } from "react-router-dom";
import jobs from "/src/jobs.json"
import { CiLocationOn } from "react-icons/ci";

export default function AllJobs() {

    return (
        <div className=" mx-40 my-16 grid grid-cols-3 gap-10">
            {jobs.map((work, index) => (
                <div key={index} className=' p-10 space-y-2 rounded-xl border border-black'>
                    <p>{work.type} </p>
                    <h1 className=' font-bold text-2xl'> {work.title}  </h1>
                    <p>{work.description}</p>
                    <p>{work.salary}</p>
                    <div className="flex justify-between">
                        <p className="pt-1 flex">
                            <div className="pt-0.5 pe-1">
                                <CiLocationOn />
                            </div>
                            {work.location}
                        </p>
                        <NavLink to={`/src/components/JobsPage/CurrentJobs.jsx/${work.id}`}>
                            <button className='border border-black rounded-lg px-3 py-1'>
                                Read More
                            </button>
                        </NavLink>
                    </div>
                </div>
            ))}
        </div>
    )
}