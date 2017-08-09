CREATE DATABASE  IF NOT EXISTS `LabCalendar` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `LabCalendar`;
-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: 0.0.0.0    Database: LabCalendar
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agendalaboratorio`
--

DROP TABLE IF EXISTS `agendalaboratorio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agendalaboratorio` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `fechaInicio` date DEFAULT NULL,
  `fechaFin` date DEFAULT NULL,
  `horaInicio` int(11) DEFAULT NULL,
  `horaFin` int(11) DEFAULT NULL,
  `dia` int(11) DEFAULT NULL,
  `observacion` varchar(255) DEFAULT NULL,
  `idMateriaProfesor` int(11) DEFAULT NULL,
  `idLaboratorio` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendalaboratorio`
--

LOCK TABLES `agendalaboratorio` WRITE;
/*!40000 ALTER TABLE `agendalaboratorio` DISABLE KEYS */;
INSERT INTO `agendalaboratorio` VALUES (1,'2017-08-04','2017-08-04',7,8,0,NULL,15,2,'2017-08-08 09:52:01','2017-08-08 09:52:01');
/*!40000 ALTER TABLE `agendalaboratorio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `laboratorio`
--

DROP TABLE IF EXISTS `laboratorio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `laboratorio` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `numeroAula` varchar(255) DEFAULT NULL,
  `numeroComputadoras` varchar(255) DEFAULT NULL,
  `idModeloComputador` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `laboratorio`
--

LOCK TABLES `laboratorio` WRITE;
/*!40000 ALTER TABLE `laboratorio` DISABLE KEYS */;
INSERT INTO `laboratorio` VALUES (1,'Beta','302','23',NULL,'2017-07-30 11:03:19','2017-08-06 20:15:34'),(2,'Gamma','303','23',1,'2017-07-30 11:03:19','2017-07-30 11:03:19'),(3,'Kappa','306','23',1,'2017-07-30 11:03:19','2017-07-30 11:03:19'),(4,'Sigma','307','23',1,'2017-07-30 11:03:20','2017-07-30 11:03:20'),(5,'Lambda','308','23',1,'2017-07-30 11:03:20','2017-07-30 11:03:20'),(6,'Epsilon','305','23',2,'2017-07-30 11:03:20','2017-07-30 11:03:20'),(7,'Delta','304','23',3,'2017-07-30 11:03:20','2017-07-30 11:03:20');
/*!40000 ALTER TABLE `laboratorio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `laboratorio_idsoftware__software_idlaboratorio`
--

DROP TABLE IF EXISTS `laboratorio_idsoftware__software_idlaboratorio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `laboratorio_idsoftware__software_idlaboratorio` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `laboratorio_idSoftware` int(11) DEFAULT NULL,
  `software_idLaboratorio` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `laboratorio_idsoftware__software_idlaboratorio`
--

LOCK TABLES `laboratorio_idsoftware__software_idlaboratorio` WRITE;
/*!40000 ALTER TABLE `laboratorio_idsoftware__software_idlaboratorio` DISABLE KEYS */;
/*!40000 ALTER TABLE `laboratorio_idsoftware__software_idlaboratorio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materia` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`),
  UNIQUE KEY `codigo` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=1431 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` VALUES (2,'PLANES DE NEGOCIOS TIC ','SIC884','2017-07-30 11:03:19','2017-07-30 11:03:19'),(3,'CCNA CISCO ','MAT001 ','2017-07-30 11:03:19','2017-07-30 11:03:19'),(4,'MATEMATICAS DISCRETAS ','MAT304','2017-07-30 11:03:19','2017-08-06 20:15:34'),(5,'GESTION DE PROYECTOS ','SIC434','2017-07-30 11:03:19','2017-07-30 11:03:19'),(6,'ALGORITMOS NUMERICOS ','SIC412','2017-07-30 11:03:19','2017-07-30 11:03:19'),(7,'PROBABILIDAD Y ESTADISTICA BASICAS ','MAT234','2017-07-30 11:03:19','2017-07-30 11:03:19'),(8,'TCP/IP ','SIC516','2017-07-30 11:03:19','2017-07-30 11:03:19'),(9,'ADMINISTRACION DE BASE DE DATOS ','SIC744','2017-07-30 11:03:19','2017-07-30 11:03:19'),(10,'FUNDAMENTOS DE CIENCIAS DE LA COMPUTACION ','ICO204','2017-07-30 11:03:19','2017-07-30 11:03:19'),(12,'INGENIERIA DE SOFTWARE I ','SIC544','2017-07-30 11:03:19','2017-07-30 11:03:19'),(13,'SISTEMAS OPERATIVOS ','SIC414','2017-07-30 11:03:19','2017-07-30 11:03:19'),(14,'CERTIFICACION EN GERENCIA DE SEGURIDAD DE INFORMACION ','SIC803','2017-07-30 11:03:19','2017-07-30 11:03:19'),(15,'INTELIGENCIA DE NEGOCIOS ','SIC614','2017-07-30 11:03:19','2017-07-30 11:03:19'),(16,'GESTION DE TIC Y UNIDADES INFORMATICAS ','SIC826','2017-07-30 11:03:19','2017-07-30 11:03:19'),(17,'COMPUTACION DISTRIBUIDA ','SIC616','2017-07-30 11:03:19','2017-07-30 11:03:19'),(18,'HABILIDADES DIRECTIVAS ','SIC774','2017-07-30 11:03:19','2017-07-30 11:03:19'),(19,'REDES DE COMPUTADORAS ','SIC416','2017-07-30 11:03:19','2017-07-30 11:03:19'),(21,'SISTEMAS DE COMUNICACION ','SIC314','2017-07-30 11:03:19','2017-07-30 11:03:19'),(22,'AUDITORIA Y EVALUACION DE SISTEMAS COMPUTACIONALES ','SIC816','2017-07-30 11:03:19','2017-07-30 11:03:19'),(23,'INTELIGENCIA ARTIFICIAL ','SIC524','2017-07-30 11:03:19','2017-07-30 11:03:19'),(24,'COMUNICACION ACADEMICA Y PROFESIONAL ','SIC343','2017-07-30 11:03:19','2017-07-30 11:03:19'),(25,'CLUBES ','ICLUB1','2017-07-30 11:03:19','2017-07-30 11:03:19'),(26,'ECOLOGIA Y MEDIO AMBIENTE ','EMA313','2017-07-30 11:03:19','2017-07-30 11:03:19'),(27,'PROGRAMACION I ','ICO106','2017-07-30 11:03:19','2017-07-30 11:03:19'),(28,'CALIDAD DE SOFTWARE ','SIC734','2017-07-30 11:03:19','2017-07-30 11:03:19'),(29,'DISEÑO DE PROCESOS ORGANIZACIONALES ','SIC623','2017-07-30 11:03:19','2017-07-30 11:03:19'),(30,'INGENIERIA DE SOFTWARE II ','SIC634','2017-07-30 11:03:19','2017-07-30 11:03:19'),(31,'ADMINISTRACION FINANCIERA ','SIC613','2017-07-30 11:03:19','2017-07-30 11:03:19'),(33,'TALLER DE FORMULACION DE PROYECTOS DE TITULACION ','SIC812','2017-07-30 11:03:19','2017-07-30 11:03:19'),(35,'TECNOLOGIAS DE SEGURIDAD ','SIC514','2017-07-30 11:03:19','2017-07-30 11:03:19'),(36,'APLICACIONES MOVILES ','SIC764','2017-07-30 11:03:19','2017-07-30 11:03:19'),(43,'ESTRUCTURAS DE DATOS ','SIC334','2017-08-02 11:59:12','2017-08-02 11:59:12'),(109,'BASES DE DATOS ','SIC534','2017-08-02 12:15:17','2017-08-02 12:15:17'),(147,'APLICACIONES WEB ','SIC754','2017-08-02 12:19:29','2017-08-02 12:19:29'),(264,'GNU LINUX ','SIC854','2017-08-02 12:28:14','2017-08-02 12:28:14'),(380,'APLICACIONES EN AMBIENTES LIBRES ','SIC644','2017-08-02 12:31:55','2017-08-02 12:31:55'),(420,'APLICACIONES EN AMBIENTES PROPIETARIOS ','SIC554','2017-08-02 12:38:07','2017-08-02 12:38:07'),(629,'BASES DE DATOS DISTRIBUIDAS ','SIC 534','2017-08-02 12:45:56','2017-08-02 12:45:56'),(756,'ARQUITECTURA DE COMPUTADORES ','SIC316','2017-08-02 13:02:16','2017-08-02 13:02:16'),(800,'ALGORITMOS ','SIC324','2017-08-02 13:04:21','2017-08-02 13:04:21'),(888,'ADMINISTRACION DE SISTEMAS OPERATIVOS Y REDES ','SIC714','2017-08-02 13:09:01','2017-08-02 13:09:01'),(935,'COMPILADORES Y LENGUAJES ','SIC424','2017-08-02 13:14:46','2017-08-02 13:14:46'),(936,'CERTIFICACION PROFESIONAL ','SIC834','2017-08-02 13:14:46','2017-08-02 13:14:46'),(937,'PROGRAMACION II ','SIC216','2017-08-02 13:14:46','2017-08-02 13:14:46'),(1126,'SEMINARIO PROFESIONAL IV ','SIC6A2','2017-08-02 13:39:51','2017-08-02 13:39:51'),(1225,'LEGISLACION INFORMATICA ','ADM612','2017-08-02 13:43:59','2017-08-02 13:43:59'),(1376,'TECNOLOGIAS WEB CON JAVASCRIPT ','SIC8B4','2017-08-02 13:57:57','2017-08-02 13:57:57'),(1377,'SEMINARIO PROFESIONAL V','SIC666','2017-08-02 13:57:57','2017-08-02 13:57:57'),(1430,'GESTION DE SEGURIDAD INFORMATICA ','SIC814','2017-08-02 14:04:28','2017-08-02 14:04:28');
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiaprofesor`
--

DROP TABLE IF EXISTS `materiaprofesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materiaprofesor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grupo` varchar(255) DEFAULT NULL,
  `idProfesor` int(11) DEFAULT NULL,
  `idMateria` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiaprofesor`
--

LOCK TABLES `materiaprofesor` WRITE;
/*!40000 ALTER TABLE `materiaprofesor` DISABLE KEYS */;
INSERT INTO `materiaprofesor` VALUES (12,'2',5,4,'2017-08-02 11:57:27','2017-08-02 11:57:27'),(13,'1',5,4,'2017-08-02 11:57:46','2017-08-06 20:15:34'),(14,'1',6,19,'2017-08-02 12:02:46','2017-08-02 12:02:46'),(15,'1',4,7,'2017-08-02 12:05:25','2017-08-02 12:05:25'),(16,'2',4,7,'2017-08-02 12:05:36','2017-08-02 12:05:36'),(17,'1',7,6,'2017-08-02 12:06:33','2017-08-02 12:06:33'),(18,'2',7,17,'2017-08-02 12:07:01','2017-08-02 12:07:01'),(19,'2',8,18,'2017-08-02 12:08:12','2017-08-02 12:08:12'),(20,'2',8,5,'2017-08-02 12:08:33','2017-08-02 12:08:33'),(21,'2',18,36,'2017-08-02 12:09:41','2017-08-02 12:09:41'),(22,'2',17,9,'2017-08-02 12:12:12','2017-08-02 12:12:12'),(23,'2',471,8,'2017-08-02 12:17:17','2017-08-02 12:17:17'),(24,'1',471,13,'2017-08-02 12:17:52','2017-08-02 12:17:52'),(25,'2',471,21,'2017-08-02 12:18:14','2017-08-02 12:18:14'),(26,'2',482,147,'2017-08-02 12:23:59','2017-08-02 12:23:59'),(27,'1',861,3,'2017-08-02 12:27:21','2017-08-02 12:27:21'),(28,'1',861,264,'2017-08-02 12:28:55','2017-08-02 12:28:55'),(29,'1',961,380,'2017-08-02 12:32:27','2017-08-02 12:32:27'),(31,'2',20,12,'2017-08-02 12:37:36','2017-08-02 12:37:36'),(32,'1',20,12,'2017-08-02 12:37:51','2017-08-02 12:37:51'),(33,'1',20,420,'2017-08-02 12:38:24','2017-08-02 12:38:24'),(34,'1',1152,9,'2017-08-02 12:41:34','2017-08-02 12:41:34'),(35,'2',17,629,'2017-08-02 12:46:25','2017-08-02 12:46:25'),(36,'1',1152,629,'2017-08-02 12:47:06','2017-08-02 18:07:34'),(37,'2',1492,10,'2017-08-02 12:49:58','2017-08-02 18:07:34'),(38,'2',1597,13,'2017-08-02 12:52:07','2017-08-02 18:07:34'),(39,'1',24,15,'2017-08-02 12:53:16','2017-08-02 18:07:34'),(40,'2',24,109,'2017-08-02 12:53:52','2017-08-02 18:07:34'),(41,'1',26,23,'2017-08-02 12:54:56','2017-08-02 18:07:34'),(42,'2',27,22,'2017-08-02 12:55:56','2017-08-02 18:07:34'),(43,'1',27,14,'2017-08-02 12:56:48','2017-08-02 18:07:34'),(44,'2',28,27,'2017-08-02 12:57:27','2017-08-02 18:07:34'),(45,'2',28,30,'2017-08-02 12:57:50','2017-08-02 18:07:34'),(46,'2',28,109,'2017-08-02 12:58:25','2017-08-02 18:07:34'),(47,'2',29,16,'2017-08-02 12:59:18','2017-08-02 18:07:34'),(48,'1',30,28,'2017-08-02 13:00:10','2017-08-02 18:07:34'),(49,'1',30,18,'2017-08-02 13:00:36','2017-08-02 18:07:34'),(50,'1',30,756,'2017-08-02 13:02:50','2017-08-02 18:07:34'),(51,'1',31,800,'2017-08-02 13:06:25','2017-08-02 18:07:34'),(52,'1',32,888,'2017-08-02 13:09:42','2017-08-02 18:07:34'),(53,'1',32,17,'2017-08-02 13:10:45','2017-08-02 18:07:34'),(54,'2',32,35,'2017-08-02 13:11:25','2017-08-02 18:07:34'),(55,'1',1942,935,'2017-08-02 13:17:11','2017-08-02 18:07:34'),(56,'2',1942,19,'2017-08-02 13:17:34','2017-08-02 18:07:34'),(57,'3',1942,4,'2017-08-02 13:17:56','2017-08-02 18:07:34'),(58,'2',33,15,'2017-08-02 13:18:41','2017-08-02 18:07:34'),(59,'1',33,936,'2017-08-02 13:19:13','2017-08-02 18:07:34'),(60,'1',33,21,'2017-08-02 13:19:54','2017-08-02 18:07:34'),(61,'1',34,16,'2017-08-02 13:20:24','2017-08-02 18:07:34'),(62,'1',34,22,'2017-08-02 13:20:45','2017-08-02 18:07:34'),(63,'1',37,27,'2017-08-02 13:21:27','2017-08-02 18:07:34'),(64,'2',37,937,'2017-08-02 13:21:52','2017-08-02 18:07:34'),(65,'2',38,380,'2017-08-02 13:22:18','2017-08-02 18:07:34'),(66,'2',39,23,'2017-08-02 13:22:59','2017-08-02 18:07:34'),(67,'1',39,27,'2017-08-02 13:23:30','2017-08-02 18:07:34'),(68,'1',39,937,'2017-08-02 13:23:57','2017-08-02 18:07:34'),(69,'1',43,800,'2017-08-02 13:30:09','2017-08-02 18:07:34'),(70,'1',42,1126,'2017-08-02 13:40:30','2017-08-02 18:07:34'),(71,'1',2023,27,'2017-08-02 13:41:09','2017-08-02 18:07:34'),(72,'1',2025,8,'2017-08-02 13:41:27','2017-08-02 18:07:34'),(73,'2',46,28,'2017-08-02 13:42:04','2017-08-02 18:07:34'),(74,'2',45,29,'2017-08-02 13:42:51','2017-08-02 18:07:34'),(75,'1',45,29,'2017-08-02 13:44:45','2017-08-02 18:07:34'),(76,'2',45,1225,'2017-08-02 13:45:10','2017-08-02 18:07:34'),(77,'1',2226,1376,'2017-08-02 13:59:09','2017-08-02 18:07:34'),(78,'1',2226,1377,'2017-08-02 13:59:24','2017-08-02 18:07:34'),(79,'1',2226,30,'2017-08-02 14:00:07','2017-08-02 18:07:34'),(80,'1',2227,31,'2017-08-02 14:00:59','2017-08-02 18:07:34'),(81,'2',2228,31,'2017-08-02 14:01:18','2017-08-02 18:07:34'),(82,'1',48,1430,'2017-08-02 14:05:08','2017-08-02 18:07:34'),(83,'2',50,6,'2017-08-02 14:05:36','2017-08-02 18:07:34'),(84,'2',50,33,'2017-08-02 14:06:49','2017-08-02 18:07:34'),(85,'2',52,33,'2017-08-02 14:07:16','2017-08-02 18:07:34'),(86,'2',2232,756,'2017-08-02 14:08:14','2017-08-02 18:07:34'),(87,'1',2232,35,'2017-08-02 14:08:45','2017-08-02 18:07:34'),(88,'1',2231,36,'2017-08-02 14:09:29','2017-08-02 18:07:34'),(89,'1',2231,147,'2017-08-02 14:09:56','2017-08-02 18:07:34');
/*!40000 ALTER TABLE `materiaprofesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelocomputador`
--

DROP TABLE IF EXISTS `modelocomputador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modelocomputador` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `marca` varchar(255) DEFAULT NULL,
  `procesador` varchar(255) DEFAULT NULL,
  `ram` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelocomputador`
--

LOCK TABLES `modelocomputador` WRITE;
/*!40000 ALTER TABLE `modelocomputador` DISABLE KEYS */;
INSERT INTO `modelocomputador` VALUES (1,'Dell Torres','intel core i7','8GB','2017-08-02 13:38:43','2017-08-06 20:15:34'),(2,'Dell All-in-One','intel core i5','4GB','2017-08-02 13:38:43','2017-08-02 13:38:43'),(3,'Apple iMac','intel core i5','8GB','2017-08-02 13:38:43','2017-08-02 13:38:43');
/*!40000 ALTER TABLE `modelocomputador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `periodoacademico`
--

DROP TABLE IF EXISTS `periodoacademico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `periodoacademico` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodoacademico`
--

LOCK TABLES `periodoacademico` WRITE;
/*!40000 ALTER TABLE `periodoacademico` DISABLE KEYS */;
/*!40000 ALTER TABLE `periodoacademico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor`
--

DROP TABLE IF EXISTS `profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profesor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombres` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `ultimoTitulo` varchar(255) DEFAULT NULL,
  `telefono1` varchar(255) DEFAULT NULL,
  `telefono2` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `apellidos` (`apellidos`)
) ENGINE=InnoDB AUTO_INCREMENT=2233 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor`
--

LOCK TABLES `profesor` WRITE;
/*!40000 ALTER TABLE `profesor` DISABLE KEYS */;
INSERT INTO `profesor` VALUES (1,'Tania Elizabeth ','Calle Jiménez',' MSc.',NULL,NULL,NULL,'2017-07-30 11:03:17','2017-07-30 11:03:17'),(2,'Jhonattan Javier ','Barriga Andrade',' MSc.',NULL,NULL,NULL,'2017-07-30 11:03:17','2017-07-30 11:03:17'),(4,'Luis Fernando ','Carrasco Delhy',' MSc.',NULL,NULL,NULL,'2017-07-30 11:03:17','2017-07-30 11:03:17'),(5,'Marco Enrique ','Benalcázar Palacios',' PhD.',NULL,NULL,NULL,'2017-07-30 11:03:17','2017-08-06 20:15:34'),(6,'Marco Danilo ','Burbano Acuña',' MSc.',NULL,NULL,NULL,'2017-07-30 11:03:17','2017-07-30 11:03:17'),(7,'Iván Marcelo ','Carrera Izurieta',' MSc.',NULL,NULL,NULL,'2017-07-30 11:03:17','2017-07-30 11:03:17'),(8,'Santiago Roberto ','Carrillo Calderón',' MSc.',NULL,NULL,NULL,'2017-07-30 11:03:17','2017-07-30 11:03:17'),(17,'Bernardino ','Chancusig Espín',' Ing.',NULL,NULL,NULL,'2017-08-02 11:22:27','2017-08-02 11:22:27'),(18,'Andrés Alejandro ','Cevallos López',' Ing.',NULL,NULL,NULL,'2017-08-02 11:22:27','2017-08-02 11:22:27'),(19,'Mayra del Cisne ','Carrión Toro',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:27','2017-08-02 11:22:27'),(20,'Marcos Raúl ','Córdova Bayas',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(21,'Vicente Adrián ','Eguez Sarzosa',' Ing.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(22,'Denys Alberto ','Flores Armas',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(23,'Pamela Catherine ','Flores Naranjo',' PhD.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(24,'María Asunción ','Hallo Carrasco',' PhD.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(25,'Marco Sebastián ','Guerrero Flor',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(26,'Myriam Beatriz ','Hernández Álvarez',' PhD.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(27,'Juan Alberto ','Herrera Silva',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(28,'María Monserrate ','Intriago Pazmiño',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(29,'Andrés Gabriel ','Jaramillo Yánez',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(30,'Enrique Andrés ','Larco Ampudia',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(31,'José Francisco ','Lucio Naranjo',' Phd.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(32,'Luis Enrique ','Mafla Gallegos',' PhD.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(33,'Elisa Karina ','Mena Maldonado',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(34,'Carlos E. ','Montenegro Armas',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(35,'Evelyn Marcela ','Mosquera Espinosa',' Ing.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(36,'Rosa del Carmen ','Navarrete Rueda',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(37,'Sheila Lorena ','Noboa Cruz',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(38,'Luis Miguel ','Orquera Andrade',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(39,'Henry Patricio ','Paz Arias',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(40,'Tania Mireya ','Pazmiño Santana',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(41,'Diego Andrés ','Pérez Almeida',' Ing.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(42,'Myriam Guadalupe ','Peñafiel Aguilar',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(43,'María Gabriela ','Pérez Hernández',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(44,'Julio César ','Sandobalín Guamán',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(45,'Marco Oswaldo ','Santórum Gaibor',' PhD.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(46,'Sandra Patricia ','Sánchez Gordón',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(48,'Jenny Gabriela ','Torres Olmedo',' PhD.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(50,'Edgar Porfirio ','Torres Proaño',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(51,'Doris Karina ','Tutillo Sánchez',' Ing.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(52,'Luz Marina ','Vintimilla Jaramillo',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(53,'Eddie Hans ','Yánez Quesada',' Ing.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(54,'Patricio Xavier ','Zambrano Rodríguez',' MSc.',NULL,NULL,NULL,'2017-08-02 11:22:28','2017-08-02 11:22:28'),(471,'Rodrigo Fabian ','Chancusig Chuquilla','MSc.',NULL,NULL,NULL,'2017-08-02 12:16:44','2017-08-02 12:16:44'),(482,'Santiago Roberto ','Cevallos Teran',' MSc. ',NULL,NULL,NULL,'2017-08-02 12:22:21','2017-08-02 12:22:21'),(861,'Eduardo Mauricio ','Campaña Ortega',' MSc. ',NULL,NULL,NULL,'2017-08-02 12:26:14','2017-08-02 12:26:14'),(961,'Carlos Arturo Ramon ','Bonilla Javita',' MSc. ',NULL,NULL,NULL,'2017-08-02 12:31:53','2017-08-02 12:31:53'),(1152,'Henry Manolo ','Echeverria Culqui','MSc.',NULL,NULL,NULL,'2017-08-02 12:41:03','2017-08-02 12:41:03'),(1492,'Cesar Humberto ','Esquetini Caceres',' MSc. ',NULL,NULL,NULL,'2017-08-02 12:49:24','2017-08-02 12:49:24'),(1597,'Walter Marcelo ','Fuertes Diaz',' MSc. ',NULL,NULL,NULL,'2017-08-02 12:51:40','2017-08-02 12:51:40'),(1942,'Daniel Alejandro ','Maldonado Ruiz',' MSc. ',NULL,NULL,NULL,'2017-08-02 13:16:51','2017-08-02 13:16:51'),(2023,'Carlos Miguel ','Teran Villamarin',' MSc. ',NULL,NULL,NULL,'2017-08-02 13:38:42','2017-08-02 13:38:42'),(2025,'Cesar Gustavo ','Samaniego Burbano',' MSc. ',NULL,NULL,NULL,'2017-08-02 13:38:42','2017-08-02 13:38:42'),(2226,'Regina Maritzol ','Tenemaza Vera',' MSc. ',NULL,NULL,NULL,'2017-08-02 13:51:58','2017-08-02 13:51:58'),(2227,'Cristina ','Acuña',' MSc. ',NULL,NULL,NULL,'2017-08-02 13:51:58','2017-08-02 13:51:58'),(2228,'Miguel Angel ','Tualombo Rea','MSc.',NULL,NULL,NULL,'2017-08-02 13:51:58','2017-08-02 13:51:58'),(2229,'Maria Fernanda ','Jaramillo','MSc.',NULL,NULL,NULL,'2017-08-02 13:51:58','2017-08-02 13:51:58'),(2230,'Patricio ','Abad','MSc.',NULL,NULL,NULL,'2017-08-02 13:51:58','2017-08-02 13:51:58'),(2231,'Sebastian ','Guerrero','MSc.',NULL,NULL,NULL,'2017-08-02 13:51:58','2017-08-02 13:51:58'),(2232,'Jorge Eduardo ','Rivadeneira Muñoz','MSc.',NULL,NULL,NULL,'2017-08-02 13:51:58','2017-08-02 13:51:58');
/*!40000 ALTER TABLE `profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `software`
--

DROP TABLE IF EXISTS `software`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `software` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `version` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `software`
--

LOCK TABLES `software` WRITE;
/*!40000 ALTER TABLE `software` DISABLE KEYS */;
/*!40000 ALTER TABLE `software` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-08 21:21:48
