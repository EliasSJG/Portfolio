import { useEffect, useState } from "react";

export default function GitHubApi() {
  const [userName, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [allRepos, setAllRepos] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = "https://api.github.com/users/EliasSJG";

    let ignore = false;

    const fetchData = async () => {
      const result = await fetch(url);
      const data = await result.json();

      if (!ignore) {
        setName(data.login);
        setAvatar(data.avatar_url);
        setFollowers(data.followers);
        setFollowing(data.following);

        setAllRepos(data.public_repos);

        setLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <h3>{userName}</h3>
          <img src={avatar} alt="" />
          <h3>Stats:</h3>
          <p>Public Repos: {allRepos}</p>

          <p>Followers:{followers} </p>
          <p>Following:{following} </p>
        </>
      )}
    </div>
  );
}
