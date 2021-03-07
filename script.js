function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 34.66831698907176, lng: 135.43027060466488 },
    mapId: "a8c782ff86a12dc8",
  });

  // Markers = Name, Lat/Long, Image URL, Scaled Size
  const markers = [
    [
      "Super Nintendo World, Osaka, Japan",
      34.668355246829485,
      135.43002314408034,
      "images/pointer.svg",
      40,
      40,
    ],

    [
      "Gold Star",
      34.66895126546338,
      135.43011196985793,
      "images/star.svg",
      40,
      40,
    ],

    [
      "Gold Star",
      34.667574716742735,
      135.42930730718325,
      "images/star.svg",
      40,
      40,
    ],

    [
      "Gold Star",
      34.66779105208191,
      135.43118961060236,
      "images/star.svg",
      40,
      40,
    ],

    [
      "Castle",
      34.66842544250071,
      135.43213292891994,
      "images/castle.svg",
      40,
      40,
    ],

    [
      "Transport Pipe",
      34.66744384986334,
      135.43068928707484,
      "images/pipe.svg",
      40,
      40,
    ],

    [
      "Transport Pipe",
      34.66867405363721,
      135.43235182046325,
      "images/pipe.svg",
      40,
      40,
    ],

    [
      "Transport Pipe",
      34.668866941073944,
      135.42882870895676,
      "images/pipe.svg",
      40,
      40,
    ],

    [
      "Hills with Eyes",
      34.66768389105858,
      135.4301055762927,
      "images/hill_with_eyes.svg",
      40,
      40,
    ],

    [
      "Hills with Eyes",
      34.66762816727167,
      135.43021502206432,
      "images/hill_with_eyes.svg",
      40,
      40,
    ],

    [
      "Hills with Eyes",
      34.667709609716816,
      135.4302098103609,
      "images/hill_with_eyes.svg",
      40,
      40,
    ],

    [
      "Ghost House",
      34.66788106723438,
      135.42896421324545,
      "images/ghosthouse.svg",
      40,
      40,
    ],

    [
      "Yoshi House",
      34.6686654808518,
      135.43087690839766,
      "images/yoshi_house.svg",
      40,
      30,
    ],
  ];

  for (var i = 0; i < markers.length; i++) {
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
      },
      animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0],
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}
