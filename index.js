const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const serve = require("koa-static");
const colorconsole = require("@kenworks/colorconsole");

const app = new Koa();

const router = new Router();
//设置路由
router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "主页",
  });
});

router.get("/project1", async (ctx, next) => {
  await ctx.render("dist/index", {
    title: "项目1",
  });
});

router.get("/project2", async (ctx, next) => {
  await ctx.render("dist2/index", {
    title: "项目2",
  });
});

router.get("/project3", async (ctx, next) => {
  await ctx.render("dist3/index", {
    title: "项目3",
  });
});

//配置静态文件目录
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
colorconsole.log("请确保本地3000端口未被占用", "green", null, "blink");
colorconsole.log(
  "服务已启动，请在浏览器打开如下地址，或者ctrl点击跳转",
  "green",
  null
);
colorconsole.log("http://localhost:3000", "green", null);
