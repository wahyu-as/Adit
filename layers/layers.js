var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MALANGN_1 = new ol.format.GeoJSON();
var features_MALANGN_1 = format_MALANGN_1.readFeatures(json_MALANGN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MALANGN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MALANGN_1.addFeatures(features_MALANGN_1);
var lyr_MALANGN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MALANGN_1, 
                style: style_MALANGN_1,
                popuplayertitle: "MALANGN",
                interactive: false,
                title: '<img src="styles/legend/MALANGN_1.png" /> MALANGN'
            });
var format_Batas_Kecamatan_2 = new ol.format.GeoJSON();
var features_Batas_Kecamatan_2 = format_Batas_Kecamatan_2.readFeatures(json_Batas_Kecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Kecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kecamatan_2.addFeatures(features_Batas_Kecamatan_2);
var lyr_Batas_Kecamatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Kecamatan_2, 
                style: style_Batas_Kecamatan_2,
                popuplayertitle: "Batas_Kecamatan",
                interactive: false,
                title: '<img src="styles/legend/Batas_Kecamatan_2.png" /> Batas_Kecamatan'
            });
var format_jlnMALANG1_3 = new ol.format.GeoJSON();
var features_jlnMALANG1_3 = format_jlnMALANG1_3.readFeatures(json_jlnMALANG1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jlnMALANG1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jlnMALANG1_3.addFeatures(features_jlnMALANG1_3);
var lyr_jlnMALANG1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jlnMALANG1_3, 
                style: style_jlnMALANG1_3,
                popuplayertitle: "jlnMALANG1",
                interactive: false,
                title: '<img src="styles/legend/jlnMALANG1_3.png" /> jlnMALANG1'
            });
var format_shpTempatmakan_4 = new ol.format.GeoJSON();
var features_shpTempatmakan_4 = format_shpTempatmakan_4.readFeatures(json_shpTempatmakan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shpTempatmakan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shpTempatmakan_4.addFeatures(features_shpTempatmakan_4);
var lyr_shpTempatmakan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shpTempatmakan_4, 
                style: style_shpTempatmakan_4,
                popuplayertitle: "shp Tempat makan",
                interactive: true,
    title: 'shp Tempat makan<br />\
    <img src="styles/legend/shpTempatmakan_4_0.png" /> Restoran<br />\
    <img src="styles/legend/shpTempatmakan_4_1.png" /> Rumah makan<br />\
    <img src="styles/legend/shpTempatmakan_4_2.png" /> Warteg<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_MALANGN_1.setVisible(true);lyr_Batas_Kecamatan_2.setVisible(true);lyr_jlnMALANG1_3.setVisible(true);lyr_shpTempatmakan_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MALANGN_1,lyr_Batas_Kecamatan_2,lyr_jlnMALANG1_3,lyr_shpTempatmakan_4];
lyr_MALANGN_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Ha': 'Luasan_Ha', 'Nilai': 'Nilai', 'bobot_kp': 'bobot_kp', 'tb_kp': 'tb_kp', 'jumlah_SM': 'jumlah_SM', 'nilai_sm': 'nilai_sm', 'bobot_sm': 'bobot_sm', 'tb_sm': 'tb_sm', 'total': 'total', 'kelas': 'kelas', 'NAMA1': 'NAMA1', 'ID': 'ID', 'Lembar': 'Lembar', 'Skala': 'Skala', 'HEHEHEHE': 'HEHEHEHE', });
lyr_Batas_Kecamatan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Ha': 'Luasan_Ha', 'Nilai': 'Nilai', 'bobot_kp': 'bobot_kp', 'tb_kp': 'tb_kp', 'jumlah_SM': 'jumlah_SM', 'nilai_sm': 'nilai_sm', 'bobot_sm': 'bobot_sm', 'tb_sm': 'tb_sm', 'total': 'total', 'kelas': 'kelas', 'NAMA1': 'NAMA1', 'ID': 'ID', 'Lembar': 'Lembar', 'Skala': 'Skala', 'HEHEHEHE': 'HEHEHEHE', 'FID_1': 'FID_1', 'LUASAR': 'LUASAR', 'JMLHPEN': 'JMLHPEN', 'KPDTNPEN': 'KPDTNPEN', });
lyr_jlnMALANG1_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_shpTempatmakan_4.set('fieldAliases', {'Nama': 'Nama', 'Jalan': 'Jalan', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', 'Kode_pos': 'Kode_pos', 'Jenis': 'Jenis', '24_Jam': '24_Jam', 'Parkir': 'Parkir', 'X': 'X', 'Y': 'Y', });
lyr_MALANGN_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Nilai': 'TextEdit', 'bobot_kp': 'TextEdit', 'tb_kp': 'TextEdit', 'jumlah_SM': 'TextEdit', 'nilai_sm': 'TextEdit', 'bobot_sm': 'TextEdit', 'tb_sm': 'TextEdit', 'total': 'TextEdit', 'kelas': 'TextEdit', 'NAMA1': 'TextEdit', 'ID': 'TextEdit', 'Lembar': 'TextEdit', 'Skala': 'TextEdit', 'HEHEHEHE': 'TextEdit', });
lyr_Batas_Kecamatan_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Nilai': 'TextEdit', 'bobot_kp': 'TextEdit', 'tb_kp': 'TextEdit', 'jumlah_SM': 'TextEdit', 'nilai_sm': 'TextEdit', 'bobot_sm': 'TextEdit', 'tb_sm': 'TextEdit', 'total': 'TextEdit', 'kelas': 'TextEdit', 'NAMA1': 'TextEdit', 'ID': 'TextEdit', 'Lembar': 'TextEdit', 'Skala': 'TextEdit', 'HEHEHEHE': 'TextEdit', 'FID_1': 'TextEdit', 'LUASAR': 'TextEdit', 'JMLHPEN': 'TextEdit', 'KPDTNPEN': 'TextEdit', });
lyr_jlnMALANG1_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_shpTempatmakan_4.set('fieldImages', {'Nama': 'TextEdit', 'Jalan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', 'Kode_pos': 'TextEdit', 'Jenis': 'TextEdit', '24_Jam': 'TextEdit', 'Parkir': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_MALANGN_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan_Ha': 'no label', 'Nilai': 'no label', 'bobot_kp': 'no label', 'tb_kp': 'no label', 'jumlah_SM': 'no label', 'nilai_sm': 'no label', 'bobot_sm': 'no label', 'tb_sm': 'no label', 'total': 'no label', 'kelas': 'no label', 'NAMA1': 'no label', 'ID': 'no label', 'Lembar': 'no label', 'Skala': 'no label', 'HEHEHEHE': 'no label', });
lyr_Batas_Kecamatan_2.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'WADMKC': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan_Ha': 'no label', 'Nilai': 'no label', 'bobot_kp': 'no label', 'tb_kp': 'no label', 'jumlah_SM': 'no label', 'nilai_sm': 'no label', 'bobot_sm': 'no label', 'tb_sm': 'no label', 'total': 'no label', 'kelas': 'no label', 'NAMA1': 'no label', 'ID': 'no label', 'Lembar': 'no label', 'Skala': 'no label', 'HEHEHEHE': 'no label', 'FID_1': 'no label', 'LUASAR': 'no label', 'JMLHPEN': 'no label', 'KPDTNPEN': 'no label', });
lyr_jlnMALANG1_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_shpTempatmakan_4.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jalan': 'inline label - visible with data', 'Kelurahan': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Kota': 'inline label - visible with data', 'Provinsi': 'inline label - visible with data', 'Kode_pos': 'inline label - visible with data', 'Jenis': 'inline label - visible with data', '24_Jam': 'inline label - visible with data', 'Parkir': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', });
lyr_shpTempatmakan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});