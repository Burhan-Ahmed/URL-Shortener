
export default function Card({ title, btn, bg }) {
    const color = bg
    return (
        <div className=' mx-auto w-2/5 my-10 p-10 space-y-2 rounded-xl border border-black'
            style={{ backgroundColor: bg }}>
            <h1 className=' font-bold text-2xl'>{title} </h1>
            <p>Browse our Reach Jobs and start your career today</p>
            <button className='border border-black rounded-3xl px-4 py-1 hover:text-white hover:bg-black'>
                {btn}
            </button>
        </div>
    )
}