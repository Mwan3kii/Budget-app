-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2024 at 11:35 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `budget_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `totalamount` float NOT NULL DEFAULT 0,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `totalamount`, `createdAt`, `updatedAt`) VALUES
(67, 'Books', 'Novels and study books', 500, '2024-10-27 13:03:16', '2024-10-28 08:35:06'),
(68, 'Clothes', 'Clothes and shoes', 200, '2024-10-27 13:05:34', '2024-10-28 08:50:03'),
(71, 'Groceries', 'Food and household items', 444, '2024-10-27 13:11:41', '2024-10-28 09:53:11'),
(72, 'Groceries', 'Food and household items', 0, '2024-10-28 08:40:23', '2024-10-28 08:40:40');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `name`, `amount`, `createdAt`, `category_id`, `updatedAt`) VALUES
(34, 'The Great Gatsby', 500, '2024-10-27 13:06:08', 67, '2024-10-27 13:06:08'),
(35, 'Fresh vegetables', 200, '2024-10-27 13:11:59', 71, '2024-10-27 13:11:59'),
(36, 'Jeans', 200, '2024-10-28 08:34:46', 68, '2024-10-28 08:34:46'),
(37, 'Meat', 122, '2024-10-28 08:35:27', 71, '2024-10-28 08:35:27'),
(38, 'Meat', 122, '2024-10-28 09:53:11', 71, '2024-10-28 09:53:11');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `bio` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `bio`, `password`, `createdAt`, `updatedAt`) VALUES
(14, 'Niki', 'niki@dev.com', 'Software developer', '$2a$10$08S6PVWd98bdN7XxBNMgnOZp5HZ7RgT4mWlbXd8C5qRMzRi7/ijoS', '2024-10-25 18:27:20', '2024-10-25 18:27:20'),
(18, 'Angel', 'angel@dev.com', 'Software developer in Google', '$2a$10$xOoYD.1DacU0Kol/JpyfdeEOIi3HyEyQCYQrxsUGaEX6.tGtuGmyi', '2024-10-26 13:51:22', '2024-10-26 13:51:22'),
(19, 'Daisy', 'daisy@dev.com', 'Software engineer at alx', '$2a$10$aCBLGIRsLmPVJcQKTFUlruR7/nWIP7Po8Ni.qzdf0tNawLdyA5SKm', '2024-10-27 09:46:56', '2024-10-27 09:46:56'),
(20, 'Agatha', 'agatha@dev.com', 'Software engineer at alx', '$2a$10$Zkqk1sxa1lA/oAdkMO0vEOpRYTxRHpA2ggHGnHvhCH05v4hesxHja', '2024-10-27 12:49:21', '2024-10-27 12:49:21'),
(21, 'Agatha', 'agatha@dev.com', 'Software developer', '$2a$10$WDB9XNPML6aG8Udlp/Qo2eMNgwhVEl8DrFpC1ewWFPGtZhtENOX3O', '2024-10-27 12:51:50', '2024-10-27 12:51:50'),
(22, 'Agatha', 'agatha@dev.com', 'Software developer', '$2a$10$qf29vdUJ4kf6XL/N9zy4VOKL2BriBQqkY90uIvnT/uIVUkT3cA0iy', '2024-10-27 12:57:18', '2024-10-27 12:57:18'),
(23, 'Agatha', 'agatha@dev.com', 'Software developer', '$2a$10$wq1fgrWlW9eTv4v867NgbOzUXPVB6L9w2YYjuwoSwN0fa81TKp8nW', '2024-10-27 12:58:59', '2024-10-27 12:58:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
