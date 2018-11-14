/**
 * Created by Administrator on 2016/10/11 0011.
 */
/*

 */
function openSearch(domain, keyword, classify) {
    url = domain + 'search/index?keyword=' + keyword;
    if (classify) {
        url = url + '&classify=' + classify;
    }
    window.location = url;
}