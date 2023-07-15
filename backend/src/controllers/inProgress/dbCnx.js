import getConnection from "../db/database.js";

const connect = async (req, res, ...sqlQuery) => {
    (async function () {
        try {
            const connection = await getConnection();
            const result = await connection.query(...sqlQuery);
            res.json(result);
        } catch (err) {
            console.error(err);
        }
    })
}

export default connect;