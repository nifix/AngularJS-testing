-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2019 at 08:36 PM
-- Server version: 5.7.17
-- PHP Version: 7.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ace`
--

-- --------------------------------------------------------

--
-- Table structure for table `cat_tva`
--

CREATE TABLE `cat_tva` (
  `id_tva` tinyint(4) NOT NULL,
  `name_tva` varchar(90) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cat_tva`
--

INSERT INTO `cat_tva` (`id_tva`, `name_tva`) VALUES
(1, 'CA3 Mensuelle'),
(2, 'CA3 Trimestrielle'),
(3, 'CA12');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id_customer` tinyint(4) NOT NULL COMMENT 'ID du client',
  `code_customer` varchar(70) NOT NULL COMMENT 'Code dossier dans la GED',
  `name_customer` varchar(120) NOT NULL COMMENT 'Nom du client',
  `resp_customer` varchar(90) NOT NULL COMMENT 'Nom du responsable',
  `tva_customer` tinyint(4) DEFAULT NULL COMMENT 'Regime de TVA',
  `cloture_customer` varchar(10) NOT NULL COMMENT 'Date de cloture'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id_customer`, `code_customer`, `name_customer`, `resp_customer`, `tva_customer`, `cloture_customer`) VALUES
(1, 'ALEX_TAXI', 'Alex Taxi', 'TARANTO Alexandre', 1, '31/12'),
(2, 'ATELIER', 'EURL L\'Atelier', 'LE BOCQ Martine', 3, '31/12'),
(3, 'ATELIERCRE', 'EURL Atelier Crea\'tif', 'LOPEZ Carmen', 1, '31/03'),
(4, 'BALLANDIER', 'Me BALLANDIER Pierre', 'BALLANDIER Pierre', 1, '31/12'),
(5, 'BARBUSSE', 'BARBUSSE Nathalie', 'BARBUSSE Nathalie', NULL, '31/12'),
(6, 'BONNICHON', 'Dr BONNICHON Augustin', 'BONNICHON Augustin', 2, '31/12'),
(7, 'BOUTIQUE', 'SASU Boutique Serres', 'GARCIN Alexandre', 1, '31/03'),
(8, 'CAMBIER', 'SCI CAMBIER', 'CAMBIER Jean-Jacques', 1, '31/12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cat_tva`
--
ALTER TABLE `cat_tva`
  ADD PRIMARY KEY (`id_tva`),
  ADD KEY `id_tva` (`id_tva`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id_customer`),
  ADD KEY `id_customer` (`id_customer`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cat_tva`
--
ALTER TABLE `cat_tva`
  MODIFY `id_tva` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id_customer` tinyint(4) NOT NULL AUTO_INCREMENT COMMENT 'ID du client', AUTO_INCREMENT=9;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
