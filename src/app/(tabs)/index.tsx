import posts from "@data/posts.json";
import { Text } from "react-native";

export default function HomeScreen() {
  const post = posts[0];
  return <Text>{post.title}</Text>;
}
