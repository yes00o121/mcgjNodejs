<!-- 主控件，包含左中右三个控件-->
<template>
    <div>
        <homeBodyLeft></homeBodyLeft>
        <homeBodyCenter></homeBodyCenter>
        <homeBodyRight></homeBodyRight>
    </div>
</template>
<script>
import homeBodyLeft from './home-body-left'
import homeBodyRight from './home-body-right'
import homeBodyCenter from './home-body-center'
export default {
  data(){
    return {};
  },
  components : {homeBodyLeft,homeBodyRight,homeBodyCenter}
}
</script>
<style>
</style>
