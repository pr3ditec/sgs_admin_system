<script setup lang="ts">
const props = defineProps({
  title: String,
  number: [String, Number],
  color: String
})
</script>
<template>
  <p class="text-2xl font-semibold">{{ props.title }}</p>
  <div class="set-size charts-container">
    <div class="pie-wrapper progress style-2">
      <span class="label">{{ props.number }}</span>
      <div class="pie">
        <div class="left-side half-circle"></div>
        <div class="right-side half-circle"></div>
      </div>
      <div class="shadow"></div>
    </div>
  </div>
</template>
<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  background: #ecf0f1;
  color: #444;
  font-family: 'Lato', Tahoma, Geneva, sans-serif;
  font-size: 16px;
  padding: 10px;
}

.set-size {
  font-size: 10em;
}

.charts-container:after {
  clear: both;
  content: '';
  display: table;
}

.pie-wrapper {
  height: 1em;
  width: 1em;
  float: left;
  margin: 15px;
  position: relative;
}
.pie-wrapper:nth-child(3n + 1) {
  clear: both;
}
.pie-wrapper .pie {
  height: 100%;
  width: 100%;
  left: 0;
  position: absolute;
  top: 0;
}
.pie-wrapper .pie .half-circle {
  height: 100%;
  width: 100%;
  border: 0.1em solid v-bind(color);
  border-radius: 50%;
  left: 0;
  position: absolute;
  top: 0;
}
.pie-wrapper .label {
  background: #34495e;
  border-radius: 50%;
  bottom: 0.4em;
  color: #ecf0f1;
  cursor: default;
  display: block;
  font-size: 0.25em;
  left: 0.4em;
  line-height: 2.8em;
  position: absolute;
  right: 0.4em;
  text-align: center;
  top: 0.4em;
}
.pie-wrapper .label .smaller {
  color: #bdc3c7;
  font-size: 0.45em;
  padding-bottom: 20px;
  vertical-align: super;
}
.pie-wrapper .shadow {
  height: 100%;
  width: 100%;
  border: 0.1em solid #bdc3c7;
  border-radius: 50%;
}
.pie-wrapper.style-2 .label {
  background: none;
  color: #7f8c8d;
}
.pie-wrapper.style-2 .label .smaller {
  color: #bdc3c7;
}
.pie-wrapper.progress .pie .half-circle {
  border-color: v-bind(color);
}
.pie-wrapper.progress .pie .right-side {
  display: none;
}
.pie-wrapper--solid {
  border-radius: 50%;
  overflow: hidden;
}
.pie-wrapper--solid:before {
  border-radius: 0 100% 100% 0/50%;
  content: '';
  display: block;
  height: 100%;
  margin-left: 50%;
  transform-origin: left;
}
.pie-wrapper--solid .label {
  background: transparent;
}
</style>
