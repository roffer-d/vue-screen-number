<template>
    <div class="screen-number">
        <span class="number-item" :class="itemClass" v-for="(item,index) in valueList" :key="index">
            <span class="number-item-child"
                  :ref="`number-item-child-${index}`"
                  :class="childClass"
                  :style="{transition:`all ${speed}`}">0123456789</span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "screenNumber",
        props: {
            itemClass: {
                type: String,
                default: ''
            },
            childClass: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: '12345'
            },
            speed: {
                type: String,
                default: '2s'
            }
        },
        data() {
            return {
                valueList: this.value.split('')
            }
        },
        mounted() {
            this.valueList.forEach((item,index)=>{
                setTimeout(()=>{
                    this.$refs[`number-item-child-${index}`][0].style.transform = `translate(0,${-item * 10}%)`
                },50)
            })
        }
    }
</script>

<style scoped lang="less">
    .screen-number {
        display: flex;

        .number-item {
            background: #555;
            border-radius: .2rem;
            position: relative;
            padding: .5rem;
            margin-right: .3rem;
            color: #66FFFF;
            font-size: 1.5rem;
            font-weight: bold;
            font-family: BigNoodleTitling;
            writing-mode: vertical-lr;
            text-orientation: upright;
            overflow: hidden;
            display: flex;
            height: 3rem;
            width: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;

            .number-item-child {
                position: absolute;
                top: 1.4rem;
                letter-spacing: 1.4rem;
            }
        }
    }
</style>