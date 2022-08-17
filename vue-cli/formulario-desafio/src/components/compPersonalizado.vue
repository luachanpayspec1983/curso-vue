<template>
    <div class="rotulo">
        <label>{{ lbl }}</label>
        <div class="elemento">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ['lbl']
}
</script>
<style>
    .rotulo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 15px 0px;
        font-size: 1.4rem;
    }

    .elemento {
        display: flex;
        align-self: stretch;
        margin: 10px 0px;
    }

    input, textarea, select {
        flex: 1;
        font-size: 1.4rem;
        outline: none;
        border: 1px solid #DDD;
        border-radius: 5px;
        padding: 5px 10px;
    }


    input:focus {
        box-shadow: 16px -5px 50px -11px rgb(20, 110, 214);
        border: 1px solid rgb(20, 110, 214);
    }
</style>