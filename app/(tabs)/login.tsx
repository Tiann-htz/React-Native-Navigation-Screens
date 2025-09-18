import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const router = useRouter(); 

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Logged in!");
    router.push("/home"); 
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f0f8f0", justifyContent: "center", paddingHorizontal: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 30, textAlign: "center", color: "#2d5016" }}>
        Login
      </Text>

      <TextInput
        style={{ height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 8, paddingHorizontal: 16, marginBottom: 16, backgroundColor: "#fff" }}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={{ flexDirection: "row", alignItems: "center", borderColor: "#ccc", borderWidth: 1, borderRadius: 8, backgroundColor: "#fff", paddingHorizontal: 16, height: 50, marginBottom: 16 }}>
        <TextInput
          style={{ flex: 1, height: "100%" }}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureText}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <MaterialCommunityIcons name={secureText ? "eye" : "eye-off"} size={24} color="#888" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{ backgroundColor: "#5cbd3e", paddingVertical: 14, borderRadius: 8, alignItems: "center", marginBottom: 20 }}
        onPress={handleLogin}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>Login</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ color: "#666" }}>Don&apos;t have an account? </Text>
        <Link href="/signup">
          <Text style={{ color: "#5cbd3e", fontWeight: "600" }}>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
}
