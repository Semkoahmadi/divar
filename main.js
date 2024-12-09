const express = require("express");
const dotenv = require("dotenv");
const SwaggerConfig = require("./src/config/swagger.config");
const mainRouter  = require("./src/app.routes");
const AllExceptionHandler = require("./src/common/expition/all-exceptionhandler");
const NotFoundHandler = require("./src/common/expition/not.found.handller");

dotenv.config();
async function main() {
    const app = express();
    const port = process.env.PORT;
    require("./src/config/mongoose.config");
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    SwaggerConfig(app)
    NotFoundHandler(app)
    app.use(mainRouter)
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
    })
}
main();
