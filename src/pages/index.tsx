import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardList from '../components/CardList';
import { graphql } from 'gatsby';

import avatar from '../assets/images/avatar.png';
import './styles.scss';



export default (props: any) => {
  const projects = props.data.allMarkdownRemark.edges;
  return <div>
    <NavBar isLanding={true}></NavBar>

    <div className="main">
      <div className="navBarSpacer"></div>
        <div className="pageWrapper">
          <div className="mainLogo"></div>          
        </div>
    </div>

    <div className="quotes">
        <div className="pageWrapper">
            <div className="quotesTextHeader">  
              if it <span className="quotesInverted">Excites and Scares you</span> at the same time, 
              it might be a <span className="quotesInverted">good thing</span> to try.
            </div>
        </div>
    </div>

    <div className="bio">
        <div className="pageWrapper">
            <div className="section">
                <img className="avatar" src={avatar} alt='Bagus'></img>
            </div>
            <div className="section">
                Hi, my name is Bagus <br></br>
                  I`m a coder by night and <br></br>
                  a heavy sleeper by day
            </div>
            <div className="section">
                <a href="http://github.com/gusentanan">Github</a> <br></br>
                <a href="http://www.linkedin.com/in/bagusmerta">LinkedIn</a><br></br>
            </div>
        </div>
    </div>

    <div className="projects">
        <div className="pageWrapper">
            <h1>Projects</h1>
            <CardList list={projects.slice(0,3)}></CardList>
        </div>
    </div>

    <Footer></Footer>

  </div>
      
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