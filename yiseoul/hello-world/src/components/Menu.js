
export function Menu({link, name}) {
    return (
        <div>
            <a href={link} target={"_blank"}>{name}</a>
        </div>
    );
}
