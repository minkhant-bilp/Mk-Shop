import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";

type TitleType = {
  setTitle: string;
  setSeeall: string;
};
const Title = ({ setTitle, setSeeall }: TitleType) => {
  return (
    <HStack className="justify-between px-4 mt-4">
      <Text className="font-medium text-lg ">{setTitle}</Text>
      <Text className="text-gray-300 underline">{setSeeall}</Text>
    </HStack>
  );
};

export default Title;
