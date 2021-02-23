"use strict";

import listRoutes from "./list.routes";

export default (app) => {
    app.use("/api/list", listRoutes);
};
