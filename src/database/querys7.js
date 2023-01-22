export const queries7 = {
    getConsultaLoteProduccion: 'SELECT * FROM Lote_produccion',

    crearNuevosLoteProduccion: 
    "INSERT INTO Lote_produccion (Id_ref_lote, Fecha_entrada_pollos, Fecha_sacrificio_final, Cantidad_inicial_pollos, Costo_pollo_unidad, Total_pollos_muertos, Mortalidad, Consumo_pollo, Total_pollos_sacrificados, Cantidad_total_alimento, Valor_total_alimento, Costo_total_lote ) VALUES (@Id_ref_lote, @Fecha_entrada_pollos, @Fecha_sacrificio_final, @Cantidad_inicial_pollos, @Costo_pollo_unidad, @Total_pollos_muertos, @Mortalidad, @Consumo_pollo, @Total_pollos_sacrificados, @Cantidad_total_alimento, @Valor_total_alimento, @Costo_total_lote)select SCOPE_IDENTITY() Id_lote_produccion",

    getConsultaLoteProduccionId:
    'SELECT * FROM Lote_produccion WHERE Id_lote_produccion = @Id',

    eliminarLoteProduccionId:
    'DELETE FROM Lote_produccion WHERE Id_lote_produccion = @Id',

    getTotalLoteProduccion:
    'SELECT COUNT(*) FROM Lote_produccion',

    editarLoteProduccionId:
    'UPDATE Lote_produccion SET Id_ref_lote = @Id_ref_lote, Fecha_entrada_pollos = @Fecha_entrada_pollos, Fecha_sacrificio_final = @Fecha_sacrificio_final, Cantidad_inicial_pollos = @Cantidad_inicial_pollos, Costo_pollo_unidad = @Costo_pollo_unidad, Total_pollos_muertos = @Total_pollos_muertos, Mortalidad = @Mortalidad, Consumo_pollo = @Consumo_pollo, Total_pollos_sacrificados = @Total_pollos_sacrificados, Cantidad_total_alimento = @Cantidad_total_alimento, Valor_total_alimento = @Valor_total_alimento, Costo_total_lote = @Costo_total_lote  WHERE Id_lote_produccion = @Id ',

    terminarLoteId:
    'UPDATE Lote_produccion SET  Fecha_sacrificio_final = @Fecha_sacrificio_final,  Total_pollos_muertos = @Total_pollos_muertos, Mortalidad = @Mortalidad, Consumo_pollo = @Consumo_pollo, Total_pollos_sacrificados = @Total_pollos_sacrificados, Cantidad_total_alimento = @Cantidad_total_alimento, Valor_total_alimento = @Valor_total_alimento, Costo_total_lote = @Costo_total_lote  WHERE Id_lote_produccion = @Id ',

    getConsultarLoteProduccionRef:
    'SELECT * FROM Lote_produccion WHERE Id_ref_lote = @Id_ref',

    getConsultaFechaProdiccionLotes:
    "select Fecha_entrada_pollos from Lote_produccion where Id_lote_produccion= @Id"

    }