
import "./LoginPage.css";
import { assets } from "../assets/assets";
const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-left">
                <h1>Login</h1>
                <div className="login-left-input">
                    <label htmlFor=''>Email</label>
                    <input type="text" placeholder="Email" />
                    <label htmlFor=''>Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <hr />
                <div className="login-assets">
                    <img src={assets.google} alt="google" />
                    <img src={assets.facebook} alt="apple" />
                    <img src={assets.github} alt="github" />
                </div>
                <div className="login-checkbox">
                    <div className="a">
                    <input type="checkbox" />
                    <label htmlFor="">j'accepte la <span>politique de confidentialité & cookies et les termes et conditions</span></label>

                    </div>
                    <div className="b">
                    <input type="checkbox" />
                    <label htmlFor="">j'accepte de recevoir des offres exclusives et les derniéres nouvelles de la marque<span>sign up</span></label>

                    </div>
                    
                </div>
                <button>Login</button>
            </div>
            <div className="login-right">
                <div className="login-right-box">
                    <div className="login-right-box-img">
                        <img src={assets.boutique} alt="login" />
                        <div className="login-right-box-info">

                            <h1>WELCOME BACK</h1>
                            <p>UniMarket est une plateforme web et mobile dediée aux etudiants </p>
                        </div>

                    </div>
                   
                </div>
            </div>
        
            



           
        </div>
    )
}
export default LoginPage;