import { FiArrowRight } from "react-icons/fi";

function Header(){
    return(
        <div className ="flex items-center h-full flex-wrap">
            <div className="content">
                <h5 className="header-subtitle">
                    Move
                </h5>
                <h1 className="header-title1">
                    FROM SYNTAX
                </h1>
                <h1 className="header-title2">
                    TO SOLUTION.
                </h1>

                <h5 className="header-description">
                    Learn to write code that 
                    solves real problem
                </h5>
                <div className="callToAction">
                    <button className="cta-btn primary">
                        Join The Boot Camp<FiArrowRight className="display: inline-block" />
                    </button>
                    <button className="cta-btn secondary">
                        Explore The Program
                    </button>
                </div>
            </div>

            <div className="floating-grids">
                <div className="grid">
                    <span>100%</span>
                    <p>Career focused</p>
                </div>
                <div className="grid">
                    <span>50+</span>
                    <p>Registered Participant</p>
                </div>
            </div>
        </div>
    )
}
export default Header;