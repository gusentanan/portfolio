import React from 'react';
import Img from 'gatsby-image';

import './cardlist.scss';

export default (props: any) => {
    const list = props.list.map((e: any) => {
        const project = e.node.frontmatter;
        return <div className="cardWrapper" key={project.title}>
            <div className="card">
                {project.image && <Img fluid={project.image.childImageSharp.fluid} />}
                <h2>{project.title}</h2>
                {project.short_desc}
                <div className="links">
                    {project.source !== "" && <a href={project.source}>Source</a>}
                </div>
            </div>
        </div>;
    });

    return <div className="cardList" >
        {list}
        
    </div>;
}