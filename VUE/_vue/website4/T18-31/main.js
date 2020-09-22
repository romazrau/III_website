var vm = new Vue({
    el: '#app',
    data: {
        errors: [],
        username: null,
        password: null
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (!this.username) {
                this.errors.push('「使用者名稱」是須填欄位...');
            }

            if (!this.password) {
                this.errors.push('「密碼」是須填欄位...');
            }
            else if (this.password.length < 5) {
                this.errors.push('「密碼」必須具5個(含)字元以上..');
            }

            //表單通過驗證時將送出Ajax請求
            if (!this.errors.length) {
                $.ajax({
                    method: 'post',
                    url: 'AjaxServer.aspx',
                    data: $(e.currentTarget).serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if(data.status=='ok')
                            $("#response-msg").html(`<span class='ok'>${data.message}</span>`);
                        else
                            $("#response-msg").html(`<span class='fail'>${data.message}</span>`);

                        setTimeout(function () {
                            $("#response-msg").html('');
                        }, 2000);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        $("#response-msg").html(`${textStatus}: ${errorThrown}`);
                    }
                });
            }

            //取消同步請求
            e.preventDefault();
        }
    }
})
