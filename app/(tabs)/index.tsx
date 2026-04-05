import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <Text style={styles.greeting}>Good morning 👋</Text>
      <Text style={styles.name}>Diwash Bohara</Text>

      {/* Cards */}
      <View style={styles.cardRow}>
        <View style={[styles.card, styles.revenue]}>
          <Text style={styles.cardTitle}>Revenue</Text>
          <Text style={styles.cardValue}>Rs 90K</Text>
          <Text style={styles.cardSub}>↑ 10% this month</Text>
        </View>

        <View style={[styles.card, styles.orders]}>
          <Text style={styles.cardTitle}>Orders</Text>
          <Text style={styles.cardValue}>410</Text>
          <Text style={styles.cardSub}>↑ 9% this week</Text>
        </View>
      </View>

      {/* Sales */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sales Performance</Text>

        <View style={styles.performanceCard}>
          <Text style={styles.goal}>Monthly Goal</Text>
          <Text style={styles.amount}>Rs 1,50,000</Text>
          <Text style={styles.success}>↑ 95% of target</Text>

          <View style={styles.barContainer}>
            <Text>New Customers</Text>
            <View style={styles.barBg}>
              <View style={[styles.barFill, { width: "75%" }]} />
            </View>
          </View>

          <View style={styles.barContainer}>
            <Text>Returning</Text>
            <View style={styles.barBg}>
              <View style={[styles.barFill, { width: "60%", backgroundColor: "#ff6b6b" }]} />
            </View>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f6fa",
  },
  greeting: {
    fontSize: 16,
    color: "gray",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    width: "48%",
    padding: 15,
    borderRadius: 15,
  },
  revenue: {
    backgroundColor: "#6c63ff",
  },
  orders: {
    backgroundColor: "#ff6b6b",
  },
  cardTitle: {
    color: "#fff",
  },
  cardValue: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardSub: {
    color: "#fff",
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  performanceCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
  },
  goal: {
    color: "gray",
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  success: {
    color: "green",
    marginBottom: 10,
  },
  barContainer: {
    marginVertical: 8,
  },
  barBg: {
    height: 8,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  barFill: {
    height: 8,
    backgroundColor: "#6c63ff",
    borderRadius: 10,
  },
});