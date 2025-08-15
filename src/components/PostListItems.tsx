import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { formatDistanceToNowStrict } from "date-fns";
import { StyleSheet, Text, View } from "react-native";
import { Post } from "src/types";

export default function PostListItems({ post }: { post: Post }) {
  return (
    <View>
      <View style={{ padding: 15 }}>
        {/* POST HEADER */}
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={{ fontWeight: "bold" }}>{post.group.name}</Text>
          <Text style={{ color: "gray" }}>
            {formatDistanceToNowStrict(new Date(post.created_at))}
          </Text>
          <View style={{ marginLeft: "auto" }}>
            <Text style={styles.joinButtonText}>Join</Text>
          </View>
        </View>
        {/* CONTENT */}
        <Text style={{ fontWeight: "bold", fontSize: 17, letterSpacing: 0.5 }}>
          {post.title}
        </Text>
        {/* <Image source={{ uri: post.image }} /> */}
        {!post.image && post.description && (
          <Text numberOfLines={4}>{post.description}</Text>
        )}

        {/* FOOTER */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={[{ flexDirection: "row" }, styles.iconBox]}>
              <MaterialCommunityIcons
                name={"arrow-up-bold-outline"}
                size={19}
                color={"black"}
              />
              <Text
                style={{
                  fontWeight: "500",
                  marginLeft: 5,
                  alignSelf: "center",
                }}
              >
                {post.upvotes}
              </Text>
              <View
                style={{
                  width: 1,
                  backgroundColor: "#D4D4D4",
                  height: 14,
                  marginHorizontal: 7,
                  alignSelf: "center",
                }}
              />
              <MaterialCommunityIcons
                name={"arrow-down-bold-outline"}
                size={19}
                color={"black"}
              />
            </View>
            <View style={[{ flexDirection: "row" }, styles.iconBox]}>
              <MaterialCommunityIcons
                name="comment-outline"
                size={19}
                color="black"
              />
              <Text
                style={{
                  fontWeight: "500",
                  marginLeft: 5,
                  alignSelf: "center",
                }}
              >
                {post.nr_of_comments}
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: "auto", flexDirection: "row", gap: 10 }}>
            <MaterialCommunityIcons
              name="trophy-outline"
              size={19}
              color="black"
              style={styles.iconBox}
            />
            <MaterialCommunityIcons
              name="share-outline"
              size={19}
              color="black"
              style={styles.iconBox}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  joinButtonText: {
    backgroundColor: "#0d469b",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
    fontWeight: "bold",
  },
  iconBox: {
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
