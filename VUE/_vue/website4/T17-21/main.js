var app = new Vue({
    el: '#app',
    data: {
        itemList: null
    },
    methods: {
        doMyPagination: function (lengthPerPage, pageAnchorsPerBatch ) {
            //以jQuery處理每個<table>的<tr>的分頁           
            var rows = $("table:eq(0) tr:has(td)");
            var paginator = $("#paginator1");
            tableRowsPagination(rows, paginator, lengthPerPage, pageAnchorsPerBatch);
        }
    },
    created: function () {
        var vm = this;
        fetch("products.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (arr) {
                vm.itemList = arr;
            });
    },
    updated: function () {//Data變更->DOM變更->jQuery.ready()內的Task才能正常運作
        this.doMyPagination(7,10);
    }
})
