import axios from 'axios';
import Swal from 'sweetalert2';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { v4 } from 'uuid'

const token = localStorage.getItem('token');

const URL = "https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/adminFundacion/";
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

export const apiGetFundacion = async () => {
    try { 

        const { data: { fundacion } } = await axios.get(`${URL}mostrar`,
            { headers: { "x-token": token } });
        console.log(fundacion);
        return fundacion;

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

export const apiPostFundacion = async ( nombre,acerca_de,correo,password,sitio_web,telefono,direccion,horarios,fotoPerfil,fotoFondo,facebook,instagram,twitter) => {
   
    try {
        
        const userSavecv = await axios.post(`${URL}agregar`,{
               nombre:nombre,
               acerca_de:acerca_de,
               correo:correo,
               password:password,
               sitio_web:sitio_web,
               telefono:telefono,
               direccion:direccion,
               horarios:horarios,
               fotoPerfil:fotoPerfil,
               fotoFondo:fotoFondo,
               facebook:facebook,
               instagram:instagram,
               twitter:twitter,
        },{
            headers:{'x-token':token}
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

export const apiUpdateFundacion = async (id, nombre,acerca_de,correo,password,sitio_web,telefono,direccion,horarios,fotoFondo,fotoPerfil,facebook,instagram,twitter) => {
    try {
       const userSavecv = await axios.put(`${URL}editar`,{
              id:id,
              nombre:nombre,
              acerca_de:acerca_de,
              correo:correo,
              password:password,
              sitio_web:sitio_web,
              telefono:telefono,
              direccion:direccion,
              horarios:horarios,
              fotoPerfil:fotoPerfil,
              fotoFondo:fotoFondo,
              facebook:facebook,
              instagram:instagram,
              twitter:twitter,
       },{
           headers:{'x-token':token}
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