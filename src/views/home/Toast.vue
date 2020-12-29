<template>
  <div class="toast">
      <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
    name:'toast',
    data() {

    },
    props:{
        message:{
            type:String,
            default:''
        }
    }
}
</script>

<style scoped>
    .toast{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,150%); 
    }
</style>