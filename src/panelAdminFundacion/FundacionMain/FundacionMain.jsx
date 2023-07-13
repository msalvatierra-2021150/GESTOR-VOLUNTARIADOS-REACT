import React from "react";
import { PerfilFundacion } from "./components/PerfilFundacion";
import { InformacionFundacion } from "./components/InformacionFundacion";
import { PublicacionesFundacion } from "./components/PublicacionesFundacion";
import { ConvocatoriasRecientesFundacion } from "./components/ConvocatoriasRecientesFundacion";
import { FundacionesSugeridas } from "./components/FundacionesSugeridas";
import { NuevaPublicacion } from "./components/NuevaPublicacion";

export const FundacionMain = () => {

  return (
    <>
      <div className="container custom-container">
        <div className="profile-page tx-13">
          <div className="row">
            <PerfilFundacion/>
          </div>
          <div className="row profile-body">
            {/*<!-- left wrapper start -->*/}
            <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                <InformacionFundacion/>
            </div>
            {/*<!-- left wrapper end -->
        <!-- middle wrapper start -->*/}
            <div className="col-md-8 col-xl-6 middle-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin">
                    <NuevaPublicacion/>
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
                    <ConvocatoriasRecientesFundacion/>
                </div>
                <div className="col-md-12 grid-margin">
                    <FundacionesSugeridas/>
                </div>
              </div>
            </div>
            {/* <!-- right wrapper end --> */}
          </div>
        </div>
      </div>
    </>
  );
};