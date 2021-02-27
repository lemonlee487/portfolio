import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import ProjTemplate from '../components/ProjTemplate'
import proj1 from '../pictures/avatar.png'
import proj2 from '../pictures/aaa.jpg'

const Project = () => {
  return (
    <ProjectContainer>
      <div className="container py-5">
        <h2 className="text-center mt-5 pt-3 pb-5 text-uppercase">Projects</h2>
        <NavLink to="/project/project1" className="badge badge-secondary p-2 m-2">
          Project 1
        </NavLink>
        <NavLink to="/project/project2" className="badge badge-secondary p-2 m-2">
          Project 2
        </NavLink>
        <Redirect to="/project/project1" />
        <Route path="/project/project1" render={() =>
          <ProjTemplate
            logo={proj1}
            logoSize='12rem'
            title='Project 1'
            description='This is project 1, later I should create an object file and do data.projects[0].project1.description'
          />} />
        <Route path="/project/project2" render={() =>
          <ProjTemplate
            logo={proj2}
            logoSize='35rem'
            title='Project 2'
            description='This is project 2, later I should create an object file and do data.projects[0].project1.description'
          />} />
      </div>

    </ProjectContainer>
  )
}

export default Project

const ProjectContainer = styled.div`
  background: transparent;
  position:relative;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  z-index: 1;
  
  h2 {
    color: var(--primary-white);
  }

  p {
    color: var(--primary-orange);
  }

  .active {
    background: var(--primary-red);
    color: white;
    &:focus {
      background: var(--primary-hover-red);
    }
  }
`;