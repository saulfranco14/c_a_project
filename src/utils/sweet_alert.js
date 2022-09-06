import Swal                             from 'sweetalert2';
export const  SweetAlertBasic = (icon, title, text) => {
    return Swal.fire({
        icon: icon,
        title: title,
        text: text
    })
}
