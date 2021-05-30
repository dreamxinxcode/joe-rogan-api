import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
});

exports.getRandomQuote = () => {
	const queryString: string = `
		SELECT id, quote
		FROM quotes
		ORDER BY random()
		LIMIT 1
	`
	return pool.query(queryString, [])
	.then(res => res.rows)
	.catch(e => console.log(e))
}

exports.getAllQuotes = () => {
	const queryString: string = `
		SELECT id, quote
		FROM quotes
	`
	return pool.query(queryString, [])
	.then(res => res.rows)
	.catch(e => console.log(e))
}