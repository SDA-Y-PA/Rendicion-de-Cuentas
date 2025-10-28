var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Municipios_1 = new ol.format.GeoJSON();
var features_Municipios_1 = format_Municipios_1.readFeatures(json_Municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_1.addFeatures(features_Municipios_1);
var lyr_Municipios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_1, 
                style: style_Municipios_1,
                popuplayertitle: 'Municipios',
                interactive: true,
    title: 'Municipios<br />\
    <img src="styles/legend/Municipios_1_0.png" /> Centro<br />\
    <img src="styles/legend/Municipios_1_1.png" /> Nevados<br />\
    <img src="styles/legend/Municipios_1_2.png" /> Norte<br />\
    <img src="styles/legend/Municipios_1_3.png" /> Oriente<br />\
    <img src="styles/legend/Municipios_1_4.png" /> Sur Oriente<br />\
    <img src="styles/legend/Municipios_1_5.png" /> Sur<br />' });

lyr_ESRISatellite_0.setVisible(true);lyr_Municipios_1.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Municipios_1];
lyr_Municipios_1.set('fieldAliases', {'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'Nombre del Municipio', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_CCNCT': 'MPIO_CCNCT', 'MPIO_NANO': 'MPIO_NANO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ORIG_FID': 'ORIG_FID', 'dfsfds': 'dfsfds', 'Tabla inverción SDA qgis Nombres FN_INVER_MPIO': 'Inversión:', 'Tabla inverción SDA qgis Nombres FN_PROY_MPIO': 'Proyectos:', 'Tabla inverción SDA qgis Nombres FN_BENF_MPIO': 'Beneficiarios:', 'Tabla inverción SDA qgis Nombres FN_CAD_MPIO': 'Tabla inverción SDA qgis Nombres FN_CAD_MPIO', });
lyr_Municipios_1.set('fieldImages', {'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CRSLC': 'TextEdit', 'MPIO_NAREA': 'TextEdit', 'MPIO_CCNCT': 'TextEdit', 'MPIO_NANO': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ORIG_FID': 'TextEdit', 'dfsfds': 'TextEdit', 'Tabla inverción SDA qgis Nombres FN_INVER_MPIO': 'TextEdit', 'Tabla inverción SDA qgis Nombres FN_PROY_MPIO': 'TextEdit', 'Tabla inverción SDA qgis Nombres FN_BENF_MPIO': 'TextEdit', 'Tabla inverción SDA qgis Nombres FN_CAD_MPIO': 'TextEdit', });
lyr_Municipios_1.set('fieldLabels', {'DPTO_CCDGO': 'hidden field', 'MPIO_CCDGO': 'hidden field', 'MPIO_CNMBR': 'inline label - always visible', 'MPIO_CRSLC': 'hidden field', 'MPIO_NAREA': 'hidden field', 'MPIO_CCNCT': 'hidden field', 'MPIO_NANO': 'hidden field', 'DPTO_CNMBR': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ORIG_FID': 'hidden field', 'dfsfds': 'hidden field', 'Tabla inverción SDA qgis Nombres FN_INVER_MPIO': 'inline label - always visible', 'Tabla inverción SDA qgis Nombres FN_PROY_MPIO': 'inline label - always visible', 'Tabla inverción SDA qgis Nombres FN_BENF_MPIO': 'inline label - always visible', 'Tabla inverción SDA qgis Nombres FN_CAD_MPIO': 'hidden field', });
lyr_Municipios_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});