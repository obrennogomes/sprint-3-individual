CREATE DATABASE São_Paulo_RP;

USE São_Paulo_RP;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	cpf VARCHAR(50),
	tel VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);
select * from usuario;

select count(id) as qtdPlayers from usuario;



