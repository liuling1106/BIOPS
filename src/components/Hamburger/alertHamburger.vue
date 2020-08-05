<template>
  <div @click="toggleClick">
    <svg
      :class="{'is-active':isActive}"
      class="hamburger"
    >
      <text x="0" y="15" fill="grey" style="font-size=20px">&gt;</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AlertHamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
