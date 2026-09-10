import { useRouter } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();
  const [credential, setCredential] = useState("");
  const [showError, setShowError] = useState(false);

  const handleContinue = () => {
    if (!credential.trim()) {
      setShowError(true);
      return;
    }
    setShowError(false);
    // Navegar a Principal
    router.push("/principal");
  };

  const handleClearInput = () => {
    setCredential("");
    setShowError(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Ambient Glow Orbs */}
          <View style={[styles.glowOrb, styles.glowOrb1]} />
          <View style={[styles.glowOrb, styles.glowOrb2]} />
          <View style={[styles.glowOrb, styles.glowOrb3]} />
          <View style={[styles.glowOrb, styles.glowOrb4]} />

          <View style={styles.content}>
            {/* Header with back button and security badge */}
            <View style={styles.header}>
              <Pressable style={styles.backButton}>
                <Text style={styles.backIcon}>←</Text>
              </Pressable>
              <View style={styles.securityBadge}>
                <Text style={styles.securityIcon}>🔒</Text>
                <Text style={styles.securityText}>Conexión segura</Text>
              </View>
            </View>

            {/* Title Section */}
            <View style={styles.titleSection}>
              <Text style={styles.title}>
                Ingresa tu e-mail o teléfono para iniciar sesión
              </Text>
              <Text style={styles.subtitle}>
                Reporta o ingresa con tu cuenta registrada
              </Text>
            </View>

            {/* Main Card */}
            <View style={styles.card}>
              <View style={styles.inputGroup}>
                <View style={styles.labelRow}>
                  <Text style={styles.label}>E-mail o teléfono</Text>
                  {showError && (
                    <View style={styles.errorFeedback}>
                      <Text style={styles.errorIcon}>⚠</Text>
                      <Text style={styles.errorText}>Completa este dato</Text>
                    </View>
                  )}
                </View>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    value={credential}
                    onChangeText={(text) => {
                      setCredential(text);
                      if (text.trim()) setShowError(false);
                    }}
                    placeholder="ejemplo@correo.com o celular"
                    placeholderTextColor="#94a3b8"
                    autoCapitalize="none"
                    keyboardType="email-address"
                  />
                  {credential.length > 0 && (
                    <Pressable
                      style={styles.clearButton}
                      onPress={handleClearInput}
                    >
                      <Text style={styles.clearIcon}>✕</Text>
                    </Pressable>
                  )}
                </View>
              </View>

              {/* Action Buttons */}
              <View style={styles.actionStack}>
                <Pressable
                  style={styles.continueButton}
                  onPress={handleContinue}
                >
                  <Text style={styles.continueButtonText}>Continuar</Text>
                </Pressable>
                <Pressable style={styles.createAccountButton}>
                  <Text style={styles.createAccountText}>Crear cuenta</Text>
                </Pressable>
              </View>
            </View>

            {/* Security Option */}
            <Pressable style={styles.securityOption}>
              <View style={styles.securityOptionContent}>
                <View style={styles.securityIconBox}>
                  <Text style={styles.securityOptionIcon}>🛡️</Text>
                </View>
                <Text style={styles.securityOptionText}>
                  Tengo un problema de seguridad
                </Text>
              </View>
              <Text style={styles.chevronRight}>›</Text>
            </Pressable>

            {/* Footer */}
            <View style={styles.footer}>
              <Pressable style={styles.helpLink}>
                <Text style={styles.helpIcon}>❓</Text>
                <Text style={styles.helpText}>Necesito ayuda</Text>
              </Pressable>
              <Text style={styles.footerNote}>
                Protegido por reCAPTCHA y Términos del Servicio
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    minHeight: "100%",
  },
  glowOrb: {
    position: "absolute",
    borderRadius: 999,
    opacity: 0.4,
  },
  glowOrb1: {
    top: -96,
    left: -80,
    width: 320,
    height: 320,
    backgroundColor: "#fcd34d",
  },
  glowOrb2: {
    top: "25%",
    right: -96,
    width: 384,
    height: 384,
    backgroundColor: "#93c5fd",
  },
  glowOrb3: {
    bottom: 40,
    left: "33%",
    width: 320,
    height: 320,
    backgroundColor: "#fef08a",
  },
  glowOrb4: {
    bottom: 0,
    left: -48,
    width: 256,
    height: 256,
    backgroundColor: "#bae6fd",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: "center",
    maxWidth: 448,
    width: "100%",
    alignSelf: "center",
    zIndex: 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
  },
  backIcon: {
    fontSize: 22,
    color: "#1b1c1c",
  },
  securityBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  securityIcon: {
    fontSize: 16,
  },
  securityText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#475569",
    letterSpacing: 0.5,
  },
  titleSection: {
    width: "100%",
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "600",
    color: "#1b1c1c",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "#64748b",
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.65)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 32,
    elevation: 4,
  },
  inputGroup: {
    gap: 4,
    marginBottom: 20,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "600",
    color: "#1e293b",
  },
  errorFeedback: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  errorIcon: {
    fontSize: 14,
    color: "#ba1a1a",
  },
  errorText: {
    fontSize: 12,
    lineHeight: 16,
    color: "#ba1a1a",
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    width: "100%",
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    fontSize: 14,
    lineHeight: 20,
    color: "#1b1c1c",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  clearButton: {
    position: "absolute",
    right: 12,
    top: 12,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(203, 213, 225, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  clearIcon: {
    fontSize: 12,
    color: "#475569",
  },
  actionStack: {
    gap: 12,
    paddingTop: 4,
  },
  continueButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#3483FA",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  createAccountButton: {
    width: "100%",
    height: 44,
    backgroundColor: "transparent",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  createAccountText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "600",
    color: "#3b82f6",
  },
  securityOption: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 16,
    padding: 12,
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  securityOptionContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  securityIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  securityOptionIcon: {
    fontSize: 20,
  },
  securityOptionText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "600",
    color: "#1e293b",
    flex: 1,
  },
  chevronRight: {
    fontSize: 20,
    color: "#94a3b8",
  },
  footer: {
    alignItems: "center",
    gap: 8,
  },
  helpLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  helpIcon: {
    fontSize: 16,
  },
  helpText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "600",
    color: "#3b82f6",
  },
  footerNote: {
    fontSize: 10,
    lineHeight: 12,
    color: "#64748b",
    textAlign: "center",
  },
});
