import { NavLink } from 'react-router-dom';

export default function Navbar() {

    return (
        <div className=''>
            <nav>
                <ul className=' flex text-xl justify-around py-8 border border-black'>
                    <NavLink to="/">
                        <div className='flex'>
                            <img src="react.png" alt="React Logo" width={60} />
                            <div className='pt-3.5 ps-1 text-3xl'>
                                React Jobs
                            </div>
                        </div>
                    </NavLink>
                    <div className='flex space-x-4 pt-3'>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "border border-black bg-black text-white px-4 py-1 rounded-full" : ""}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/src/components/JobsPage/CurrentJobs.jsx" className={({ isActive }) => isActive ? "border border-black bg-black text-white px-4 py-1 rounded-full" : ""}>
                                Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/src/components/AddJobsPage/AddJobs.jsx" className={({ isActive }) => isActive ? "border border-black bg-black text-white px-4 py-1 rounded-full" : ""}>
                                Add Jobs
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}