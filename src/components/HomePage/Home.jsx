import Card from './cards'
import Main from './mainSection'
import JobCard from './JobCard'

export default function Home() {

    return (
        <>
            <Main />
            <div className='flex border-b border-black px-32'>
                <Card title='For Developers' btn='Browse Jobs' bg='#d0efff' />
                <Card title='For Employers' btn='Add Job' bg='#d0efff' />
            </div>
            <div className='flex justify-center text-4xl my-10 '>
                Browse Jobs
            </div>
            <JobCard />
        </>
    )
}