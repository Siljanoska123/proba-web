import '../css-components/popup.css'
import '../css-components/card.css'
import {Footer} from './Footer'
import {Navigation} from './Navigation'

export const PopUp = (props) => {
  console.log(props)


  return (
    <div className='portfolio-item'>




      <div class="modal fade" id={`myModal${props.i}`} tabindex="-1" role="dialog" aria-labelledby={`myModal${props.i}Label`}>
        {' '}
        <Navigation />
        <div class="modal-dialog " role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id={`myModal${props.i}Label`}>{props.data.title}</h4>
            </div>
            <div class="modal-body">
              <div className='row'>
                <div className='col-xs-6 col-md-32'>

                  <div className='section-overview'>
                    <h2 className='section-title'>Overview
                    </h2>
                    <p className="section-text">{props.data.description}
                    </p>
                  </div>

                </div>
                <div className='col-xs-6 col-md-32'>
                  <div >
                    <img src={props.data.image} className="img-responsive2" alt="" />
                  </div>

                </div>
              </div>

              <div className='row'>
                <div className='col-xs-6 col-md-32'>
                  <div className='section-benefits'>
                    <h2 className='section-title'>Key Benefits
                    </h2>

                    <p className="section-text-benefits">
                      <ol>
                      {props.data.benefits.map(item => {
                      return (
                        <li>{item}</li>
                      )
                    })}

                      </ol>
                    </p>


                  </div>

                </div>

                <div className='col-xs-6 col-md-32'>

                  <div className='section-methodology'>
                    <h2 className='section-title'>Methodology
                    </h2>

                    <p className="section-text">Strengthen the credibility of your brand online and positively influence purchase decisions. Review your online public perception of your brand, address any negative feedback which might damage your reputation or increase the dominant positioning of your operations online.
                    </p>
                  </div>

                </div>


              </div>


 {/* 
              <div className='modal-body-left'>
                <div className="modal-image">
                  <img className="modal-image" src={props.data.image} />
                </div>
                <div>
                  <p className="modal-description-title">Description</p>
                  <p className="modal-description">
                    {props.data.description}
                  </p>
                </div>
              </div>


              <div className='modal-body-right'>
                <div>
                  <p className="modal-benefit-title">Key Benefits</p>
                  <p className="modal-benefit-description">
                    <ul> {props.data.benefits.map(item => {
                      return (
                        <li>{item}</li>
                      )
                    })}</ul>
                  </p>
                </div>
              </div> */}





            </div>





            <div class="modal-footer">
              
                <a href='/awards'>Back</a>
             

            </div>
            <Footer/>
          </div>
        </div>
      </div>

    </div>

  )
}
