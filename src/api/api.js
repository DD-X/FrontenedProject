/*整个项目api接口的统一管理 */

import request from "./request";

//请求首页左侧的表格数据
export default{
    getTableData() {
        return request({
            //url: '/api/home/getTableData',
            url:"https://apifoxmock.com/m1/4068509-0-default/api/home/getTable",
            method: 'get',
            mock:false,
        });
    },
};