export const queries8 = {
    getConsultaLoteVentasRegistro: 'SELECT * FROM Lote_ventas_registro',

    crearNuevosLoteVentasRegistro: 
    "INSERT INTO Lote_ventas_registro (Id_ref_lote_venta, Id_referencia_cliente, Fecha_venta, Valor_unidad_peso, Cantidad, Cantidad_pollos, Total_venta ) VALUES (@Id_ref_lote_venta, @Id_referencia_cliente, @Fecha_venta, @Valor_unidad_peso, @Cantidad, @Cantidad_pollos, @Total_venta)",

    getConsultaLoteVentasRegistroId:
    'SELECT * FROM Lote_ventas_registro WHERE Id_lote_ventas_registro = @Id',

    eliminarLoteVentasRegistroId:
    'DELETE FROM Lote_ventas_registro WHERE Id_lote_ventas_registro = @Id',

    getTotalLoteVentasRegistro:
    'SELECT COUNT(*) FROM Lote_ventas_registro',

    editarLoteVentasRegistroId:
    'UPDATE Lote_ventas_registro SET Id_ref_lote_venta = @Id_ref_lote_venta, Id_referencia_cliente = @Id_referencia_cliente, Fecha_venta = @Fecha_venta, Valor_unidad_peso = @Valor_unidad_peso, Cantidad = @Cantidad , Cantidad_pollos = @Cantidad_pollos, Total_venta = @Total_venta  WHERE Id_lote_ventas_registro = @Id ',

    getConsultaLoteVentasRegistroRef:
    'SELECT * FROM Lote_ventas_registro WHERE Id_ref_lote_venta = @Id_ref',

    getConsultaTablaLoteVentasRegistro:
    'select Fecha_venta,Identificacion_cliente, Nombre,Valor_unidad_peso,Cantidad,Cantidad_pollos,Total_venta,Id_lote_ventas_registro,Id_referencia_cliente from Lote_ventas_registro inner join Cliente lv on  lv.Id_Cliente =  Id_referencia_cliente where Id_ref_lote_venta = @Id',
    }