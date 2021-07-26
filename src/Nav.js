import React ,{useState,useEffect} from 'react'
import './Nav.css'

const logo_img = "https://cdn.vox-cdn.com/thumbor/lfpXTYMyJpDlMevYNh0PfJu3M6Q=/39x0:3111x2048/920x613/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
const nav_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD////8/PwEBATg4OD29vby8vKqqqpqamrv7+/j4+N/f385OTnKysqYmJhVVVW9vb3a2trQ0NBDQ0NOTk5cXFweHh6Pj48lJSXDw8NxcXEzMzOhoaGzs7NhYWGFhYUbGxubm5sTExMtLS1AQEB6enpQUFA3NzenNfJzAAADcElEQVR4nO3ca3OqMBCAYSDi3ap4bb316vn///CQDbYK0k9gJtv36Uynli+7s4EkCxhFAAAAAAAAAAAAAAAAAAAAAIBapvhRq0hPcYYFvRmOp9Pl+fzpO4wWrWKru/IdR4s2kuLAdxityU+/nqQ4efcdSkvyDNfDOE7iZOM7lNaYaJXnlyc51XlBlZzsOE3i7PuzMnlOWxmn8ZPvUFrUtwnGg4XvOFo0kevpTOUgdY5dORWnvuNo0bNkOPMdRluMicZyJqZ936G0xVzOxOfLx2AZW6/qbjD/2E8kxQ8/cTXIXH6b6DbPd1fEnpeommSus7qp5JNkOFw/OKCmSYIvh/lkUxmO7107TpOTh6iatpdizce3JTQyYcTxIewLjXWKnU75QF8Wp91d6BlusyLD+Fg6shtIisFPiePBJcN96YiZybrmEHoNx4OkJkMtHZv19yittNfy5XeefboIvYijIsF55YgZyoHwGzZutujY7W6pWNllvghdf9IdbraVddtlWRN6X7F21ZabyhaqM35kPE0zP3+Y6hZjKzVMw9/pm+r4LKQ65vxf5oKOzPmjx8XycG7xrblv2lOyC663v2rW6LSpWe3o4faOQ99htOikY3fxi9EfybDrO4wW/ZUMNY9S/dfSzf0+oyJuC5z5DqNF++Jmt16z+21GReZKmm31XD/8y3cY7XmVLX7lhoYiCzfhL33H0R434Wdb33G0Zyb9Us2TRUdDm0ZaicfRy8edruJCLqVJ2O1S2wxeZ4Mk7dgpoZTjSZ6kTUN/GiP6dDez46fKk0MHJX2oXpzIXeDktZTg1nW8A1/RmGjnboPmqZxKo3Tqahv8Y7Sf6dWTCjcpuuJmr54Ca8xPDTelGrpF6ZunuBp0cIMxTuzS5SrHL7mSaliyLbpxUazbEs507O9NPiFu55f58OffUbRKZeiefUXWHFu449fLLiq9N9qzbwapbULZqT8vYKL69m/xYpDejdPSTRWKS+h2huEvSWstZI5M9DZoTMdeZ0Lf+taQCWMjJRze2xWHz26Jl26VI3t7hSlGttNtJ3vby9eZX/Qm19Fsrfa7I2x3JpH7vsaoTHAsWyl5LU9lflH077zM7XyH8QBKCxh9P06r9yt4Lm8ias0PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA06z+S1BZGXZvhDwAAAABJRU5ErkJggg=="

function Nav() {

    const [show , handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else{handleShow(false)}
        });

        return ()=>{window.removeEventListener("scroll")}
    },[])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src={logo_img} alt="Netflix Logo" className="nav__logo" />
            <img src={nav_img} alt="naviagion img" className="nav__avatar" />
        </div>
    )
}

export default Nav
