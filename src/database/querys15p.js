export const queries15p = {

    getConsultaValorUnidadMedida: 'SELECT * FROM Valor_unidad_medida',

    crearNuevosValorUnidadMedida: 
    "INSERT INTO Valor_unidad_medida (Fecha, Descripcion, Valor ) VALUES (@Fecha, @Descripcion, @Valor)",

    getConsultaValorUnidadMedidaId:
    'SELECT * FROM Valor_unidad_medida WHERE Id_valor_unidad_medida = @Id',

    eliminarValorUnidadMedidaId:
    'DELETE FROM Valor_unidad_medida WHERE Id_valor_unidad_medida = @Id',

    getTotalValorUnidadMedida:
    'SELECT COUNT(*) FROM Valor_unidad_medida',

    editarValorUnidadMedidaId:
    'UPDATE Valor_unidad_medida SET Fecha = @Fecha, Descripcion = @Descripcion , Valor = @Valor  WHERE Id_valor_unidad_medida = @Id ',

    }