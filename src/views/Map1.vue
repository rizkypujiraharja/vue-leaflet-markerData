<template>
  <transition name="fade">
    <div
      v-show="show.rightSidebar"
      class="h-screen bg-white w-96 absolute right-0 pt-4 px-4 text-gray-800"
      id="rightSidebar"
    >
      <div class="flex">
        <button
          class="mr-3 focus:outline-none"
          @click="show.rightSidebar = !show.rightSidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 text-gray-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <span class="text-lg">{{ state.dataDetail.name }}</span>
      </div>

      <div class="overflow-y-auto mt-3 pr-2" id="rightSidebarContent">
        <div
          class="border border-gray-300 p-3 rounded-sm mb-2"
          v-for="(item, key) in state.dataDetails"
          :key="key"
        >
          <a href="https://google.com" target="_blank"
            ><div class="font-semibold">{{ item.name }}</div></a
          >
          <p class="text-gray-600">{{ item.location }}</p>
          <p class="font-bold text-2xl text-right text-blue-500">
            ${{ item.price }}
          </p>
        </div>
      </div>
    </div>
  </transition>
  <div class="bg-white h-screen" id="map"></div>
</template>

<script>
import L from "leaflet";
import { onMounted, reactive } from "vue";
import "leaflet/dist/leaflet.css";

export default {
  name: "Map1",

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
    });

    const show = reactive({
      rightSidebar: false,
    });

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

      mapData.map.on("click", function () {
        show.rightSidebar = false;
      });

      mapData.coordinates.forEach((coordinate) => {
        let marker = L.marker([coordinate.lat, coordinate.lng], {
          icon: mapData.markerIcon,
          properties: coordinate,
        })
          .addTo(mapData.map)
          .on("click", function (e) {
            showDetail(e);
          });
        state.markers.push(marker);
      });
    }

    function showDetail(e) {
      state.dataDetail = e.target.options.properties;
      show.rightSidebar = true;
    }

    return { show, state };
  },
};
</script>

<style scoped>
#rightSidebarContent {
  height: 90vh;
}

#rightSidebar {
  z-index: 900;
}

::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.27);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0, 0, 0, 0.3);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
