-- ==============================================================================
-- REGON TEKNOLOJİ — SUPABASE SEED VERİLERİ (Geliştirme & Test Ortamı)
-- ==============================================================================

-- 1. PROJELER (Eksikse ekle)
INSERT INTO projects (id, slug, name, description, status)
VALUES
    ('11111111-1111-1111-1111-111111111111', 'regon-kurye', 'Regon Kurye', 'Gelişmiş kurye takip, rota optimizasyonu ve canlı teslimat yönetim platformu', 'active'),
    ('22222222-2222-2222-2222-222222222222', 'regon-pos', 'Regon POS', 'Restoran, kafe ve perakende satış noktası otomasyonu ve adisyon sistemi', 'active'),
    ('33333333-3333-3333-3333-333333333333', 'regon-bayi', 'Regon Bayi', 'B2B bayi sipariş, cari hesap ve sevkiyat yönetim sistemi', 'active'),
    ('44444444-4444-4444-4444-444444444444', 'regon-market', 'Regon Market', 'Hızlı teslimat, online market ve anlık stok barkod altyapısı', 'active')
ON CONFLICT (slug) DO UPDATE 
SET 
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    status = EXCLUDED.status;

-- 2. ÖRNEK TEST İŞLETMELERİ (Tenants)
INSERT INTO tenants (id, name, contact_name, phone)
VALUES
    ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Kadıköy Lezzet Restoran & Kafe', 'Ahmet Yılmaz', '+90 555 111 22 33'),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Express Dağıtım & Lojistik Ltd.', 'Selin Kaya', '+90 532 999 88 77')
ON CONFLICT (id) DO NOTHING;

-- 3. TEST AKTİVASYON KODLARI (KODLAR ASLA AÇIK METİN SAKLANMAZ, YALNIZCA SHA-256 HASH)
-- Kod: RGN-TEST-2026-DEMO -> SHA-256: b191fe99bd4881573cc89c760ffa7cac99b2dfc0594f91717658b7d4d836ff26 (Kadıköy Lezzet -> Regon POS)
-- Kod: RGN-KURYE-2026-TEST -> SHA-256: bbe514ffdbbb1e41c7f0f5a0b3e567574a5d4fe95d5288270b6a09363f22145a (Express Dağıtım -> Regon Kurye)
INSERT INTO activation_codes (id, tenant_id, project_id, code_hash, is_active, expires_at)
VALUES
    (
        'c1111111-1111-1111-1111-111111111111',
        'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        '22222222-2222-2222-2222-222222222222',
        'b191fe99bd4881573cc89c760ffa7cac99b2dfc0594f91717658b7d4d836ff26',
        TRUE,
        NOW() + INTERVAL '1 year'
    ),
    (
        'c2222222-2222-2222-2222-222222222222',
        'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        '11111111-1111-1111-1111-111111111111',
        'bbe514ffdbbb1e41c7f0f5a0b3e567574a5d4fe95d5288270b6a09363f22145a',
        TRUE,
        NOW() + INTERVAL '1 year'
    )
ON CONFLICT (code_hash) DO NOTHING;

-- 4. ÖRNEK YÖNETİCİ KULLANICI (Admin User)
INSERT INTO admin_users (id, email, full_name, role, is_active)
VALUES
    ('99999999-9999-9999-9999-999999999999', 'admin@regon.com.tr', 'Regon Sistem Yöneticisi', 'superadmin', TRUE)
ON CONFLICT (email) DO NOTHING;
