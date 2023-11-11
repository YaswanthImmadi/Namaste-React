const Contact=()=>{
    return (
        <div className="text-center">
            <h1 className="font-bold p-2 m-2 text-center text-2xl">Contact us Page</h1>
            <form>
                <input type='text' placeholder="name" className="border border-black p-2 m-4"/>
                <input type='text' placeholder="Feedback" className="border border-black p-2 m-4"/>
                <button className="border border-black bg-blue-500 p-2 m-4 rounded-lg">Submit</button>
            </form>
        </div>
    )
}
export default Contact;