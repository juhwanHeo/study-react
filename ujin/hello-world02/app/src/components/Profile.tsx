import PostCard from "./postcard/PostCard";

interface Props {
    isChecked?: boolean;
    name?: string;
    age?: number;
    birthDay?: string;
}

export default function Profile({
    isChecked = false,
    name = "Default name",
    age = 0,
    birthDay = "No Data",
}: Props) {
    const caption = isChecked ? `나이: ${age}\n생년월일: ${birthDay}` : "";
    const post = {
        username: name,
        caption,
        imageUrl: "https://i.imgur.com/QIrZWGIs.jpg",
        timeAgo: "방금 전",
    };

    return (
        <>
            <PostCard post={post} />
        </>
    );
}
