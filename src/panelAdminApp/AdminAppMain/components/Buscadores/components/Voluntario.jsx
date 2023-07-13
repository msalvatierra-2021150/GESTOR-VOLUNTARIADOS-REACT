export const Voluntario = ({ matches }) => {
    if (matches.length === 0) return null;
    if (!Array.isArray(matches) || matches.length === 0) return null;
    
    return (
        matches.map((v) => {
            return (
                <div className="card mb-3" key={v._id}>
                    <div className="card-body">
                        <p className="card-title">Nombre: {v.nombre}</p>
                        <p className="card-text">Correo: {v.correo}</p>
                    </div>
                </div>
            )
        })
    )
}