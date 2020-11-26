import { createWebHistory, createRouter } from "vue-router";
import Map1 from "./../views/Map1";
import Map2 from "./../views/Map2";

const routes = [
    {
        path: "/",
        name: "Map1",
        component: Map1,
    },
    {
        path: "/popup",
        name: "Map2",
        component: Map2,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;