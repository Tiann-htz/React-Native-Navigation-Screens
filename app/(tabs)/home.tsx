import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Home() {
  const handleLogout = () => {
    router.replace("/login");
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: "#f0f8f0",
      padding: 20,
    }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
      }}>
        <Text style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "#2d5016",
        }}>
          My Plants
        </Text>
        
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: "#ff0000", 
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{
            color: "white",
            fontSize: 16,
            fontWeight: "600",
          }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: "#5cbd3e",
      }}>
        <Text style={{
          fontSize: 16,
          fontWeight: "600",
          color: "#333",
          marginBottom: 5,
        }}>
          Monstera Deliciosa
        </Text>
        <Text style={{ color: "#666", marginBottom: 10 }}>
          Last watered: 2 days ago
        </Text>
        <TouchableOpacity style={{
          backgroundColor: "#5cbd3e",
          padding: 8,
          borderRadius: 6,
          alignSelf: "flex-start",
        }}>
          <Text style={{ color: "white", fontSize: 12 }}>Water Now</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: "#ff9500",
      }}>
        <Text style={{
          fontSize: 16,
          fontWeight: "600",
          color: "#333",
          marginBottom: 5,
        }}>
          Snake Plant
        </Text>
        <Text style={{ color: "#666", marginBottom: 10 }}>
          Last watered: 1 week ago
        </Text>
        <TouchableOpacity style={{
          backgroundColor: "#ff9500",
          padding: 8,
          borderRadius: 6,
          alignSelf: "flex-start",
        }}>
          <Text style={{ color: "white", fontSize: 12 }}>Needs Water!</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{
        backgroundColor: "#5cbd3e",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
      }}>
        <Text style={{
          color: "white",
          fontSize: 16,
          fontWeight: "600",
        }}>
          Add New Plant
        </Text>
      </TouchableOpacity>
    </View>
  );
}
