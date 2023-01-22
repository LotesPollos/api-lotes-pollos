export const queries12 = {

    getConsultaEstadoUsuario: 'SELECT * FROM Estado_usuario',

    crearNuevosEstadoUsuario: 
    "INSERT INTO Estado_usuario (Id_ref_usuario, Estado, Permiso ) VALUES (@Id_ref_usuario, @Estado, @Permiso)",

    getConsultaEstadoUsuarioId:
    'SELECT * FROM Estado_usuario WHERE Id_estado_usuario = @Id',

    eliminarEstadoUsuarioId:
    'DELETE FROM Estado_usuario WHERE Id_estado_usuario = @Id',

    getTotalEstadoUsuario:
    'SELECT COUNT(*) FROM Estado_usuario',

    editarEstadoUsuarioId:
    'UPDATE Estado_usuario SET  Id_ref_usuario = @Id_ref_usuario, Estado = @Estado, Permiso = @Permiso  WHERE Id_estado_usuario = @Id ',

    editarCrearEstadoUsuario:
    'SELECT * FROM Estado_usuario where Id_ref_usuario = @Id_ref_usuario ',

    }