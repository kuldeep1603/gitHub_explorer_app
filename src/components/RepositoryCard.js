import React from "react";
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

const RepositoryCard = ({ repository, navigation }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((repo) => repo.id === repository.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(repository));
      Alert.alert("Removed", `${repository.name} has been removed from favorites.`);
    } else {
      dispatch(addFavorite(repository));
      Alert.alert("Added", `${repository.name} has been added to favorites.`);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('RepositoryDetails', { repository })}
    >
      <View style={styles.card}>
        <Image source={{ uri: repository.owner.avatar_url }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{repository.name}</Text>
          <Text style={styles.owner}>{repository.owner.login}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {repository.description}
          </Text>
          <View style={styles.stats}>
            <Text style={styles.statItem}>⭐ {repository.stargazers_count}</Text>
            <Text style={styles.statItem}>🍴 {repository.forks_count}</Text>
            <Text style={styles.statItem}>💻 {repository.language || "N/A"}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleFavorite}>
          <Text style={[styles.favorite, isFavorite && styles.favoriteSelected]}>
            {isFavorite ? "♥" : "♡"}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
    marginBottom: 2,
  },
  owner: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  stats: {
    flexDirection: "row",
    marginTop: 8,
  },
  statItem: {
    fontSize: 12,
    color: "#555",
    marginRight: 16,
  },
  favorite: {
    fontSize: 22,
    color: "#ff5252",
    marginLeft: 8,
  },
  favoriteSelected: {
    color: "#ff0000",
  },
});

export default RepositoryCard;