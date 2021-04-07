-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 185.151.30.166
-- Generation Time: Mar 17, 2021 at 01:12 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `allproducts-31363980e9`
--

-- --------------------------------------------------------

--
-- Table structure for table `additionalproducts`
--

CREATE TABLE `additionalproducts` (
  `id` int(11) NOT NULL,
  `which_id` int(11) NOT NULL,
  `product` mediumtext NOT NULL,
  `img_url` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `additionalproducts`
--

INSERT INTO `additionalproducts` (`id`, `which_id`, `product`, `img_url`) VALUES
(1001, 5, 'Fully Glazed with Midrail', 'products/doors/glazed-2.png'),
(1002, 5, 'Part Glazed', 'products/doors/glazed-3.png'),
(1003, 6, 'Fully Blazed', 'products/doors/glazed-fully.png'),
(1004, 6, 'Part Glazed with Panel', 'products/doors/glazed-3.png'),
(1005, 6, 'This is a product', 'products/doors/glazed-fully.png'),
(1006, 5, 'Product Name !', 'https://via.placeholder.com/350');

-- --------------------------------------------------------

--
-- Table structure for table `colours`
--

CREATE TABLE `colours` (
  `id` int(11) NOT NULL,
  `colour` mediumtext NOT NULL,
  `hex` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `colours`
--

INSERT INTO `colours` (`id`, `colour`, `hex`) VALUES
(0, 'Black', '#1e1e1e'),
(1, 'White', '#fafafa'),
(3, 'Grey', '#383d44'),
(4, 'Red', '#9b121f');

-- --------------------------------------------------------

--
-- Table structure for table `pl_windows`
--

CREATE TABLE `pl_windows` (
  `id` int(11) NOT NULL,
  `product` text NOT NULL,
  `subproduct` varchar(500) NOT NULL,
  `img_url` mediumtext NOT NULL,
  `styles` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pl_windows`
--

INSERT INTO `pl_windows` (`id`, `product`, `subproduct`, `img_url`, `styles`) VALUES
(1, 'window', 'Casement Windows', 'products\\windows\\casement.png', 'Y'),
(2, 'window', 'French Casement Windows', 'products\\windows\\french.png', 'Y'),
(3, 'window', 'More Windows', 'products\\windows\\french.png', ''),
(4, 'window', 'Even More Windows', 'products\\windows\\sliding.png', ''),
(5, 'door', 'Bi-Fold', 'products/doors/bi-fold.png', ''),
(6, 'door', 'French Doors', 'products/doors/french.png', ''),
(7, 'door', 'Patio Doors', 'products/doors/patio.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `window_styles`
--

CREATE TABLE `window_styles` (
  `ID` int(11) NOT NULL,
  `style` mediumtext NOT NULL,
  `img_url` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `window_styles`
--

INSERT INTO `window_styles` (`ID`, `style`, `img_url`) VALUES
(1, 'Style 1', 'products/windows/styles/s1.svg'),
(2, 'Style 2', 'products/windows/styles/s2.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `additionalproducts`
--
ALTER TABLE `additionalproducts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colours`
--
ALTER TABLE `colours`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pl_windows`
--
ALTER TABLE `pl_windows`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `window_styles`
--
ALTER TABLE `window_styles`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `additionalproducts`
--
ALTER TABLE `additionalproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1007;

--
-- AUTO_INCREMENT for table `colours`
--
ALTER TABLE `colours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pl_windows`
--
ALTER TABLE `pl_windows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `window_styles`
--
ALTER TABLE `window_styles`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
