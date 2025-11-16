import { Image } from "expo-image";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Pressable, StyleSheet, View } from "react-native";

import { Text } from "@/components/ui/text";
import { ProductType } from "../type";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
interface itemType extends ProductType {
  itemwidth: number;
}
const Products = ({
  id,
  categories_id,
  star,
  brand,
  price,
  users,
  discount,
  title,
  quantity,
  image,
  itemwidth,
}: itemType) => {
  const router = useRouter();
  return (
    <Pressable
      style={[styles.container, { width: itemwidth }]}
      onPress={() => router.navigate({ pathname: "/deali", params: { id } })}
    >
      <VStack className="">
        <Image
          style={styles.image}
          source={image}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <MaterialIcons
          name="favorite-border"
          size={20}
          color="red"
          style={{
            position: "absolute",
            right: 12,
            top: 12,
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: "#00000020",
            alignItems: "center",
          }}
        />
        <HStack style={{ padding: 4, alignItems: "center" }}>
          <Text style={styles.brand}>{brand}</Text>
          <Ionicons name="star-half-outline" size={15} color="red" />
          <Text style={styles.star}>{star}</Text>
          <Text style={styles.quantity}>({quantity})</Text>
        </HStack>
        <Text numberOfLines={1}>{title}</Text>
        <HStack style={{ marginVertical: 7 }}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
          {discount > 0 && (
            <Text style={styles.discount}>${discount.toFixed(2)}</Text>
          )}
        </HStack>
      </VStack>
    </Pressable>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 4,
  },
  brand: {
    fontWeight: "500",
    fontSize: 12,
    marginRight: 5,
  },
  star: {
    marginHorizontal: 10,
    fontWeight: "500",
  },
  quantity: {
    color: "gray",
    fontSize: 10,
  },
  price: {
    marginRight: 10,
    color: "green",
    fontWeight: "600",
  },
  discount: {
    textDecorationLine: "line-through",
    color: "red",
  },
});
