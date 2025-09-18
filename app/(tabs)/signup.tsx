import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router"; 

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [secureConfirmText, setSecureConfirmText] = useState(true);

  const router = useRouter(); 

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };

  const toggleConfirmPasswordVisibility = () => {
    setSecureConfirmText(!secureConfirmText);
  };

  const handleSignup = () => {
    if (!email || !name || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    alert("Account created!");
    router.push("/home"); 
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f0f8f0", justifyContent: "center", paddingHorizontal: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 30, textAlign: "center", color: "#2d5016" }}>
        Create Account
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

      <TextInput
        style={{ height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 8, paddingHorizontal: 16, marginBottom: 16, backgroundColor: "#fff" }}
        placeholder="Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
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

      <View style={{ flexDirection: "row", alignItems: "center", borderColor: "#ccc", borderWidth: 1, borderRadius: 8, backgroundColor: "#fff", paddingHorizontal: 16, height: 50, marginBottom: 24 }}>
        <TextInput
          style={{ flex: 1, height: "100%" }}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={secureConfirmText}
        />
        <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
          <MaterialCommunityIcons name={secureConfirmText ? "eye" : "eye-off"} size={24} color="#888" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{ backgroundColor: "#5cbd3e", paddingVertical: 14, borderRadius: 8, alignItems: "center", marginBottom: 20 }}
        onPress={handleSignup}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>Sign Up</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ color: "#666" }}>Already have an account? </Text>
        <Link href="/login">
          <Text style={{ color: "#5cbd3e", fontWeight: "600" }}>Login</Text>
        </Link>
      </View>
    </View>
  );
}
