CREATE DATABASE cullinari;
USE cullinari;

CREATE TABLE cooker(
	id_cooker INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_user VARCHAR(255) NOT NULL
);

CREATE TABLE recipe(
	id_recipe INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    preparation_time INT NOT NULL,
    cooking_time INT NOT NULL,
	portion INT NOT NULL,
    date_recipe DATETIME,
    category ENUM('Entradas', 'Prato Principal', 'Sobremesas')
);

CREATE TABLE favorite(
	id_favorite INT PRIMARY KEY AUTO_INCREMENT,
    cooker_id INT,
    FOREIGN KEY (cooker_id)
    REFERENCES cooker(id_cooker),
    recipe_id INT,
    FOREIGN KEY (recipe_id)
    REFERENCES recipe(id_recipe)
);

CREATE TABLE rating(
	id_commentary INT PRIMARY KEY AUTO_INCREMENT,
    commentary VARCHAR(255) NOT NULL,
    recipe_id INT,
    FOREIGN KEY (recipe_id)
    REFERENCES recipe(id_recipe),
    cooker_id INT,
    FOREIGN KEY (cooker_id)
    REFERENCES cooker(id_cooker)
);