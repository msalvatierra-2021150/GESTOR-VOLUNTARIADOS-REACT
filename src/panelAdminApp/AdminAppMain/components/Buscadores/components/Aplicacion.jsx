export const Aplicacion = ({ matches }) => {
    if (matches === undefined) return null;
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: "numeric", month: "numeric", day: "numeric" };
        return date.toLocaleDateString("es-ES", options);
    };
    return (
        <div className="card mb-3" key={matches.aplicacion._id}>
            <div className="card-body">
                <p className="card-title">Estado: {matches.aplicacion.estado}</p>
                <p className="card-text">
                    <small className="text-muted">ID voluntario: {matches.aplicacion.voluntario._id}</small>
                </p>
                <p className="card-text">
                    <small className="text-muted">Nombre voluntario: {matches.aplicacion.voluntario.nombre}</small>
                </p>
                <p className="card-text">
                    <small className="text-muted">ID convocatoria: {matches.aplicacion.convocatoria._id}</small>
                </p>
                <p className="card-text">
                    <small className="text-muted">Titulo convocatoria: {matches.aplicacion.convocatoria.titulo}</small>
                </p>
                <p className="card-text">
                    <small className="text-muted">Fecha aplicación: {formatDate(matches.aplicacion.fecha)}</small>
                </p>
            </div>
        </div>
    );
}
