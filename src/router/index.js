//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";
import LayOut from "@/views/LayOut";
import Home from "@/views/home/Home";
import SlideShow from "@/views/slideshow/SlideShow";
import Product from "@/views/product/Product";
import User from "@/views/user/User";
import Article from "@/views/article/Article";

//创建并默认暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: LayOut,
            redirect:'home',
            children: [
                {path: 'home', component: Home, meta: {title: '主页'}},
                {path: 'slideshow', component: SlideShow, meta: {title: '轮播图'}},
                {path: 'article', component: Article, meta: {title: '文章'}},
                {path: 'product', component: Product, meta: {title: '商品'}},
                {path: 'user', component: User, meta: {title: '用户'}},
            ]
        },

    ]
});
