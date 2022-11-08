-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-11-2022 a las 06:52:29
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `escuela`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrativos`
--

CREATE TABLE `administrativos` (
  `ID` int(11) NOT NULL,
  `USUARIO_ID` int(11) NOT NULL,
  `AREA` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `administrativos`
--

INSERT INTO `administrativos` (`ID`, `USUARIO_ID`, `AREA`) VALUES
(1, 1, 'Sistemas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `ID` int(11) NOT NULL,
  `MATRICULA` varchar(50) NOT NULL,
  `USUARIO_ID` int(11) NOT NULL,
  `GRUPO_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`ID`, `MATRICULA`, `USUARIO_ID`, `GRUPO_ID`) VALUES
(1, '19240067', 5, NULL),
(4, '19200031', 8, 4),
(12, '19240087', 1, NULL),
(13, '19240045', 8, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `ID` int(11) NOT NULL,
  `CLAVE_EMPLEADO` varchar(50) NOT NULL,
  `ULTIMO_GRADO_ESTUDIOS` varchar(50) NOT NULL,
  `ESPECIALIDAD` varchar(100) NOT NULL,
  `CEDULA_PROFESIONAL` varchar(100) NOT NULL,
  `USUARIO_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`ID`, `CLAVE_EMPLEADO`, `ULTIMO_GRADO_ESTUDIOS`, `ESPECIALIDAD`, `CEDULA_PROFESIONAL`, `USUARIO_ID`) VALUES
(1, '667575645', 'Primaria', 'Computación', '445453543656', 1),
(2, '669075645', 'Preparatoria', 'Cocina', '274653098164', 11),
(3, '667575325', 'Licenciatura', 'Electricidad', '724310454372', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `ID` int(11) NOT NULL,
  `CLAVE` varchar(50) NOT NULL,
  `DESCRIPCION` varchar(100) NOT NULL,
  `GRADO` varchar(30) NOT NULL,
  `TUTOR_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`ID`, `CLAVE`, `DESCRIPCION`, `GRADO`, `TUTOR_ID`) VALUES
(1, 'PU8765U6', 'Grupo de la primer generación de la primaria mártires soñadores', '1A', 1),
(4, 'SD5234U3', 'Grupo de 5 estudiantes prodigios ', '5C', 1),
(5, 'CV6789I9', 'Grupo problemático desde primer año', '6B', 1),
(6, 'SD5234U', 'Grupo adorable y bien portado', '1B', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `ID` int(11) NOT NULL,
  `CLAVE` varchar(10) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias_docente`
--

CREATE TABLE `materias_docente` (
  `ID` int(11) NOT NULL,
  `MATERIA_ID` int(11) NOT NULL,
  `DOCENTE_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias_grupo`
--

CREATE TABLE `materias_grupo` (
  `ID` int(11) NOT NULL,
  `MATERIAS_DOCENTE_ID` int(11) NOT NULL,
  `GRUPOS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `ID` int(11) NOT NULL,
  `DESCRIPCION` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`ID`, `DESCRIPCION`) VALUES
(1, 'Docente'),
(2, 'Alumno'),
(3, 'Administrativo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  `APELLIDO_PATERNO` varchar(50) NOT NULL,
  `APELLIDO_MATERNO` varchar(50) DEFAULT NULL,
  `DIRECCION` varchar(200) DEFAULT NULL,
  `TELEFONO` varchar(10) DEFAULT NULL,
  `EMAIL` varchar(100) DEFAULT NULL,
  `TIPO_USUARIO_ID` int(11) NOT NULL,
  `PASSWORD` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `NOMBRE`, `APELLIDO_PATERNO`, `APELLIDO_MATERNO`, `DIRECCION`, `TELEFONO`, `EMAIL`, `TIPO_USUARIO_ID`, `PASSWORD`) VALUES
(1, 'Rodrigo', 'Garcia', 'Hernandez', 'Durango 35', '2461850017', 'rodcarcherd2128@gmail.com', 1, '123456789'),
(5, 'Anahi', 'Linares', 'Lina', NULL, NULL, NULL, 2, NULL),
(8, 'Dario', 'Saldaña', 'Martires', NULL, NULL, NULL, 2, NULL),
(11, 'Karina', 'Mendoza', 'Ortega', 'Juan Aldama #43', '2482008143', 'karinamen@gmail.com', 1, '123456789'),
(12, 'Juan ', 'Rojo ', 'Orchesta', 'Manchester #53', '2482907564', 'redjhon@gmail.com', 1, 'red123456789');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrativos`
--
ALTER TABLE `administrativos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USUARIO_ID` (`USUARIO_ID`);

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USUARIO_ID` (`USUARIO_ID`),
  ADD KEY `GRUPO_ID` (`GRUPO_ID`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USUARIO_ID` (`USUARIO_ID`);

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `TUTOR_ID` (`TUTOR_ID`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `materias_docente`
--
ALTER TABLE `materias_docente`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `DOCENTE_ID` (`DOCENTE_ID`),
  ADD KEY `MATERIA_ID` (`MATERIA_ID`);

--
-- Indices de la tabla `materias_grupo`
--
ALTER TABLE `materias_grupo`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `MATERIAS_DOCENTE_ID` (`MATERIAS_DOCENTE_ID`),
  ADD KEY `GRUPOS_ID` (`GRUPOS_ID`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `TIPO_USUARIO_ID` (`TIPO_USUARIO_ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrativos`
--
ALTER TABLE `administrativos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `grupos`
--
ALTER TABLE `grupos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `materias_docente`
--
ALTER TABLE `materias_docente`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `materias_grupo`
--
ALTER TABLE `materias_grupo`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrativos`
--
ALTER TABLE `administrativos`
  ADD CONSTRAINT `administrativos_ibfk_1` FOREIGN KEY (`USUARIO_ID`) REFERENCES `usuarios` (`ID`);

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`USUARIO_ID`) REFERENCES `usuarios` (`ID`),
  ADD CONSTRAINT `alumnos_ibfk_2` FOREIGN KEY (`GRUPO_ID`) REFERENCES `grupos` (`ID`);

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`USUARIO_ID`) REFERENCES `usuarios` (`ID`);

--
-- Filtros para la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD CONSTRAINT `grupos_ibfk_1` FOREIGN KEY (`TUTOR_ID`) REFERENCES `empleados` (`ID`);

--
-- Filtros para la tabla `materias_docente`
--
ALTER TABLE `materias_docente`
  ADD CONSTRAINT `materias_docente_ibfk_1` FOREIGN KEY (`DOCENTE_ID`) REFERENCES `empleados` (`ID`),
  ADD CONSTRAINT `materias_docente_ibfk_2` FOREIGN KEY (`MATERIA_ID`) REFERENCES `materias` (`ID`);

--
-- Filtros para la tabla `materias_grupo`
--
ALTER TABLE `materias_grupo`
  ADD CONSTRAINT `materias_grupo_ibfk_1` FOREIGN KEY (`MATERIAS_DOCENTE_ID`) REFERENCES `materias_docente` (`ID`),
  ADD CONSTRAINT `materias_grupo_ibfk_2` FOREIGN KEY (`GRUPOS_ID`) REFERENCES `grupos` (`ID`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`TIPO_USUARIO_ID`) REFERENCES `tipo_usuario` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
