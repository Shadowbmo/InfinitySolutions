
CREATE TABLE Empresa (
  idEmpresa VARCHAR(18),
  Nome VARCHAR(45),
  Senha VARCHAR(300),
  email VARCHAR(45),
  numeroTel VARCHAR(20),
  CEP CHAR(9),
  Lougradouro VARCHAR(45),
  Numero INT,
  Estado VARCHAR(45),
  Cidade VARCHAR(45),
  Filial VARCHAR(18),
  PRIMARY KEY (idEmpresa),
    FOREIGN KEY (Filial)
    REFERENCES Empresa (idEmpresa))


CREATE TABLE Funcionário (
  Nome VARCHAR(45),
  Cargo VARCHAR(45),
  Email VARCHAR(45),
  Senha VARCHAR(45),
  idFunc VARCHAR(14),
  FkEmpresa VARCHAR(18),
  PRIMARY KEY (idFunc, FkEmpresa),
    FOREIGN KEY (FkEmpresa)
    REFERENCES Empresa (idEmpresa))



CREATE TABLE Totem (
  NumIdenti VARCHAR(10),
  fkEmpresa VARCHAR(18),
  DataFabrica DATE,
  Marca VARCHAR(45),
  SO VARCHAR(45),
  CapacidadeDeMemoriaRam DOUBLE,
  CapacidadeDeCPU DOUBLE,
  CapacidadeDeTemperatura DOUBLE,
  CapacidadeDeDisco DOUBLE,
  statusDeFuncionamento VARCHAR(45),
  PRIMARY KEY (NumIdenti, fkEmpresa),
    FOREIGN KEY (fkEmpresa)
    REFERENCES Empresa (idEmpresa))


CREATE TABLE MonitoramentoDeRecursos (
  idCapacidade INT,
  FKTotem VARCHAR(10),
  PorcentagemMemoriaRam DOUBLE,
  PorcentagemDisco DOUBLE,
  PorcentagemCPU DOUBLE,
  PorcentagemTemperatura DOUBLE,
  Processos VARCHAR(255),
  DataHora DATETIME,
  PRIMARY KEY (idCapacidade, FKTotem),
    FOREIGN KEY (FKTotem)
    REFERENCES Totem (NumIdenti))


CREATE TABLE Limites (
  idLimites INT,
  MemoriaRamLimite DOUBLE,
  DiscoLimite DOUBLE,
  CPULimite DOUBLE,
  TemperaturaLimite DOUBLE,
  PRIMARY KEY (idLimites))

CREATE TABLE Totem_has_Limites (
  Id INT,
  FkTotemId VARCHAR(10),
  FkTotemEmpresa VARCHAR(18),
  FkLimites INT,
  TipoDeLimite VARCHAR(45),
  PRIMARY KEY (Id, FkTotemId, FkTotemEmpresa, FkLimites),
    FOREIGN KEY (FkTotemId , FkTotemEmpresa)
    REFERENCES Totem (NumIdenti , fkEmpresa),
    FOREIGN KEY (FkLimites)
    REFERENCES Limites (idLimites)
);

