create database db_cadastroCarros;

use db_cadastroCarros;

create table carros (
codigo int primary key auto_increment,
modelo varchar(30),
placa varchar(7)
);

insert into carros (modelo, placa) value ('Toyota Corolla', 'GGG3535');
insert into carros (modelo, placa) value ('Honda Civic', 'ELV1590');

select * from carros

-- Em caso de erro de conecção 1251, executar a linha de comando abaixo

alter user 'root'@'localhost' identified with mysql_native_password by 'root'; 