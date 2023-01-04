import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "../views/layouts/AdminLayout.vue";
import AdminDashboard from "../views/admin/dashboard/Index";

const routes = [
  {
    path: "",
    name: "",
    component: () => import("../views/login/Index"),
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "admin",
        component: AdminDashboard,
      },
      {
        path: "/shifts",
        name: "shifts",
        component: () => import("../views/admin/shifts/Index"),
      },
      {
        path: "/helper",
        name: "helper",
        component: () => import("../views/admin/helper/Index"),
      },
      {
        path: "/settings",
        name: "settings",
        component: () => import("../views/admin/settings/Index"),
      },
    ],
  },
  {
    path: "/user",
    component: () => import("../views/layouts/UserLayout.vue"),
    children: [
      {
        path: "",
        name: "user",
        component: () => import("../views/user/dashboard/Index"),
      },
      {
        path: "/shift",
        name: "shift",
        component: () => import("../views/user/shift/Index"),
      },
      {
        path: "/trade",
        name: "trade",
        component: () => import("../views/user/trade/Index"),
      },
      {
        path: "/coordinator",
        name: "coordinator",
        component: () => import("../views/user/coordinator/Index"),
      },
    ],
  },
  {
    path: "/locations",
    component: () => import("../views/layouts/LocationsLayout.vue"),
    children: [
      {
        path: "/rotator",
        name: "rotator",
        component: () => import("../views/locations/rotator/Index"),
      },
      {
        path: "/static",
        name: "static",
        component: () => import("../views/locations/static/Index"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
