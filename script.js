function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 34.66831698907176, lng: 135.43027060466488 },
    mapId: "a8c782ff86a12dc8",
  });

  // Markers = Name, Lat/Long, Image URL, Scaled Size
  const markers = [
    [
      "Yoshi House",
      34.668355246829485,
      135.43002314408034,
      "images/yoshi_house.svg",
      40,
      30,
    ],
  ];

  const marker = new google.maps.Marker({
    position: { lat: 34.668355246829485, lng: 135.43002314408034 },
    map,
    title: "Yoshi House",
    icon: {
      url: "images/yoshi_house.svg",
      scaledSize: new google.maps.Size(40, 30),
    },
    animation: google.maps.Animation.DROP,
  });

  const infowindow = new google.maps.InfoWindow({
    content: "Yoshi's House",
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}
