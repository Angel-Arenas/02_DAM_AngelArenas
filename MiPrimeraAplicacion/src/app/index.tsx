import { StatusBar } from "expo-status-bar";
import {
    Alert,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

// Función para obtener la fecha de hoy formateada
function getFechaHoy() {
  const fecha = new Date();
  const opciones: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return fecha.toLocaleDateString("es-ES", opciones);
}

export default function HomeScreen() {
  const handlePress = () => {
    if (Platform.OS === "web") {
      // Para web usamos alert nativo del navegador
      alert("¡Saludos!\n\n¡Hola! Soy Angel Arenas Pillaca 😎");
    } else {
      // Para iOS y Android usamos Alert de React Native
      Alert.alert("¡Saludos!", "¡Hola! Soy Angel Arenas Pillaca 😎");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" hidden={true} />
      <View style={styles.card}>
        <Text style={styles.saludo}>👋 Hola Mundo</Text>

        <Text style={styles.nombre}>Angel Arenas Pillaca</Text>

        <Text style={styles.carrera}>🎓 Carrera: Análisis de Sistemas</Text>

        <Text style={styles.ciclo}>📚 Ciclo: 4to</Text>

        <Text style={styles.emoji}>😎</Text>

        <Text style={styles.fecha}>📅 {getFechaHoy()}</Text>

        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPressed,
          ]}
          onPress={handlePress}
        >
          <Text style={styles.botonTexto}>Saludar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e", // Fondo oscuro azulado
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#16213e",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
    // Sombra para iOS
    shadowColor: "#00d9ff",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // Sombra para Android
    elevation: 10,
  },
  saludo: {
    fontSize: 32, // Tamaño grande
    color: "#00d9ff", // Azul cyan
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  nombre: {
    fontSize: 24, // Tamaño medio
    color: "#f9f9f9", // Blanco suave
    fontWeight: "600",
    marginBottom: 15,
    textAlign: "center",
  },
  carrera: {
    fontSize: 18, // Tamaño pequeño
    color: "#ffa500", // Naranja
    marginBottom: 10,
    textAlign: "center",
  },
  ciclo: {
    fontSize: 18,
    color: "#9d4edd", // Púrpura
    marginBottom: 10,
    textAlign: "center",
  },
  emoji: {
    fontSize: 48,
    marginVertical: 15,
  },
  fecha: {
    fontSize: 16,
    color: "#4caf50", // Verde
    marginBottom: 25,
    textAlign: "center",
  },
  boton: {
    backgroundColor: "#00d9ff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
  },
  botonPressed: {
    backgroundColor: "#00a8cc",
    transform: [{ scale: 0.95 }],
  },
  botonTexto: {
    color: "#1a1a2e",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
