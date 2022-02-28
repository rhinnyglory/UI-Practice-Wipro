import MediaOverlay from "@enact/sandstone/MediaOverlay";
import css from "./MediaLayer.module.less"
const MediaLayer = (props) => {
  console.log(props.videos);
  let itemList = props.videos;
  return (
    <ul>
      {itemList.map((item, index) => {
        return <li key={index} className={css.listing}>
          <MediaOverlay
            caption="DTV 7-1"
            disabled={undefined}
            imageOverlay={undefined}
            loop={undefined}
            marqueeOn="focus"
            muted
            noAutoPlay={undefined}
            placeholder={undefined}
            progress={0.5}
            showProgress={undefined}
            subtitle="07:00 AM - 08:00 AM"
            text={undefined}
            textAlign="end"
            title="Program Name"
          >
            <source src={item.source} />
          </MediaOverlay>
        </li>
      })}
    </ul>

  );


};

export default MediaLayer;