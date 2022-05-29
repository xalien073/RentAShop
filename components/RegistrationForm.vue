<template>
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
          <fa icon="fa-solid fa-shop" />
          List your shop
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form class="row g-3" @submit.prevent="ListShop">
          <div class="col-md-1">
            <label for="inputFirst">
              <fa icon="fa-solid fa-f" />
            </label>
          </div>
          <div class="col-md-5">
            <input
              required
              v-model="form.firstName"
              type="text"
              class="form-control"
              id="inputFirst"
              placeholder="Your First Name"
            />
          </div>
          <div class="col-md-1">
            <label for="inputLast">
              <fa icon="fa-solid fa-l" />
            </label>
          </div>
          <div class="col-md-5">
            <input
              required
              v-model="form.lastName"
              type="text"
              class="form-control"
              id="inputLast"
              placeholder="Your Last Name"
            />
          </div>
          <div class="col-md-1">
            <label for="inputEmail">
              <fa icon="fa-solid fa-envelope" />
            </label>
          </div>
          <div class="col-md-5">
            <input
              required
              v-model="form.email"
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="your@email.com"
            />
          </div>
          <div class="col-md-1">
            <label for="phone">
              <fa icon="fa-solid fa-phone" />
            </label>
          </div>
          <div class="col-md-5">
            <input
              required
              v-model="form.phone"
              type="tel"
              class="form-control"
              id="phone"
              pattern="^[0-9]+$"
              minlength="10"
              maxlength="10"
              placeholder="Your Phone Number"
            />
          </div>
          <div class="col-md-1">
            <label for="shop">
              <fa icon="fa-solid fa-store" />
            </label>
          </div>
          <div class="col-md-5">
            <input
              required
              v-model="form.number"
              type="tel"
              class="form-control"
              id="shop"
              pattern="^[0-9]+$"
              placeholder="Your Shop Number"
            />
          </div>
          <div class="col-md-1">
            <label for="area">
              <fa icon="fa-solid fa-chart-area" />
            </label>
          </div>
          <div class="col-md-5">
            <input
              required
              v-model="form.area"
              type="tel"
              class="form-control"
              id="area"
              pattern="^[0-9]+$"
              placeholder="Shop Arra in Sq/F"
            />
          </div>
          <div class="col-md-1">
            <label for="deposit">
              <fa icon="fa-solid fa-sack-dollar" />
              <fa icon="fa-solid fa-money-bill-transfer" />
            </label>
          </div>
          <div class="col-md-5">
            <input
              required
              v-model="form.deposit"
              type="tel"
              class="form-control"
              id="deposit"
              pattern="^[0-9]+$"
              placeholder="Expected Shop Deposit"
            />
          </div>
            <div class="col-md-1">
              <fa icon="fa-solid fa-indian-rupee-sign" />
            </div>
            <div class="col-md-5 pt-3">
            {{deposit}}
            </div>
          <div class="col-md-1">
            <label for="rent">
              <fa icon="fa-solid fa-money-bill-1-wave" />
            </label>
          </div>
          <div class="col-md-5">
            <input
              required
              v-model="form.rent"
              type="tel"
              class="form-control"
              id="rent"
              pattern="^[0-9]+$"
              placeholder="Expected Shop Rent"
            />
          </div>
          <div class="col-md-1">
              <fa icon="fa-solid fa-indian-rupee-sign" />
            </div>
            <div class="col-md-5 pt-3">
            {{rent}}
            </div>
          <div class="col-1">
            <label for="inputAddress">
              <fa icon="fa-solid fa-building-circle-arrow-right" />
            </label>
          </div>
          <div class="col-md-11">
            <input
              required
              v-model="form.address"
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Your Shop Address"
            />
          </div>
          <div class="col-md-5">
            <label for="img">
              <fa icon="fa-solid fa-camera" />
              Photos (min 2, max 4)
            </label>
          </div>
          <div class="col-md-7">
            <input
              required
              @change="Images($event)"
              type="file"
              accept="image/*"
              capture="enviorment"
              multiple
              class="form-control"
              id="img"
            />
          </div>
          <div class="col-md-1">
            <label for="inputCity">
              <fa icon="fa-solid fa-city" />
            </label>
          </div>
          <div class="col-md-5">
            <input
              required
              v-model="form.city"
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="Your City"
            />
          </div>
          <div class="col-md-1">
            <label for="inputZip">
              <fa icon="fa-solid fa-location-dot" />
            </label>
          </div>
          <div class="col-md-5">
            <input
              required
              v-model="form.zip"
              type="tel"
              class="form-control"
              id="inputZip"
              pattern="^[0-9]+$"
              minlength="6"
              maxlength="6"
              placeholder="Your Zip Code"
            />
          </div>
          <div class="col-md-5">
            <label for="inputState">
              <fa icon="fa-solid fa-map-location" />
              Your State / UT
            </label>
          </div>
          <div class="col-md-7">
            <select
              v-model="form.state"
              required
              id="inputState"
              class="form-select btn"
            >
              <option v-for="s in states" :key="s" :value="s">
                {{ s }}
              </option>
            </select>
          </div>
          <div class="col-12 text-center mt-5">
            <button type="submit" class="btn btn-outline-primary w-100">
              Submit
              <fa icon="fa-solid fa-arrow-up-right-from-square" />
            </button>
            <h1 class="text-white" v-for="i in images"
            :key="i">
              {{i}}</h1>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PriceFormater from "@/composables/PriceFormater";
export default {
  props: ["LiveLocation", "MapLocation"],
  data() {
    return {
      states: [
        "Andaman and Nicobar Islands",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Ladakh",
        "Lakshadweep",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Puducherry",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
      ],
      form: {
        firstName: "",
        lastNam: "",
        email: "",
        phone: "",
        number: "",
        area: "",
        deposit: "",
        rent: "",
        address: "",
        city: "",
        zip: "",
        state: "",
      },
      images: [],
    };
  },
  computed: {
    deposit() {
      return PriceFormater(this.form.deposit);
    },
    rent() {
      return PriceFormater(this.form.rent);
    },
  },
  methods: {
    Images(e) {
      if(this.images.length < 4) {
      this.images.push(e.target.files[0]);
      }
    },
    ListShop() {
      const shopAttributes = {
        owner: `${this.form.firstName} ${this.form.lastName}`,
        email: this.form.email,
        phone: parseInt(this.form.phone),
        number: parseInt(this.form.number),
        area: parseInt(this.form.area),
        deposit: parseInt(this.form.deposit),
        rent: parseInt(this.form.rent),
        address: `${this.form.address}, ${this.form.city} - ${this.form.zip}, ${this.form.state}`,
        latitude: this.LiveLocation[0],
        longitude: this.LiveLocation[1],
      };
      console.log("imgs",this.images)
      if(this.MapLocation) {alert('123')
        shopAttributes.latitude = this.MapLocation[0]
        shopAttributes.longitude = this.MapLocation[1]
      }
      const shop = new FormData();
        // shop.append("owner",`${this.form.firstName} ${this.form.lastName}`)
        //  shop.append("email", this.form.email)
        //  shop.append("phone", this.form.phone)
        //  shop.append("number", this.form.number)
        //  shop.append("area", this.form.area)
        //  shop.append("deposit", this.form.deposit)
        //  shop.append("rent", this.form.rent)
        //  shop.append("address", `${this.form.address}, ${this.form.city} - ${this.form.zip}, ${this.form.state}`)
        //  shop.append("latitude", this.LiveLocation[0])
        //  shop.append("longitude", this.LiveLocation[1])
      shop.append("shop", JSON.stringify(shopAttributes));
      // shop.append("images", this.images[0]);
      // shop.append("images", this.images[1]);
    Array.from(this.images).forEach(file => {
      shop.append('images', file);
    });


      // console.log(this.form.images.length, shop);
      this.$axios
        .post("add-shop/", shop)
        .then((res) => {
          this.$emit("close", res.data)
          this.images = []
          console.log(res.data.images)
          })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
#modal {
  form {
    // background: red;
  }
}
form input {
  text-transform: capitalize;
}
form input::-webkit-input-placeholder {
  /* text-transform: capitalize; */
}
label {
  cursor: pointer;
}
form svg {
  padding: 15px 0 0 10px;
}
#modal {
  color: blueviolet;
}
#modal svg path {
  fill: blueviolet;
}
#modal button svg path {
  /* fill: #fff; */
}
form button svg {
  margin-left: 10px;
  padding: 0;
}
#modal .btn:hover > svg path {
  fill: #fff;
}
#inputEmail {
  text-transform: lowercase;
}
</style>