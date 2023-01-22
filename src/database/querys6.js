export const queries6 = {
getConsultaGastosProduccion: 'SELECT * FROM Gastos_produccion',
    
crearNuevosGastosProduccion: 
"INSERT INTO Gastos_produccion (Id_ref_lote_produccion, Gasto_creado, Precio, Cantidad, Descripcion_gasto, Fecha_gasto ) VALUES (@Id_ref_lote_produccion, @Gasto_creado, @Precio, @Cantidad, @Descripcion_gasto, @Fecha_gasto )",

getConsultaGastosProduccionId:
'SELECT * FROM Gastos_produccion WHERE Id_gastos_produccion = @Id',

eliminarGastosProduccionId:
'DELETE FROM Gastos_produccion WHERE Id_gastos_produccion = @Id',

getTotalGastosProduccion:
'SELECT COUNT(*) FROM Gastos_produccion',

editarGastosProduccionId:
'UPDATE Gastos_produccion SET Id_ref_lote_produccion = @Id_ref_lote_produccion, Gasto_creado = @Gasto_creado, Precio = @Precio, Cantidad = @Cantidad, Descripcion_gasto = @Descripcion_gasto, Fecha_gasto = @Fecha_gasto    WHERE Id_gastos_produccion = @Id ',

getConsultaGastosProduccionRef:
'SELECT * FROM Gastos_produccion WHERE Id_ref_lote_produccion = @Id_ref',

}