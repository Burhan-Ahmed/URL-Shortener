
export default function Main() {
    const backgroundImage = 'url(public/bg.jpg)'; // Replace with your image path

    return (
        <section className=' py-36 border border-black text-center '
            style={{ backgroundImage }}
        >
            <h1 className=' text-5xl'>
                React Jobs
            </h1>
            <h5 className=' text-xl'>
                Find Best Jobs at this
            </h5>
        </section>
    )
}