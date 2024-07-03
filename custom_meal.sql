CREATE TABLE Users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
subscription VARCHAR(255) NOT NULL
);

CREATE TABLE SubscriptionPlan (
id INT AUTO_INCREMENT PRIMARY KEY,
subscriptionPlan VARCHAR(255) NOT NULL,
subscriptionFeature JSON,
status VARCHAR(255) DEFAULT "active"
);

