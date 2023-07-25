import axios from 'axios';
import Swal from 'sweetalert2';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { v4 } from 'uuid'

const token = localStorage.getItem('token');

const URL = "http://localhost:8080/api/voluntario/";
//key de proyecto en firebase web
//cambiar esto si quisieran usar otra 
const firebaseConfig = {
    apiKey: "AIzaSyD1Go1pZfYc8JJi1mpYUUU9iF53iOQvuX0",
    authDomain: "backend-voluntariados.firebaseapp.com",
    projectId: "backend-voluntariados",
    storageBucket: "backend-voluntariados.appspot.com",
    messagingSenderId: "723006313779",
    appId: "1:723006313779:web:0b4878d5bdca8364fa1a46",
    measurementId: "G-RP833KQFGM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
//agregar archivos a firebase
export async function uploadFile(file) {
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef);
    return url

}
//eliminar archivo
export async function eliminar(name) {
    const storage = getStorage();
    const desertRef = ref(storage, name);

    deleteObject(desertRef).then(() => {
        console.log("todo bien");
    }).catch((Error) => {
        console.log("todo mal");
    })
}
export const apiGetPdf = async () => {
    try {

        const { data: { voluntario } } = await axios.get(`${URL}voluntario`,
            { headers: { "x-token": token } });

        return voluntario;

    } catch ({ response: { data: { msg } } }) {
        if (msg === "Token no válido") {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                } else {
                }
            });
        }
    }

}
export const apiGetPdfArchivo = async (nombre) => {

    try {
        const { data: { fileUrl } } = await axios.get(`${URL}fileVoluntario/${nombre}`);
        console.log(fileUrl);
        return fileUrl;

    } catch ({ response: { data: { msg } } }) {
        if (msg === "Token no válido") {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/';
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                } else {
                }
            });
        }
    }

}
export const apiPostVoluntario = async (nombre, correo, password, telefono, direccion, fileCv,fileDpi,fileAntecedentes,photoFondo,photoPerfil) => {
    
    try {

        const userSavecv = await axios.post(`${URL}save`, {
            nombre: nombre,
            correo: correo,
            password: password,
            telefono: telefono,
            direccion: direccion,
            CV: fileCv,
            DPI: fileDpi,
            antecedentes: fileAntecedentes,
            fotoPerfil: photoPerfil,
            fotoFondo: photoFondo   
        });

        return true;

    } catch ({ response: { data: { msg } } }) {

        if (msg === 'el token ha expirado') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/';
                }
            });
        } {
            Swal.fire({
                icon: 'error',
                title: 'Error al agregar',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}
export const apiUpdateVoluntario = async (id, nombre, correo, password, telefono, direccion, fileCv,fileDpi,fileAntecedentes,photoFondo,photoPerfil) => {
    try {
        const userSavecv = await axios.put(`${URL}editar/${id}`, {
            id: id,
            nombre: nombre,
            correo: correo,
            password: password,
            telefono: telefono,
            direccion: direccion,
            CV: fileCv,
            DPI: fileDpi,
            antecedentes: fileAntecedentes,
            fotoPerfil: photoPerfil,
            fotoFondo: photoFondo  
        });

        return true;

    } catch ({ response: { data: { msg } } }) {

        if (msg === 'el token ha expirado') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        } {
            Swal.fire({
                icon: 'error',
                title: 'Error al editar',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}

export const apiVoluntarioDelete = async (id) => {
    try {
        const { } = await axios.delete(`${URL}/eliminar/${id}`);
        return true;
    } catch ({ response: { data: { msg } } }) {

        if (msg === "Token no válido") {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
        if (msg) {
            return msg;
        }
    }

}
