-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: StarterDB
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Portfolio`
--

DROP TABLE IF EXISTS `Portfolio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Portfolio` (
  `TICKER` varchar(45) NOT NULL,
  `NAME` varchar(45) DEFAULT NULL,
  `SECURITY_TYPE` varchar(45) DEFAULT NULL,
  `QUANTITY` int(11) DEFAULT NULL,
  `PURCHASE_PRICE` decimal(10,2) unsigned DEFAULT NULL,
  `PURCHASE_DATE` date DEFAULT NULL,
  PRIMARY KEY (`TICKER`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Portfolio`
--

LOCK TABLES `Portfolio` WRITE;
/*!40000 ALTER TABLE `Portfolio` DISABLE KEYS */;
/*!40000 ALTER TABLE `Portfolio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StockPrice`
--

DROP TABLE IF EXISTS `StockPrice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `StockPrice` (
  `Ticker` varchar(45) NOT NULL DEFAULT ' ',
  `StockPrices` longtext,
  PRIMARY KEY (`Ticker`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StockPrice`
--

LOCK TABLES `StockPrice` WRITE;
/*!40000 ALTER TABLE `StockPrice` DISABLE KEYS */;
/*!40000 ALTER TABLE `StockPrice` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-03 15:39:27
