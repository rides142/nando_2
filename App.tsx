import React from 'react';
import {FlatList, Text, View, StyleSheet, Image} from 'react-native';

export default function App() {
  const data = [
    {
      id: 1,
      name: 'Gambar1',
      image:
        'https://img.lovepik.com/background/20211101/medium/lovepik-mobile-wallpaper-with-cool-technology-background-image_400513746.jpg',
    },
    {
      id: 2,
      name: 'Gambar2',
      image: 'https://web.rupa.ai/wp-content/uploads/2023/07/aruna_gamer-and-korean-style_profile_picture-600x398.png',
    },
    {
      id: 3,
      name: 'Gambar3',
      image:
        'https://asset.kompas.com/crops/lEsvZBdbT7YtPgkqOYd1LxirPts=/0x0:780x520/750x500/data/photo/2019/07/12/2361846511.jpg ',
    },
    {
      id: 4,
      name: 'Gambar4',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiHP2WVxxSR6ZD3d9lqpUVyL1BD9-_KVdq2zqz8Tnjw&s',
    },
    {
      id: 5,
      name: 'Gambar5',
      image:
        'https://cdns.klimg.com/resized/1200x600/p/headline/30-foto-keren-yang-bisa-kamu-tiru-untuk-921022.jpg',
    },
    {
      id: 6,
      name: 'Gambar6',
      image:
        'https://e1.pxfuel.com/desktop-wallpaper/773/256/desktop-wallpaper-backgrounds-keren-background-keren.jpg ',
    },
    {
      id: 7,
      name: 'Gambar7',
      image:
        'https://www.akseleran.co.id/blog/wp-content/uploads/2022/10/download-1.png',
    },
    {
      id: 8,
      name: 'Gambar8',
      image:
        'https://i.pinimg.com/736x/22/4b/73/224b7368ae6a1eab4828aa20ce57600a.jpg',
    },
    {
      id: 9,
      name: 'Gambar9',
      image:
        'https://e7.pngegg.com/pngimages/804/655/png-clipart-blue-lion-illustration-drawing-art-cool-designs-symmetry-illustrator-thumbnail.png',
    },
    {
      id: 10,
      name: 'Gambar10',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-i7rJJ4WKe9RQ_aRbKCD_tkfxyPUynVkA7Cf4Qspckg&s',
    },
    {
      id: 11,
      name: 'Gambar11',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuet-TI4dvoQWt3ugqqEOR-TOO8PgaeO3ldIEMac8MsQ&s',
    },
    {
      id: 12,
      name: 'Gambar12',
      image:
        'https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oIEBABbBLOlQfCIAkDDKAIJeQYUtEgFgAHC9op~tplv-tej9nj120t-origin.webp',
    },
    {
      id: 13,
      name: 'Gambar13',
      image:
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
    },
    {
      id: 14,
      name: 'Gambar14',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGaG3I3fHP4qh4HEbR6zHEINX3ccj5nLCSamBzYVg0-Q&s',
    },
    {
      id: 15,
      name: 'Gambar15',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfKHjim4m2UuFpUgcsNdeqwOuj5CNUZKdW1sQo2wsHg&s',
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: {id: number; name: string; image: string};
  }) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.cardText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%', // Adjust card width to fit 2 columns
    // Adding shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Adding elevation for Android
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 20,
    marginTop: 10,
  },
});
