-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : jeu. 04 mai 2023 à 12:35
-- Version du serveur :  5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `viva_tech`
--

-- --------------------------------------------------------

--
-- Structure de la table `CV`
--

CREATE TABLE `CV` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `Last_Diplome` varchar(11) NOT NULL,
  `Poste_Recherche` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `STANDS`
--

CREATE TABLE `STANDS` (
  `Id` int(11) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Localisation` varchar(255) NOT NULL,
  `Nom_Entreprise` varchar(255) NOT NULL,
  `Catégorie` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Telephone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `STANDS`
--

INSERT INTO `STANDS` (`Id`, `Nom`, `Description`, `Localisation`, `Nom_Entreprise`, `Catégorie`, `Email`, `Telephone`) VALUES
(1, 'Feu Vert', 'La patte de l\'expert', 'B2', 'Feu Vert', 'Embarquer', 'feu@vert.vroum', '45678987672'),
(2, 'Carglass', 'Bonjour, c\'est olivier de Carglass', 'B1', 'Carglass', 'Robotique', 'car@gloush.com', '567898765678'),
(3, 'La paire', 'Y\'en a pas deux', 'A1', 'La paire', 'Robotique', 'lapaire@ilssontpas.deux', '3456789876789');

-- --------------------------------------------------------

--
-- Structure de la table `USER`
--

CREATE TABLE `USER` (
  `Id` int(11) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `Prenom` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Telephone` varchar(255) NOT NULL,
  `Pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `USER`
--

INSERT INTO `USER` (`Id`, `Nom`, `Prenom`, `Email`, `Telephone`, `Pass`) VALUES
(1, 'DUJARDIN', 'Jean', 'jean@dujardin.com', '09876567890', ''),
(2, 'DAMIDO', 'Valerie', 'valerie@damido.com', '09876567899', ''),
(3, 'NINET', 'Pierre', 'pierre@ninet.org', '456789876578', ''),
(4, 'JAKSON', 'Michel', 'michel@jakson.com', '45678987652', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `CV`
--
ALTER TABLE `CV`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_foreign_key_user_on_cv` (`id_user`);

--
-- Index pour la table `STANDS`
--
ALTER TABLE `STANDS`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `USER`
--
ALTER TABLE `USER`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `CV`
--
ALTER TABLE `CV`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `STANDS`
--
ALTER TABLE `STANDS`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `USER`
--
ALTER TABLE `USER`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `CV`
--
ALTER TABLE `CV`
  ADD CONSTRAINT `fk_foreign_key_user_on_cv` FOREIGN KEY (`id_user`) REFERENCES `USER` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
