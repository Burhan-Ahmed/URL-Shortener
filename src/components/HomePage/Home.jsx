import Card from './cards'
import Main from './mainSection'
import JobCard from './JobCard'

export default function Home() {

    return (
        <>
            <Main />
            <div className='flex border border-black mx-28'>
                <Card title='For Developers' btn='Browse Jobs' />
                <Card title='For Employers' btn='Add Job' />
            </div>
            <div className='flex justify-center text-4xl my-10'>
                Browse Jobs
            </div>
            <JobCard />
        </>
    )
}