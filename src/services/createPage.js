export default (id, pid, page, title,htmlpath = '') => {
    var tppath = '/'+ (htmlpath==''?page: htmlpath);
    var o = {
        id,
        name: page,
        title: title,
        path: tppath,
        tmpl: `<ms-${page} slot="page" />`,
        checked: page === 'home' ? true : false,
        pid
    };
    return o;
};
