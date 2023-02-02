import React from "react";
import { PopUp } from "./PopUp";
import '../css-components/awards.css'



export const Awards = (props) => {

  // function prikaziVrednost() {
  //   alert(`zdrav`)
  // }

  return (
    <div id="awards" className='text-center'>
      <div className="container">
        {props.data
          ? props.data.map((d, i) => (

            <article className="card" key={`${d.title}-${i}`}  >
              <header className="card__thumb">
                <a><img src={d.image} /></a>
              </header>
              <div className="card__body">
                <div className="card__category"><a ><b>A w a r d</b></a></div>
                <h2 className="card__title"><a >{d.title}</a></h2>

          
                <button type="button" className="card__subtitle" data-toggle="modal" data-target={`#myModal${i}`}>
                  more
                </button>



                <div className='row'>

                  <PopUp data={d} i={i} />
                </div>


                <p className="card__description">
                  {d.description}
                </p>



              </div>
              <footer className="card__footer">
                <span className="icon ion-clock"></span> <i class="fa fa-star-o" aria-hidden="true"> 10 </i>

                <span className="icon ion-chatbox"></span> <i className='fa fa-comment-o'> 145</i>
              </footer>
            </article>


          ))
          : "loading"}

      </div>


    </div>


  )
}
