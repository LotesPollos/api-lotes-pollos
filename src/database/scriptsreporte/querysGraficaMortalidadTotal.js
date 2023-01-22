export const queriesgraficamortalidadtotal = {
    getConsultaGraficaMortalidadTotal: 
    "select (Total_pollos_muertos *100/Cantidad_inicial_pollos)j ,100-(Total_pollos_muertos *100/Cantidad_inicial_pollos)j from Lote_produccion where Id_ref_lote = @Id ",
}