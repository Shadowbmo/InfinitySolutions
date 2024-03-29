-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

-- MySQL Script generated by MySQL Workbench
-- Wed Apr 12 19:40:16 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS mydb DEFAULT CHARACTER SET utf8 ;
USE mydb ;

-- -----------------------------------------------------
-- Table Empresa
-- -----------------------------------------------------
DROP TABLE IF EXISTS mydb.Empresa ;

CREATE TABLE IF NOT EXISTS mydb.Empresa (
  idEmpresa INT NOT NULL,
  Nome VARCHAR(45) NULL,
  CNPJ INT NULL,
  Senha VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  numeroTel INT NULL,
  CEP` INT NULL,
  `Lougradouro` VARCHAR(45) NULL,
  `Numero` INT NULL,
  `Estado` VARCHAR(45) NULL,
  `Cidade` VARCHAR(45) NULL,
  `Filial` INT NOT NULL,
  PRIMARY KEY (`idEmpresa`),
  INDEX `fk_Empresa_Empresa1_idx` (`Filial` ASC) VISIBLE,
  CONSTRAINT `fk_Empresa_Empresa1`
    FOREIGN KEY (`Filial`)
    REFERENCES `mydb`.`Empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Funcionário`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Funcionário` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Funcionário` (
  `Nome` VARCHAR(45) NULL,
  `CPF` VARCHAR(45) NULL,
  `Cargo` VARCHAR(45) NULL,
  `Email` VARCHAR(45) NULL,
  `Senha` VARCHAR(45) NULL,
  `idFunc` INT NOT NULL,
  `FkEmpresa` INT NOT NULL,
  PRIMARY KEY (`idFunc`, `FkEmpresa`),
  INDEX `fk_Funcionário_Empresa1_idx` (`FkEmpresa` ASC) VISIBLE,
  CONSTRAINT `fk_Funcionário_Empresa1`
    FOREIGN KEY (`FkEmpresa`)
    REFERENCES `mydb`.`Empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Totem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Totem` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Totem` (
  `NumIdenti` INT NOT NULL,
  `fkEmpresa` INT NOT NULL,
  `DataFabrica` DATE NULL,
  `Marca` VARCHAR(45) NULL,
  `SO` VARCHAR(45) NULL,
  `descErro` VARCHAR(120) NULL,
  `CapacidadeDeMemoriaRam` DOUBLE NULL,
  `CapacidadeDeCPU` DOUBLE NULL,
  `CapacidadeDeTemperatura` DOUBLE NULL,
  `CapacidadeDeDisco` DOUBLE NULL,
  PRIMARY KEY (`NumIdenti`, `fkEmpresa`),
  INDEX `fk_Totem_Empresa1_idx` (`fkEmpresa` ASC) VISIBLE,
  CONSTRAINT `fk_Totem_Empresa1`
    FOREIGN KEY (`fkEmpresa`)
    REFERENCES `mydb`.`Empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`MonitoramentoDeRecursos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`MonitoramentoDeRecursos` ;

CREATE TABLE IF NOT EXISTS `mydb`.`MonitoramentoDeRecursos` (
  `idCapacidade` INT NOT NULL,
  `FKTotem` INT NOT NULL,
  `PorcentagemMemoriaRam` DOUBLE NULL,
  `PorcentagemDisco` DOUBLE NULL,
  `PorcentagemCPU` DOUBLE NULL,
  `PorcentagemTemperatura` DOUBLE NULL,
  `Processos` VARCHAR(255) NULL,
  `DataHora` DATETIME NULL,
  PRIMARY KEY (`idCapacidade`, `FKTotem`),
  INDEX `fk_DadosDesktop_Totem_idx` (`FKTotem` ASC) VISIBLE,
  CONSTRAINT `fk_DadosDesktop_Totem`
    FOREIGN KEY (`FKTotem`)
    REFERENCES `mydb`.`Totem` (`NumIdenti`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Chamados`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Chamados` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Chamados` (
  `idChamado` INT NOT NULL,
  `fkFunc` INT NOT NULL,
  `fkEmpresaFunc` INT NOT NULL,
  `HorárioAbertura` DATETIME NULL,
  `HorárioTérmino` DATETIME NULL,
  `NívelProbl` VARCHAR(45) NULL,
  `DescProbl` VARCHAR(45) NULL,
  `Chamadoscol` VARCHAR(45) NULL,
  `FkTotemMonitoramentoDeRecursos` INT NOT NULL,
  `FkMonitoramentoDeRecursos` INT NOT NULL,
  PRIMARY KEY (`idChamado`, `fkFunc`, `fkEmpresaFunc`, `FkTotemMonitoramentoDeRecursos`, `FkMonitoramentoDeRecursos`),
  INDEX `fk_Funcionário_has_Totem_Funcionário1_idx` (`fkFunc` ASC, `fkEmpresaFunc` ASC) VISIBLE,
  INDEX `fk_Chamados_MonitoramentoDeRecursos1_idx` (`FkTotemMonitoramentoDeRecursos` ASC, `FkMonitoramentoDeRecursos` ASC) VISIBLE,
  CONSTRAINT `fk_Funcionário_has_Totem_Funcionário1`
    FOREIGN KEY (`fkFunc` , `fkEmpresaFunc`)
    REFERENCES `mydb`.`Funcionário` (`idFunc` , `FkEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Chamados_MonitoramentoDeRecursos1`
    FOREIGN KEY (`FkTotemMonitoramentoDeRecursos` , `FkMonitoramentoDeRecursos`)
    REFERENCES `mydb`.`MonitoramentoDeRecursos` (`idCapacidade` , `FKTotem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Limites`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Limites` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Limites` (
  `idLimites` INT NOT NULL,
  `FKTotem` INT NOT NULL,
  `FKTotemEmpresa` INT NOT NULL,
  `TipoDeLimite` VARCHAR(45) NULL,
  `MemoriaRamLimite` DOUBLE NULL,
  `DiscoLimite` DOUBLE NULL,
  `CPULimite` DOUBLE NULL,
  `TemperaturaLimite` DOUBLE NULL,
  PRIMARY KEY (`idLimites`, `FKTotem`, `FKTotemEmpresa`),
  INDEX `fk_Limites_Totem1_idx` (`FKTotem` ASC, `FKTotemEmpresa` ASC) VISIBLE,
  CONSTRAINT `fk_Limites_Totem1`
    FOREIGN KEY (`FKTotem` , `FKTotemEmpresa`)
    REFERENCES `mydb`.`Totem` (`NumIdenti` , `fkEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';


CREATE TABLE Reinicializacoes (
  idReinicializacoes INT NOT NULL auto_increment,
  fkLimites  varchar(45) NOT NULL,
  fkTotem VARCHAR(45) NOT NULL,
  fkEmpresa varchar(18) NOT NULL,
  Data DATE NULL,
  MonitoramentoDeRecursos_idCapacidade INT NOT NULL,
  MonitoramentoDeRecursos_fkEmpresa varchar(18) NOT NULL,
  MonitoramentoDeRecursos_FkNumIdenti VARCHAR(45) NOT NULL,
  PRIMARY KEY (idReinicializacoes, fkLimites, fkTotem, fkEmpresa),
    FOREIGN KEY (fkLimites , fkTotem , fkEmpresa)
    REFERENCES Limites (idLimites , fkTotem , fkEmpresa),
    FOREIGN KEY (MonitoramentoDeRecursos_idCapacidade , MonitoramentoDeRecursos_fkEmpresa , MonitoramentoDeRecursos_FkNumIdenti)
    REFERENCES MonitoramentoDeRecursos (idCapacidade , fkEmpresa , fkTotem)
);
