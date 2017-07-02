import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

const ContactForm = () => {
  return(<div className="col-md-6">
        <h2>Place your order below</h2>
        <div className="sm-p-t-10">
          <div className="panel">
            <p className="semi-bold no-margin">Fill up this form, our sales executive will contact you.</p>
            <form className="m-t-15 js-place-order">
              <div className="alert alert-success js-success hide">
                Thanks you, Our sales executive will get back to you soon.
              </div>
              <div className="alert alert-danger js-error hide">
                Something when wrong, Please try again later or mail us at <a 
                  target="_blank" 
                  href="mailto:support@prodesk.life">support@prodesk.life</a>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group form-group-default required">
                    <label className="control-label">Name</label>
                    <input type="text" name="name" className="form-control" required/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group form-group-default">
                    <label className="control-label">Phone</label>
                    <input type="tel" name="phone" className="form-control"/>
                  </div>
                </div>
              </div>
              <div className="form-group form-group-default">
                <label className="control-label">Email</label>
                <input type="email" name="email" className="form-control"/>
              </div>
              <div className="form-group form-group-default">
                <label className="control-label">Number of units</label>
                <input type="number" name="no_units" className="form-control"/>
              </div>
              <div className="form-group form-group-default">
                <label className="control-label">Message</label>
                <textarea name="message" 
                  placeholder="Type the message you wish to send" 
                  style={{height:"100px"}} 
                  className="form-control" required></textarea>
              </div>
              <div className="sm-p-t-10">
                <button type="submit"
                  className="btn btn-primary font-montserrat all-caps">Place order</button>
              </div>
            </form>
          </div>
        </div>
      </div>);
}

const MainPage = (props)=> {
    return (
      <div>
       
  <section className="jumbotron full-vh" data-pages="parallax">
    <div className="inner full-height">
      <div className="slider-wrapper">
        <div className="bg-image full-width full-height" 
          data-swiper-parallax="30%" 
          data-pages-bg-image="./images/bg1.jpg"/>
        </div>
      </div>


      <div className="content-layer">
        <div className="inner full-height">
          <div className="container-xs-height full-height">
            <div className="col-xs-height col-middle text-center">
              <div className="container sm-m-b-30 home-section-image">
                <div className="row sm-m-b-30">
                  <img className="lazy home-section-image__left img-responsive" 
                    src="./images/products/table-front-left.png" data-swiper-parallax="-20%" alt=""/>
                  <div className="col-md-6 col-md-offset-3 p-b-90 sm-p-b-40 sm-m-b-30">
                    <h1 className="light text-white sm-no-margin" data-swiper-parallax="-15%">
                      ProDesk Life
                    </h1>
                    <div className="block-title text-white">Stand-up for the right reasons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  </section>


  <section className="p-b-60 p-t-70">
    <div className="container text-center">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <h6 className="block-title m-b-0">ProDesk Life</h6>
          <h1 className="m-t-5 light">Height adjustable Standing Desk</h1>
        </div>
      </div>
    </div>
  </section>


  <section className="p-b-100 p-t-30">
    <div className="container-sm-height">
      <div className="row row-sm-height sm-m-l-15 sm-m-r-15">
        <div className="col-lg-2 col-md-1 hidden-sm"></div>
        <div className="col-sm-6 col-lg-4 col-md-5 col-sm-height col-middle sm-text-center">
          <img className="p-r-40 m-t-10 xs-image-responsive-height sm-no-padding lazy img-responsive"
            src="./images/products/table-front-left-with-mon.png" alt=""/>
        </div>
        <div className="col-sm-6 col-sm-height col-middle col-lg-4 col-md-4 xs-text-center sm-p-l-30">
          <h6 className="block-title">Built with the Best</h6>
          <p className="m-t-15">Using premium materials, making it lightweight, strong, water & termite proof.
            100% recyclable - because we care.
          </p>

          <h6 className="block-title m-t-40">Quick & Easy setup</h6>
          <p className="m-t-15">With just a few unfolds and adjustments, ProDesk comes to life in under 30 seconds
            and stands with you, ready to get working...</p>

          <h6 className="block-title m-t-40">Affordable</h6>
          <p className="m-t-15">Burn calories, not your pockets. At just <strong><i className="fa fa-inr"></i>6490</strong>*<strong>/-</strong>. <br/>
            ProDesk makes sure you get a better posture at a pocket friendly pricetag. <small className="small-text"> * Excluding tax.</small>
          </p>

          <h6 className="block-title m-t-40">Make in India 🇮🇳 </h6>
          <p className="m-t-15">Because home is where the heart belongs</p>

        </div>
        <div className="col-lg-2 col-md-1 hidden-sm"></div>
      </div>
    </div>
  </section>

  <section className="p-b-50 p-t-50 bg-master-dark">
    <div className="container">
      <h2 className="text-white p-b-10">Help your employees to be <strong>healthy</strong> and <strong>productive</strong></h2>
      <p className="text-white m-t-30">
        Make your employees healthy by providing them easy to use standing Desk.<br/>
        <a href="#contact" className="hint-text text-white link"> Order standing desk now</a></p>
    </div>
  </section>

  <section id="contact">
    <div className="container p-b-50 p-t-50">
      <ContactForm/>
    </div>
  </section>

</div>)
}

export default MainPage;