UPDATE cities AS c
SET country_id = co.id
FROM countries AS co
WHERE c.country = co.code;