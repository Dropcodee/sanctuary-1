-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2018 at 03:29 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sanctuary`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `status` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `user_id`, `status`, `date`) VALUES
(1, '$2y$10$ROBQTKv3UorRt6vjr37NSezzkmID8gOaq4PNU11wXONUheMTDng1q', 'There will be prayer meeting by 6:30pm to being Friday', '2018-10-19 23:26:15'),
(2, '$2y$10$ROBQTKv3UorRt6vjr37NSezzkmID8gOaq4PNU11wXONUheMTDng1q', 'Tuesday pre-service 7:00am - 7:45am', '2018-10-19 23:39:17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `webmail` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reg_no` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dob` varchar(65) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hall` varchar(65) COLLATE utf8mb4_unicode_ci NOT NULL,
  `room` varchar(65) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sex` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reasons` varchar(400) COLLATE utf8mb4_unicode_ci NOT NULL,
  `membership` varchar(65) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `name`, `webmail`, `reg_no`, `level`, `dob`, `hall`, `room`, `sex`, `reasons`, `membership`, `password`, `created_at`) VALUES
(1, '$2y$10$ROBQTKv3UorRt6vjr37NSezzkmID8gOaq4PNU11wXONUheMTDng1q', 'Abraham Ugbeshe', 'ugbeshe.abraham@lmu.edu.ng', '1700172', '100', 'Oct 19, 2018', 'Abraham Hall', 'F307', 'Male', 'I love working for God', 'New Member', '$2y$10$bdvVclkZrsfwmFPCBASaMOMOkMOJPuHwFMXG219WBz88hEg/hnNEi', '2018-10-19 17:32:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_webmail_unique` (`webmail`),
  ADD UNIQUE KEY `users_reg_no_unique` (`reg_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
