import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RepositoryDetails = ({ route }) => {
  const { repository } = route.params;

  const handleOpenGithub = () => {
    Linking.openURL(repository.html_url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: repository.owner.avatar_url }} 
          style={styles.avatar}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>{repository.name}</Text>
          <Text style={styles.owner}>by {repository.owner.login}</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Ionicons name="star" size={20} color="#FFD700" />
          <Text style={styles.statValue}>{repository.stargazers_count}</Text>
          <Text style={styles.statLabel}>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="git-network" size={20} color="#4CAF50" />
          <Text style={styles.statValue}>{repository.forks_count}</Text>
          <Text style={styles.statLabel}>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="eye" size={20} color="#2196F3" />
          <Text style={styles.statValue}>{repository.watchers_count}</Text>
          <Text style={styles.statLabel}>Watchers</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          {repository.description || 'No description available'}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Details</Text>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Language:</Text>
          <Text style={styles.detailValue}>{repository.language || 'Not specified'}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Created:</Text>
          <Text style={styles.detailValue}>
            {new Date(repository.created_at).toLocaleDateString()}
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Last Updated:</Text>
          <Text style={styles.detailValue}>
            {new Date(repository.updated_at).toLocaleDateString()}
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Open Issues:</Text>
          <Text style={styles.detailValue}>{repository.open_issues_count}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.githubButton} 
        onPress={handleOpenGithub}
      >
        <Ionicons name="logo-github" size={20} color="#fff" />
        <Text style={styles.githubButtonText}>View on GitHub</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerText: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  owner: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 16,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  detailItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 16,
    color: '#666',
    width: 120,
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  githubButton: {
    flexDirection: 'row',
    backgroundColor: '#24292e',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  githubButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default RepositoryDetails;