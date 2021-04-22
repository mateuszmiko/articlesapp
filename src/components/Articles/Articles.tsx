import './articles.scss';
import ArticlesList from '../SharedComponents/ArticlesList/ArticlesList';
import FlatButton from '../Utils/FlatButton/FlatButton';
import React from 'react';

// TODO: delete articlesList
const articlesList = {
  status: 'ok',
  totalResults: 10,
  articles: [
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Catherine Shu',
      title: "SmartNews' COVID-19 vaccine alert reaches 1M users in Japan a week after launching",
      description:
        'SmartNews announced today that its tools to help Japanese users find nearby COVID-19 vaccine bookings have reached more than one million users just a week after launching. The news discovery unicorn decided to create Vaccine Alert and Map features for its Jap…',
      url: 'https://techcrunch.com/2021/04/22/smartnews-covid-19-vaccine-alert-reaches-1m-users-in-japan-a-week-after-launching/',
      urlToImage: 'https://techcrunch.com/wp-content/uploads/2021/04/ワクチンチャンネル.png?w=711',
      publishedAt: '2021-04-22T08:42:31Z',
      content:
        'SmartNews’ Vaccine Alert and Map features for its Japanese app\r\nSmartNews announced today that its tools to help Japanese users find nearby COVID-19 vaccine bookings have reached more than one millio… [+2087 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Ingrid Lunden',
      title: 'Bux, a European Robinhood, raises $80M to expand its neo-broker platform',
      description:
        'A new wave of apps have democratized the concept of investing, bringing the concept of trading stocks and currencies to a wider pool of users who can use these platforms to make incremental, or much larger, bets in the hopes of growing their money at a time w…',
      url: 'https://techcrunch.com/2021/04/22/bux-a-european-robinhood-raises-80m-to-expand-its-neo-broker-platform/',
      urlToImage: 'https://techcrunch.com/wp-content/uploads/2019/09/BUX-Zero-Hero.jpg?w=711',
      publishedAt: '2021-04-22T08:19:22Z',
      content:
        'A new wave of apps have democratized the concept of investing, bringing the concept of trading stocks and currencies to a wider pool of users who can use these platforms to make incremental, or much … [+5517 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Tage Kene-Okafor',
      title: 'Founders Factory Africa partners with Small Foundation to invest in 18 agritech startups',
      description:
        'Johannesburg-based investment company Founders Factory Africa (FFA) today announced a partnership with Small Foundation that will see it select 18 agritech startups for an acceleration and incubation program. Small Foundation is a Dublin-based philanthropic o…',
      url: 'https://techcrunch.com/2021/04/22/founders-factory-africa-partners-with-small-foundation-to-invest-in-18-agritech-startups/',
      urlToImage: 'https://techcrunch.com/wp-content/uploads/2021/04/FFA-Image-1.jpeg?w=600',
      publishedAt: '2021-04-22T08:00:45Z',
      content:
        'Johannesburg-based investment company Founders Factory Africa (FFA) today announced a partnership with Small Foundation that will see it select 18 agritech startups for an acceleration and incubation… [+5199 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Devin Coldewey',
      title: "Satellite Vu's $5M seed round will fuel the launch of its thermal imaging satellites",
      description:
        'Earth imaging is an increasingly crowded space, but Satellite Vu is taking a different approach by focusing on infrared and heat emissions, which are crucial for industry and climate change monitoring. Fresh from TechCrunch’s Startup Battlefield, the company …',
      url: 'https://techcrunch.com/2021/04/22/satellite-vus-5m-seed-round-will-fuel-the-launch-of-its-thermal-imaging-satellites/',
      urlToImage: 'https://techcrunch.com/wp-content/uploads/2021/04/satvu3.jpg?w=711',
      publishedAt: '2021-04-22T07:31:14Z',
      content:
        'Earth imaging is an increasingly crowded space, but Satellite Vu is taking a different approach by focusing on infrared and heat emissions, which are crucial for industry and climate change monitorin… [+4955 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Ingrid Lunden',
      title: 'Dutch startup Go Sharing raises $60M to expand beyond e-mopeds and into new markets',
      description:
        'On-demand access to electric mopeds — the small, motorised scooters that you sit on, not kick — has been a small but persistent part of the multi-modal transportation mix on offer to people in cities these days. Today, a startup out of The Netherlands is anno…',
      url: 'https://techcrunch.com/2021/04/22/dutch-startup-go-sharing-raises-60m-to-expand-beyond-e-mopeds-and-into-new-markets/',
      urlToImage: 'https://techcrunch.com/wp-content/uploads/2021/04/GO-Sharing_02.jpg?w=638',
      publishedAt: '2021-04-22T07:00:41Z',
      content:
        'On-demand access to electric mopeds — the small, motorised scooters that you sit on, not kick — has been a small but persistent part of the multi-modal transportation mix on offer to people in cities… [+4618 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Mike Butcher',
      title: "9 investors, execs and founders discuss Zagreb's startup potential",
      description:
        '"With the COVID-19 pandemic, it\'s easier to land remote jobs and stay in Zagreb, which will positively impact the Croatian startup ecosystem."',
      url: 'https://techcrunch.com/2021/04/21/9-investors-execs-and-founders-discuss-zagrebs-startup-potential/',
      urlToImage: 'https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-513919973.jpg?w=600',
      publishedAt: '2021-04-22T05:55:58Z',
      content:
        'Startups may not spring to mind when speaking about the beautiful country of Croatia. Indeed, the country is most popular as a tourist destination, and given that tourism accounted for about 20% of i… [+15508 chars]',
    },
  ],
};

const Articles = (): JSX.Element => {
  const { articles } = articlesList;

  return (
    <div className="articles">
      <div className="articles__content content">
        <ArticlesList articles={articles} />
        <FlatButton className="content__show-more-button show-more-button" height="48px" name="show-more" reverse width="330px">
          Show More
        </FlatButton>
      </div>
    </div>
  );
};

export default Articles;
