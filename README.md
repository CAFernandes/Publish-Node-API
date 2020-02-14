
# Publish Node API

## Criando do Banco de Dados

Execute o código abaixo para criar a tabela no banco de dados

    CREATE TABLE `news` (
	    `id` INT(11) NOT NULL AUTO_INCREMENT,
	    `titulo` VARCHAR(255) NOT NULL,
	    `resumo` VARCHAR(100) NOT NULL,
	    `conteudo` TEXT NOT NULL,
	    `autor` VARCHAR(255) NOT NULL,
	    `data_noticia` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	    PRIMARY KEY (`id`)
	)
	COLLATE='utf8mb4_0900_ai_ci'
	ENGINE=InnoDB
	AUTO_INCREMENT=6;

Configure o arquivo connection.js na pasta DB com as configurações de conexão ao banco