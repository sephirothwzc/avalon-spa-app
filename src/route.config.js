import createPage from './services/createPage';

var pages = [];

// [1, 2, 3, 4, 5].forEach(i => {
//     pages.push(createPage(i, 0, 'page' + i, 'page' + i));
//     [1, 2, 3, 4].forEach(j => {
//         pages.push(createPage(i * 100 + j, i, 'page' + i + '0' + j, 'page' + i + '0' + j));
//     })
// });

// #region 导航菜单
var navbars = [
    {
        id: 1,
        pid:0,
        page: 'system',
        title: '系统管理',
        sort: 10
    },
    {
        id: 2,
        pid:0,
        page: 'person',
        title: '个人中心',
        sort: 20
    },
    {
        id: 3,
        pid:0,
        page: 'chance',
        title: '机会管理',
        sort: 30
    },
    {
        id: 4,
        pid:0,
        page: 'project',
        title: '项目管理',
        sort: 40
    },
    {
        id: 5,
        pid:0,
        page: 'dayreport',
        title: '日报管理',
        sort: 50
    },
    {
        id: 6,
        pid:5,
        page: 'page101',
        title: '日报填写',
        sort: 10
    },
    {
        id: 7,
        pid:5,
        page: 'dayreportadd',
        title: '日报审批',
        sort: 10
    }
];
// #endregion

navbars.forEach(n=> {
    pages.push(createPage(n.id,n.pid,n.page,n.title));
});

pages.push(createPage(0, 1, 'home', '首页'));
// pages = pages.concat([
//     createPage(0, 1, 'home', '首页'),
//     createPage(101, 1, 'page101', 'page101'),
//     createPage(102, 1, 'page102', 'page102'),
//     createPage(103, 1, 'page103', 'page103'),
//     createPage(201, 2, 'page201', 'page201'),
//     createPage(202, 2, 'page202', 'page202'),
//     createPage(301, 3, 'page301', 'page301'),
//     createPage(302, 3, 'page302', 'page302'),
//     createPage(303, 3, 'page303', 'page303'),
//     createPage(304, 3, 'page304', 'page304')
// ]);


export var menus = pages.filter(el => el.pid === 0);
export var submenus = pages.filter(el => el.pid !== 0);

export default { pages, menus, submenus };
