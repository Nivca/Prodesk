import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'
import 'css/main.css'

const MetaInfo = ({}) => {
  return (<Helmet>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta charset="utf-8" />
    <title>ProDesk</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <link rel="apple-touch-icon" href="./images/favicon.png"/>>
    <link rel="apple-touch-icon" sizes="76x76" href="./images/favicon.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="./images/favicon.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="./images/favicon.png"/>
    <link rel="icon" type="image/x-icon" href="favicon.png" />
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-touch-fullscreen" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="default"/>

    <meta name="description" content="Height adjustable standing desk" property="description"/>
    <meta name="keywords" content="Height ajustable, standing desk, healthly, india" property="keywords"/>
    <meta name="og:title" content="ProDesk - The standing desk" property="og:title"/>
    <meta name="og:description" content="Height adjustable standing desk" property="og:description"/>
    
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:300,400,700" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css"
    />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"
    />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css" rel="stylesheet" type="text/css" media="screen"
    />

  </Helmet>);
}

const Scripts = ({}) => {
  return(<div>

  <script type="text/javascript" src="./js/image-loader.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.ui.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.appear/0.3.3/jquery.appear.min.js"></script>
  <script type="text/javascript" src="./js/jquery.animateNumbers.min.js"></script>

  <script type="text/javascript" src="./js/page.js"></script>
  <script type="text/javascript" src="https://www.gstatic.com/firebasejs/4.1.2/firebase.js"></script>
  <script type="text/javascript" src="./js/app.js"></script>
  <script type="text/javascript" src="./js/ga.js"></script>
  </div>);
}

const Header = ({}) => {
return (<div>
    <nav className="header bg-header transparent-light" data-pages="header" data-pages-header="autoresize" data-pages-resize-className="dark">
    <div className="container relative">
      <div className="pull-right">
        <div className="header-inner">
          <div className="visible-sm-inline visible-xs-inline menu-toggler pull-right p-l-10" data-pages="header-toggle" data-pages-element="#header">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
        </div>
      </div>


      <div className="pull-right menu-content clearfix" data-pages-direction="slideRight" id="header">

        <div className="pull-right">
          <a href="#" className="padding-10 visible-xs-inline visible-sm-inline pull-right m-t-10 m-b-10 m-r-10"
            data-pages="header-toggle"
            data-pages-element="#header">
          &times;
          </a>
        </div>


        <div className="header-inner">
          <ul className="menu">
            <li>
              <a href="./index.html" data-text="Home" className="active">Home </a>
            </li>

            <li>
              <a href="./why.html">Why Stand & Work </a>
            </li>
            <li>
              <a className="btn btn-sm btn-bordered fs-12 btn-white hidden-sm hidden-xs" href="#contact">Buy now</a>
              <a className="btn btn-bordered fs-12 btn-black  font-montserrat fs-12 all-caps pull-bottom visible-sm visible-xs buy-now sm-static sm-m-l-20 sm-m-r-20 sm-m-t-20"
                href="#contact">Buy Now</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </nav>
</div>)}

const Footer = ({}) => {
  return (<footer className="p-b-30 p-t-40">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <img src="./images/logo.svg" className="logo-size--lg" alt=""/>
          <h6 className="block-title m-t-15">Phoenix
            <div className="small-text text-master">Imports & Exports</div>
          </h6>
        </div>

        <div className="col-sm-6 text-right sm-text-left p-t-40">
          <img src="./images/mii.svg" className="logo-size--lg" alt="Make in india"/>
          <div className="m-t-10 ">
            <ul className="no-style fs-11 no-padding font-arial">
              <li className="inline no-padding">
                <Link
                  to={prefixLink("/")} 
                  className="text-master p-r-10 b-r b-grey">Home</Link>
                  </li>
              <li className="inline no-padding">
                <div className="hint-text text-master p-l-10 p-r-10 xs-no-padding xs-m-t-10">
                  Made in India
                </div>
              </li>
            </ul>
          </div>
          <p className="fs-11 muted">Copyright &copy; 2017</p>
        </div>
      </div>
    </div>
  </footer>)
}

const Template = ({children}) => {
  return (
    <div>
      <MetaInfo/>
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}

Template.propTypes = {
  children: PropTypes.node
}

export default Template;