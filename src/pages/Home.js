import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, Text, StyleSheet,Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NetInfo from '@react-native-community/netinfo';
import fetchData from "../API/githubApi";
import RepositoryCard from "../components/RepositoryCard";

const Home = ({ navigation }) => {
  const [query, setQuery] = useState("react");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);

  // Check network connectivity
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      if (!state.isConnected) {
        Alert.alert(
          'No Internet Connection',
          'Please check your internet connection and try again.'
        );
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchRepositories = async () => {
      if (!isConnected) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const results = await fetchData(query);
        setRepositories(results);
      } catch (error) {
        Alert.alert(
          'Error',
          'Failed to fetch repositories. Please check your internet connection.'
        );
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      if (query) {
        fetchRepositories();
      } else {
        setRepositories([]);
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query, isConnected]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitHub Explorer</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search repositories..."
          value={query}
          onChangeText={setQuery}
        />
      </View>
      {!isConnected ? (
        <Text style={styles.noData}>No Internet Connection</Text>
      ) : loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : repositories.length === 0 ? (
        <Text style={styles.noData}>No Repositories Found</Text>
      ) : (
        <FlatList
          data={repositories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <RepositoryCard repository={item} navigation={navigation} />
          )}
          contentContainerStyle={styles.list}
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
  list: {
    paddingTop: 16,
  },
  loading: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
  },
  noData: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  }
});

export default Home;