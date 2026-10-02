CREATE TABLE users (
    id  BIGINT NOT NULL AUTO_INCREMENT,
    first_name  VARCHAR(100)    NOT NULL,
    last_name   VARCHAR(100)    NOT NULL,
    email   VARCHAR(255)    NULL,
    phone_number    VARCHAR(20) NULL,
    address_line1   VARCHAR(255)    NULL,
    address_line2   VARCHAR(255)    NULL,
    city   VARCHAR(100)    NULL,
    state   CHAR(2)    NULL,
    zip_code   VARCHAR(10)    NULL,
    created_at  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    UNIQUE KEY uk_users_email (email)
);