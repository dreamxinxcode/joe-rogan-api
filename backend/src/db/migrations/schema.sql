DROP TABLE IF EXISTS quotes CASCADE;

CREAT TABLE "quotes" (
  "id" SERIAL PRIMARY KEY,
  "quote" varchar,
  "timestamp" TIMESTAMP DEFAULT Now()
);