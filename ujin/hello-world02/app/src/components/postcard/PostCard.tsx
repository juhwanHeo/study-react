import './post-card.css';

type InstagramPostCardProps = {
  username?: string;
  avatarUrl?: string;
  imageUrl?: string;
  liked?: boolean;
  likes?: number;
  caption?: string;
  timeAgo?: string;
};

export default function PostCard({
  username = "",
  avatarUrl = "",
  imageUrl = "",
  liked = false,
  likes = 0,
  caption = "",
  timeAgo = "",
}: InstagramPostCardProps) {
  return (
    <article className="ig-post">
      {/* 헤더 */}
      <header className="ig-post-header">
        <div className="ig-user">
          <img src={avatarUrl} alt={username} className="ig-avatar" />
          <div className="ig-user-meta">
            <span className="ig-username">{username}</span>
            <span className="ig-subtitle">팔로잉</span>
          </div>
        </div>
        <button className="ig-icon-button" type="button">
          ⋮
        </button>
      </header>

      {/* 메인 이미지 */}
      <div className="ig-image-wrapper">
        <img src={imageUrl} alt={caption} className="ig-image" />
      </div>

      {/* 액션 */}
      <div className="ig-actions">
        <div className="ig-actions-left">
          <button className="ig-icon-button" type="button">
            {liked ? '❤️' : '🤍'}
          </button>
          <button className="ig-icon-button" type="button">
            💬
          </button>
          <button className="ig-icon-button" type="button">
            📤
          </button>
        </div>
        <button className="ig-icon-button" type="button">
          🔖
        </button>
      </div>

      {/* 본문 */}
      <div className="ig-post-body">
        <div className="ig-likes" style={{ background: 'red', }}>좋아요 {likes.toLocaleString()}개</div>
        <div className="ig-caption">
          <span className="ig-username">{username}</span>{' '}
          <span>{caption}</span>
        </div>
        <div className="ig-time">{timeAgo}</div>
      </div>
    </article>
  );
}