//GITHUB

git init

git remote add origin (lien)

git remote -v

git status

git add

git status (vert niquel)

git commit -m "nom du commit"

git push

si ça fonctionne pas, c'est que la branch n'est pas mise sur github

DONC

git push --set-upstream origin master

//MYSQL

mysql -u root -p

CREATE DABATADE db_user;

USE db_user;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,  
password VARCHAR(255) NOT NULL  
);
