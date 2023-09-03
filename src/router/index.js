import {createRouter, createWebHashHistory} from "vue-router"
import routes from "./routes"


export const router =  createRouter({
    history: createWebHashHistory(),
    routes: routes
});

router.beforeEach(async (to, from, next) => {
    const authRoute = to.name === "auth";
    if (authRoute) {
      next();
      return;
    }
   
    try {
      const response = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
          "Content-type": "application/json"
        }
      });
   
      if (response.status === 401){
        next({name: "auth"});
        console.log("Error");
      }
      next()
    } catch (error) {
      next({name: "auth"});
    }
  })