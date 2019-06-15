<template>
    <div class="form-group">
        <div>
            <label>{{ formname }}</label>
            <transition name="icon" appear v-if="active" mode="out-in">
                <i v-if="styleIcon" key="success" class="fa fa-check-circle text-success"></i>
                <i v-else key="danger" class="fa fa-times-circle text-danger"></i>
            </transition>
            <input type="text" class="form-control" :value="formvalue" @input="check">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['formname', 'formvalue', 'formpattern'],
        methods: {
            check(e){
                this.active = true;
                this.$emit('infoChanged', e.target.value);
            }
        },
        data(){
            return {
                active: this.formvalue ? true : false,
            }
        },
        computed: {
            styleIcon(){
                if(this.active){
                    return this.formpattern.test(this.formvalue)
                }
            },
            isValid(){
                return this.formpattern.test(this.formvalue)
            }
        },
        watch: {
            isValid(){
                this.$emit('changeStatus', this.isValid);
            }
        }

    }
</script>

<style>
    .icon-enter{
        opacity: 0;
    }

    .icon-enter-active{
        transition: opacity 0.5s;
    }

    icon-enter-to{

    }

    .icon-leave{

    }

    .icon-leave-active{
        opacity: 0;
        transition: opacity 0.5s;
    }

    icon-leave-to{
        opacity: 0;
    }
</style>
