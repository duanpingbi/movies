<template>
    <div class="wapper" ref="wapper">
        <slot></slot>
    </div>
</template>

<script>
    import Scroll from 'better-scroll';
    export default {
        name: "Scroll",
        props:{
          scrollToTop:{
              type:Function,
              default:function () { }
          },
            scrollToEnd:{
              type: Function,
                default:function(){}
            }
        },
        mounted() {
            var scroll = new Scroll(this.$refs.wapper,{
                probeType: 1,
                tap:true
            });
            scroll.on('sroll',(pos)=>{
                this.scrollToTop(pos);
            })
            scroll.on('touchEnd',(pos)=>{
                this.scrollToEnd(pos);
            })
        }
    }
</script>

<style scoped>
.wapper{
    height: 100%;
}
</style>