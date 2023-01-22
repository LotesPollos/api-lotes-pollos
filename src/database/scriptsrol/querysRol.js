export const queriesrol = {
    getConsultaRol:
    'select * from Usuarios inner join Estado_usuario on Id_ref_usuario =Id_usuario',

    getBuscar:
    'select * from Usuarios inner join Estado_usuario on Id_ref_usuario =Id_usuario where Id_usuario=@Id',

    getEditar:
    'UPDATE Estado_usuario SET  Id_ref_usuario = @Id_ref_usuario, Estado = @Estado, Permiso = @Permiso  WHERE Id_ref_usuario = @Id',

    getEliminar:
    'delete from Estado_usuario where  Id_ref_usuario =@Id delete from Usuarios where Id_usuario = @Id',
}