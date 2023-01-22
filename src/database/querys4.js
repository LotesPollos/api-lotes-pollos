export const queries4 = {
    getConsultaRegProduccionMortalidad: 'SELECT * FROM Reg_produccion_mortalidad',
    
    crearNuevosRegProduccionMortalidad: 
    "INSERT INTO Reg_produccion_mortalidad (Id_ref_lote_produccion, Fecha_reg_mortalidad, Cantidad_pollos_muertos ) VALUES (@Id_ref_lote_produccion ,@Fecha_reg_mortalidad ,@Cantidad_pollos_muertos )",

    getConsultaRegProduccionMortalidadId:
    'SELECT * FROM Reg_produccion_mortalidad WHERE Id_reg_produccion_mortalidad = @Id',

    eliminarRegProduccionMortalidadId:
    'DELETE FROM Reg_produccion_mortalidad WHERE Id_reg_produccion_mortalidad = @Id',

    getTotalRegProduccionMortalidad:
    'SELECT COUNT(*) FROM Reg_produccion_mortalidad',

    editarRegProduccionMortalidadId:
    'UPDATE Reg_produccion_mortalidad SET Id_ref_lote_produccion = @Id_ref_lote_produccion,  Fecha_reg_mortalidad = @Fecha_reg_mortalidad, Cantidad_pollos_muertos = @Cantidad_pollos_muertos   WHERE Id_reg_produccion_mortalidad = @Id ',

    getConsultaRegProduccionMortalidadRef:
    'SELECT * FROM Reg_produccion_mortalidad WHERE Id_ref_lote_produccion = @Id_ref',

}