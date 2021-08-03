import React, { Component } from 'react';
// import styles from './Logo.module.scss';
import './navbar.scss';

const collapseSVG = <svg viewBox="0 0 448 512" className="collapse icon">
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837
    7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0
    8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16
    16v40c0 8.837 7.163 16 16 16z" fill="currenColor"></path>
</svg>;

class NavBar extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            menuOpen: false,
            hasScrolled: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    public componentDidMount() {
        window.addEventListener("scroll", () => {
            const hasScrolled = window.scrollY > 0;
            if(this.state.hasScrolled !== hasScrolled) {
                this.setState({hasScrolled});
            }
        });
    }

    public toggleMenu() {
        this.setState({menuOpen: !(this.state.menuOpen)});
    }

    render() {
        return <div>
            <div className={this.state.hasScrolled || !this.props.isLanding ? "navBar scrolled" : "navBar"}>
                <div className="pageWrapper">
                    <a href="/" className={this.state.hasScrolled || !this.props.isLanding ? "navLogo scrolled" : "navLogo"}>
                         <span className="menuLogo"></span>
                    </a>
                    
                    <button aria-label="toggle menu" onClick={this.toggleMenu}>{collapseSVG}</button>
                    
                    <div className={this.state.menuOpen ? "navItems open" : "navItems"} id="navItems">
                        <a href="/about"><div className="link">About</div></a>
                        <a href="/projects"><div className="link">Projects</div></a>
                    </div>

                </div>
            </div>
        </div>
    }


}

export default NavBar;