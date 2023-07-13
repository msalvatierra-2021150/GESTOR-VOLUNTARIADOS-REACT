export const Convocatoria = ({ matches }) => {
    if (matches.length === 0) return null;
    if (!Array.isArray(matches) || matches.length === 0) return null;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: "numeric", month: "numeric", day: "numeric" };
        return date.toLocaleDateString("es-ES", options);
    };
    
    return (
        matches.map((c) => {
            return (
                <div className="card mb-3" key={c._id}>
                    <div className="card-body">
                        <p className="card-title">Titulo: {c.titulo}</p>
                        <p className="card-text">
                            <small className="text-muted">Fundación encargada: {c.fundacion.nombre}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Cupo disponible: {c.cupo}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Lugar: {c.lugar}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Fecha inicio: {formatDate(c.fecha_inicio)}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Fecha fin: {formatDate(c.fecha_fin)}</small>
                        </p>
                    </div>
                </div>
            )
        })
    )
}