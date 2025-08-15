import posts from "@data/posts.json";
import { formatDistanceToNowStrict } from "date-fns";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const post = posts[0];
  return (
    <View style={{ padding: 15 }}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Text style={{ fontWeight: "bold" }}>{post.group.name}</Text>
        <Text style={{ color: "gray" }}>
          {formatDistanceToNowStrict(new Date(post.createdAt))}
        </Text>
        <View style={{marginLeft: "auto"}}>
          <Text style={{ backgroundColor: "#0d469b", color: "white", paddingVertical: 2, paddingHorizontal: 7, borderRadius: 10, fontWeight: "bold" }}>Join</Text>
        </View>
      </View>
    </View>
  );
}
