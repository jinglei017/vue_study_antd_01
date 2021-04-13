<template>
  <div class="ant-conterContainer">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style>
.ant-conterContainer {
  display: flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  /* 子元素水平居中 */
  -webkit-justify-content: center;
  justify-content: center;
  -moz-box-pack: center;
}
</style>