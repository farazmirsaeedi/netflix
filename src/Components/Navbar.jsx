const Navbar = () => (
    <div className="flex items-center justify-between p-3 md:p-5">
        <h1 className="text-red-600 font-bold text-4xl cursor-pointer">NETFLIX</h1>
        <div className="transition">
            <button className="text-white px-6 mx-2 py-2 cursor-pointer transition duration-300 hover:bg-white hover:text-black">Sign In</button>
            <button className="bg-red-600 text-white px-6 py-2 cursor-pointer transition ease-in-out duration-300 hover:bg-transparent hover:text-red-600 hover:border hover:border-red-600">Sign Up</button>
        </div>
    </div>
)
export default Navbar;