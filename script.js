let center = [54.782531,56.060461];

function init() {
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 17
	});

    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('rulerControl'); // удаляем контрол правил
}

ymaps.ready(init);