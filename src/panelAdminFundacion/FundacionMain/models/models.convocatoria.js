export const Convocatoria = {
    _id: "",
    titulo: "",
    descripcion: "",
    lugar: "",
    cupo: 1,
    estado:true,
    fechaHoraStart: new Date().toISOString().slice(0, 10),
    horaInicio:new Date().toLocaleTimeString( {hour12: false}),
    fechaHoraEnd: new Date().toISOString().slice(0, 10),
    horaFinal: new Date().toLocaleTimeString( {hour12: false}),
    imagen:new FormData(),
};