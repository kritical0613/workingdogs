import HEADER from "../configs/menu.json"
import DiscordIcon from "../assets/svg/discord";
import OpenSeaIcon from "../assets/svg/opensea";
import InstagramIcon from "../assets/svg/instagram";
import TwitterIcon from "../assets/svg/twitter";
import TiktokIcon from "../assets/svg/tiktok";
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
  const MENU_ITEMS = HEADER["menu-item"];

  const location = useLocation();
  const navigate = useNavigate()

  const handleGoSection = (index: string) => {

    if (location.pathname === '/') {
      const element: any = document.getElementById(index)
      const topPos = element.offsetTop
      let headerHeight: any = document.getElementById('header')?.offsetHeight
      if (headerHeight === 0) headerHeight = 70
      window.scrollTo({
        top: topPos,
        left: 100,
        behavior: 'smooth'
      })
    } else {
      navigate('/#' + index)
    }
  }

  return (
    <div className="flex justify-between px-16 py-1 mt-[-6605px] bg-[#0B0B0B]/30 backdrop-blur-[4px]" id="header">
      <div className="menu-logo ml-[80px] text-[20px] font-['Trouble_Font'] font-[400] tracking-[2px] leading-[24px]"><a href="/">WorkingDogs</a></div>
      <div className="menu-items hidden lg:flex justify-items-center space-x-[30px] items-center">
        {
          MENU_ITEMS && MENU_ITEMS.length > 0 && MENU_ITEMS.map((item) => 
            <div key={ item } onClick={() => handleGoSection(item.toLowerCase())} className="cursor-pointer hover:text-[#0094FF]"><div key={item} className="text-[16px] font-['Chakra Petch'] leading-[22px]">{item}</div></div>
          )
        }
      </div>
      <div className="flex justify-items-center space-x-[15px] mr-[80px] items-center">
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="discord" href={ HEADER["discord-link"] }><DiscordIcon/></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="opensea" href={ HEADER["opensea-link"] }><OpenSeaIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="instagram" href={ HEADER["instagram-link"] }><InstagramIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="twitter" href={ HEADER["twitter-link"] }><TwitterIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="tiktok" href={ HEADER["tiktok-link"] }><TiktokIcon /></a>
      </div>
    </div>
  )
}

export default Header;