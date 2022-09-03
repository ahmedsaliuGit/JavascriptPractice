L.mapquest.key = "5BNmCW2jauWR3j8mFQvXRYzpEQgL2TLB";

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map("map", {
  center: [9.0765, 7.3986],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});

map.addControl(L.mapquest.control({ position: "bottomright" }));

L.marker([9.0765, 7.3986], {
  icon: L.mapquest.icons.marker({
    primaryColor: "#22407F",
    secondaryColor: "#3B5998",
    shadow: true,
    size: "md",
    symbol: "A",
  }),
})
  .bindPopup("This is Abuja!")
  .addTo(map);
