-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 11, 2021 at 11:16 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todomvc`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `status`, `created_at`) VALUES
(1, 'Find bugs', 1, '2016-04-10 23:50:40'),
(2, 'Review code', 1, '2016-04-10 23:50:40'),
(3, 'Fix bugs', 1, '2016-04-10 23:50:40'),
(4, 'Refactor Code', 1, '2016-04-10 23:50:40'),
(5, 'Push to prod', 1, '2016-04-10 23:50:50'),
(6, 'Nothing', 1, '2021-01-11 13:30:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



-- Create Database use login with JWT
create database todomvc;
CREATE TABLE tasks (
  id int(11) NOT NULL,
  id_user int(11) NOT NULL,
  title varchar(200) NOT NULL,
  status tinyint(1) NOT NULL DEFAULT 1,
  created_at datetime NOT NULL DEFAULT current_timestamp(),
  FOREIGN KEY (id_user) REFERENCES users(id_user)
);
use todomvc;
select * from tasks;
ALTER TABLE tasks
  ADD PRIMARY KEY (id);
ALTER TABLE tasks
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

CREATE TABLE users (
  id_user int(11) NOT NULL,
  user_name varchar(20) NOT NULL,
  pass_word varchar(20) NOT NULL,
  full_name varchar(200) NOT NULL,
  tokenJWT varchar(200) NOT NULL
);
ALTER TABLE users
  ADD PRIMARY KEY (id_user);
ALTER TABLE users
  MODIFY id_user int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;
select * from users;