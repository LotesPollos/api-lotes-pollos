export const queries5 = {
getConsultaRegSacrificioPollo: 'SELECT * FROM Reg_sacrificio_pollo',

crearNuevosRegSacrificioPollo: 
"INSERT INTO Reg_sacrificio_pollo (Id_ref_lote_produccion, Fecha_sacrificio, Cantidad_pollos ) VALUES (@Id_ref_lote_produccion ,@Fecha_sacrificio ,@Cantidad_pollos )",

getConsultaRegSacrificioPolloId:
'SELECT * FROM Reg_sacrificio_pollo WHERE Id_reg_sacrificio_pollo = @Id',

eliminarRegSacrificioPolloId:
'DELETE FROM Reg_sacrificio_pollo WHERE Id_reg_sacrificio_pollo = @Id',

getTotalRegSacrificioPollo:
'SELECT COUNT(*) FROM Reg_sacrificio_pollo',

editarRegSacrificioPolloId:
'UPDATE Reg_sacrificio_pollo SET Id_ref_lote_produccion = @Id_ref_lote_produccion, Fecha_sacrificio = @Fecha_sacrificio, Cantidad_pollos = @Cantidad_pollos   WHERE Id_reg_sacrificio_pollo = @Id ',

getConsultaRegSacrificioPolloRef:
'SELECT * FROM Reg_sacrificio_pollo WHERE Id_ref_lote_produccion = @Id_ref',

}