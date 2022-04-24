import React from 'react'
import ClientsBox from '../../components/boxes/clientsBox';
import Tab from '../../components/tab';
import Title from '../../components/title';

import './clients.scss';

const Clients = () => {

  const data = [
    {
      src: 'https://rainbowit.net/html/inbio/assets/images/client/png/client1.png',
      clientName: "john due"
    },
    {
      src: 'https://rainbowit.net/html/inbio/assets/images/client/png/client2.png',
      clientName: "Smiths Marth"
    },
    {
      src: 'https://rainbowit.net/html/inbio/assets/images/client/png/client3.png',
      clientName: "Add Dev"
    },
    {
      src: 'https://rainbowit.net/html/inbio/assets/images/client/png/client4.png',
      clientName: "Adon Smith"
    },
    {
      src: 'https://rainbowit.net/html/inbio/assets/images/client/png/client5.png',
      clientName: "Smitha Mila"
    },
    {
      src: 'https://rainbowit.net/html/inbio/assets/images/client/png/client1.png',
      clientName: "jannat"
    },
    {
      src: 'https://rainbowit.net/html/inbio/assets/images/client/png/client1.png',
      clientName: "john due"
    },
    {
      src: 'https://rainbowit.net/html/inbio/assets/images/client/png/client2.png',
      clientName: "Smiths Marth"
    },
    {
      src: 'https://rainbowit.net/html/inbio/assets/images/client/png/client3.png',
      clientName: "Add Dev"
    },
    {
      src: 'https://rainbowit.net/html/inbio/assets/images/client/png/client4.png',
      clientName: "Adon Smith"
    },
    {
      src: 'https://rainbowit.net/html/inbio/assets/images/client/png/client5.png',
      clientName: "Smitha Mila"
    },
    {
      src: 'https://rainbowit.net/html/inbio/assets/images/client/png/client1.png',
      clientName: "jannat"
    },
  ]


  const tabData = [
    {
      title: "JavaScript",
      content: <ClientsBox data={data} />
    },
    {
      title: "Product Design",
      content: <ClientsBox data={data} />

    },
    {
      title: "Wordpress",
      content: <ClientsBox data={data} />

    },
    {
      title: "HTML to React",
      content: <ClientsBox data={data} />

    },
    {
      title: "React To Laravel",
      content: <ClientsBox data={data} />

    },
    {
      title: "Python",
      content: <ClientsBox data={data} />

    }
  ]
  return (
    <div className='clients section'>
      <div className="clients__top">
        <Title title="Awesome Clients" subtitle="POPULAR CLIENTS" />

      </div>
      <div className="clients__bottom">
        <Tab active={0} className="clients__box" column sticky>
          {tabData.map((item, index) => {
            return (
              <Tab.TabPane key={index} tab={item.title} >
                {item.content}
              </Tab.TabPane>
            )
          })}
        </Tab>
      </div>
    </div>
  )
}

export default Clients