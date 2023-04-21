import React from 'react';
const Card = () => {
    return <div className="row card">
        <h2 className="py-3 text-center card-header">Acerca de nosotros</h2>
        <div className="p-3 card-body row">
            <div className="col">
                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <h4>¿Quiénes somos?</h4>
                            </button>
                        </h2>
                        <div key="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body text-start">
                                Sómos una empresa que brinda un servicio de calidad de transporte y al mismo tiempo un servicio turistico. Nuestros clientes podran elegir diferentes lugares turisticos del pais y uno de nuestros guias conductor realizara el trabajo.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" key="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <h4>¿Qué servicio proporcionamos?</h4>
                            </button>
                        </h2>
                        <div key="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body text-start">
                                Brindamos un servicio de calidad, donde podra programar una visita a un sitio turistico y el traslado al mismo tiempo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Card;