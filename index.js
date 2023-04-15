//使用koa复写入口文件
const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const serve = require("koa-static");

const app = new Koa();
const router = new Router();

app.use(serve(__dirname));
app.use(serve(__dirname + "/views/"));

//配置模板引擎
app.use(
  views(__dirname + "/views/", {
    extension: "html",
  })
);

//使用koa-router
app.use(router.routes());

app.listen(3000);

//设置路由
router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "主页",
  });
});

//设置路由
router.get("/project1", async (ctx, next) => {
  await ctx.render("dist/index", {
    title: "项目1",
  });
});

//设置路由
router.get("/project2", async (ctx, next) => {
  await ctx.render("dist2/index", {
    title: "项目2",
  });
});

//设置路由
router.get("/project3", async (ctx, next) => {
  await ctx.render("dist3/index", {
    title: "项目3",
  });
});
