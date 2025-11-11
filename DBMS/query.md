Q1)

CREATE TABLE Hotels (
    hotel_id INT PRIMARY KEY,
    hotel_name VARCHAR(60) UNIQUE,
    city VARCHAR(40),
    rooms_available INT NOT NULL
);


Q2)

INSERT INTO Hotels (hotel_id, hotel_name, city, rooms_available)
VALUES 
(1, 'The Grand Palace', 'Mumbai', 80),
(2, 'Sea View Resort', 'Goa', 120);

UPDATE Hotels
SET rooms_available = 100
WHERE hotel_id = 1;

DELETE FROM Hotels
WHERE hotel_id = 2;

SELECT SUM(rooms_available) AS total_rooms
FROM Hotels;

SELECT AVG(rooms_available) AS average_rooms
FROM Hotels;

