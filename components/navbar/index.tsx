import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";

export const FoodBar = ({ value = 80 }: { value?: number }) => {
  return (
    <View style={styles.foodBarContainer}>
      <Text style={styles.foodEmoji}>🍖</Text>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${value}%` }]} />
      </View>
      <Text style={styles.foodValue}>{value}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    paddingTop: 50, // Para status bar
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  foodBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  foodEmoji: {
    fontSize: 24,
  },
  barBackground: {
    flex: 1,
    height: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 10,
  },
  foodValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    width: 45,
  },
});
