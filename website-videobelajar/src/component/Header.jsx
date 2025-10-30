import Gambar from "../assets/videobelajar1.svg";

export default function Header(){
    return(
        <nav className="navbar shadow-sm bg-light p-3">
            <div className="container">
                <a href="#" className="navbar-brand">
                    <img src={Gambar} alt="" />
                </a>
            </div>
        </nav>
    )
}