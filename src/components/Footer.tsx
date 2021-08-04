import React from 'react';
import './footer.scss';

const date = new Date();
const waterSVG = <svg viewBox="0 0 352 512" className="droplet icon">
    <path fill="currentColor" d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35
    78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112
    0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
</svg>;

export default () => {
    return <div className="footer">
        <div className="verticalSpacer"></div>
        <div className="pageWrapper">
            <div><div className="footLogo"></div> &copy; {date.getFullYear()}</div> <br></br>
            <div>Made with {waterSVG}</div>
            <div>Product of Indonesia</div>
        </div>
        <div className="verticalSpacer"></div>
    </div>
}
