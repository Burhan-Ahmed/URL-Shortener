
export default function Card({ title, btn }) {

    return (
        <div className=' mx-auto w-2/5 my-10 p-10 space-y-2 rounded-xl border border-black'>
            <h1 className=' font-bold text-2xl'>{title} </h1>
            <p>Browse our Reach Jobs and start your career today</p>
            <button className='border border-black rounded-3xl px-3 py-1'>
                {btn}
            </button>
        </div>
    )
}