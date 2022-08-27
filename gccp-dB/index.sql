CREATE DATABASE mensagem;
\c mensagem

CREATE TABLE IF NOT EXISTS data_message(
    id SERIAL,
    msg VARCHAR(100)
);

SELECT * FROM data_message;

INSERT INTO data_message VALUES(1,'hello LAMP server on GCCP.');