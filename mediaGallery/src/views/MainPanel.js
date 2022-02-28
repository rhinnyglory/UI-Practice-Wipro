import { $L } from "@enact/i18n/$L";
import Button from "@enact/sandstone/Button";
import Dropdown from "@enact/sandstone/Dropdown";
import NotiHeader from "../components/NotiHeader";
import { SpotlightContainerDecorator } from "@enact/spotlight/SpotlightContainerDecorator";

import Media from "../components/Media";

const MainPanel = (props) => {
  const Container = SpotlightContainerDecorator(
    { enterTo: "default-element" },
    "div"
  );
  const filterItems = [
	{children: 'All', key: 'all'},
	{children: 'Home Connect', key: 'homeconnect'},
	{children: 'Sports Team Settings', key: 'sportsteamsettings'},
	{children: 'Media Discovery', key: 'mediadiscovery'},
	{children: 'Gallery', key: 'igallery'}
];
  
  return (
	  
  <Container>
      <NotiHeader />
      {
        <>
          <Button iconOnly icon="list" />
          {$L("Cruzer/")}

          <Dropdown direction="below" size="small" width="medium">{filterItems}</Dropdown>
        </>
      }
	  <hr></hr>
<Media/>
    </Container>
  );
};

// <Panel {...props}>
// <Header title="Media Playet" />

// </Panel>
//

export default MainPanel;
