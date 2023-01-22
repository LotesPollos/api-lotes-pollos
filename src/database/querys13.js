export const queries13 = {

    getConsultaLotes: 'SELECT * FROM Lotes',

    crearNuevosLotes: 
    "INSERT INTO Lotes (Fecha_creacion_lote_sistema, Fecha_terminacion_lote_sistema, Estado_lote, Id_referencia_usuario ) VALUES (@Fecha_creacion_lote_sistema, @Fecha_terminacion_lote_sistema, @Estado_lote, @Id_referencia_usuario) select SCOPE_IDENTITY() Id",

    getConsultaLotesId:
    'SELECT * FROM Lotes WHERE Id_lote = @Id',

    eliminarLotesId:
    'DELETE FROM Lotes WHERE Id_lote = @Id',

    getTotalLotes:
    'SELECT COUNT(*) FROM Lotes',

    editarLotesId:
    'UPDATE Lotes SET  Fecha_terminacion_lote_sistema = @Fecha_terminacion_lote_sistema, Estado_lote = @Estado_lote, Id_referencia_usuario = @Id_referencia_usuario WHERE Id_lote = @Id ',

    getConsultaTablaLotes:
    'select  Id_lote,Fecha_creacion_lote_sistema, Fecha_terminacion_lote_sistema, Estado_lote, Nombre_usuario from Lotes  inner join Usuarios u on  u.Id_usuario =  Id_referencia_usuario order by Fecha_creacion_lote_sistema desc',

    }