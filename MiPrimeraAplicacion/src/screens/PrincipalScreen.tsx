import { useRouter } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PRODUCTS = [
  {
    id: 1,
    title: "Apple AirPods Pro 3 Color Blanco Con Cancelación D...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLIkxd0FCD6epKb_co5CcrHa5-NszyyGDuJPq_6GmtYUDCTkCafGmevaAsHZCmVtkOrOJREcM1oOXT-B2oOy_hiseP1SPxFuqJ2V8Ux3L_35FF7KVeK1Od8mekOtech44WKOton76D7Qo_ntnrjVquAbbO3NdvD4hZXQUwgix9-Sin1yQoPg9iU-_uErL60oKSMLPKOW3egYkLyuKrJsU7A3y56TWOzLIiBzCaMYf7scXFWDtpbjkX9A",
    originalPrice: "S/ 1.590",
    currentPrice: "S/ 829",
    discount: "47% OFF",
    installments: "6 cuotas de S/ 138,17 sin interés",
  },
  {
    id: 2,
    title: "Audífonos Xiaomi Redmi Buds 6 Play Bluetooth",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtcTIIM3GTX1uXkGA2MCBBMB2x6MMf162JBhatBOuARDLHoaulU3URIXeUlv4g5_Ba9nK-3e1f1cW9U8iZBd7SpW1foPoQ1yhye0_i1Pdv-4AWt9aAmz1DXTRjJ1XEvMtEWBCFAveFo2DBCnX6yk-5C1ZAnsI3CcpRkR9UrrQcvbm8aL1WsaQHMD_PML6Vqx3Nj2GlPmTplmmk5oC_6ZAy4ZlgdY_ho5ogdbY9Hmmqwrnoh-y1XYYv4g",
    originalPrice: "S/ 61,91",
    currentPrice: "S/ 39",
    discount: "37% OFF",
    installments: "6 cuotas de S/ 6,50 sin interés",
  },
  {
    id: 3,
    title: "Audífonos Qcy Ht08 46db Anc Cancelación De Ruido...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACQhHtnnjTdiBa7_3_I5smJBsjz0d_09zWHYHqZCKlQXhDHJQ1oRnWleyOeEyUYZVU8AdX2nqqGMu1IivIIMIvIobv7YzzHsUYGkRg164y5GghfEVUYbxB4s2gq25zoeKCiH0pYvYAKe74lZiGrY2ccHhUF59dREfJw7pSwjb9hzDWlwBFBpPbpy6bKwDHQVthENwDCI0TXCjIVh672jViMTpa2WbpnBvnoLLd1mxiePQ_9-LYUwTOMQ",
    originalPrice: "S/ 249",
    currentPrice: "S/ 138",
    cents: "60",
    discount: "44% OFF",
    installments: "6 cuotas de S/ 23,10 sin interés",
  },
  {
    id: 4,
    title: "Audífonos Internos Inalámbricos Wi-c100 Colo...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvG5EK5d8Z0iTNEG_SDPd9XJ0ZIG_iKtHn9eHyGEL2op8ZOAAD1fZSaXtSrh3lR1PB643tZ32wEbjwY7qB4Wa_5Ho0uV2Ug_ea3HAnJfKzfeobwRk-Ic6Kg40T4YOQFX6OX9UCJhF7TQbJQCqvfbgQ1NiZi5aGg6UOnv31IEzAF1pyJy-EVpezznpLEsLCu77Y5iKaaEaGu9D7kRjwZ-hrIaq4a5KRcPkHawvp6976mo6GvAB7EZwU1A",
    originalPrice: "S/ 141,43",
    currentPrice: "S/ 86",
    cents: "60",
    discount: "38% OFF",
    installments: "6 cuotas de S/ 14,43 sin interés",
  },
];

export default function PrincipalScreen() {
  const router = useRouter();

  const handleProductPress = (productId: number) => {
    router.push(`/detalle?id=${productId}`);
  };

  return (
    <View style={styles.container}>
      {/* Ambient Background Orbs */}
      <View style={[styles.glowOrb, styles.glowOrb1]} />
      <View style={[styles.glowOrb, styles.glowOrb2]} />
      <View style={[styles.glowOrb, styles.glowOrb3]} />
      <View style={[styles.glowOrb, styles.glowOrb4]} />

      {/* Fixed Header */}
      <SafeAreaView edges={["top"]} style={styles.headerSafe}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.logoContainer}>
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida/AEtjO1Xwa-tmpWGlc-MWOqV4pfOF9zEJtZZQpTX3ax63gqWVuAfjWJXyaN-TIi6Ez43LQRpkmqOOun3izELrXFwZrNoXmAazJDgd9tdHbkhKM8g4iOdHNMHsZZ31JKTqFF-iHG8cqcM-bn6SkUF65DEtMYL9s8sMHhaRUP001Qmf2gt4-rAw2KA35qQvwWAuQgtwyYEbs4vQf64Veikm9QPnL_tv9Ofak9gAb43TY3VSSqKvtdgvEqVyT866mwc",
                }}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.headerIcons}>
              <Pressable style={styles.iconButton}>
                <Text style={styles.icon}>🔔</Text>
                <View style={styles.notificationDot} />
              </Pressable>
              <Pressable style={styles.iconButton}>
                <Text style={styles.icon}>🛒</Text>
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>3</Text>
                </View>
              </Pressable>
              <View style={styles.avatarButton}>
                <Text style={styles.avatarIcon}>👤</Text>
              </View>
            </View>
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Text style={styles.searchIcon}>🔍</Text>
              <Text style={styles.searchPlaceholder}>
                Buscar productos, marcas y más...
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Mini Promo Banners */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannersContainer}
        >
          <View style={styles.promoBanner}>
            <View style={styles.promoBannerText}>
              <Text style={styles.promoBannerLabel}>¡COMPRA AHORA!</Text>
              <Text style={styles.promoBannerTitle}>LO MEJOR EN MUEBLES</Text>
              <Text style={styles.promoBannerLink}>Ver más ›</Text>
            </View>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqX4drAi1QK2EPbaSLG9JwihiP7vxC6MnfH_bPwDJsiX_7RIWixDR8s3ORMpInb6-FPz8_YY7manXBw6U5WrnI7g1yVnWXOirsh6phsi-nW-Kybgkxdc36Jyehdf-bSwnxfmoSQT-7Yt8064S5foN1LUBtUYEmauolhQ9XKiuyppDpyG0dpEdHIsl_z1TlqOFS1aqqBeX0f7ohsFqpyy-jVkU5G4qoG-6jKlX_m4O7ZyD-F4_f9lFdQA",
              }}
              style={styles.promoBannerImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.promoBanner}>
            <View style={styles.promoBannerText}>
              <Text style={styles.promoBannerLabel}>¡COMPRA AHORA!</Text>
              <Text style={styles.promoBannerTitle}>
                LO MEJOR PARA TU GYM EN CASA
              </Text>
              <Text style={styles.promoBannerLink}>Ver más ›</Text>
            </View>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFjHlhj5ANHvw4DjMdZlbIBAbPtL2C9y_kSdvZsSjffFy9LirzbAl0uNJGa-NdGDaR3Idj5NW8St7qfiz-FIwB_gPE3T7ijxz7jLPsAgjEi3IUMtdDDkB4TKCGyaSWzgpnrd6VLPyqLkgLcVfutZsI8n55wVu3QhZKqL0OAinHUF7O46Wec-w_GuziNxQD231hrBNySrlU3jYNwoyL7e0bxPmD6_evJopUtIosA0Fm92u2yjFxugQXPQ",
              }}
              style={styles.promoBannerImage}
              resizeMode="cover"
            />
          </View>
        </ScrollView>

        {/* Main Catalog Section */}
        <View style={styles.catalogSection}>
          <View style={styles.catalogHeader}>
            <View style={styles.catalogTitleRow}>
              <Text style={styles.catalogTitle}>
                Más vendidos de la semana en Hands Free
              </Text>
              <Pressable style={styles.moreButton}>
                <Text style={styles.moreIcon}>⋮</Text>
              </Pressable>
            </View>
            <Pressable>
              <Text style={styles.catalogLink}>Ir a Más vendidos →</Text>
            </Pressable>
          </View>

          {/* Filter Pills */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filtersContainer}
          >
            <Pressable style={styles.filterChipActive}>
              <Text style={styles.filterChipTextActive}>Todos</Text>
            </Pressable>
            <Pressable style={styles.filterChip}>
              <Text style={styles.filterChipText}>Audífonos Bluetooth</Text>
            </Pressable>
            <Pressable style={styles.filterChip}>
              <Text style={styles.filterChipText}>Cancelación de Ruido</Text>
            </Pressable>
            <Pressable style={styles.filterChip}>
              <Text style={styles.filterChipText}>Inalámbricos</Text>
            </Pressable>
          </ScrollView>

          {/* Product Grid */}
          <View style={styles.productGrid}>
            {PRODUCTS.map((product) => (
              <Pressable
                key={product.id}
                style={styles.productCard}
                onPress={() => handleProductPress(product.id)}
              >
                <Pressable style={styles.favoriteButton}>
                  <Text style={styles.favoriteIcon}>♡</Text>
                </Pressable>
                <View style={styles.productImageContainer}>
                  <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.productInfo}>
                  <Text style={styles.productTitle} numberOfLines={2}>
                    {product.title}
                  </Text>
                  <Text style={styles.originalPrice}>
                    {product.originalPrice}
                  </Text>
                  <View style={styles.priceRow}>
                    <Text style={styles.currentPrice}>
                      {product.currentPrice}
                      {product.cents && (
                        <Text style={styles.cents}>{product.cents}</Text>
                      )}
                    </Text>
                    <View style={styles.discountBadge}>
                      <Text style={styles.discountText}>
                        {product.discount}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.installments}>
                    {product.installments}
                  </Text>
                  <View style={styles.promoChips}>
                    <View style={styles.promoChip}>
                      <Text style={styles.promoChipText}>
                        S/ 100 OFF BCP Visa
                      </Text>
                    </View>
                    <View style={styles.promoChip}>
                      <Text style={styles.promoChipText}>Cupón S/ 25 OFF</Text>
                    </View>
                  </View>
                  <View style={styles.shippingRow}>
                    <Text style={styles.shippingText}>Envío gratis</Text>
                    <Text style={styles.shippingIcon}>⚡</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>

          {/* View More Button */}
          <Pressable style={styles.viewMoreButton}>
            <Text style={styles.viewMoreText}>Ver más ofertas de audio</Text>
            <Text style={styles.expandIcon}>▼</Text>
          </Pressable>
        </View>

        {/* Trust Badge */}
        <View style={styles.trustBadge}>
          <View style={styles.trustItem}>
            <Text style={styles.trustIcon}>🛡️</Text>
            <Text style={styles.trustText}>Compra Protegida</Text>
          </View>
          <View style={styles.trustItem}>
            <Text style={styles.trustIcon}>🚚</Text>
            <Text style={styles.trustText}>Envíos rápidos</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <SafeAreaView edges={["bottom"]} style={styles.bottomNavSafe}>
        <View style={styles.bottomNav}>
          <Pressable style={styles.navItemActive}>
            <Text style={styles.navIconActive}>🏠</Text>
            <Text style={styles.navLabelActive}>Inicio</Text>
          </Pressable>
          <Pressable style={styles.navItem}>
            <Text style={styles.navIcon}>🔍</Text>
            <Text style={styles.navLabel}>Buscar</Text>
          </Pressable>
          <Pressable style={styles.navItem}>
            <Text style={styles.navIcon}>🛍️</Text>
            <Text style={styles.navLabel}>Compras</Text>
          </Pressable>
          <Pressable style={styles.navItem}>
            <Text style={styles.navIcon}>♡</Text>
            <Text style={styles.navLabel}>Favoritos</Text>
          </Pressable>
          <Pressable style={styles.navItem}>
            <Text style={styles.navIcon}>👤</Text>
            <Text style={styles.navLabel}>Perfil</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f7f9",
  },
  glowOrb: {
    position: "absolute",
    borderRadius: 999,
    opacity: 0.3,
  },
  glowOrb1: {
    top: -96,
    left: -80,
    width: 320,
    height: 320,
    backgroundColor: "#ffe600",
  },
  glowOrb2: {
    top: "25%",
    right: -80,
    width: 384,
    height: 384,
    backgroundColor: "#0058bb",
  },
  glowOrb3: {
    top: "66%",
    left: -96,
    width: 320,
    height: 320,
    backgroundColor: "#78fc9b",
  },
  glowOrb4: {
    bottom: 40,
    right: 0,
    width: 288,
    height: 288,
    backgroundColor: "#ffe600",
  },
  headerSafe: {
    backgroundColor: "rgba(255, 230, 0, 0.85)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.05)",
    zIndex: 50,
  },
  header: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 44,
    gap: 8,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  logo: {
    height: 32,
    width: 120,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  icon: {
    fontSize: 20,
  },
  notificationDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ba1a1a",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  cartBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    minWidth: 18,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#0058bb",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  cartBadgeText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#ffffff",
  },
  avatarButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(106, 95, 0, 0.9)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
  },
  avatarIcon: {
    fontSize: 16,
  },
  searchContainer: {
    paddingVertical: 8,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 12,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
    gap: 8,
  },
  searchIcon: {
    fontSize: 18,
  },
  searchPlaceholder: {
    fontSize: 12,
    color: "rgba(27, 28, 28, 0.6)",
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  bannersContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    gap: 12,
  },
  promoBanner: {
    width: 320,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 16,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.7)",
  },
  promoBannerText: {
    flex: 1,
    paddingRight: 8,
  },
  promoBannerLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "#7c775f",
    letterSpacing: 1,
    marginBottom: 2,
  },
  promoBannerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1b1c1c",
    lineHeight: 20,
    marginBottom: 4,
  },
  promoBannerLink: {
    fontSize: 12,
    fontWeight: "600",
    color: "#0058bb",
  },
  promoBannerImage: {
    width: 112,
    height: 96,
    borderRadius: 12,
  },
  catalogSection: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
    padding: 12,
  },
  catalogHeader: {
    marginBottom: 12,
  },
  catalogTitleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  catalogTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1b1c1c",
    lineHeight: 26,
    flex: 1,
  },
  moreButton: {
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  moreIcon: {
    fontSize: 18,
    color: "#7c775f",
  },
  catalogLink: {
    fontSize: 12,
    fontWeight: "600",
    color: "#0058bb",
  },
  filtersContainer: {
    paddingVertical: 12,
    gap: 8,
  },
  filterChipActive: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "rgba(0, 88, 187, 0.9)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(0, 88, 187, 0.4)",
  },
  filterChipTextActive: {
    fontSize: 12,
    fontWeight: "600",
    color: "#ffffff",
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.7)",
  },
  filterChipText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4b4731",
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  productCard: {
    width: "48.5%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
    position: "relative",
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  favoriteIcon: {
    fontSize: 16,
    color: "#7c775f",
  },
  productImageContainer: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productInfo: {
    gap: 4,
  },
  productTitle: {
    fontSize: 12,
    lineHeight: 16,
    color: "#1b1c1c",
    fontWeight: "500",
    marginBottom: 4,
  },
  originalPrice: {
    fontSize: 12,
    color: "#7c775f",
    textDecorationLine: "line-through",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
    marginTop: 2,
  },
  currentPrice: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1b1c1c",
  },
  cents: {
    fontSize: 12,
    fontWeight: "400",
  },
  discountBadge: {
    backgroundColor: "rgba(123, 252, 155, 0.8)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#7bff9d",
  },
  discountText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#007637",
  },
  installments: {
    fontSize: 12,
    fontWeight: "600",
    color: "#006d32",
    lineHeight: 14,
    marginTop: 2,
  },
  promoChips: {
    gap: 2,
    marginTop: 4,
  },
  promoChip: {
    backgroundColor: "rgba(216, 226, 255, 0.7)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#d8e2ff",
  },
  promoChipText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#0058bb",
  },
  shippingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  shippingText: {
    fontSize: 14,
    fontWeight: "700",
    fontStyle: "italic",
    color: "#006d32",
  },
  shippingIcon: {
    fontSize: 14,
  },
  viewMoreButton: {
    marginTop: 20,
    paddingTop: 4,
    width: "100%",
    height: 48,
    backgroundColor: "#3483fa",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  viewMoreText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  expandIcon: {
    fontSize: 18,
    color: "#ffffff",
  },
  trustBadge: {
    marginHorizontal: 16,
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  trustItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  trustIcon: {
    fontSize: 18,
  },
  trustText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#4b4731",
  },
  bottomNavSafe: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.6)",
  },
  bottomNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 64,
    paddingHorizontal: 8,
  },
  navItemActive: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 56,
    height: 48,
  },
  navIconActive: {
    fontSize: 20,
  },
  navLabelActive: {
    fontSize: 10,
    fontWeight: "600",
    color: "#0058bb",
    marginTop: 2,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 56,
    height: 48,
  },
  navIcon: {
    fontSize: 20,
  },
  navLabel: {
    fontSize: 10,
    color: "#4b4731",
    marginTop: 2,
  },
});
