<template>
   <div
        :id="`details` + s.id"
        class="modal fade"
        tabindex="-1"
        :aria-labelledby="s.id"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-body">
              <div class="row mx-0">
                <div v-for="i in s.images" :key="i.id"
                class="col-12 col-lg-6">
                  <img :src="i.image" alt="" width="100%" height="100%" />
                </div>
                <div class="col-12 py-5">
                  <div class="row mx-0">
                    <div class="col-5">
                      <h3>
                        <fa icon="fa-solid fa-user" />
                          Shop Owner:-
                        </h3>
                    </div>
                    <div class="col-7">
                      <h3>{{ s.owner }}</h3>
                    </div>
                    <div class="col-5">
                      <h3>
                        <fa icon="fa-solid fa-store" />
                        Shop Number
                        :-
                      </h3>
                    </div>
                    <div class="col-7">
                      <h3>{{ s.number }}</h3>
                    </div>
                    <div class="col-5">
                      <h3>
                        <fa icon="fa-solid fa-chart-area" />
                        Shop Area (in square feets)
                        :-
                      </h3>
                    </div>
                      <div class="col-7">
                        <h3>
                          {{ s.area }}
                        </h3>
                      </div>
                      <div class="col-5">
                        <h3>
                          <fa icon="fa-solid fa-money-bill-transfer" />
                          Expected Shop Deposit
                        :-
                        </h3>
                      </div>
                      <div class="col-7">
                        <h3>
                          <fa icon="fa-solid fa-indian-rupee-sign" />
                          {{ deposit }}</h3>
                      </div>
                      <div class="col-5">
                        <h3>
                          <fa icon="fa-solid fa-money-bill-1-wave" />
                          Expected Shop Rent
                          :-
                        </h3>
                      </div>
                      <div class="col-7">
                        <h3>
                          <fa icon="fa-solid fa-indian-rupee-sign" />
                          {{ rent }}</h3>
                      </div>
                      <div class="col-5">
                        <h3>
                          <fa icon="fa-solid fa-building-circle-arrow-right" />
                          Shop Address
                          :-
                        </h3>
                      </div>
                      <div class="col-7">
                        <h3>{{ s.address }}</h3>
                      </div>
                      <div class="row mx-0 mt-5">
                       <div class="col-6">
                        <a
                        :href="`mailto:`+s.email+`&subject=Regarding your shop&body=Hello, I'm interested in your shop`">
                        <h3>
                          <fa icon="fa-solid fa-envelope" />
                          {{s.email}}
                        </h3>
                        </a>
                      </div>
                       <div class="col-6">
                        <a :href="`tel:+91-`+s.phone">
                        <h3>
                          <fa icon="fa-solid fa-phone" />
                          {{s.phone}}
                        </h3>
                        </a>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
</template>

<script>
import PriceFormater from '@/composables/PriceFormater'
export default {
props: ["s"],
computed: {
  deposit() {
    return PriceFormater(this.s.deposit)
  },
    rent() {
    return PriceFormater(this.s.rent)
  }
}
}
</script>

<style>

</style>