var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Partenaires_Cessma_point_0 = new ol.format.GeoJSON();
var features_Partenaires_Cessma_point_0 = format_Partenaires_Cessma_point_0.readFeatures(json_Partenaires_Cessma_point_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Partenaires_Cessma_point_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Partenaires_Cessma_point_0.addFeatures(features_Partenaires_Cessma_point_0);var lyr_Partenaires_Cessma_point_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Partenaires_Cessma_point_0, 
                style: style_Partenaires_Cessma_point_0,
                title: '<img src="styles/legend/Partenaires_Cessma_point_0.png" /> Partenaires_Cessma_point'
            });

lyr_Partenaires_Cessma_point_0.setVisible(true);
var layersList = [baseLayer,lyr_Partenaires_Cessma_point_0];
lyr_Partenaires_Cessma_point_0.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'Continent': 'Continent', 'Pays': 'Pays', 'Axe': 'Axe', 'Axe_code': 'Axe_code', 'Nom_instit': 'Nom_instit', 'Website_in': 'Website_in', 'Type_parte': 'Type_parte', 'Type_part_': 'Type_part_', 'Engagement': 'Engagement', 'Projet_nom': 'Projet_nom', 'Projet_Fin': 'Projet_Fin', 'Projet_web': 'Projet_web', 'Projet_per': 'Projet_per', 'Chercheur1': 'Chercheur1', 'Chercheur2': 'Chercheur2', 'Chercheur3': 'Chercheur3', 'Chercheur4': 'Chercheur4', 'Chercheur5': 'Chercheur5', });
lyr_Partenaires_Cessma_point_0.set('fieldImages', {'NAME': 'Hidden', 'LAYER': 'Hidden', 'Continent': 'TextEdit', 'Pays': 'TextEdit', 'Axe': 'TextEdit', 'Axe_code': 'Hidden', 'Nom_instit': 'TextEdit', 'Website_in': 'TextEdit', 'Type_parte': 'TextEdit', 'Type_part_': 'Hidden', 'Engagement': 'Hidden', 'Projet_nom': 'TextEdit', 'Projet_Fin': 'TextEdit', 'Projet_web': 'TextEdit', 'Projet_per': 'TextEdit', 'Chercheur1': 'TextEdit', 'Chercheur2': 'TextEdit', 'Chercheur3': 'TextEdit', 'Chercheur4': 'TextEdit', 'Chercheur5': 'TextEdit', });
lyr_Partenaires_Cessma_point_0.set('fieldLabels', {'Continent': 'no label', 'Pays': 'no label', 'Axe': 'inline label', 'Nom_instit': 'inline label', 'Website_in': 'no label', 'Type_parte': 'inline label', 'Projet_nom': 'inline label', 'Projet_Fin': 'no label', 'Projet_web': 'no label', 'Projet_per': 'no label', 'Chercheur1': 'no label', 'Chercheur2': 'no label', 'Chercheur3': 'no label', 'Chercheur4': 'no label', 'Chercheur5': 'no label', });
lyr_Partenaires_Cessma_point_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});