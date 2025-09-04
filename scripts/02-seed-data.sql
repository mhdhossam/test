-- Seeding sample data for Daleel marketplace
-- Insert categories
INSERT INTO categories (name, name_ar, description, description_ar, slug) VALUES
('Electronics', 'إلكترونيات', 'Electronic devices and accessories', 'الأجهزة الإلكترونية والإكسسوارات', 'electronics'),
('Clothing', 'ملابس', 'Fashion and clothing items', 'الأزياء والملابس', 'clothing'),
('Books', 'كتب', 'Educational and recreational books', 'الكتب التعليمية والترفيهية', 'books'),
('Home & Garden', 'المنزل والحديقة', 'Home improvement and garden supplies', 'مستلزمات تحسين المنزل والحديقة', 'home-garden'),
('Sports', 'رياضة', 'Sports equipment and accessories', 'المعدات الرياضية والإكسسوارات', 'sports');

-- Insert sample products
INSERT INTO products (name, name_ar, description, description_ar, price, sale_price, sku, stock_quantity, category_id, is_featured, slug) VALUES
('Wireless Headphones', 'سماعات لاسلكية', 'High-quality wireless headphones with noise cancellation', 'سماعات لاسلكية عالية الجودة مع إلغاء الضوضاء', 299.99, 249.99, 'WH-001', 50, (SELECT id FROM categories WHERE slug = 'electronics'), true, 'wireless-headphones'),
('Smart Watch', 'ساعة ذكية', 'Feature-rich smartwatch with health monitoring', 'ساعة ذكية غنية بالميزات مع مراقبة الصحة', 399.99, NULL, 'SW-001', 30, (SELECT id FROM categories WHERE slug = 'electronics'), true, 'smart-watch'),
('Cotton T-Shirt', 'تيشيرت قطني', 'Comfortable 100% cotton t-shirt', 'تيشيرت قطني مريح 100%', 29.99, 24.99, 'CT-001', 100, (SELECT id FROM categories WHERE slug = 'clothing'), false, 'cotton-t-shirt'),
('Programming Guide', 'دليل البرمجة', 'Complete guide to modern web development', 'دليل شامل لتطوير الويب الحديث', 49.99, NULL, 'PG-001', 25, (SELECT id FROM categories WHERE slug = 'books'), true, 'programming-guide'),
('Yoga Mat', 'سجادة يوغا', 'Non-slip yoga mat for all fitness levels', 'سجادة يوغا غير قابلة للانزلاق لجميع مستويات اللياقة', 39.99, 34.99, 'YM-001', 75, (SELECT id FROM categories WHERE slug = 'sports'), false, 'yoga-mat'),
('LED Desk Lamp', 'مصباح مكتب LED', 'Adjustable LED desk lamp with USB charging', 'مصباح مكتب LED قابل للتعديل مع شحن USB', 79.99, NULL, 'DL-001', 40, (SELECT id FROM categories WHERE slug = 'home-garden'), false, 'led-desk-lamp');
