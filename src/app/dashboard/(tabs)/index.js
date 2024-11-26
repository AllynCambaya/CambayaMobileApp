import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Image
          source={require('../../../assets/logo2.png')} 
          style={styles.headerLogo}
          resizeMode="contain"
        />
      </View>

    
      <ScrollView style={styles.feed}>
    
        <View style={styles.post}>
          <Text style={styles.username}>@soibulma</Text>
          <Text style={styles.content}>
            I respect someone who is vocal. Tell me why you're into me. Tell me why I pissed you off & tell me how I can fix it. Tell me everything. Talk.
          </Text>
          <View style={styles.stats}>
            <Icon name="heart" size={16} color="#8899A6" />
            <Text style={styles.statText}>80</Text>
            <Icon name="retweet" size={16} color="#8899A6" />
            <Text style={styles.statText}>8.7K</Text>
            <Icon name="eye" size={16} color="#8899A6" />
            <Text style={styles.statText}>28K</Text>
          </View>
        </View>

    
        <View style={styles.post}>
          <Text style={styles.username}>@demonyokajane</Text>
          <Text style={styles.content}>
            oh diba matatapos na naman tong november na walang magandang nangyayari sa buhay ko putanginangyan.
          </Text>
          <View style={styles.stats}>
            <Icon name="heart" size={16} color="#8899A6" />
            <Text style={styles.statText}>1.4K</Text>
            <Icon name="retweet" size={16} color="#8899A6" />
            <Text style={styles.statText}>1.5K</Text>
            <Icon name="eye" size={16} color="#8899A6" />
            <Text style={styles.statText}>51.3K</Text>
          </View>
        </View>

      
        <View style={styles.post}>
          <Text style={styles.username}>@user123</Text>
          <Text style={styles.content}>Life is too short to wait for the perfect moment. Just go for it!</Text>
          <View style={styles.stats}>
            <Icon name="heart" size={16} color="#8899A6" />
            <Text style={styles.statText}>150</Text>
            <Icon name="retweet" size={16} color="#8899A6" />
            <Text style={styles.statText}>2.3K</Text>
            <Icon name="eye" size={16} color="#8899A6" />
            <Text style={styles.statText}>4.5K</Text>
          </View>
        </View>

      
        <View style={styles.post}>
          <Text style={styles.username}>@creativegenius</Text>
          <Text style={styles.content}>Just finished my first digital painting, and I'm so proud of myself! 🎨</Text>
          <View style={styles.stats}>
            <Icon name="heart" size={16} color="#8899A6" />
            <Text style={styles.statText}>500</Text>
            <Icon name="retweet" size={16} color="#8899A6" />
            <Text style={styles.statText}>800</Text>
            <Icon name="eye" size={16} color="#8899A6" />
            <Text style={styles.statText}>1.2K</Text>
          </View>
        </View>

   
        <View style={styles.post}>
          <Text style={styles.username}>@traveldiaries</Text>
          <Text style={styles.content}>The mountains are calling, and I must go. 🌄</Text>
          <View style={styles.stats}>
            <Icon name="heart" size={16} color="#8899A6" />
            <Text style={styles.statText}>900</Text>
            <Icon name="retweet" size={16} color="#8899A6" />
            <Text style={styles.statText}>300</Text>
            <Icon name="eye" size={16} color="#8899A6" />
            <Text style={styles.statText}>5K</Text>
          </View>
        </View>

        <View style={styles.post}>
          <Text style={styles.username}>@techguru</Text>
          <Text style={styles.content}>Excited about the new tech launch next week! 🚀</Text>
          <View style={styles.stats}>
            <Icon name="heart" size={16} color="#8899A6" />
            <Text style={styles.statText}>2.4K</Text>
            <Icon name="retweet" size={16} color="#8899A6" />
            <Text style={styles.statText}>3.2K</Text>
            <Icon name="eye" size={16} color="#8899A6" />
            <Text style={styles.statText}>10K</Text>
          </View>
        </View>

   
        <View style={styles.post}>
          <Text style={styles.username}>@foodie</Text>
          <Text style={styles.content}>Breakfast today was heavenly. Pancakes and coffee, anyone? ☕🥞</Text>
          <View style={styles.stats}>
            <Icon name="heart" size={16} color="#8899A6" />
            <Text style={styles.statText}>1K</Text>
            <Icon name="retweet" size={16} color="#8899A6" />
            <Text style={styles.statText}>1.1K</Text>
            <Icon name="eye" size={16} color="#8899A6" />
            <Text style={styles.statText}>2.3K</Text>
          </View>
        </View>

  
        <View style={styles.post}>
          <Text style={styles.username}>@bookworm</Text>
          <Text style={styles.content}>Started reading "Atomic Habits" today. Loving it so far! 📚</Text>
          <View style={styles.stats}>
            <Icon name="heart" size={16} color="#8899A6" />
            <Text style={styles.statText}>400</Text>
            <Icon name="retweet" size={16} color="#8899A6" />
            <Text style={styles.statText}>250</Text>
            <Icon name="eye" size={16} color="#8899A6" />
            <Text style={styles.statText}>1.5K</Text>
          </View>
        </View>

        <View style={styles.post}>
          <Text style={styles.username}>@fitnessfanatic</Text>
          <Text style={styles.content}>Morning workout done! Feeling great and ready to conquer the day! 💪</Text>
          <View style={styles.stats}>
            <Icon name="heart" size={16} color="#8899A6" />
            <Text style={styles.statText}>700</Text>
            <Icon name="retweet" size={16} color="#8899A6" />
            <Text style={styles.statText}>450</Text>
            <Icon name="eye" size={16} color="#8899A6" />
            <Text style={styles.statText}>3.6K</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#22303C',
  },
  headerLogo: {
    width: 50,
    height: 50,
  },
  feed: {
    flex: 1,
    paddingHorizontal: 15,
  },
  post: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#22303C',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1DA1F2',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    color: '#E1E8ED',
    lineHeight: 22,
  },
  stats: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  statText: {
    fontSize: 14,
    color: '#8899A6',
    marginLeft: 5,
  },
});

export default Home;
