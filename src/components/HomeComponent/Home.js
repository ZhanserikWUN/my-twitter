import NewTweet from "./NewTweet/indexnewtweet";
import TweetsList from "./TweetList/indexTwList";

export default function Home() {
  return (
    <div className = "w-50 ml-3 mx-3">
      <h3>Home</h3>
      <NewTweet/>
      <TweetsList/>
    </div>
  );
}
