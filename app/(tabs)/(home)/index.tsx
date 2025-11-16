import { Image } from "expo-image";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Zocial from "@expo/vector-icons/Zocial";
import { FlashList } from "@shopify/flash-list";

import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Button, ButtonText } from "@/components/ui/button";

import Title from "@/data/ui/Title";
import Category from "@/data/ui/Category";
import { categories, products } from "@/data";
import Products from "@/data/ui/Products";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Index = () => {
  const [active, SetActive] = useState(1);
  const width = Dimensions.get("screen").width;
  const numColum = width < 600 ? 2 : width < 768 ? 3 : 4;
  const itemWidth = width / numColum - 30;
  const handleSlect = (id: number) => {
    SetActive(id);
  };
  return (
    <SafeAreaView>
      <HStack className="px-4 mt-4 items-center justify-between">
        <Image
          style={styles.image}
          source={require("@/constants/shopimage/kmoney.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />

        <Zocial name="cart" size={24} color="black" className="left-36" />
        <Badge
          className=" h-[22px] w-[22px] bg-red-600 rounded-full -mt-4 right-3  "
          variant="solid"
        >
          <BadgeText className="text-white">2</BadgeText>
        </Badge>
      </HStack>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require("@/constants/shopimage/banner6.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />

        <Title setTitle="Shop by Category" setSeeall="See All" />
        <FlashList
          data={categories}
          renderItem={({ item }) => (
            <Category {...item} handle={handleSlect} actives={active} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Title setTitle="Recomend For You" setSeeall="See All" />
        <FlashList
          numColumns={numColum}
          data={products}
          renderItem={({ item }) => (
            <Products {...item} itemwidth={itemWidth} />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
        />
        <View style={{ height: 150 }}>
          <Button
            variant="solid"
            size="md"
            action="primary"
            className="md"
            style={{ marginHorizontal: "auto" }}
          >
            <ButtonText>Show All</ButtonText>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  image: {
    width: 65,
    height: 65,
  },
  banner: {
    width: "100%",
    aspectRatio: 16 / 8,
  },
});
