<template>
    <div>
        {{text}}
    </div>

</template>

<script>
    define(["Vue"], function(Vue) {
        Vue.component("my-component", {
            template: template, // the variable template will be injected 
            data: function() {
                return {"text": "Ok"};
            }
        });
    });
</script> 