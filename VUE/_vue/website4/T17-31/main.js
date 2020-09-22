var app = new Vue({
    el: '#app',
    data: {
        prodList: null,//用於保存完整products資料
        productid: '',
        productname: ''
    },
    methods: {
        doMyPagination: function (lengthPerPage, pageAnchorsPerBatch) {
            //以jQuery處理每個<table>的<tr>的分頁
            var rows = $("table:eq(0) tr:has(td)");
            var paginator = $("#paginator1");
            tableRowsPagination(rows, paginator, lengthPerPage, pageAnchorsPerBatch);
        }
    },
    computed: {
        //itemList用於存儲使用者篩選的products資料
        itemList: function () {
            if (!this.prodList) //Ajax fetch products 尚未完成
                return null;
            else {
                var vm = this;
                return this.prodList.filter(
                    function (prod) {
                        return prod.productid.toString().indexOf(vm.productid) >= 0 &&
                            prod.productname.toUpperCase().indexOf(vm.productname.toUpperCase()) >= 0;
                        //註: JavaScript's 字串沒有contains()方法
                    });
            }
        }
    },
    created: function () {
        var vm = this;
        fetch("products.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (arr) {
                vm.prodList = arr;
                //vm.itemList = vm.prodList;
            });
    },
    updated: function () {//Data變更->DOM變更->jQuery.ready()內的Task才能正常運作
        this.doMyPagination(6, 10);
    }
})
