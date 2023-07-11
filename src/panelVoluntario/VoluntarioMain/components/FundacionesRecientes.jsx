import React from "react";
import { Image } from "react-bootstrap";

export const FundacionesRecientes = () => {
  return (
    <>
      <div className="card rounded">
        <div className="card-body">
          <h6 className="card-title">Fundaciones visitadas recientemente</h6>
          <div className="latest-photos">
            <div className="row">
              <div className="col-md-4">
                <figure>
                  <Image
                    className="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-md-4">
                <figure>
                  <Image
                    className="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-md-4">
                <figure>
                  <Image
                    className="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-md-4">
                <figure>
                  <Image
                    className="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar4.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-md-4">
                <figure>
                  <Image
                    className="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-md-4">
                <figure>
                  <Image
                    className="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="mb-0">
                  <Image
                    className="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="mb-0">
                  <Image
                    className="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar8.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="mb-0">
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
