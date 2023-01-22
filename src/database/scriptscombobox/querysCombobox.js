export const queriescombobox = {
    getConsultaCombobox: 
    "select FORMAT(Fecha_gasto,'yyyy')       as año      FROM  [dbo].[Gastos_produccion] union select FORMAT(Fecha_gasto,'yyyy')             as año    FROM[dbo].[Gastos_ventas] union select FORMAT(Fecha_entrada_pollos,'yyyy')         as año  FROM Lote_produccion union select FORMAT([Fecha_creacion_lote_sistema],'yyyy')   as año  FROM [dbo].[Lotes] union select FORMAT(Fecha_compra,'yyyy')                 as año   FROM [dbo].[Reg_produccion_alimento] ORDER BY año desc",

}