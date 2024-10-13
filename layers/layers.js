var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_subdivisions_1 = new ol.format.GeoJSON();
var features_subdivisions_1 = format_subdivisions_1.readFeatures(json_subdivisions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_subdivisions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_subdivisions_1.addFeatures(features_subdivisions_1);
var lyr_subdivisions_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_subdivisions_1, 
                style: style_subdivisions_1,
                popuplayertitle: "subdivisions",
                interactive: true,
                title: '<img src="styles/legend/subdivisions_1.png" /> subdivisions'
            });
var format_6002254Photos_2 = new ol.format.GeoJSON();
var features_6002254Photos_2 = format_6002254Photos_2.readFeatures(json_6002254Photos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6002254Photos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6002254Photos_2.addFeatures(features_6002254Photos_2);
var lyr_6002254Photos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6002254Photos_2, 
                style: style_6002254Photos_2,
                popuplayertitle: "6002254 Photos",
                interactive: true,
                title: '<img src="styles/legend/6002254Photos_2.png" /> 6002254 Photos'
            });
var format_6002256Photos_3 = new ol.format.GeoJSON();
var features_6002256Photos_3 = format_6002256Photos_3.readFeatures(json_6002256Photos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6002256Photos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6002256Photos_3.addFeatures(features_6002256Photos_3);
var lyr_6002256Photos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6002256Photos_3, 
                style: style_6002256Photos_3,
                popuplayertitle: "6002256 Photos",
                interactive: true,
                title: '<img src="styles/legend/6002256Photos_3.png" /> 6002256 Photos'
            });
var format_6002257Photos_4 = new ol.format.GeoJSON();
var features_6002257Photos_4 = format_6002257Photos_4.readFeatures(json_6002257Photos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6002257Photos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6002257Photos_4.addFeatures(features_6002257Photos_4);
var lyr_6002257Photos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6002257Photos_4, 
                style: style_6002257Photos_4,
                popuplayertitle: "6002257 Photos",
                interactive: true,
                title: '<img src="styles/legend/6002257Photos_4.png" /> 6002257 Photos'
            });
var format_6002258Photos_5 = new ol.format.GeoJSON();
var features_6002258Photos_5 = format_6002258Photos_5.readFeatures(json_6002258Photos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6002258Photos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6002258Photos_5.addFeatures(features_6002258Photos_5);
var lyr_6002258Photos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6002258Photos_5, 
                style: style_6002258Photos_5,
                popuplayertitle: "6002258 Photos",
                interactive: true,
                title: '<img src="styles/legend/6002258Photos_5.png" /> 6002258 Photos'
            });
var format_bore_pit_6 = new ol.format.GeoJSON();
var features_bore_pit_6 = format_bore_pit_6.readFeatures(json_bore_pit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bore_pit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bore_pit_6.addFeatures(features_bore_pit_6);
var lyr_bore_pit_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bore_pit_6, 
                style: style_bore_pit_6,
                popuplayertitle: "bore_pit",
                interactive: true,
                title: '<img src="styles/legend/bore_pit_6.png" /> bore_pit'
            });
var format_coupler_7 = new ol.format.GeoJSON();
var features_coupler_7 = format_coupler_7.readFeatures(json_coupler_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coupler_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coupler_7.addFeatures(features_coupler_7);
var lyr_coupler_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coupler_7, 
                style: style_coupler_7,
                popuplayertitle: "coupler",
                interactive: true,
                title: '<img src="styles/legend/coupler_7.png" /> coupler'
            });
var format_direct_burry_junction_8 = new ol.format.GeoJSON();
var features_direct_burry_junction_8 = format_direct_burry_junction_8.readFeatures(json_direct_burry_junction_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_direct_burry_junction_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_direct_burry_junction_8.addFeatures(features_direct_burry_junction_8);
var lyr_direct_burry_junction_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_direct_burry_junction_8, 
                style: style_direct_burry_junction_8,
                popuplayertitle: "direct_burry_junction",
                interactive: true,
                title: '<img src="styles/legend/direct_burry_junction_8.png" /> direct_burry_junction'
            });
var format_flowerpot__coil_9 = new ol.format.GeoJSON();
var features_flowerpot__coil_9 = format_flowerpot__coil_9.readFeatures(json_flowerpot__coil_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flowerpot__coil_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flowerpot__coil_9.addFeatures(features_flowerpot__coil_9);
var lyr_flowerpot__coil_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_flowerpot__coil_9, 
                style: style_flowerpot__coil_9,
                popuplayertitle: "flowerpot__coil",
                interactive: true,
                title: '<img src="styles/legend/flowerpot__coil_9.png" /> flowerpot__coil'
            });
var format_handhole_10 = new ol.format.GeoJSON();
var features_handhole_10 = format_handhole_10.readFeatures(json_handhole_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_handhole_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_handhole_10.addFeatures(features_handhole_10);
var lyr_handhole_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_handhole_10, 
                style: style_handhole_10,
                popuplayertitle: "handhole",
                interactive: true,
                title: '<img src="styles/legend/handhole_10.png" /> handhole'
            });
var format_HUB_11 = new ol.format.GeoJSON();
var features_HUB_11 = format_HUB_11.readFeatures(json_HUB_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HUB_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HUB_11.addFeatures(features_HUB_11);
var lyr_HUB_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HUB_11, 
                style: style_HUB_11,
                popuplayertitle: "HUB",
                interactive: true,
                title: '<img src="styles/legend/HUB_11.png" /> HUB'
            });
var format_make_ready_12 = new ol.format.GeoJSON();
var features_make_ready_12 = format_make_ready_12.readFeatures(json_make_ready_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_make_ready_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_make_ready_12.addFeatures(features_make_ready_12);
var lyr_make_ready_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_make_ready_12, 
                style: style_make_ready_12,
                popuplayertitle: "make_ready",
                interactive: true,
                title: '<img src="styles/legend/make_ready_12.png" /> make_ready'
            });
var format_pathissues_13 = new ol.format.GeoJSON();
var features_pathissues_13 = format_pathissues_13.readFeatures(json_pathissues_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pathissues_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pathissues_13.addFeatures(features_pathissues_13);
var lyr_pathissues_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pathissues_13, 
                style: style_pathissues_13,
                popuplayertitle: "path issues",
                interactive: true,
                title: '<img src="styles/legend/pathissues_13.png" /> path issues'
            });
var format_ped_14 = new ol.format.GeoJSON();
var features_ped_14 = format_ped_14.readFeatures(json_ped_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ped_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ped_14.addFeatures(features_ped_14);
var lyr_ped_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ped_14, 
                style: style_ped_14,
                popuplayertitle: "ped",
                interactive: true,
                title: '<img src="styles/legend/ped_14.png" /> ped'
            });
var format_pole_15 = new ol.format.GeoJSON();
var features_pole_15 = format_pole_15.readFeatures(json_pole_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pole_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pole_15.addFeatures(features_pole_15);
var lyr_pole_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pole_15, 
                style: style_pole_15,
                popuplayertitle: "pole",
                interactive: true,
                title: '<img src="styles/legend/pole_15.png" /> pole'
            });
var format_pothole_16 = new ol.format.GeoJSON();
var features_pothole_16 = format_pothole_16.readFeatures(json_pothole_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pothole_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pothole_16.addFeatures(features_pothole_16);
var lyr_pothole_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pothole_16, 
                style: style_pothole_16,
                popuplayertitle: "pothole",
                interactive: true,
                title: '<img src="styles/legend/pothole_16.png" /> pothole'
            });
var format_underground_conduit_17 = new ol.format.GeoJSON();
var features_underground_conduit_17 = format_underground_conduit_17.readFeatures(json_underground_conduit_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_underground_conduit_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_underground_conduit_17.addFeatures(features_underground_conduit_17);
var lyr_underground_conduit_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_underground_conduit_17, 
                style: style_underground_conduit_17,
                popuplayertitle: "underground_conduit",
                interactive: true,
                title: '<img src="styles/legend/underground_conduit_17.png" /> underground_conduit'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_subdivisions_1.setVisible(true);lyr_6002254Photos_2.setVisible(true);lyr_6002256Photos_3.setVisible(true);lyr_6002257Photos_4.setVisible(true);lyr_6002258Photos_5.setVisible(true);lyr_bore_pit_6.setVisible(true);lyr_coupler_7.setVisible(true);lyr_direct_burry_junction_8.setVisible(true);lyr_flowerpot__coil_9.setVisible(true);lyr_handhole_10.setVisible(true);lyr_HUB_11.setVisible(true);lyr_make_ready_12.setVisible(true);lyr_pathissues_13.setVisible(true);lyr_ped_14.setVisible(true);lyr_pole_15.setVisible(true);lyr_pothole_16.setVisible(true);lyr_underground_conduit_17.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_subdivisions_1,lyr_6002254Photos_2,lyr_6002256Photos_3,lyr_6002257Photos_4,lyr_6002258Photos_5,lyr_bore_pit_6,lyr_coupler_7,lyr_direct_burry_junction_8,lyr_flowerpot__coil_9,lyr_handhole_10,lyr_HUB_11,lyr_make_ready_12,lyr_pathissues_13,lyr_ped_14,lyr_pole_15,lyr_pothole_16,lyr_underground_conduit_17];
lyr_subdivisions_1.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'year_built': 'year_built', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'perimeter': 'perimeter', 'perimeter_1': 'perimeter_1', 'area': 'area', 'areaUnit': 'areaUnit', 'numberOfP': 'numberOfP', });
lyr_6002254Photos_2.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_6002256Photos_3.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_6002257Photos_4.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_6002258Photos_5.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_bore_pit_6.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'pit_depth': 'pit_depth', 'notes': 'notes', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_coupler_7.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_direct_burry_junction_8.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_flowerpot__coil_9.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'notes': 'notes', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_handhole_10.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'size': 'size', 'has_gravel': 'has_gravel', 'grounded': 'grounded', 'notes': 'notes', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_HUB_11.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'grounded': 'grounded', 'gravel_ba': 'gravel_ba', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_make_ready_12.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'notes': 'notes', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_pathissues_13.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'notes': 'notes', 'resolved': 'resolved', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'perimeter': 'perimeter', 'perimeter_1': 'perimeter_1', 'area': 'area', 'areaUnit': 'areaUnit', 'numberOfP': 'numberOfP', });
lyr_ped_14.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'labels': 'labels', 'size': 'size', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_pole_15.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'pole_owner': 'pole_owner', 'pole_heig': 'pole_heig', 'attachmen': 'attachmen', 'attachmen_1': 'attachmen_1', 'attachmen_2': 'attachmen_2', 'attachmen_3': 'attachmen_3', 'attachmen_4': 'attachmen_4', 'attachmen_5': 'attachmen_5', 'attachmen_6': 'attachmen_6', 'attachmen_7': 'attachmen_7', 'attachmen_8': 'attachmen_8', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_pothole_16.set('fieldAliases', {'name': 'name', 'descripti': 'description', 'utility_d': 'utility_d', 'utility': 'utility', 'notes': 'notes', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_underground_conduit_17.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'placement': 'placement', 'number_of': 'number_of', 'notes': 'notes', 'cable_pla': 'cable_pla', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'distance': 'distance', 'distanceU': 'distanceU', 'numberOfP': 'numberOfP', });
lyr_subdivisions_1.set('fieldImages', {'name': 'TextEdit', 'descripti': 'TextEdit', 'year_built': 'TextEdit', 'changed': 'TextEdit', 'pictureFo': 'TextEdit', 'pictureNa': 'TextEdit', 'picturePa': 'TextEdit', 'created': 'TextEdit', 'perimeter': 'TextEdit', 'perimeter_1': 'TextEdit', 'area': 'TextEdit', 'areaUnit': 'TextEdit', 'numberOfP': 'TextEdit', });
lyr_6002254Photos_2.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_6002256Photos_3.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_6002257Photos_4.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_6002258Photos_5.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_bore_pit_6.set('fieldImages', {'name': '', 'descripti': '', 'pit_depth': '', 'notes': '', 'changed': '', 'pictureFo': '', 'pictureNa': '', 'picturePa': '', 'created': '', 'altitude': '', 'accuracy': '', });
lyr_coupler_7.set('fieldImages', {'name': '', 'descripti': '', 'changed': '', 'pictureFo': '', 'pictureNa': '', 'picturePa': '', 'created': '', 'altitude': '', 'accuracy': '', });
lyr_direct_burry_junction_8.set('fieldImages', {'name': '', 'descripti': '', 'changed': '', 'pictureFo': '', 'pictureNa': '', 'picturePa': '', 'created': '', 'altitude': '', 'accuracy': '', });
lyr_flowerpot__coil_9.set('fieldImages', {'name': '', 'descripti': '', 'notes': '', 'changed': '', 'pictureFo': '', 'pictureNa': '', 'picturePa': '', 'created': '', 'altitude': '', 'accuracy': '', });
lyr_handhole_10.set('fieldImages', {'name': 'TextEdit', 'descripti': 'TextEdit', 'size': 'TextEdit', 'has_gravel': 'TextEdit', 'grounded': 'TextEdit', 'notes': 'TextEdit', 'changed': 'TextEdit', 'pictureFo': 'TextEdit', 'pictureNa': 'TextEdit', 'picturePa': 'TextEdit', 'created': 'TextEdit', 'altitude': 'TextEdit', 'accuracy': 'TextEdit', });
lyr_HUB_11.set('fieldImages', {'name': 'TextEdit', 'descripti': 'TextEdit', 'grounded': 'TextEdit', 'gravel_ba': 'TextEdit', 'changed': 'TextEdit', 'pictureFo': 'TextEdit', 'pictureNa': 'TextEdit', 'picturePa': 'TextEdit', 'created': 'TextEdit', 'altitude': 'TextEdit', 'accuracy': 'TextEdit', });
lyr_make_ready_12.set('fieldImages', {'name': '', 'descripti': '', 'notes': '', 'changed': '', 'pictureFo': '', 'pictureNa': '', 'picturePa': '', 'created': '', 'altitude': '', 'accuracy': '', });
lyr_pathissues_13.set('fieldImages', {'name': '', 'descripti': '', 'notes': '', 'resolved': '', 'changed': '', 'pictureFo': '', 'pictureNa': '', 'picturePa': '', 'created': '', 'perimeter': '', 'perimeter_1': '', 'area': '', 'areaUnit': '', 'numberOfP': '', });
lyr_ped_14.set('fieldImages', {'name': '', 'descripti': '', 'labels': '', 'size': '', 'changed': '', 'pictureFo': '', 'pictureNa': '', 'picturePa': '', 'created': '', 'altitude': '', 'accuracy': '', });
lyr_pole_15.set('fieldImages', {'name': 'TextEdit', 'descripti': 'TextEdit', 'pole_owner': 'TextEdit', 'pole_heig': 'TextEdit', 'attachmen': 'TextEdit', 'attachmen_1': 'TextEdit', 'attachmen_2': 'TextEdit', 'attachmen_3': 'TextEdit', 'attachmen_4': 'TextEdit', 'attachmen_5': 'TextEdit', 'attachmen_6': 'TextEdit', 'attachmen_7': 'TextEdit', 'attachmen_8': 'TextEdit', 'changed': 'TextEdit', 'pictureFo': 'TextEdit', 'pictureNa': 'TextEdit', 'picturePa': 'TextEdit', 'created': 'TextEdit', 'altitude': 'TextEdit', 'accuracy': 'TextEdit', });
lyr_pothole_16.set('fieldImages', {'name': 'TextEdit', 'descripti': 'TextEdit', 'utility_d': 'TextEdit', 'utility': 'TextEdit', 'notes': 'TextEdit', 'changed': 'TextEdit', 'pictureFo': 'TextEdit', 'pictureNa': 'TextEdit', 'picturePa': 'TextEdit', 'created': 'TextEdit', 'altitude': 'TextEdit', 'accuracy': 'TextEdit', });
lyr_underground_conduit_17.set('fieldImages', {'name': 'TextEdit', 'descripti': 'TextEdit', 'placement': 'TextEdit', 'number_of': 'TextEdit', 'notes': 'TextEdit', 'cable_pla': 'TextEdit', 'changed': 'TextEdit', 'pictureFo': 'TextEdit', 'pictureNa': 'TextEdit', 'picturePa': 'TextEdit', 'created': 'TextEdit', 'distance': 'TextEdit', 'distanceU': 'TextEdit', 'numberOfP': 'TextEdit', });
lyr_subdivisions_1.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'year_built': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'perimeter': 'no label', 'perimeter_1': 'no label', 'area': 'no label', 'areaUnit': 'no label', 'numberOfP': 'no label', });
lyr_6002254Photos_2.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_6002256Photos_3.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_6002257Photos_4.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_6002258Photos_5.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_bore_pit_6.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'pit_depth': 'no label', 'notes': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_coupler_7.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_direct_burry_junction_8.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_flowerpot__coil_9.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'notes': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_handhole_10.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'size': 'no label', 'has_gravel': 'no label', 'grounded': 'no label', 'notes': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_HUB_11.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'grounded': 'no label', 'gravel_ba': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_make_ready_12.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'notes': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_pathissues_13.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'notes': 'no label', 'resolved': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'perimeter': 'no label', 'perimeter_1': 'no label', 'area': 'no label', 'areaUnit': 'no label', 'numberOfP': 'no label', });
lyr_ped_14.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'labels': 'no label', 'size': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_pole_15.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'pole_owner': 'no label', 'pole_heig': 'no label', 'attachmen': 'no label', 'attachmen_1': 'no label', 'attachmen_2': 'no label', 'attachmen_3': 'no label', 'attachmen_4': 'no label', 'attachmen_5': 'no label', 'attachmen_6': 'no label', 'attachmen_7': 'no label', 'attachmen_8': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_pothole_16.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'utility_d': 'no label', 'utility': 'no label', 'notes': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_underground_conduit_17.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'placement': 'no label', 'number_of': 'no label', 'notes': 'no label', 'cable_pla': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'distance': 'no label', 'distanceU': 'no label', 'numberOfP': 'no label', });
lyr_underground_conduit_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});