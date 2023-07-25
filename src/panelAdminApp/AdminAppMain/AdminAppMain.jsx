import React from 'react'
import { InformacionUser } from './components/InformacionUser'
import { Buscadores } from './components/Buscadores/components/Buscadores'
import { PublicacionesFundacion } from './components/PublicacionesFundacion'
import { FundacionesRecientes } from './components/FundacionesRecientes'
import { AplicacionesRealizadas } from './components/AplicacionesRealizadas'
import { Footer } from '../../Footer'

export const AdminAppMain = () => {
  return (
    <>
      <div className="mt-4 container custom-container">
        <div className="profile-page tx-13">
          <div className="row profile-body">
            {/*<!-- left wrapper start -->*/}
            <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                <InformacionUser/>
            </div>
            {/*<!-- left wrapper end -->
        <!-- middle wrapper start -->*/}
            <div className="col-md-8 col-xl-6 middle-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin">
                    <Buscadores/>
                </div>
                <div className="col-md-12">
                    <PublicacionesFundacion/>
                </div>
              </div>
            </div>
            {/*<!-- middle wrapper end -->
        <!-- right wrapper start -->*/}
            <div className="d-none d-xl-block col-xl-3 right-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin">
                    <FundacionesRecientes/>
                </div>
                <div className="col-md-12 grid-margin">
                    <AplicacionesRealizadas/>
                </div>
              </div>
            </div>
            {/* <!-- right wrapper end --> */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
