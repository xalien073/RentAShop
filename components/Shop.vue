<template>
    <l-marker
            :lat-lng="[s.latitude, s.longitude]"
            @click="MarkerClicked(s.id)"
          >
            <l-tooltip>
              {{ s.address }}
            </l-tooltip>
            <l-icon
              :icon-size="dynamicSize"
              
              icon-url="/shop-solid.svg"
            />
    </l-marker>
</template>

<script>
export default {
props: ["s"],
data() {
    return {
    iconSize: 75,
    }
},
computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    },

},
  methods: {
    MarkerClicked(id) {
      var myModal = new bootstrap.Modal(
        document.getElementById("details" + id),
        {
          keyboard: true,
        }
      );
      myModal.show();
    },
  }
}
</script>

<style>

</style>