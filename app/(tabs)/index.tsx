import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";  // Import Link for navigation

export default function Welcome() {
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

      {/* Use Link for navigation */}
      <Link href="/login">
        <TouchableOpacity
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
      </Link>

      <Link href="/signup">
        <TouchableOpacity
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
      </Link>
    </View>
  );
}
