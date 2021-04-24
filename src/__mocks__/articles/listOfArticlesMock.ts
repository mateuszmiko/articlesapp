import { ArticlesResponseType } from '../../types/types';

export const listOfArticlesResponseMock: ArticlesResponseType = {
  status: 'ok',
  totalResults: 9787,
  articles: [
    {
      source: {
        id: null,
        name: 'Carandbike.com',
      },
      author: 'Reuters',
      title: "Baidu's Auto Venture To Invest $7.7 Billion Into Smart Cars Over Next Five Years",
      description:
        'Jidu plans to release a new model every year or every one-and-a-half years after the first one is launched, Xia said, without offering a sales target. It plans to hire 2,500 to 3,000 people over the next two to three years, including 400 to 500 software engin…',
      url: 'https://www.carandbike.com/news/baidus-auto-venture-to-invest-7-7-billion-into-smart-cars-over-next-five-years-2420174',
      urlToImage: 'https://c.ndtvimg.com/2021-02/bfs8699s_baidu-_625x300_09_February_21.jpg',
      publishedAt: '2021-04-23T07:29:44Z',
      content:
        "Jidu Auto, the electric vehicle venture between China's tech giant Baidu and Chinese automaker Geely, aims to pour 50 billion yuan ($7.70 billion) into making smart cars over the next five years, Jid… [+2345 chars]",
    },
    {
      source: {
        id: 'business-insider',
        name: 'Business Insider',
      },
      author: 'jerb@insider.com (Jordan Parker Erb)',
      title: '10 things in tech you need to know today',
      description:
        "SpaceX is launching astronauts into space today, and Amazon's senior execs are leaving in droves: Here are 10 things in tech you need to know.",
      url: 'https://www.businessinsider.com/10-things-in-tech-spacex-astronauts-launch-space-today-2021-4',
      urlToImage: 'https://i.insider.com/6081d7641041d50019f2db64?width=1200&format=jpeg',
      publishedAt: '2021-04-23T07:24:32Z',
      content:
        "Good morning and welcome to 10 Things in Tech. If this was forwarded to you, sign up here.\r\nLet's get started.\r\n1. SpaceX is launching four astronauts into Earth's orbit today. From liftoff early thi… [+2821 chars]",
    },
    {
      source: {
        id: null,
        name: "Paul Tan's Automotive News",
      },
      author: 'Gerard Lye',
      title: 'Tesla Autopilot continues to operate without anyone in the driver’s seat, Consumer Reports demonstrates',
      description:
        'Tesla fell under renewed scrutiny again when a 2019 Model S struck a tree in Texas on April 17, killing the vehicle’s two occupants. According to authorities, neither of the men were behind the wheel […]\nThe post Tesla Autopilot continues to operate without a…',
      url: 'https://paultan.org/2021/04/23/tesla-autopilot-continues-to-operate-without-anyone-in-the-drivers-seat-consumer-reports-demonstrates/',
      urlToImage: 'https://s1.paultan.org/image/2021/04/Consumer-Reports-Tesla-Model-Y-no-driver-test-3-1200x628.jpg',
      publishedAt: '2021-04-23T07:21:38Z',
      content:
        'Tesla fell under renewed scrutiny again when a 2019 Model S struck a tree in Texas on April 17, killing the vehicles two occupants. According to authorities, neither of the men were behind the wheel … [+3946 chars]',
    },
  ],
};
