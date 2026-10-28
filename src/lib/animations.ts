// ============================================================
// Regon Teknoloji — Animasyon Sabitleri ve Hareket Dili
// Kontrollü, ağır-yumuşak ve editoryal hareketler.
// Ucuz görünen bounce veya aşırı hızlı geçişler YOKTUR.
// ============================================================

export const MOTION = {
  // Süreler (saniye cinsinden GSAP için)
  duration: {
    instant: 0.15,
    fast: 0.3,
    normal: 0.6,
    slow: 0.9,
    crawl: 1.4,
  },

  // Easing eğrileri — pürüzsüz ve ağırbaşlı
  ease: {
    // Çıkış yavaşlaması (ana içerik ve belirmeler için)
    out: 'power2.out',
    // Giriş-çıkış (durum ve koordinasyon için)
    inOut: 'power2.inOut',
    // Editoryal pürüzsüz akış
    smooth: 'expo.out',
    // Doğrusal (kayan şeritler için)
    linear: 'none',
  },

  // Kaydırma ve mesafe sabitleri
  distance: {
    sm: 12,
    md: 24,
    lg: 48,
  },

  // Stagger aralıkları
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const

/** Cihazın prefers-reduced-motion isteğini kontrol eder */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
