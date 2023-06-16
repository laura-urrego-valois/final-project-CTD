import './Feature.css'
import { MdSportsHandball, MdOutlineEmojiFoodBeverage, MdPark } from 'react-icons/md';
import { GiMountainClimbing, GiJungle } from 'react-icons/gi';
import { FaCampground, FaNapster } from 'react-icons/fa';
import { GiBastet } from 'react-icons/gi';

export const icons = [
  { value: 1, icon: <GiJungle /> },
  { value: 2, icon: <GiBastet /> },
  { value: 3, icon: <MdSportsHandball /> },
  { value: 4, icon: <MdOutlineEmojiFoodBeverage /> },
  { value: 5, icon: <MdPark /> },
  { value: 6, icon: <GiMountainClimbing /> },
  { value: 7, icon: <FaCampground /> },
  { value: 8, icon: <FaNapster /> },
];

export const Feature = ({ feature }) => {


  function renderIcon(feature) {
    const icon = icons.find(icon => icon.value === feature);
    return icon ? icon.icon : '';

  }
  console.log("feature=>", feature)
  return (
    <section className='feature'>
      <h2 className='feature__title'>Experiencia que se ofrecen</h2>
      <ul className='feature__list'>
        {
          feature?.map((item, i) => (
            <li key={i} className='feature__item'>
              <span className='item-icon'>{renderIcon(item.id)}</span>
              <span className='item-description'>{item.featureName}</span>
            </li>

          ))
        }
      </ul>
    </section>
  )
}
