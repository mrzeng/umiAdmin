import Link from 'umi/link';
import Svg from 'components/Svg';
import { selected, icon } from 'styles/components.less';

export function renderItems(list){
  let items = [];
  for(let item in list){
    items.push(
      <li key={item} className={ list[item].selected ? selected : undefined } >
        <Link to={`?lang=${list[item].value}`}>
          <Svg type={list[item].type} className={icon}> </Svg>
          {list[item].name}
        </Link>
      </li>
    )
  }
  return items
}


