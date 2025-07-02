/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
function Navbar() {
    return (
        <header>
            <div class="main_navbar" >
                {/* <img src='../images/main_logo.png' alt="logo" /> */}


                <div className="main_logo">
                    <a href="#" target="_blank">
                        <h1>EVER J</h1>
                    </a>
                </div>

                <div className="search_bar">
                    <input type="text" placeholder="Search.." />
                </div>

                <div className="right_section">
                    <div class="services_section">
                        <span>Stores & Services
                            {/* <span>Sephora SQUARE ONE</span> */}
                        </span>
                    </div>
                    <div className="Community_section">
                        <span>Community</span>
                    </div>
                    <div className="SignIn_section">Sign In</div>

                    <div className="right_icon">
                        <img src="../public/images/like.png" />
                        <img src="../public/images/cart.png" />
                    </div>
                </div>

            </div>

        </header>


    )
};

export default Navbar;
