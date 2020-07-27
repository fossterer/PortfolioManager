-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql3.freemysqlhosting.net
-- Generation Time: Jul 27, 2020 at 06:30 PM
-- Server version: 5.5.54-0ubuntu0.12.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql3354572`
--

-- --------------------------------------------------------

--
-- Table structure for table `DataEntryTable`
--

CREATE TABLE `DataEntryTable` (
  `TICKER` text NOT NULL,
  `NAME` text NOT NULL,
  `SECURITY_TYPE` text NOT NULL,
  `QUANTITY` int(10) NOT NULL,
  `PURCHASE_PRICE` double(10,2) NOT NULL,
  `PURCHASE_DATE` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `DataEntryTable`
--

INSERT INTO `DataEntryTable` (`TICKER`, `NAME`, `SECURITY_TYPE`, `QUANTITY`, `PURCHASE_PRICE`, `PURCHASE_DATE`) VALUES
('AAPL', 'Apple', 'Stock', 3, 23.00, '2020-07-14'),
('BA', 'Boeing Co', 'Stock', 6, 174.00, '2020-07-09'),
('TSLA', 'Tesla Inc', 'Stock', 2, 1417.00, '2020-04-09'),
('AAPL', 'Apple', 'Stock', 8, 553.00, '2020-04-20'),
('AAPL', 'Apple', 'Stock', 8, 553.33, '2020-04-20'),
('DIS', 'The Walt Disney Company', 'Stock', 2, 116.62, '2020-07-14'),
('GE', 'General Electric Company', 'Stock', 1, 6.76, '2020-07-15'),
('HD', 'The Home Depot, Inc.', 'Stock', 1, 287.38, '2020-07-09'),
('SBUX', 'Starbucks Corporation', 'Stock', 5, 76.39, '2020-05-06');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
