import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "../styles/Timeline.module.css";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
import tweet from "vue-tweet-embed/dist/tweet";

export default function tweettimeline() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // fetch()
    //   .then((data) => data.json())
    //   .then((data) => {
    //     setTweets(data);
    //   });
    setTweets([
      "933354946111705097",
      "933354946111705097",
      "933354946111705097",
      "933354946111705097",
      "933354946111705097",
      "933354946111705097",
      "933354946111705097",
      "933354946111705097",
      "933354946111705097",
    ]);
  });

  return (
    <div className={styles.bg}>
      <VerticalTimeline>
        {tweets.map((tweet) => {
          return (
            <div>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  border: "3px solid  rgb(255, 255, 255)",
                  background: "rgb(7, 7, 7)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "20px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <TwitterTweetEmbed tweetId={tweet} />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  border: "3px solid  rgb(255, 255, 255)",
                  background: "rgb(7, 7, 7)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "20px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <TwitterTweetEmbed tweetId={tweet} />
              </VerticalTimelineElement>
            </div>
          );
        })}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
}
