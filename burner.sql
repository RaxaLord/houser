CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INT
);

INSERT INTO houses (name, address, city, state, zip)
VALUES 
    ('Condo', '1234 Shelby Dr', 'Plymouth', 'MN', 55446),
    ('House', '4321 Marsch Ln N', 'Gravity Falls', 'AZ', 85303),
    ('Apartment', '456 Tall One Rd', 'Minneapolis', 'MN', 55337),
    ('Apartment', '7654 Excaliber St', 'Phoenix', 'AZ', 85305),
    ('House', '999 Juice Wrld Rd', 'Los Angeles', 'CA', 92102);

SELECT * FROM houses;