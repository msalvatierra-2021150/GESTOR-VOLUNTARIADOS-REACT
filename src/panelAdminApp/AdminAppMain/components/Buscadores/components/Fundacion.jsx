export const Fundacion = ({ matches }) => {
    if (matches.length === 0) return null;
    if (!Array.isArray(matches) || matches.length === 0) return null;
    
    return (
        matches.map((f) => {
            return (
                <div className="card mb-3" key={f._id}>
                    <div className="card-body">
                        <p className="card-title">Nombre: {f.nombre}</p>
                        <p className="card-text">Correo: {f.correo}</p>
                        <p className="card-text">
                            <small className="text-muted">Sitio web: {f.sitio_web}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Telefono: {f.telefono}</small>
                        </p>
                    </div>
                </div>
            )
        })
    )
}