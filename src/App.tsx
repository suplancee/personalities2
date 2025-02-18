import { useState } from 'react';

export const contentcreatorList = [
  {
    "name": "MrBeast",
    "creator": "Jimmy Donaldson",
    "description": "MrBeast is famous for his large-scale philanthropic challenges, including giving away millions of dollars and supporting various causes.",
    "url": "https://www.rollingstone.com/wp-content/uploads/2022/04/R1363_MrBeast_1feature.jpg?w=1600&h=900&crop=1",
    "alt": "MrBeast smiling during a video shoot."
  },
  {
    "name": "PewDiePie",
    "creator": "Felix Kjellberg",
    "description": "PewDiePie, one of YouTube's most successful content creators, is known for his gaming commentary, reaction videos, and memes.",
    "url": "https://www.hollywoodreporter.com/wp-content/uploads/2017/02/pew_die_pie.jpg?w=1296&h=730&crop=1",
    "alt": "PewDiePie sitting in front of a camera during a recording."
  },
  {
    "name": "Charli D'Amelio",
    "creator": "Charli D'Amelio",
    "description": "Charli gained fame through viral dance videos on TikTok, becoming one of the platform’s biggest stars.",
    "url": "https://www.the-sun.com/wp-content/uploads/sites/6/2020/11/NINTCHDBPICT000594353203.jpg?strip=all&w=782"
  },
  {
    "name": "Emma Chamberlain",
    "creator": "Emma Chamberlain",
    "description": "Emma is known for her humorous, relatable vlogs and her unique take on everyday situations, becoming a prominent YouTube personality.",
    "url": "https://i.redd.it/how-do-you-feel-a-about-emmas-knew-photoshoot-for-stylist-v0-p7nid50eqb0e1.jpg?width=1080&format=pjpg&auto=webp&s=613e9321271dd0ed1f7fb838ec7e7a6253bf0e29",
    "alt": "Emma Chamberlain in a casual outfit, filming a vlog."
  },
  {
    "name": "Addison Rae",
    "creator": "Addison Rae",
    "description": "Addison Rae rose to fame on TikTok for her dancing and lip-syncing videos, later branching into acting and music.",
    "url": "https://i.dailymail.co.uk/1s/2024/08/16/17/88605989-13750935-Addison_Rae_barely_had_any_clothing_on_for_one_of_her_sexiest_sh-a-7_1723824270004.jpg",
    "alt": "Addison Rae smiling for a photo at an event."
  },
  {
    "name": "James Charles",
    "creator": "James Charles",
    "description": "James is a beauty YouTuber and makeup artist who gained popularity with his makeup tutorials and collaborations.",
    "url": "https://hips.hearstapps.com/hmg-prod/images/56573627-278218233118945-3728504299370419652-n-1557243800.jpg?crop=0.8333333333333334xw:1xh;center,top&resize=980:*",
    "alt": "James Charles applying makeup for a video tutorial."
  },
  {
    "name": "NikkieTutorials",
    "creator": "Nikkie de Jager",
    "description": "Nikkie is a Dutch beauty influencer known for her makeup tutorials, beauty reviews, and empowering messages.",
    "url": "https://www.usmagazine.com/wp-content/uploads/2020/04/Nikkie-de-Jager-Who-Is-NikkieTutorials.jpg?w=1000&quality=86&strip=all",
    "alt": "NikkieTutorials applying makeup in a tutorial."
  },
  {
    "name": "Lilly Singh",
    "creator": "Lilly Singh",
    "description": "Lilly, also known as Superwoman, is a comedian and YouTube personality famous for her comedic sketches and vlogs.",
    "url": "https://people.com/thmb/zfDZlyQFsAxKd98RwfFL8pfiGvw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(696x0:698x2)/lily-singh-1-2000-00ff534690514e6584d6a0a62bd2319f.jpg",
    "alt": "Lilly Singh smiling on stage during a comedy event."
  },
  {
    "name": "David Dobrik",
    "creator": "David Dobrik",
    "description": "David is known for his short, fast-paced vlogs that feature pranks, challenges, and collaborations with his group of friends, the Vlog Squad.",
    "url": "https://variety.com/wp-content/uploads/2021/02/Credit_-Jack-Dytrych-david-dobrik.jpg",
    "alt": "David Dobrik smiling while filming a vlog."
  },
  {
    "name": "Zach King",
    "creator": "Zach King",
    "description": "Zach is famous for his 'magic vines' and clever, short video edits that create the illusion of magic or impossible feats.",
    "url": "https://d.newsweek.com/en/full/1617862/zach-king.jpg?w=1600&h=1200&l=50&t=33&q=88&f=3ffb4d61dc57d1a980bb850d6000d2ed",
    "alt": "Zach King filming a viral magic trick video."
  }
]
;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < contentcreatorList.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    } else {
      setIndex(contentcreatorList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let contentcreator = contentcreatorList[index];
  return (
    <>
      <div className="container">
        <h2>
          <i>{contentcreator.name} </i>/
          <br /> {contentcreator.creator}
        </h2>
        <h3>({index + 1} of {contentcreatorList.length})</h3>
        <img src={contentcreator.url} alt={contentcreator.alt} />
        
     
        <div className="details-container">
          <button className="details" onClick={handleMoreClick}>
            {showMore ? 'Hide' : 'Show'} details
          </button>
          {showMore && <p>{contentcreator.description}</p>}
        </div>

        
        <div className="buttons">
          <button className="left" onClick={handlePrevClick}>
            Back
          </button>
          <button className="right" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>

      
      <div className="name">
        <p>(C-PEITEL3)Lance P. Chincuanco</p>
      </div>
    </>
  );
}
