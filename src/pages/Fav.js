import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.emptyMessage}>No favorite repositories yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.owner.avatar_url }} style={styles.avatar} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.owner}>{item.owner.login}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  emptyMessage: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,

  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  owner: {
    fontSize: 14,
    color: "#555",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
});

export default FavoritesList;
