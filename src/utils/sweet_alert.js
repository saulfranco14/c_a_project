import Swal                 from 'sweetalert2';
import store                from '../store/store';
import  { user_delete }     from '../actions/user_action';
import  { role_delete }     from '../actions/role_action';
export const  SweetAlertBasic = (icon, title, text) => {
    return Swal.fire({
        icon: icon,
        title: title,
        text: text
    })
}

export const SweetAlertConfirm = (data,title,textTitle, module) =>{
    return Swal.fire({
        title: textTitle,
        text: title ,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            module === 'user' ?
                store.dispatch( user_delete(data.id_user) )
            :
                store.dispatch( role_delete(data.id_rol) )
        }
    })
}
