-- Create database
CREATE DATABASE IF NOT EXISTS eumax_db;
USE eumax_db;

-- Create services table
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample services data
INSERT INTO services (title, description) VALUES
('Digital', 'We are the most promising agency that combines design expertise with technology and intelligence to revolutionize your business websites. Our teams consist of experts in UX, UI, web development.'),
('Media', 'We at Eumaxindia are a team of experienced innovators and content creators who help you bring out the most influential AD campaign to create brand awareness. We are a one-stop solution for all your advertising.'),
('Outdoor', 'Eumaxindia''s creative team is a trendsetter in the industry. We create innovative and practical business advertising solutions through outdoor campaign activities like bus hoardings, railway station hoardings, auto.'),
('BTL Activities', 'At Eumaxindia, our BTL activities refer to marketing strategies not involving mass media advertising. Instead, it focuses on targeted, direct customer interactions through events, promotions, and other forms.');
