import Button                       from '@mui/material/Button';
import Link                         from "@material-ui/core/Link";
import { SweetAlertConfirm }        from '../utils/sweet_alert';

export const ColumnsUser = [
    { field: 'name_user' ,                      headerName: 'Nombre',                   width: 150 },
    { field: 'first_name_user' ,                headerName: 'Apellido Paterno',         width: 150 },
    { field: 'last_name_user' ,                 headerName: 'Apellido Materno',         width: 150 },
    { field: 'email_user',                      headerName: 'Email',                    width: 200 },
    // { field: 'telefono_usuario',                    headerName: 'Telefono Celular',         width: 200 },
    // {
    //     field           : "telefono_usuario",
    //     headerName      : "Telefono Celular",
    //     sortable        : false,
    //     width           : 150,
    //     disableClickEventBubbling: true,
    //     renderCell: ( params ) => {
    //     return <Link href={`tel:${params.row.telefono_usuario}`}>{params.row.telefono_usuario}</Link>
    //         ;
    //     }
    // },
    { field: 'id_rol',                                  headerName: 'Rol',                      width: 100 },
    {
        field: "",
        headerName: "Editar",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: ( params ) => {
        return  <Button
                    variant     ="contained"
                    color       ="warning"
                    size        ="small"
                >
                    <Link
                        style   ={ {color:"#ffff", textDecoration:"none"} }
                        href    ={`/user/${params.row.id_user}`}
                    >
                        Editar
                    </Link>
                </Button>;
        }
    },
    {
        field: "eliminar",
        headerName: "Eliminar",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: ( params ) => {
        return  <Button
                    variant     ="contained"
                    color       ="error"
                    size        ="small"
                    onClick     = { ()=> deleteUser(params.row, "Quieres eliminar al usuario: ") }
                >
                    Eliminar
                </Button>;
        }
    }

];

const deleteUser = (team, title) =>{
    SweetAlertConfirm(team,title,"¿Estas Seguro?");
}