CREATE DATABASE IF NOT EXISTS keycloak;
USE keycloak;
-- GRANT ALL PRIVILEGES ON keycloak.* TO 'root'@'localhost';
CREATE USER 'keycloak'@'%' IDENTIFIED BY 'keycloak';
GRANT ALL PRIVILEGES ON keycloak.* TO 'keycloak'@'%';

-- CREATE DATABASE IF NOT EXISTS api;
-- USE api;
-- CREATE USER 'api'@'%' IDENTIFIED BY 'api';
-- GRANT SELECT,INSERT,UPDATE,DELETE ON api.* TO 'api'@'%';

-- CREATE USER 'robot'@'%' IDENTIFIED BY 'robot';
-- GRANT SELECT,INSERT,UPDATE ON api.* TO 'robot'@'%';

FLUSH PRIVILEGES;
