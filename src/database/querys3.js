export const queries3 = {
    getConsultaRegProduccionAlimento: 'SELECT * FROM Reg_produccion_alimento',

    crearNuevosRegProduccionAlimento: 
    "INSERT INTO Reg_produccion_alimento (Id_ref_lote_produccion ,Fecha_compra ,Cantidad_alimento ,Valor_alimento ,Descripcion_alimento ,Precio_compra ) VALUES (@Id_ref_lote_produccion ,@Fecha_compra ,@Cantidad_alimento ,@Valor_alimento ,@Descripcion_alimento ,@Precio_compra)",

    getConsultaRegProduccionAlimentoId:
    'SELECT * FROM Reg_produccion_alimento WHERE Id_produccion_alimento = @Id',

    eliminarRegProduccionAlimentoId:
    'DELETE FROM Reg_produccion_alimento WHERE Id_produccion_alimento = @Id',

    getTotalRegProduccionAlimento:
    'SELECT COUNT(*) FROM Reg_produccion_alimento ',

    editarRegProduccionAlimentoId:
    'UPDATE Reg_produccion_alimento SET Id_ref_lote_produccion = @Id_ref_lote_produccion, Fecha_compra = @Fecha_compra, Cantidad_alimento = @Cantidad_alimento, Valor_alimento = @Valor_alimento, Descripcion_alimento = @Descripcion_alimento, Precio_compra = @Precio_compra WHERE Id_produccion_alimento = @Id ',

    getConsultaRegProduccionAlimentoRef:
    'SELECT * FROM Reg_produccion_alimento WHERE Id_ref_lote_produccion = @Id_ref',

}