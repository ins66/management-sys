export default {
    state: {
        isCollapse: false,
    },
    mutations: {
        // 方法业务逻辑
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        },

    },
    actions:{

    }
}
