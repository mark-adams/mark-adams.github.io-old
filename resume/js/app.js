var result = 0;
var vm = new Vue({
    el: '#container',
    data: {
        resume: {}
    },
    created: function () {
        this.$http.get('resume.json').then(function(response){
            return response.json();
        }).then(function(json){
            this.resume = json;
        });
    }
});