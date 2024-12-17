const express = require("express");
const dotenv = require("dotenv");
const SwaggerConfig = require("./src/config/swagger.config");
const mainRouter  = require("./src/app.routes");
const AllExceptionHandler = require("./src/common/expition/all-exceptionhandler");
const NotFoundHandler = require("./src/common/expition/not.found.handller");
const cookieParser = require("cookie-parser");
const expressEjsLayouts = require("express-ejs-layouts");
const moment = require("jalali-moment");
const methodOverride = require("method-override");

dotenv.config();
async function main() {
    const app = express();
    const port = process.env.PORT;
    require("./src/config/mongoose.config");
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
    app.use(express.static("public"));
    app.use(expressEjsLayouts);
    app.use(methodOverride('_method'));
    app.set("view engine", "ejs");
    app.set("layout", "./layouts/panel/main.ejs");
    app.set("layout extractScripts", true);
    app.set("layout extractStyles", true);
    app.use(mainRouter);
    app.locals.moment = moment;
    SwaggerConfig(app);
    AllExceptionHandler(app);
    NotFoundHandler(app);
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
    })
}
main();
