export default function User({ user }) {
    const {
      image_url,
      followers,
      following,
      name,
      login,
      created_at,
    } = user;
  
    const createdDate = new Date(created_at);
  
    return (
      <div className="user">
        <div>
          <img src={image_url} className="image" alt="User" />
        </div>
        <div className="container">
          <a href={`https://facebook.com/${login}`}>{name || login}</a>
          <p>
            User joined on{" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}
          </p>
        </div>
        <div className="info">
          <div>
            <p>Followers</p>
            <p>{followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{following}</p>
          </div>
        </div>
      </div>
    );
  }