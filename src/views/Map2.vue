<template>
  <div class="bg-white h-screen" id="map"></div>
</template>

<script>
import L from "leaflet";
import { onMounted, reactive } from "vue";
import "leaflet/dist/leaflet.css";

export default {
  name: "Map2",

  setup() {
    const mapData = reactive({
      map: null,
      token:
        "pk.eyJ1Ijoicml6a3lwdWppcmFoYXJqYSIsImEiOiJjanlzY3B1eWwwa2t3M25zZTdoOHoyYTRuIn0.YhB_LzKqbkkX06APhURm-Q",
      markerIcon: L.icon({
        iconUrl:
          "https://raw.githubusercontent.com/rizkypujiraharja/vue-leaflet-markerData/master/src/assets/house.png",
        iconSize: [30, 30],
      }),
      coordinates: [
        {
          name: "Area 1",
          lat: -6.904714154824177,
          lng: 107.58813934416565,
        },
        {
          name: "Area 2",
          lat: -6.9,
          lng: 107.581,
        },
        {
          name: "Area 3",
          lat: -6.94,
          lng: 107.731,
        },
        {
          name: "Area 4",
          lat: -6.95,
          lng: 107.681,
        },
      ],
    });

    const state = reactive({
      dataDetails: [
        {
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          price: 233,
          location: "7497 Sherwood Court Maplewood, NJ 07040",
        },
        {
          name:
            "Nam at faucibus nulla. Aenean rutrum, nulla nec posuere bibendum",
          price: 233,
          location: "2 Manchester Ave. Vicksburg, MS 39180",
        },
        {
          name: "Phasellus et ipsum mauris. Aenean et pulvinar lacus",
          price: 233,
          location: "331 Johnson Drive Westerville, OH 43081",
        },
        {
          name: "Cras sed ligula venenatis, placerat mi non",
          price: 233,
          location: "7350 Courtland St. Ossining, NY 10562",
        },
        {
          name: "Praesent vitae ex et nunc porttitor pulvinar",
          price: 233,
          location: "9 Pulaski Lane Nottingham, MD 21236",
        },
        {
          name: "Phasellus a nibh leo. Pellentesque mi ligula",
          price: 233,
          location: "50 Schoolhouse Court Matawan, NJ 07747",
        },
        {
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          price: 233,
          location: "7497 Sherwood Court Maplewood, NJ 07040",
        },
        {
          name:
            "Nam at faucibus nulla. Aenean rutrum, nulla nec posuere bibendum",
          price: 233,
          location: "2 Manchester Ave. Vicksburg, MS 39180",
        },
        {
          name: "Phasellus et ipsum mauris. Aenean et pulvinar lacus",
          price: 233,
          location: "331 Johnson Drive Westerville, OH 43081",
        },
        {
          name: "Cras sed ligula venenatis, placerat mi non",
          price: 233,
          location: "7350 Courtland St. Ossining, NY 10562",
        },
        {
          name: "Praesent vitae ex et nunc porttitor pulvinar",
          price: 233,
          location: "9 Pulaski Lane Nottingham, MD 21236",
        },
        {
          name: "Phasellus a nibh leo. Pellentesque mi ligula",
          price: 233,
          location: "50 Schoolhouse Court Matawan, NJ 07747",
        },
        {
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          price: 233,
          location: "7497 Sherwood Court Maplewood, NJ 07040",
        },
        {
          name:
            "Nam at faucibus nulla. Aenean rutrum, nulla nec posuere bibendum",
          price: 233,
          location: "2 Manchester Ave. Vicksburg, MS 39180",
        },
        {
          name: "Phasellus et ipsum mauris. Aenean et pulvinar lacus",
          price: 233,
          location: "331 Johnson Drive Westerville, OH 43081",
        },
        {
          name: "Cras sed ligula venenatis, placerat mi non",
          price: 233,
          location: "7350 Courtland St. Ossining, NY 10562",
        },
        {
          name: "Praesent vitae ex et nunc porttitor pulvinar",
          price: 233,
          location: "9 Pulaski Lane Nottingham, MD 21236",
        },
        {
          name: "Phasellus a nibh leo. Pellentesque mi ligula",
          price: 233,
          location: "50 Schoolhouse Court Matawan, NJ 07747",
        },
        {
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          price: 233,
          location: "7497 Sherwood Court Maplewood, NJ 07040",
        },
        {
          name:
            "Nam at faucibus nulla. Aenean rutrum, nulla nec posuere bibendum",
          price: 233,
          location: "2 Manchester Ave. Vicksburg, MS 39180",
        },
        {
          name: "Phasellus et ipsum mauris. Aenean et pulvinar lacus",
          price: 233,
          location: "331 Johnson Drive Westerville, OH 43081",
        },
        {
          name: "Cras sed ligula venenatis, placerat mi non",
          price: 233,
          location: "7350 Courtland St. Ossining, NY 10562",
        },
        {
          name: "Praesent vitae ex et nunc porttitor pulvinar",
          price: 233,
          location: "9 Pulaski Lane Nottingham, MD 21236",
        },
        {
          name: "Phasellus a nibh leo. Pellentesque mi ligula",
          price: 233,
          location: "50 Schoolhouse Court Matawan, NJ 07747",
        },
        {
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          price: 233,
          location: "7497 Sherwood Court Maplewood, NJ 07040",
        },
        {
          name:
            "Nam at faucibus nulla. Aenean rutrum, nulla nec posuere bibendum",
          price: 233,
          location: "2 Manchester Ave. Vicksburg, MS 39180",
        },
        {
          name: "Phasellus et ipsum mauris. Aenean et pulvinar lacus",
          price: 233,
          location: "331 Johnson Drive Westerville, OH 43081",
        },
        {
          name: "Cras sed ligula venenatis, placerat mi non",
          price: 233,
          location: "7350 Courtland St. Ossining, NY 10562",
        },
        {
          name: "Praesent vitae ex et nunc porttitor pulvinar",
          price: 233,
          location: "9 Pulaski Lane Nottingham, MD 21236",
        },
        {
          name: "Phasellus a nibh leo. Pellentesque mi ligula",
          price: 233,
          location: "50 Schoolhouse Court Matawan, NJ 07747",
        },
      ],
      dataDetail: {},
      markers: [],
      pagination: {
        currentPage: 1,
        perPage: 5,
      },
    });

    function paginateData() {
      let { currentPage, perPage } = state.pagination;
      return {
        totalData: state.dataDetails.length,
        data: state.dataDetails.slice(currentPage, currentPage * perPage + 1),
        currentPage: currentPage,
        perPage: perPage,
        totalPage: Math.ceil(state.dataDetails.length / perPage),
      };
    }

    onMounted(() => {
      drawMap();
    });

    function drawMap() {
      if (mapData.map != null) {
        mapData.map.remove();
      }

      mapData.map = L.map("map").setView(
        [-6.925845352972625, 107.6324279739574],
        13
      );

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=" +
          mapData.token,
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/dark-v10",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: mapData.token,
        }
      ).addTo(mapData.map);

      mapData.coordinates.forEach((coordinate) => {
        let marker = L.marker([coordinate.lat, coordinate.lng], {
          icon: mapData.markerIcon,
          properties: coordinate,
        })
          .addTo(mapData.map)
          .on("click", function (e) {
            setPopup(e.target.options.properties);
          });
        state.markers.push(marker);
      });
    }

    function setPopup(data) {
      let contentHtml = `
            <div class="w-72">
              <span class="text-lg">${data.name}</span>
            </div>
        `;
      paginateData().data.forEach((item) => {
        contentHtml += `
            <div class="border border-gray-300 p-3 rounded mb-1">
              <a href="https://google.com" target="_blank"
                ><div class="font-semibold">${item.name}</div></a
              >
              <div class="text-gray-600">${item.location}</div>
              <div class="font-bold text-lg text-right text-blue-500">$
                ${item.price}
              </div>
            </div>`;
      });

      if (paginateData().totalPage > 1) {
        contentHtml += `
          <div class="mt-2 text-center">
            <button class="px-2 focus:outline-none border border-gray-400 rounded-sm">prev</button>
            ${paginateData().currentPage} of ${paginateData().totalPage} Page
            <button class="px-2 focus:outline-none border border-gray-400 rounded-sm">next</button>
          </div>
        `;
      }

      L.popup()
        .setLatLng([data.lat, data.lng])
        .setContent(contentHtml)
        .openOn(mapData.map);
    }

    return { state };
  },
};
</script>
