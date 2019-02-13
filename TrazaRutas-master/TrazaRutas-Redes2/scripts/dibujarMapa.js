var mapOptions = {
	center: [40, -40],zoom: 3	
}
var map = new L.map('mapid', mapOptions);
var url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
L.tileLayer(url,{maxZoom: 18, attribution: 'Maps; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',id: 'mapbox.streets'}).addTo(map);


var circle = L.circle([39.84, -98.88], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

function dibujar(){
	if(cont == "NA"){
		map.setView([39.77, -98.70],4);
		if(pag == "G"){
			var polyline = L.polyline(gooogle1).addTo(map);
			var inicio = L.marker(gooogle1[0]).addTo(map);
			var fin = L.marker(gooogle1[gooogle1.length-1]).addTo(map);
		}
	}
}