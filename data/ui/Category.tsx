import { Image } from "expo-image";
import { Pressable, ScrollView, StyleSheet } from "react-native";

import { Text } from "@/components/ui/text";

import { Categorys } from "../type";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

interface ActiveType extends Categorys {
  actives: number;
  handle: (id: number) => void;
}
const Category = ({ id, name, image, actives, handle }: ActiveType) => {
  return (
    <Pressable className="items-center  gap-2" onPress={() => handle(id)}>
      <Image
        style={[styles.category, actives === id && styles.select]}
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    width: 56,
    height: 56,
    marginRight: 8,
    marginTop: 15,
    marginHorizontal: 10,
  },
  name: {
    fontWeight: "600",
    fontSize: 12,
    color: "gray",
  },
  select: {
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 32,
  },
});
