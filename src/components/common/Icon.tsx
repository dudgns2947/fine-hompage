import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

// React Icons를 동적으로 import (SSR 이슈 해결)
const FaShieldAlt = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaShieldAlt })), { ssr: false });
const FaCar = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaCar })), { ssr: false });
const FaHeartbeat = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaHeartbeat })), { ssr: false });
const FaBuilding = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaBuilding })), { ssr: false });
const FaPiggyBank = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaPiggyBank })), { ssr: false });
const FaPhone = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaPhone })), { ssr: false });
const FaComments = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaComments })), { ssr: false });
const FaUsers = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaUsers })), { ssr: false });
const FaTrophy = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaTrophy })), { ssr: false });
const FaChartLine = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaChartLine })), { ssr: false });
const FaMapMarkerAlt = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaMapMarkerAlt })), { ssr: false });
const FaHandshake = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaHandshake })), { ssr: false });
const FaRoute = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaRoute })), { ssr: false });
const FaEnvelope = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaEnvelope })), { ssr: false });
const FaRocketchat = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaRocketchat })), { ssr: false });
const FaClock = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaClock })), { ssr: false });
const FaFacebookF = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaFacebookF })), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaInstagram })), { ssr: false });
const FaTwitter = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaTwitter })), { ssr: false });
const FaLinkedinIn = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaLinkedinIn })), { ssr: false });
const FaBriefcase = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaBriefcase })), { ssr: false });
const FaGraduationCap = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaGraduationCap })), { ssr: false });
const FaDatabase = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaDatabase })), { ssr: false });
const FaLaptop = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaLaptop })), { ssr: false });
const FaDesktop = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaDesktop })), { ssr: false });
const FaFileAlt = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaFileAlt })), { ssr: false });
const FaEdit = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaEdit })), { ssr: false });
const FaSearch = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaSearch })), { ssr: false });
const FaLightbulb = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaLightbulb })), { ssr: false });
const FaStar = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaStar })), { ssr: false });
const FaBullseye = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaBullseye })), { ssr: false });
const FaMobile = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaMobile })), { ssr: false });
const FaMoneyBillWave = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaMoneyBillWave })), { ssr: false });
const FaCreditCard = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaCreditCard })), { ssr: false });
const FaUniversity = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaUniversity })), { ssr: false });
const FaStore = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaStore })), { ssr: false });
const FaIndustry = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaIndustry })), { ssr: false });
const FaCity = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaCity })), { ssr: false });
const FaGlobe = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaGlobe })), { ssr: false });
const FaLink = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaLink })), { ssr: false });
const FaPaperclip = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaPaperclip })), { ssr: false });
const FaThumbtack = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaThumbtack })), { ssr: false });
const FaMap = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaMap })), { ssr: false });
const FaCompass = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaCompass })), { ssr: false });
const FaVideo = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaVideo })), { ssr: false });
const FaCamera = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaCamera })), { ssr: false });
const FaPlay = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaPlay })), { ssr: false });
const FaHistory = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaHistory })), { ssr: false });
const FaCalendarAlt = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaCalendarAlt })), { ssr: false });
const FaAward = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaAward })), { ssr: false });
const FaRocket = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaRocket })), { ssr: false });
const FaUserTie = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaUserTie })), { ssr: false });
const FaDirections = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaDirections })), { ssr: false });
const FaBus = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaBus })), { ssr: false });
const FaParking = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaParking })), { ssr: false });

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
`;

export type IconType = 
  | 'shield'
  | 'car'
  | 'heartbeat'
  | 'building'
  | 'piggybank'
  | 'phone'
  | 'comments'
  | 'users'
  | 'trophy'
  | 'chartline'
  | 'mapmarker'
  | 'handshake'
  | 'route'
  | 'envelope'
  | 'rocketchat'
  | 'clock'
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'linkedin'
  | 'briefcase'
  | 'graduation'
  | 'database'
  | 'laptop'
  | 'desktop'
  | 'file'
  | 'edit'
  | 'search'
  | 'lightbulb'
  | 'star'
  | 'bullseye'
  | 'mobile'
  | 'money'
  | 'creditcard'
  | 'university'
  | 'store'
  | 'industry'
  | 'city'
  | 'globe'
  | 'link'
  | 'paperclip'
  | 'thumbtack'
  | 'map'
  | 'compass'
  | 'video'
  | 'camera'
  | 'play'
  | 'history'
  | 'calendar'
  | 'award'
  | 'rocket'
  | 'usertie'
  | 'directions'
  | 'bus'
  | 'parking';

interface IconProps {
  type: IconType;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ type, className, style }) => {
  const getIcon = () => {
    switch (type) {
      case 'shield':
        return <FaShieldAlt />;
      case 'car':
        return <FaCar />;
      case 'heartbeat':
        return <FaHeartbeat />;
      case 'building':
        return <FaBuilding />;
      case 'piggybank':
        return <FaPiggyBank />;
      case 'phone':
        return <FaPhone />;
      case 'comments':
        return <FaComments />;
      case 'users':
        return <FaUsers />;
      case 'trophy':
        return <FaTrophy />;
      case 'chartline':
        return <FaChartLine />;
      case 'mapmarker':
        return <FaMapMarkerAlt />;
      case 'handshake':
        return <FaHandshake />;
      case 'route':
        return <FaRoute />;
      case 'envelope':
        return <FaEnvelope />;
      case 'rocketchat':
        return <FaRocketchat />;
      case 'clock':
        return <FaClock />;
      case 'facebook':
        return <FaFacebookF />;
      case 'instagram':
        return <FaInstagram />;
      case 'twitter':
        return <FaTwitter />;
      case 'linkedin':
        return <FaLinkedinIn />;
      case 'briefcase':
        return <FaBriefcase />;
      case 'graduation':
        return <FaGraduationCap />;
      case 'database':
        return <FaDatabase />;
      case 'laptop':
        return <FaLaptop />;
      case 'desktop':
        return <FaDesktop />;
      case 'file':
        return <FaFileAlt />;
      case 'edit':
        return <FaEdit />;
      case 'search':
        return <FaSearch />;
      case 'lightbulb':
        return <FaLightbulb />;
      case 'star':
        return <FaStar />;
      case 'bullseye':
        return <FaBullseye />;
      case 'mobile':
        return <FaMobile />;
      case 'money':
        return <FaMoneyBillWave />;
      case 'creditcard':
        return <FaCreditCard />;
      case 'university':
        return <FaUniversity />;
      case 'store':
        return <FaStore />;
      case 'industry':
        return <FaIndustry />;
      case 'city':
        return <FaCity />;
      case 'globe':
        return <FaGlobe />;
      case 'link':
        return <FaLink />;
      case 'paperclip':
        return <FaPaperclip />;
      case 'thumbtack':
        return <FaThumbtack />;
      case 'map':
        return <FaMap />;
      case 'compass':
        return <FaCompass />;
      case 'video':
        return <FaVideo />;
      case 'camera':
        return <FaCamera />;
      case 'play':
        return <FaPlay />;
      case 'history':
        return <FaHistory />;
      case 'calendar':
        return <FaCalendarAlt />;
      case 'award':
        return <FaAward />;
      case 'rocket':
        return <FaRocket />;
      case 'usertie':
        return <FaUserTie />;
      case 'directions':
        return <FaDirections />;
      case 'bus':
        return <FaBus />;
      case 'parking':
        return <FaParking />;
      default:
        return <FaShieldAlt />;
    }
  };

  return (
    <IconWrapper className={className} style={style}>
      {getIcon()}
    </IconWrapper>
  );
};

export default Icon;
