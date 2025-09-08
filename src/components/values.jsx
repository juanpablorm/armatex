import './values.css'

function Values() {
    return (
        <div className="values-container">
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-3">
                    <p className="values-cardTitle"><i class="icon fa-regular fa-circle-check"></i> COMPROMISO</p>
                    <p className="values-cardText">Nos dedicamos a cumplir cada proyecto con la más alta calidad, cumpliendo con nuestros plazos y superando las expectativas de nuestros clientes.</p>
                </div>
                <div className="col-12 col-md-1">
                    <div className="values-line">
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <p className="values-cardTitle"><i class="icon fa-regular fa-lightbulb"></i> INNOVACIÓN</p>
                    <p className="values-cardText">Siempre buscamos nuevas formas de mejorar nuestros procesos y ofrecer soluciones creativas que impulsen el éxito de nuestros proyectos.</p>
                </div>
                <div className="col-12 col-md-1">
                    <div className="values-line">
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <p className="values-cardTitle"><i class="icon fa-regular fa-handshake"></i> INTEGRIDAD</p>
                    <p className="values-cardText">Trabajamos con transparencia y honestidad, construyendo relaciones de confianza con nuestros clientes y colaboradores.</p>
                </div>
            </div>
        </div>
    );
}

export default Values;