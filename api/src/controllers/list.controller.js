"use strict";

class ListController {
    static async getList(req, res) {
        try {
            const list = [{a: 1}, {b: 2}];

            res.json(list);
        } catch (err) {
            res.status(err.statusCode || 400).json({message: err.message || err});
        }
    }
}

export default ListController;