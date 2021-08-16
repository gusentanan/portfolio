import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardList from '../components/CardList';

import { graphql } from 'gatsby';
import './styles.scss';

export default (props: any) => {
    const projects = props.data.allMarkdownRemark.edges;

    return <div>
        <NavBar isLanding={false}></NavBar>
        <div className="projects">
        <div className="navBarSpacer"></div>
            <div className="pageWrapper">
                <h1>Projects</h1>
                <CardList list={projects}></CardList>
            </div>
        </div>  
        <Footer></Footer>
    </div>;
}


export const pageQuery = graphql`
{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            short_desc
            source
            title
          }
        }
      }
    }
  }
`