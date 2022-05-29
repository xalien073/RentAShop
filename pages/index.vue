<template>
  <div>
     <nav class="navbar fixed-top">
      <div class="container-fluid">
        <nuxt-link to="/" class="brand">
          <img
            src="/shop-solid.svg"
            alt=""
            width="30"
            height="38"
            class="d-inline-block align-text-top"
          />
          Rent A Shop
        </nuxt-link>
        <form class="d-flex" @submit.prevent="Search">
          <input
          v-model="query"
            class="form-control me-2"
            type="search"
            placeholder="Search a shop, area or city"
            aria-label="Search"
          />
          <button @click="Search" class="btn btn-outline-primary" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M236 176c0 15.46-12.54 28-28 28S180 191.5 180 176S192.5 148 208 148S236 160.5 236 176zM500.3 500.3c-15.62 15.62-40.95 15.62-56.57 0l-119.7-119.7c-40.41 27.22-90.9 40.65-144.7 33.46c-91.55-12.23-166-87.28-177.6-178.9c-17.24-136.2 97.29-250.7 233.4-233.4c91.64 11.6 166.7 86.07 178.9 177.6c7.19 53.8-6.236 104.3-33.46 144.7l119.7 119.7C515.9 459.3 515.9 484.7 500.3 500.3zM294.1 182.2C294.1 134.5 255.6 96 207.1 96C160.4 96 121.9 134.5 121.9 182.2c0 38.35 56.29 108.5 77.87 134C201.8 318.5 204.7 320 207.1 320c3.207 0 6.26-1.459 8.303-3.791C237.8 290.7 294.1 220.5 294.1 182.2z"
                fill="blueviolet"
              />
            </svg>
          </button>
        </form>
        <button @click="MapLocation=null"
          class="btn btn-outline-primary"
          data-bs-toggle="modal"
          data-bs-target="#modalForm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - 
https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M0 155.2C0 147.9 2.153 140.8 6.188 134.7L81.75 21.37C90.65 8.021 105.6 0 121.7 0H518.3C534.4 0 549.3 8.021 558.2 21.37L633.8 134.7C637.8 140.8 640 147.9 640 155.2C640 175.5 623.5 192 603.2 192H36.84C16.5 192 .0003 175.5 .0003 155.2H0zM64 224H128V384H320V224H384V464C384 490.5 362.5 512 336 512H112C85.49 512 64 490.5 64 464V224zM512 224H576V480C576 497.7 561.7 512 544 512C526.3 512 512 497.7 512 480V224z"
              fill="blueviolet"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
              fill="blueviolet"
            />
          </svg>
        </button>
      </div>
    </nav>
<main>
    <div v-if="alert" id="alert" class="alert alert-danger  alert-dismissible fade show
     " role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <strong>
      Sorry, no shops found in {{query}}
    </strong>
    <button type="button" class="btn-close"
    aria-label="Close" @click="alert=false"></button>
    </div>
    <client-only>
      <l-map
        id="vue2leaflet-map"
        :zoom="zoom"
        :center="LiveLocation"
        @click="MapClicked($event)"
      >
        <l-tile-layer :url="url" :attribution="attribution" />
         <Shop v-for="s in shops" :key="s.id" 
         :s="s" />
          <!-- <l-marker
            :lat-lng="LiveLocation"
            @click="MarkerClicked(4)"
          >
            <l-tooltip>
              address
            </l-tooltip>
            <l-icon
              :icon-size="dynamicSize"
              :icon-anchor="dynamicAnchor"
              icon-url="/shop-solid.svg"
            />
          </l-marker> -->
      </l-map>
    </client-only>
    <Footer />
</main>
    <div
      id="modalForm"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <RegistrationForm :LiveLocation="LiveLocation"
      :MapLocation="MapLocation" 
      @close="ShopAdded" />
    </div>
    <div id="shop-details">
     <ShopDetails v-for="s in shops"
        :key="s.id" :s="s" />
    </div>
  </div>
</template>

<script>
// import RegistrationForm from '@/components/RegistrationForm'
export default {
  name: "IndexPage",
  // components: {RegistrationForm},
  data() {
    return {
      alert: false,
      query: "",
      shops: [],
      CurrentLocation: {
        latitude: 0,
        longitude: 0,
      },
      zoom: 50,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      icon: {
        iconUrl: "static/shop-solid.svg",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      },
      staticAnchor: [16, 37],
      customText: "Foobar",
      modal: "",
      MapLocation: null
    }
  },
  computed:  {
    LiveLocation() {
      return [this.CurrentLocation.latitude, this.CurrentLocation.longitude]
    }
  },
  created() {
    this.GetShops();
  },
  mounted() {
    if ("navigator" in window && "geolocation" in navigator) {
      alert('yes')
      navigator.geolocation.watchPosition((position) => {
        this.CurrentLocation.latitude = position.coords.latitude;
        this.CurrentLocation.longitude = position.coords.longitude;
        // this.GetCurrentLocation([
        // this.CurrentLocation.latitude,
        // this.CurrentLocation.longitude,
        // ]);
        // this.$axios
        //   .get(
        //     `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        //   )
        //   .then((res) => {
        //     console.log("wrkedd........."),
        //     console.log(res.data.address);
        //   })
        //   .catch((err) => console.error(err.message));
      });
    }
  },
  methods: {
    Search() {
      this.$axios.get(`/search/?search=${this.query}`)
      .then(res => {
        if(res.data.length) {
        this.shops = res.data
          this.alert = false
        console.log(res.data.length, res.data)
        }
        else{
          this.alert = true
        }
        })
      .catch(err => console.log(err.message))
    },
    MapClicked(e) {
      this.MapLocation = [e.latlng.lat, e.latlng.lng]
        this.modal = new bootstrap.Modal(
        document.getElementById("modalForm"),
        {
          keyboard: true,
        }
      );
      this.modal.show();
    },
    ShopAdded(s) {
      this.shops.push(s);
      this.modal.hide()
    },
    GetShops() {
      this.$axios
        .get("shops")
        .then((res) => (this.shops = res.data))
        .catch((err) => console.log(err));
    },
    GetCurrentLocation(latlng) {
      console.log("$L", "L", L.esri);
      var geocodeService = L.esri.Geocoding.geocodeService({
        apikey:
          "AAPK58c766aa1a1d4b8888d1597e6d9e96876YNh6rUiH6J6jAtIBCLTK_3kXmPzMFH--FCDY2SDJBmkovuQke4OIr90wfinzhLf", // replace with your api key - https://developers.arcgis.com
      });
      geocodeService
        .reverse()
        .latlng([18.9817269, 73.1231471])
        .run(function (error, result) {
          if (error) {
            console.error(err.message);
          }
          console.log(result.address.Match_addr);
          // L.marker(result.latlng).addTo(map).bindPopup(result.address.Match_addr).openPopup();
        });
    },
  },
};
</script>

<style lang="scss">
main {
  position: relative;
  top: 12vh;

#vue2leaflet-map {
  height: 95vh;
  width: 100%;
}
#alert {
  margin: 0;
  strong {
    font-size: 24px;
  }
}
}
#shop-details .modal-dialog {
  min-width: 80vw;
}
.modal {
  color: blueviolet;
}
.someExtraClass {
  background-color: aqua;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 0 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}
a { 
  font-weight: bolder;
  text-decoration: none;
}
.btn svg {
  height: 24px;
}
.btn:hover > svg path {
  fill: #fff;
}
</style>
