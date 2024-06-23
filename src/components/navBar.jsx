import { NavLink } from 'react-router-dom';

export default function Navbar() {

    return (
        <div>
            <nav>
                <ul className=' flex text-2xl justify-around py-8 border border-black'>
                    <NavLink to="/">
                        <div className='flex'>
                            <img src="/src/assets/react.png" alt="React Logo" width={60} />
                            <div className='pt-3.5 ps-1 text-3xl'>
                                React Jobs
                            </div>
                        </div>
                    </NavLink>
                    <div className='flex space-x-4 pt-3'>
                        <li> <NavLink to="/"> Home</NavLink></li>
                        <li><NavLink to="/src/components/JobsPage/CurrentJobs.jsx">  Jobs </NavLink></li>
                        <li><NavLink to="/src/components/AddJobsPage/AddJobs.jsx"> Add Jobs </NavLink> </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}