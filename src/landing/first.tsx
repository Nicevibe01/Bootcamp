

function Nav(){
    const bootcampName = "Nerti."
    return(
        <div className="flex justify-between text-lg items-center h-full">
            <div className="font-bold text-green-600 ">{bootcampName}</div>
            <div className="nav-links">
                <a href="" className="link">Home</a>
                <a href="" className="link">Sass-track</a>
                <a href="" className="link">Competition</a>
                <a href="" className="link">Pricing</a>
                <a href="" className="link">Contact Us</a>
            </div>
            <div><a href="" className="btn">Enroll</a></div>
        </div>
    )
}
export default Nav;