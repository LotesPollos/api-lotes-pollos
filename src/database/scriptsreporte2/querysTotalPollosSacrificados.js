export const queriestotalpollossacrificados = {
    getConsultaTotalPollosSacrificados : 
"select case when sum(Total_Pollos_Sacrificados) is null then 0 else sum(Total_Pollos_Sacrificados) end tps from Lotes INNER JOIN  Lote_produccion pv ON  pv.Id_ref_lote = Id_lote WHERE  year(Fecha_terminacion_lote_sistema) = @Year And Estado_lote = 'Terminado'",
}