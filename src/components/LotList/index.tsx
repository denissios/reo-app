import React, {FC} from 'react';
import {useGetLotsQuery} from "../../store/api/lot";
import {Text} from "../Text";
import Lot from "../Lot";

const LotList: FC = () => {
    const {data: lots, isLoading: isLoadingLots, error: errorLots} = useGetLotsQuery();

    if(errorLots) {
        return (
            <Text className='info__text' variant={"body"} as={'div'}>Ошибка</Text>
        )
    }

    return (
        <div className='lots__wrapper'>
            {isLoadingLots
                ?   <Text className='info__text' variant={"body"} as={'div'}>Загрузка...</Text>
                :   lots?.length
                    ?   lots.map(l =>
                            <Lot key={l.id} lot={l}/>
                        )
                    :   <Text className='info__text' variant={"body"} as={'div'}>Ничего не найдено</Text>
            }
        </div>
    );
};

export default LotList;
