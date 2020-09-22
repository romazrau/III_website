export default
        {
            data: function () { 
                return {
                    count: 0
                }                            
            },
            template:  `<button v-on:click='count++'> 
                        您已點擊了我{{count}}次了...
                        </button>`
            //template必須是"單一根元素"的形式
        };
