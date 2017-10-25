-- ORIGINAL QUERY THAT WORKS FOR AUTH0
SELECT * 
FROM users
WHERE auth_id = $1;


-- SELECT * 
-- FROM users
-- WHERE email = $1;
