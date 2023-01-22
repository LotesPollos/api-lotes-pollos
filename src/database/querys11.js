export const queries11 = {

    getConsultaProduccionVenta: 'SELECT * FROM Produccion_venta',

    crearNuevosProduccionVenta: 
    "INSERT INTO Produccion_venta (Conversion, Ganancia_neta, Id_ref_lote_venta, Id_ref_lote_produccion ) VALUES (@Conversion, @Ganancia_neta, @Id_ref_lote_venta, @Id_ref_lote_produccion)",

    getConsultaProduccionVentaId:
    'SELECT * FROM Produccion_venta WHERE Id_produccion_venta = @Id',

    eliminarProduccionVentaId:
    'DELETE FROM Produccion_venta WHERE Id_produccion_venta = @Id',

    getTotalProduccionVenta:
    'SELECT COUNT(*) FROM Produccion_venta',

    editarProduccionVentaId:
    'UPDATE Produccion_venta SET  Conversion = @Conversion, Ganancia_neta = @Ganancia_neta, Id_ref_lote_venta = @Id_ref_lote_venta, Id_ref_lote_produccion = @Id_ref_lote_produccion WHERE Id_produccion_venta = @Id ',

    }