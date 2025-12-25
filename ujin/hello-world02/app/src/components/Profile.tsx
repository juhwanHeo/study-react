import PostCard from "./postcard/PostCard";

export default function Profile() {
    let name: string = "Kim"
    let age: number = 24
    let birth_day: string = "2020/01/20"

    let usernameText = `이름: ${name}`
    let caption =  `
            나이: ${age}
            생년월일: ${birth_day}`           
    return (
        <>
            <PostCard
                username={usernameText}
                caption={caption}
                imageUrl="https://i.imgur.com/QIrZWGIs.jpg"
            />
        </>
    );
}