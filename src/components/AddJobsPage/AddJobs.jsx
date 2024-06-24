
export default function AddJobs() {

    return (
        <div className=' bg-red-500 w-fit px-20 border border-black text-center'>
            <h1 className=' text-5xl'>
                Job Description
            </h1>
            <form action="post">
                <div className="flex ">
                    <div>
                        <label htmlFor="title" >
                            Job Title
                            <input type="text" id="title" />
                        </label>
                        Job Description
                        <label htmlFor="title">
                            <input type="text" id="title" />
                        </label>
                    </div>
                    Salary
                    <label htmlFor="title">
                        <input type="text" id="title" />
                    </label>
                </div>
            </form>

        </div>
    )
}