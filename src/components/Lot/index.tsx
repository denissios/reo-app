import React, {FC} from 'react';
import cl from './Lot.module.css';
import {Text} from "../Text";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MoneyIcon from '@mui/icons-material/Money';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import {ILot} from "../../store/types/lot";
import {getDate} from "../../utils/utils";

interface LotProps {
    lot: ILot
}

const Lot: FC<LotProps> = ({lot}) => {
    return (
        <div className={cl.lotWrapper}>
            <div className={cl.col}>
                <Text variant={"small"} color={"grey"}>{lot.dealType}</Text>
                <div>
                    <Text variant={"small"} color={"secondary"} as={'div'}>№ {lot.number}</Text>
                    <Text variant={"small"} as={'div'} bold>{lot.item.category}</Text>
                    <Text variant={"small"} color={"grey"} as={'div'}>{lot.item.group}</Text>
                </div>
                <div className={cl.totalPriceWrapper}>
                    <Text variant={"body"} color={"secondary"} bold>{lot.item.totalPrice} &#8381;</Text>
                    <Text className={cl.totalPriceVAT} variant={"xs"} color={"grey"}>{lot.vatIncluded ? 'С' : 'Без'} НДС</Text>
                </div>
                <div className={cl.item}>
                    <LocationOnIcon className={cl.icon}/>
                    <Text variant={"xs"}>{lot.location ?? 'не определено'}</Text>
                </div>
            </div>

            <div className={cl.col}>
                <div>
                    <Text variant={"xs"} color={"grey"}>Количество</Text>
                    <div className={cl.item}>
                        <LayersOutlinedIcon className={cl.icon}/>
                        <Text variant={"small"}>{lot.item.quantity}</Text>
                    </div>
                </div>

                <div>
                    <Text variant={"xs"} color={"grey"}>Единицы измерения</Text>
                    <div className={cl.item}>
                        <ChangeHistoryIcon className={cl.icon}/>
                        <Text variant={"small"}>{lot.item.measurementUnit}</Text>
                    </div>
                </div>

                <div>
                    <Text variant={"xs"} color={"grey"}>Стоимость за единицу измерения</Text>
                    <div className={cl.item}>
                        <MoneyIcon className={cl.icon}/>
                        <Text variant={"small"}>{lot.item.price} &#8381;</Text>
                    </div>
                </div>
            </div>

            <div className={cl.col}>
                <div>
                    <Text variant={"xs"} color={"grey"}>Начало сбора предложений</Text>
                    <div className={cl.item}>
                        <CalendarTodayIcon className={cl.icon}/>
                        <Text variant={"small"}>{getDate(lot.beginDate)}</Text>
                    </div>
                </div>

                <div>
                    <Text variant={"xs"} color={"grey"}>Окончание сбора предложений</Text>
                    <div className={cl.item}>
                        <CalendarTodayIcon className={cl.icon}/>
                        <Text variant={"small"}>{getDate(lot.endDate)}</Text>
                    </div>
                </div>

                <div>
                    <Text variant={"xs"} color={"grey"}>Участников</Text>
                    <div className={cl.item}>
                        <PeopleAltIcon className={cl.icon}/>
                        <Text variant={"small"}>{lot.participants.count}</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lot;
