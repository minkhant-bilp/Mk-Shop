import { Button, ButtonText } from "@/components/ui/button";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  useToast,
} from "@/components/ui/toast";

const Deali = () => {
  const toast = useToast();
  const [toastId, setToastId] = useState(0);
  const handleToast = () => {
    if (!toast.isActive(toastId.toString())) {
      showNewToast();
    }
  };
  const showNewToast = () => {
    const newId = Math.random();
    setToastId(newId);
    toast.show({
      id: newId.toString(),
      placement: "top",
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast nativeID={uniqueToastId} action="muted" variant="solid">
            <ToastTitle>Hello!</ToastTitle>
            <ToastDescription>
              This is a customized toast message.
            </ToastDescription>
          </Toast>
        );
      },
    });
  };
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <Button>
        <ButtonText
          onPress={() => {
            handleToast();
          }}
        >
          Click Me
        </ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export default Deali;

{
  /*import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import Zocial from "@expo/vector-icons/Zocial";
import { Badge, BadgeText } from "@/components/ui/badge";
import ViewPager from "@/data/ui/Pagerview";
import { VStack } from "@/components/ui/vstack";
import { products } from "@/data";
import { Button, ButtonText } from "@/components/ui/button";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  useToast,
} from "@/components/ui/toast";
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
} from "@/components/ui/actionsheet";

import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";

const Deali = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((prev) => prev.id === +id);

  const [less, setLess] = useState(false);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(false);
  const toast = useToast();
  const [toastId, setToastId] = useState(0);
  const handleToast = (title: string, description: string) => {
    if (!toast.isActive(toastId.toString())) {
      showNewToast(title, description);
    }
  };
  const showNewToast = (title: string, description: string) => {
    const newId = Math.random();
    setToastId(newId);
    toast.show({
      id: newId.toString(),
      placement: "bottom",
      duration: 2000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast nativeID={uniqueToastId} action="muted" variant="solid">
            <ToastTitle>{title}</ToastTitle>
            <ToastDescription>{description}</ToastDescription>
          </Toast>
        );
      },
    });
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HStack className="mx-2 mt-4 justify-between items-center">
        <Ionicons
          name="arrow-back"
          size={30}
          color="black"
          onPress={() => router.navigate("/(tabs)/(home)")}
        />
        <Zocial name="cart" size={24} color="black" className="left-40" />
        <Badge
          className=" h-[22px] w-[22px] bg-red-600 rounded-full -mt-4 right-7   "
          variant="solid"
        >
          <BadgeText className="text-white ">2</BadgeText>
        </Badge>
      </HStack>
      <ScrollView>
        <ViewPager />
        <VStack className="px-4">
          <HStack className="mt-3 justify-between ">
            <HStack className=" items-center gap-2">
              <Text className="font-medium text-gray-400">
                {product?.brand}
              </Text>
              <Ionicons name="star-half-outline" size={15} color="red" />
              <Text className="font-bold">{product?.star}</Text>
              <Text size="sm" className="text-gray-400 ">
                ({product?.quantity})
              </Text>
            </HStack>
            <MaterialIcons name="favorite" size={24} color="red" />
          </HStack>
          <VStack>
            <Text size="lg" className="font-semibold ">
              {product?.title}
            </Text>
            <HStack className="gap-3 mt-2">
              <Text bold className="text-green-500 ">
                ${product?.price}
              </Text>
              {product?.discount! > 0 && (
                <Text className="line-through text-gray-500">
                  ${product?.discount}
                </Text>
              )}
            </HStack>
          </VStack>

          <VStack>
            <Text numberOfLines={less ? 3 : undefined}>
              {product?.description}
            </Text>
            <Pressable onPress={() => setLess((p) => !p)}>
              <Text>{less ? "See Less" : "See More"}</Text>
            </Pressable>
          </VStack>
          <VStack className="">
            <VStack className="mt-4 ">
              <Text bold size="lg" className="text-[#1b1b86]">
                Choose Color
              </Text>

              <CheckboxGroup
                value={color}
                onChange={(keys) => {
                  setColor(keys);
                }}
              >
                <HStack space="lg" className="mt-3">
                  {product?.colors.map((item) => (
                    <Checkbox
                      value={item.name}
                      key={item.id}
                      isDisabled={!item.stock}
                    >
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>{item.name}</CheckboxLabel>
                    </Checkbox>
                  ))}
                </HStack>
              </CheckboxGroup>
            </VStack>
            <VStack className="mt-4 ">
              <Text bold size="lg" className="text-[#1b1b86]">
                Choose Size
              </Text>

              <CheckboxGroup
                value={size}
                onChange={(keys) => {
                  setSize(keys);
                }}
              >
                <HStack space="lg" className="mt-3">
                  {product?.sizes.map((item) => (
                    <Checkbox
                      value={item.name}
                      key={item.id}
                      isDisabled={!item.stock}
                    >
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>{item.name}</CheckboxLabel>
                    </Checkbox>
                  ))}
                </HStack>
              </CheckboxGroup>
            </VStack>
          </VStack>
          <View className=" self-start">
            <Button
              size="lg"
              className=" mx-auto bg-sky-500  mt-3 rounded-lg"
              onPress={() => {
                if (color.length > 0 && size.length > 0) {
                  setShowActionsheet(true);
                  return;
                }
                const title = `Must chose ${
                  color.length === 0 ? "color -" : ""
                } ${size.length === 0 ? "size -" : ""}`;
                const description = "This is much be choose";
                handleToast(title, description);
              }}
            >
              <ButtonText>Set Quantily</ButtonText>
            </Button>
          </View>
        </VStack>
      </ScrollView>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Edit Message</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Mark Unread</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Remind Me</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem isDisabled onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </SafeAreaView>
  );
};

export default Deali;*/
}
