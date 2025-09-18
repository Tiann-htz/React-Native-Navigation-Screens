import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{
      flex: 1,
      backgroundColor: "#f0f8f0",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    }}>
      <Text style={{
        fontSize: 28,
        fontWeight: "bold",
        color: "#2d5016",
        marginBottom: 10,
      }}>
        Get Started
      </Text>
      
      <Text style={{
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 50,
      }}>
        Track your plants and watch them grow
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={{
          backgroundColor: "#5cbd3e",
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 8,
          marginBottom: 15,
          width: 200,
          alignItems: "center",
        }}
      >
        <Text style={{
          color: "white",
          fontSize: 16,
          fontWeight: "600",
        }}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/signup")}
        style={{
          backgroundColor: "transparent",
          borderWidth: 2,
          borderColor: "#5cbd3e",
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 8,
          width: 200,
          alignItems: "center",
        }}
      >
        <Text style={{
          color: "#5cbd3e",
          fontSize: 16,
          fontWeight: "600",
        }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
