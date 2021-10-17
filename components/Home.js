import * as React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import CharacterCard from './CharacterCard';
import apiParams from '../config.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function Home() {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;
  // console.log(apiParams);

  React.useEffect(() => {
    axios.get(`${baseURL}/v1/public/characters`, {
      params: {
        ts,
        apikey,
        hash
      }
    })
      .then(response => setData(response.data.data.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data.data);




  return (
    <View>
              {isLoading 
        ? <ActivityIndicator size="large" color="#00ff00" /> 
        : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <CharacterCard 
              id={item.id}
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                name={item.name} />
            )}
          />
        )
      }
    </View>
  );
}
