import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <div className="container-fluid">
          <div className="row pt-5">
            {/*Column1*/}
            <div className="col-sm-3 col-xs-12 d-flex">
              <ul className="list-inline mx-auto justify-content-center">
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
              </ul>
            </div>
            {/*Column2*/}
            <div className="col-sm-3 col-xs-12 d-flex">
              <ul className="list-inline mx-auto justify-content-center">
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
              </ul>
            </div>
            {/*Column3*/}
            <div className="col-sm-3 col-xs-12 d-flex">
              <ul className="list-inline mx-auto justify-content-center">
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
              </ul>
            </div>
            {/*Column4*/}
            <div className="col-sm-3 col-xs-12 d-flex">
              <ul className="list-inline mx-auto justify-content-center">
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
                <Link to="/">
                  <li>lorem ipsum</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer;

//Styled

const FooterContainer = styled.footer`
  ul li {
    list-style: none;
  }
  
  a {
    &:hover{
      color: var(--primary-orange);
    }
  }
`;