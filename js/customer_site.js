const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    huangcangbb: {
         api: 'https://hszyckapi.vip/api.php/provide/vod',
         name: 'HSbb仓库',    
    },
     huangcangCC: {
         api: 'https://hsckzy.vip/api.php/provide/vod',
         name: 'HsCC仓库',
         detail: 'https://hsckzy.vip'
     },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
