import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../components/Button'
import avatar from '../pictures/avatar.png'

const Card = (props) => {
  return (
    <AboutContainer>
      <div className="card-wrapper">
        <div className="container">
          <div className="row mx-auto justify-content-center">
            <div className="card col-md-6 p-2 mx-auto">
              <div className="image-cropper">
                <img src={avatar} alt="..." className="card-avatar" />
              </div>
              <div className="body">
                <h3 className="card-title text-center pb-2">{props.title}</h3>
                <h5 className="text-center">{props.subtitle}</h5>
                <p>{props.content}</p>
                <Link to='/'>
                  <Button className="btn btn-primary text-uppercase">My Resume</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutContainer>
  )
}

export default Card

const AboutContainer = styled.div`
  .card {
    background: transparent;
    margin-top: 10rem !important;
    border: none;
    z-index: 1;
  }

  @media (min-width: 768px) {
    .col-md-6 {
      max-width: 40% !importnat;
    }
  }
  
  h3 {
    color: var(--primary-white);
  }

  h5 {
    color: var(--primary-orange);
  }

  p {
    color: var(--primary-white);
  }
`;