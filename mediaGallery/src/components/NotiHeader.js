import { $L } from "@enact/i18n/$L";
import Button from "@enact/sandstone/Button";
import { Header } from "@enact/sandstone/Panels";

const NotiHeader = (props) => {

    return(

        <>


        <Header
              {...props}
              title={$L("Media Player")}
              slotAfter={
                <>
            <Button  iconOnly icon="search" />
            <Button  iconOnly icon="verticalellipsis" />
                 </>
              }
            />
        
          
              </>
    );

};


export default NotiHeader;