import { KZ_IMG_PATH, NFACTORIAL_IMG, ZHANS_IMG } from "../imagesHome";
import Tweet from "./Tweet";

export default function TweetsList() {

    const tweets = [
        {
            author:'Free KZ today',
            authorUserName:'@kz',
            img: KZ_IMG_PATH,
            content: 'Update your daily visiion',
            replies:200,
            retweets: 10000,
            likes:500

        },

        {
            author:'nFactorial',
            authorUserName:'@nfactorial',
            img: NFACTORIAL_IMG,
            content: 'YOUR FUTURE STARTS TODAY< WE BELIEVE IN YOU! NEXT incuabtor and StartaUP era is getting up!To stop the debugger in Chrome, you can either click the "stop" button (a blue square) in the upper right corner of the Developer Tools window or press the F8 key on your keyboard. Alternatively, you can close the Developer Tools window entirely by clicking the X button in the upper right corner. ',
            replies:600,
            retweets: 18000,
            likes:986

        },

        {
            author:'Zhanserik Kuli',
            authorUserName:'@JOJO',
            img: ZHANS_IMG,
            content: 'INCOME AND OUTCOME!',
            replies:800,
            retweets: 1100,
            likes:500

        }





    ]
  return  tweets.map((tweet, index)=><Tweet {...tweet} key={index}/>)
}
