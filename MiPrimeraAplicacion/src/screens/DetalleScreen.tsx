import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PRODUCT_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAzUUV4GSjblcrfvrojqAbqTMVEK-rPOBCidjbLTD3-Lj6gPinSGxYQBA2YpAy7-IJ791rZZxGuoMUh5TkX2pKWaXfp_m9mues49WG0dHVUL5Muz5BWgty7Y2jw2gQHaz2plU5fZJyN--Zr7U_SoLuV1VspXobM-jcR79LPEPz8q3WO4TmrBjg7ZdOrrssY0TgHcwZsFrypStd8_choq_Y6RcM16UqDNv3BA5oA9AFQUSXddfPUDnbyjw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCLCxE1fio66lbEpm5jwoTHUoyApMIpxmclmN5ykdlXD6Ddzu_aRgbtHJEcRw4W6fbB2NYGOFvsaaNjL31qgh06VGEM2HePza9DXmW2EHKTNES9lzMSwxFb9GLt1bsPbMLGg7dT6yoUfwdb83ppkbye5CtaSFWUWf22LxF2QOPljqldQhunz4nOYnnCyt-09e4GdTb2FBq17AL8WfvgY40rTqWNEXSj1nf6rvkTmeoWSVyRwL29tY2kRQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuACd_HFqfyA9QSJT88GR_fK50Rr66Xki6q58S6IeZhzoCiQEVFEB5aZman0Xt0FeAGsmWvzWu6F2oSA34tjENh7q4EWxDkEEAhmLazUcbCJF8ouN7J8bc1ne4VoP8ir3jwZx88_dzunU2Dg4a0ADf0QGVFPcAx4WXoj68ZkezqZn_CEzbURYyNiEwEpuPMHdACD93RW-6BRRSfFMrssLeLeWt10BZM0-ksH5HctOT3lL4jyjL80SsBYcQ",
];

export default function DetalleScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [selectedColor, setSelectedColor] = useState("Blanco");
  const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <View style={styles.container}>
      {/* Ambient Background Orbs */}
      <View style={[styles.glowOrb, styles.glowOrb1]} />
      <View style={[styles.glowOrb, styles.glowOrb2]} />
      <View style={[styles.glowOrb, styles.glowOrb3]} />

      {/* Fixed Header */}
      <SafeAreaView edges={["top"]} style={styles.headerSafe}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <Text style={styles.backIcon}>←</Text>
            </Pressable>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida/AEtjO1Xwa-tmpWGlc-MWOqV4pfOF9zEJtZZQpTX3ax63gqWVuAfjWJXyaN-TIi6Ez43LQRpkmqOOun3izELrXFwZrNoXmAazJDgd9tdHbkhKM8g4iOdHNMHsZZ31JKTqFF-iHG8cqcM-bn6SkUF65DEtMYL9s8sMHhaRUP001Qmf2gt4-rAw2KA35qQvwWAuQgtwyYEbs4vQf64Veikm9QPnL_tv9Ofak9gAb43TY3VSSqKvtdgvEqVyT866mwc",
              }}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.headerTitle}>Detalle De Producto</Text>
          </View>
          <View style={styles.headerRight}>
            <Pressable style={styles.cartButton}>
              <Text style={styles.cartIcon}>🛒</Text>
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>3</Text>
              </View>
            </Pressable>
            <View style={styles.avatarSmall}>
              <Text style={styles.avatarIcon}>👤</Text>
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
        {/* Breadcrumb & Actions */}
        <View style={styles.breadcrumbRow}>
          <Text style={styles.breadcrumb} numberOfLines={1}>
            Electrónica › Audio ›{" "}
            <Text style={styles.breadcrumbActive}>Audífonos</Text>
          </Text>
          <View style={styles.actionIcons}>
            <Pressable style={styles.actionButton}>
              <Text style={styles.actionIcon}>⇧</Text>
            </Pressable>
            <Pressable
              style={styles.actionButton}
              onPress={() => setIsFavorite(!isFavorite)}
            >
              <Text style={styles.actionIcon}>{isFavorite ? "♥" : "♡"}</Text>
            </Pressable>
          </View>
        </View>

        {/* Condition & Rating */}
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>Nuevo | +10mil vendidos</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.starIcon}>⭐</Text>
            <Text style={styles.ratingText}>4.8</Text>
            <Text style={styles.ratingCount}>(1,420)</Text>
          </View>
        </View>

        {/* Product Title */}
        <Text style={styles.productTitle}>
          Apple AirPods Pro 3 Color Blanco Con Cancelación Activa De Ruido y
          Estuche MagSafe
        </Text>

        {/* Image Gallery */}
        <View style={styles.galleryCard}>
          <Image
            source={{ uri: PRODUCT_IMAGES[0] }}
            style={styles.mainImage}
            resizeMode="contain"
          />
          <View style={styles.originalBadge}>
            <Text style={styles.originalIcon}>✓</Text>
            <Text style={styles.originalText}>100% Original</Text>
          </View>
          <View style={styles.galleryIndicator}>
            <Text style={styles.galleryText}>1 / 3</Text>
          </View>
        </View>

        {/* Thumbnails */}
        <View style={styles.thumbnailsRow}>
          {PRODUCT_IMAGES.map((img, idx) => (
            <View
              key={idx}
              style={[styles.thumbnail, idx === 0 && styles.thumbnailActive]}
            >
              <Image
                source={{ uri: img }}
                style={styles.thumbnailImage}
                resizeMode="contain"
              />
            </View>
          ))}
        </View>

        {/* Pricing Card */}
        <View style={styles.pricingCard}>
          <Text style={styles.strikePrice}>S/ 1.590</Text>
          <View style={styles.currentPriceRow}>
            <Text style={styles.currentPrice}>S/ 829</Text>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>47% OFF</Text>
            </View>
          </View>
          <Text style={styles.installments}>
            en 6 cuotas de S/ 138<Text style={styles.cents}>17</Text> sin
            interés
          </Text>
          <Pressable>
            <Text style={styles.paymentLink}>
              Ver los medios de pago y promociones ›
            </Text>
          </Pressable>
          <View style={styles.promoChipsRow}>
            <View style={styles.promoChipBlue}>
              <Text style={styles.promoChipIcon}>💳</Text>
              <Text style={styles.promoChipTextBlue}>S/ 100 OFF BCP Visa</Text>
            </View>
            <View style={styles.promoChipGreen}>
              <Text style={styles.promoChipIcon}>🏷️</Text>
              <Text style={styles.promoChipTextGreen}>
                Cupón S/ 25 OFF aplicado
              </Text>
            </View>
          </View>
        </View>

        {/* Color Selector */}
        <View style={styles.colorCard}>
          <Text style={styles.colorLabel}>
            Color: <Text style={styles.colorValue}>{selectedColor}</Text>
          </Text>
          <View style={styles.colorOptions}>
            <Pressable
              style={[
                styles.colorOption,
                selectedColor === "Blanco" && styles.colorOptionActive,
              ]}
              onPress={() => setSelectedColor("Blanco")}
            >
              <View style={styles.colorSwatch} />
              <Text style={styles.colorOptionText}>Blanco</Text>
            </Pressable>
            <Pressable
              style={[
                styles.colorOption,
                selectedColor === "Negro espacial" && styles.colorOptionActive,
              ]}
              onPress={() => setSelectedColor("Negro espacial")}
            >
              <View style={[styles.colorSwatch, styles.colorSwatchBlack]} />
              <Text style={styles.colorOptionText}>Negro espacial</Text>
            </Pressable>
          </View>
        </View>

        {/* Shipping Card */}
        <View style={styles.shippingCard}>
          <View style={styles.shippingRow}>
            <Text style={styles.shippingIcon}>🚚</Text>
            <View style={styles.shippingInfo}>
              <View style={styles.shippingTitleRow}>
                <Text style={styles.shippingTitle}>
                  Envío gratis a todo el país
                </Text>
                <View style={styles.fullBadge}>
                  <Text style={styles.fullText}>FULL</Text>
                </View>
              </View>
              <Text style={styles.shippingDetail}>
                Llega gratis{" "}
                <Text style={styles.shippingHighlight}>mañana</Text>
              </Text>
              <Text style={styles.shippingNote}>
                Comprando dentro de las próximas 3 h 42 min
              </Text>
            </View>
          </View>
          <View style={styles.locationRow}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.locationText}>
              Enviar a <Text style={styles.locationBold}>Lima 15001</Text>
            </Text>
            <Pressable>
              <Text style={styles.modifyLink}>Modificar</Text>
            </Pressable>
          </View>
          <View style={styles.stockRow}>
            <View style={styles.stockIndicator}>
              <View style={styles.stockDot} />
              <Text style={styles.stockText}>Stock disponible</Text>
            </View>
            <View style={styles.urgencyBadge}>
              <Text style={styles.urgencyText}>¡Últimas 5 unidades!</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Pressable style={styles.buyNowButton}>
            <Text style={styles.buyNowText}>Comprar ahora</Text>
          </Pressable>
          <Pressable style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.addToCartText}>Agregar al carrito</Text>
          </Pressable>
        </View>

        {/* Guarantees */}
        <View style={styles.guarantees}>
          <View style={styles.guaranteeRow}>
            <Text style={styles.guaranteeIcon}>↩️</Text>
            <Text style={styles.guaranteeText}>
              <Text style={styles.guaranteeBold}>Devolución gratis:</Text>{" "}
              tienes 30 días desde que lo recibes.
            </Text>
          </View>
          <View style={styles.guaranteeRow}>
            <Text style={styles.guaranteeIcon}>🛡️</Text>
            <Text style={styles.guaranteeText}>
              <Text style={styles.guaranteeBold}>Compra Protegida:</Text> recibe
              el producto que esperabas o te devolvemos tu dinero.
            </Text>
          </View>
        </View>

        {/* Seller Card */}
        <View style={styles.sellerCard}>
          <Text style={styles.sellerLabel}>Información sobre el vendedor</Text>
          <View style={styles.sellerRow}>
            <View style={styles.sellerIcon}>
              <Text style={styles.storeIcon}>🏪</Text>
            </View>
            <View style={styles.sellerInfo}>
              <Text style={styles.sellerName}>MercadoStore Oficial</Text>
              <View style={styles.sellerBadge}>
                <Text style={styles.badgeIcon}>🏆</Text>
                <Text style={styles.badgeText}>MercadoLíder Platinum</Text>
              </View>
            </View>
          </View>
          <View style={styles.reputationBar}>
            <View style={[styles.barSegment, { backgroundColor: "#ba1a1a" }]} />
            <View style={[styles.barSegment, { backgroundColor: "#fde400" }]} />
            <View style={[styles.barSegment, { backgroundColor: "#dec800" }]} />
            <View style={[styles.barSegment, { backgroundColor: "#5adf81" }]} />
            <View style={[styles.barSegment, { backgroundColor: "#006d32" }]} />
          </View>
          <View style={styles.sellerStats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>+10.000</Text>
              <Text style={styles.statLabel}>Ventas concretadas</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statIcon}>👍</Text>
              <Text style={styles.statLabel}>100% recomiendan</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statIcon}>⏱️</Text>
              <Text style={styles.statLabel}>Despacha a tiempo</Text>
            </View>
          </View>
        </View>

        {/* Specifications */}
        <View style={styles.specsCard}>
          <View style={styles.specsHeader}>
            <Text style={styles.specsTitle}>Características principales</Text>
            <Text style={styles.specsIcon}>🎛️</Text>
          </View>
          <View style={styles.specsList}>
            {[
              { label: "Conectividad", value: "Bluetooth 5.3" },
              {
                label: "Cancelación de Ruido",
                value: "Activa inteligente (ANC)",
              },
              { label: "Duración de Batería", value: "Hasta 30 horas totales" },
              { label: "Resistencia al Agua", value: "Certificación IPX4" },
              {
                label: "Compatibilidad",
                value: "iOS, macOS, Android, Windows",
              },
            ].map((spec, idx) => (
              <View key={idx} style={styles.specRow}>
                <Text style={styles.specLabel}>{spec.label}</Text>
                <Text style={styles.specValue}>{spec.value}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Related Products */}
        <View style={styles.relatedSection}>
          <Text style={styles.relatedTitle}>
            Quienes vieron este producto también compraron
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.relatedList}
          >
            {[
              {
                title: "Funda De Silicona MagSafe",
                price: "S/ 39",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDS8Qvk6SEp5UR1ehMxOAy1WCV_PNcBGU0Epw5YW3HnrYEh65h3SzmnsV-Efsl9lbGuBGm87mV1b8rTv4r0lN-lpwyUk9rjYdECnkBuYPkbAsqGcPIfHQ8ae2-1Q_JgHQlhxh7jFIU15pStgninc_tm3AmXTeMB4-7KK1IZnrWWvflAJ315CjGanEXFcgFwRzx1VvO7pBqO-VF4D6qF2xEohQE5mmi9ooou4f6PFPye5z7ijWYJAUOm2w",
              },
              {
                title: "Cable Carga Rápida USB-C",
                price: "S/ 49",
                cents: "90",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuC6AV4T66ff4MwXtbXwdfhtXCui5rzmmAZ9yzMBROI9NalO0zAnZ3yLYS3KknHExcl5ZtkPT6hX4eFK-ohhvTcXHtVZUUXB8puJKgAFcrYNyfLxFShEEcTD3VdIYsqpU5JQqhvF4fTK7gHdL8JMwpWfcXtvLQS7zgA9ToKqi4GprfpBSGPH1qdo3CdUGKLRUqxWJt5BNhfLQDr6sWZ8WTspzrmB9EpNue7pC9Fo1rcnTd2C9k-W4Bc1Vw",
              },
              {
                title: "Adaptador De Corriente 20W",
                price: "S/ 89",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuD9PoYyY2rGSoXBQpDrUS_WHI4ldoILBR8kykgV9rRpafgB9I3itOrRnDLAxfMUx99mLhIQuVWfG-1jkuZCbL7cMVnwyRhILGDnB1gCSBGAJ5r03bzurpQk4buIKA8aXRGAZWyxbXOJnFNP5VqWkU0MsANhOcramphqd8iJ8Qpctak5JcuC73kydMNk5Owshoi1OBVxhKpEhawZDW1DD_IxgcirS-HdpfJSSH77neAeQnVy1yGrD5GBmQ",
              },
            ].map((item, idx) => (
              <View key={idx} style={styles.relatedCard}>
                <View style={styles.relatedImageBox}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.relatedImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.relatedItemTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.relatedPrice}>
                  {item.price}
                  {item.cents && (
                    <Text style={styles.relatedCents}>{item.cents}</Text>
                  )}
                </Text>
                <Text style={styles.relatedShipping}>Envío gratis</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Toast Notification */}
      {showToast && (
        <View style={styles.toast}>
          <View style={styles.toastContent}>
            <Text style={styles.toastIcon}>✓</Text>
            <Text style={styles.toastText}>¡Producto agregado al carrito!</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f8",
  },
  glowOrb: {
    position: "absolute",
    borderRadius: 999,
    opacity: 0.3,
  },
  glowOrb1: {
    top: 80,
    left: -80,
    width: 320,
    height: 320,
    backgroundColor: "#93c5fd",
  },
  glowOrb2: {
    top: 384,
    right: -80,
    width: 320,
    height: 320,
    backgroundColor: "#fcd34d",
  },
  glowOrb3: {
    bottom: 128,
    left: "25%",
    width: 288,
    height: 288,
    backgroundColor: "#bbf7d0",
  },
  headerSafe: {
    backgroundColor: "rgba(255, 230, 0, 0.85)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.05)",
    zIndex: 50,
  },
  header: {
    height: 56,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
    minWidth: 0,
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 24,
    color: "#1b1c1c",
  },
  logo: {
    height: 28,
    width: 28,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1b1c1c",
    flex: 1,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cartButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  cartIcon: {
    fontSize: 22,
  },
  cartBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    minWidth: 16,
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
  avatarSmall: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#6a5f00",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarIcon: {
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  breadcrumbRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  breadcrumb: {
    fontSize: 12,
    color: "#4b4731",
    flex: 1,
  },
  breadcrumbActive: {
    fontWeight: "600",
    color: "#1b1c1c",
  },
  actionIcons: {
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  actionIcon: {
    fontSize: 18,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  metaText: {
    fontSize: 12,
    color: "#4b4731",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  starIcon: {
    fontSize: 14,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1b1c1c",
  },
  ratingCount: {
    fontSize: 12,
    color: "#4b4731",
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 26,
    color: "#1b1c1c",
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  galleryCard: {
    marginHorizontal: 12,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
    marginBottom: 12,
  },
  mainImage: {
    width: "100%",
    aspectRatio: 1,
    padding: 16,
  },
  originalBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.7)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  originalIcon: {
    fontSize: 12,
    color: "#006d32",
  },
  originalText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#1b1c1c",
  },
  galleryIndicator: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(48, 48, 48, 0.65)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  galleryText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#f3f0f0",
  },
  thumbnailsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  thumbnail: {
    width: 44,
    height: 44,
    padding: 2,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.7)",
  },
  thumbnailActive: {
    borderWidth: 2,
    borderColor: "#0058bb",
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  pricingCard: {
    marginHorizontal: 12,
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 16,
    marginBottom: 12,
  },
  strikePrice: {
    fontSize: 14,
    color: "#4b4731",
    textDecorationLine: "line-through",
  },
  currentPriceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
    marginTop: 4,
  },
  currentPrice: {
    fontSize: 36,
    fontWeight: "600",
    color: "#1b1c1c",
    letterSpacing: -0.5,
  },
  discountBadge: {
    backgroundColor: "#78fc9b",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  discountText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#00210b",
  },
  installments: {
    fontSize: 14,
    fontWeight: "600",
    color: "#006d32",
    marginTop: 4,
  },
  cents: {
    fontSize: 12,
    fontWeight: "400",
  },
  paymentLink: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0058bb",
    marginTop: 8,
  },
  promoChipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },
  promoChipBlue: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(216, 226, 255, 0.8)",
    borderWidth: 1,
    borderColor: "#d8e2ff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  promoChipTextBlue: {
    fontSize: 12,
    fontWeight: "600",
    color: "#001a41",
  },
  promoChipGreen: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(123, 252, 155, 0.8)",
    borderWidth: 1,
    borderColor: "#78fc9b",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  promoChipTextGreen: {
    fontSize: 12,
    fontWeight: "600",
    color: "#007637",
  },
  promoChipIcon: {
    fontSize: 12,
  },
  colorCard: {
    marginHorizontal: 12,
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 16,
    marginBottom: 12,
  },
  colorLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1b1c1c",
    marginBottom: 8,
  },
  colorValue: {
    color: "#4b4731",
  },
  colorOptions: {
    flexDirection: "row",
    gap: 12,
  },
  colorOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
  },
  colorOptionActive: {
    borderWidth: 2,
    borderColor: "#0058bb",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  colorSwatch: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  colorSwatchBlack: {
    backgroundColor: "#303030",
  },
  colorOptionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1b1c1c",
  },
  shippingCard: {
    marginHorizontal: 12,
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 16,
    gap: 12,
    marginBottom: 12,
  },
  shippingRow: {
    flexDirection: "row",
    gap: 12,
  },
  shippingIcon: {
    fontSize: 22,
    marginTop: 2,
  },
  shippingInfo: {
    flex: 1,
  },
  shippingTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  shippingTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#006d32",
  },
  fullBadge: {
    backgroundColor: "#78fc9b",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  fullText: {
    fontSize: 10,
    fontWeight: "700",
    fontStyle: "italic",
    color: "#00210b",
  },
  shippingDetail: {
    fontSize: 12,
    color: "#1b1c1c",
    marginTop: 4,
  },
  shippingHighlight: {
    fontWeight: "600",
    color: "#006d32",
  },
  shippingNote: {
    fontSize: 12,
    color: "#4b4731",
    marginTop: 4,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },
  locationIcon: {
    fontSize: 16,
  },
  locationText: {
    fontSize: 12,
    color: "#1b1c1c",
    flex: 1,
  },
  locationBold: {
    fontWeight: "600",
  },
  modifyLink: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0058bb",
  },
  stockRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stockIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stockDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ba1a1a",
  },
  stockText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1b1c1c",
  },
  urgencyBadge: {
    backgroundColor: "rgba(255, 218, 214, 0.5)",
    borderWidth: 1,
    borderColor: "rgba(255, 218, 214, 0.6)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  urgencyText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#ba1a1a",
  },
  actionButtons: {
    paddingHorizontal: 12,
    gap: 12,
    marginBottom: 12,
  },
  buyNowButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#0058bb",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buyNowText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  addToCartButton: {
    width: "100%",
    height: 48,
    backgroundColor: "rgba(239, 246, 255, 0.8)",
    borderWidth: 1,
    borderColor: "#bfdbfe",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2563eb",
  },
  guarantees: {
    paddingHorizontal: 12,
    gap: 8,
    marginBottom: 12,
  },
  guaranteeRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  guaranteeIcon: {
    fontSize: 16,
  },
  guaranteeText: {
    fontSize: 12,
    color: "#4b4731",
    flex: 1,
  },
  guaranteeBold: {
    fontWeight: "600",
    color: "#1b1c1c",
  },
  sellerCard: {
    marginHorizontal: 12,
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 16,
    marginBottom: 12,
  },
  sellerLabel: {
    fontSize: 12,
    color: "#4b4731",
    marginBottom: 8,
  },
  sellerRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  sellerIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  storeIcon: {
    fontSize: 22,
  },
  sellerInfo: {
    flex: 1,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1b1c1c",
  },
  sellerBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
  },
  badgeIcon: {
    fontSize: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#006d32",
  },
  reputationBar: {
    flexDirection: "row",
    gap: 4,
    marginVertical: 12,
  },
  barSegment: {
    flex: 1,
    height: 8,
    borderRadius: 4,
  },
  sellerStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1b1c1c",
  },
  statLabel: {
    fontSize: 10,
    color: "#4b4731",
    textAlign: "center",
    marginTop: 2,
  },
  statIcon: {
    fontSize: 18,
  },
  specsCard: {
    marginHorizontal: 12,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 12,
  },
  specsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  specsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1b1c1c",
  },
  specsIcon: {
    fontSize: 18,
  },
  specsList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 8,
  },
  specRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
  },
  specLabel: {
    fontSize: 12,
    color: "#4b4731",
  },
  specValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1b1c1c",
    textAlign: "right",
    flex: 1,
    marginLeft: 8,
  },
  relatedSection: {
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  relatedTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1b1c1c",
    marginBottom: 12,
  },
  relatedList: {
    gap: 8,
  },
  relatedCard: {
    width: 150,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 16,
    padding: 8,
  },
  relatedImageBox: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 12,
    padding: 4,
    marginBottom: 8,
  },
  relatedImage: {
    width: "100%",
    height: "100%",
  },
  relatedItemTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1b1c1c",
  },
  relatedPrice: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1b1c1c",
    marginTop: 4,
  },
  relatedCents: {
    fontSize: 12,
    fontWeight: "400",
  },
  relatedShipping: {
    fontSize: 10,
    color: "#006d32",
    marginTop: 2,
  },
  toast: {
    position: "absolute",
    bottom: 20,
    left: 12,
    right: 12,
    zIndex: 50,
  },
  toastContent: {
    backgroundColor: "rgba(48, 48, 48, 0.85)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  toastIcon: {
    fontSize: 22,
    color: "#78fc9b",
  },
  toastText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#f3f0f0",
  },
});
