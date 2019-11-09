
import { scatterplot, hexagon, heatmap } from "./deck";
import { GoogleMapsOverlay } from "@deck.gl/google-maps";
import copperData from "../public/assets/copper_ore.json";
const copperJsonData = copperData.data;
/**
- created from online tool : https://mapstyle.withgoogle.com/
*/
const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121"
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e"
      }
    ]
  },
  {
    featureType: "road.local",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d"
      }
    ]
  }
];
window.initGoogleMap = () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 17.462429, lng: 78.395103 },
    styles: mapStyle
  });

  const overlay = new GoogleMapsOverlay({
    layers: [
      // scatterplot(
      //   copperJsonData,
      //   d => {
      //     return [Number(d[7]), Number(d[6])];
      //   },
      //   d => [255, 140, 0, 100]
      // ),
      // scatterplot(
      //   "./assets/copper_deposits.json",
      //   d => {
      //     return [
      //       Number(
      //         d[5]
      //           .replace(/[A-Za-z\-]/g, "")
      //           .split(" ")
      //           .slice(0, 2)
      //           .join(".")
      //           .replace(/\.$/, "")
      //       ),
      //       Number(
      //         d[4]
      //           .replace(/[A-Za-z\-]/g, "")
      //           .split(" ")
      //           .slice(0, 2)
      //           .join(".")
      //           .replace(/\.$/, "")
      //       )
      //     ];
      //   },
      //   d => [255, 140, 250, 100],
      //   ({ object:item, x, y }) => {
      //     const el = document.getElementById("tooltip");
      //     if (item) {
      //       el.innerHTML = `<h4>${item[0]}</h3>
      //       <h5>${item[1]}</h5>`;
      //       el.style.left = x + "px";
      //       el.style.top = y + "px";
      //       el.style.opacity = "1";
      //     } else {
      //       el.style.opacity = "0";
      //     }
      //   }
      // ),
      // new HexagonLayer({
      //     id: 'hex',
      //     data: "./assets/gundata.json",
      //     getPosition: d => [d.longitude, d.latitude],
      //     getElevationWeight: d => { console.log((d.n_killed * 2) + d.n_injured);return (d.n_killed * 2) + d.n_injured},
      //     elevationScale: 100,
      //     extruded: true,
      //     radius: 1609,
      //     opacity: 0.6,
      //     coverage: 0.88,
      //     lowerPercentile: 50
      // }),
      heatmap(
        copperJsonData,
        d => {
          return [
            Number(
              d[5]
                .replace(/[A-Za-z\-]/g, "")
                .split(" ")
                .slice(0, 2)
                .join(".")
                .replace(/\.$/, "")
            ),
            Number(
              d[4]
                .replace(/[A-Za-z\-]/g, "")
                .split(" ")
                .slice(0, 2)
                .join(".")
                .replace(/\.$/, "")
            )
          ];
        },
        d => {
          // console.log(Number(d[3].split(" ")[0]));
          return Number(d[3].split(" ")[0]);
        }
      ),
      hexagon(
        copperJsonData,
        d => {
          return [
            Number(
              d[5]
                .replace(/[A-Za-z\-]/g, "")
                .split(" ")
                .slice(0, 2)
                .join(".")
                .replace(/\.$/, "")
            ),
            Number(
              d[4]
                .replace(/[A-Za-z\-]/g, "")
                .split(" ")
                .slice(0, 2)
                .join(".")
                .replace(/\.$/, "")
            )
          ];
        },
        d => {
          // console.log(Number(d[3].split(" ")[0]));
          return Number(d[3].split(" ")[0]);
        },
        ({ object: item, x, y }) => {
          const el = document.getElementById("tooltip");
          if (item) {
            el.innerHTML = `<h4>${item[0]}</h3>
            <h5>${item[1]}</h5>`;
            el.style.left = x + "px";
            el.style.top = y + "px";
            el.style.opacity = "1";
          } else {
            el.style.opacity = "0";
          }
        }
      )
    ]
  });

  overlay.setMap(map);
};
