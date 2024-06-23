import { NavLink } from 'react-router-dom';

export default function Navbar() {

    return (
        <div>
            <nav>
                <ul className=' flex text-2xl justify-around py-8 border border-black'>
                    <NavLink to="/">
                        <img src="./assets/react.png" alt="React Logo" />
                    </NavLink>
                    <div className='flex space-x-5'>
                        <li> <NavLink to="/"> Home</NavLink></li>
                        <li><NavLink to="src/components/JobsPage/CurrentJobs.jsx">  Jobs </NavLink></li>
                        <li><NavLink to="src/components/AddJobsPage/AddJobs.jsx"> Add Jobs </NavLink> </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}