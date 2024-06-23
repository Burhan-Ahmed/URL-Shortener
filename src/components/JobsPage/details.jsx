import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiLocationOn } from 'react-icons/ci';

export default function Details() {
  const { id } = useParams(); 
  const [jobs, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`http://localhost:3001/Jobs/${id}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchJob();
  }, [id]);

  if (!jobs) {
    return <div>Loading...</div>;
  }
  const job = jobs.find((work) => work.id == parseInt(id));
  return (
    <>
      <div className='font-bold text-2xl flex ps-20 mt-8'>
        <span className=' pt-1 pe-3'>
          <IoMdArrowRoundBack />
        </span>
        <button >
          Back
        </button>
      </div >
      <div className=' flex m-24 '>
        <div className=" w-7/12 h-fit mx-8 border border-black p-10 rounded-xl">
          <p>{job.type}</p>
          <h1 className="font-bold text-2xl">{job.title}</h1>
          <p>{job.description}</p>
          <p>{job.salary}</p>
          <div className="flex justify-between border border-black">
            <p className="pt-1 flex">
              <div className="pt-0.5 pe-1">
                <CiLocationOn />
              </div>
              {job.location}
            </p>
          </div>
        </div>
        <div className=' p-10 w-4/12 mx-10 border space-y-3 border-black rounded-xl'>
          <div className='font-bold'>
            <p className='text-xl'>Company Info</p>
            <h1 className=' text-3xl'>{job.company.name}</h1>
          </div>
          <p>{job.company.description}</p>
          <div className='font-bold space-y-2'>
            Contact Details <br />
            <div> Contact Email : <span className='font-normal py-1 px-4 border bg-slate-400 rounded-full'>{job.company.contactEmail}</span></div>
            <div>Contact Phone : <span className='font-normal  py-1 px-4 border bg-slate-400 rounded-full'>{job.company.contactPhone}</span></div>
          </div>
          <div className=' ease-linear hover:bg-black hover:text-white mt-10 w-fit font-bold py-2 px-10 border border-black rounded-full'>
            <button>
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
