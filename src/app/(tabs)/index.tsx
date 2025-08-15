import posts from "@data/posts.json";
import { FlatList } from "react-native";
import PostListItems from "src/components/PostListItems";

export default function HomeScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItems post={item} />}
    />
  );
}
