requirejs.config({
    paths: {
        "Vue": "https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.min",
        "vue": "https://rawgit.com/edgardleal/require-vue/master/dist/require-vuejs"
    },
    shim: {
        "Vue": { "exports": "Vue" }
    }
});

// to use component in your code with RequireJS: 
// put a reference to your component file with or without extencion after 'vue!' 
require(["Vue", "vue!component"], function (Vue) {
    var app = new Vue({
        el: "#app"
    });
});