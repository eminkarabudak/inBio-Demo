import React, { useState } from 'react'
import HoverBox from '../../components/boxes/hoverBox';
import ModalBox from '../../components/boxes/modalBox';
import Modal from '../../components/Modal';
import Title from '../../components/title';
import { BiLike, BiChevronRight } from "react-icons/bi";

import "./portfolio.scss";

const Portfolio = () => {
  const [madalOpened, setMadalOpened] = useState(false)

  const onClose = () => {
    setMadalOpened(false)
  }

  const openModal = () => {
    setMadalOpened(true)
  }
  const modalData = [
    {
      img: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg",
      title: "App Design Development.",
      subtitle: 'Featured - Design',
      description: [
        {
          paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi."
        },
        {
          paragraph: "Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!"
        },
      ],
      button: [
        {
          buttonTitle: "Like This",
          buttonIcon: <BiLike />
        },
        {
          buttonTitle: "Like This",
          buttonIcon: <BiChevronRight />
        }
      ]

    }
  ]
  const data = [
    {
      img: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg",
      title: "devolepment",
      counter: "600",
      more: "The services provide for design "
    },
    {
      img: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-02.jpg",
      title: "aplication",
      counter: "750",
      more: "Mobile app landing design & app maintain "
    },
    {
      img: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-03.jpg",
      title: "devolepment",
      counter: "630",
      more: "Logo design creativity & Application  "
    },
    {
      img: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg",
      title: "devolepment",
      counter: "680",
      more: "Mobile app landing design & Services "
    },
    {
      img: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-05.jpg",
      title: "devolepment",
      counter: "707",
      more: "Design for tecnology & services "
    },
    {
      img: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-06.jpg",
      title: "devolepment",
      counter: "400",
      more: "App for tecnology & services "
    }
  ]
  return (
    <div className='portfolio section'>
      <Title title={'My Portfolio'} subtitle={'VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK'} center />
      <div className="portfolio__bottom">
        <HoverBox data={data} onClick={openModal} />
      </div>
      <Modal show={madalOpened} onClose={onClose}>
        <ModalBox data={modalData} onClose={onClose} />
      </Modal>

    </div>
  )
}

export default Portfolio