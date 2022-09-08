import Swal                 from 'sweetalert2';
import store                from '../store/store';
import  { user_delete }     from '../actions/user_action';
export const  SweetAlertBasic = (icon, title, text) => {
    return Swal.fire({
        icon: icon,
        title: title,
        text: text
    })
}

export const SweetAlertConfirm = (data,title,textTitle) =>{
    return Swal.fire({
        title: textTitle,
        text: title + data.name_user ,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            store.dispatch( user_delete(data.id_user) );
        }
    })
}
