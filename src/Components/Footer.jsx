import { footerLinks } from "../Constants"
import logo from "../assets/logo.svg"

const Footer = () => {
    return (
        <footer className="px-4">
            <div className="info">
                <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</p>
                <img src={logo} alt ="Apple logo"/>
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer