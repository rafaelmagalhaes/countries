CREATE OR REPLACE FUNCTION search_countries_and_cities(search_term text)
RETURNS TABLE (
    name text,
    code text,
    flags jsonb,
    flag text,
    idd jsonb,
    cities text[]
)
AS $$
BEGIN
    RETURN QUERY
    SELECT
        c.name,
        c.code,
        c.flags,
        c.flag,
        c.idd,
        ARRAY_AGG(ci.name) AS cities
    FROM countries c
    LEFT JOIN cities ci ON c.code = ci.country
    WHERE
        c.name ILIKE '%' || search_term || '%'
        OR ci.name ILIKE '%' || search_term || '%'
    GROUP BY c.name, c.code, c.flag, c.flags, c.idd;
END;
$$ LANGUAGE plpgsql;


SELECT * FROM search_countries_and_cities('t');
