import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
Vue.use(VueRouter);

// const routes = [router];

const router = new VueRouter({
	routes
});

export default router;
