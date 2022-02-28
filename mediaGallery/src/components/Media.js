import MediaLayer from "./MediaLayer";
import { SpotlightContainerDecorator } from "@enact/spotlight/SpotlightContainerDecorator";
import { Panel } from "@enact/sandstone/Panels";

const Media = (props) => {
  const videosDetails = [{
    caption: "DTV 7-1",
    disabled: { undefined },
    imageOverlay: { undefined },
    loop: { undefined },
    marqueeOn: "focus",
    noAutoPlay: { undefined },
    placeholder: { undefined },
    progress: 0.5,
    showProgress: { undefined },
    subtitle: "07:00 AM - 08:00 AM",
    text: { undefined },
    textAlign: "end",
    title: "Program Name",
    source: "http://media.w3.org/2010/05/sintel/trailer.mp4"
  },
  {
    caption: "DTV 7-1",
    disabled: { undefined },
    imageOverlay: { undefined },
    loop: { undefined },
    marqueeOn: "focus",
    noAutoPlay: { undefined },
    placeholder: { undefined },
    progress: 0.5,
    showProgress: { undefined },
    subtitle: "07:00 AM - 08:00 AM",
    text: { undefined },
    textAlign: "end",
    title: "Program Name",
    source: "http://media.w3.org/2010/05/sintel/trailer.mp4"
  },
  {
    caption: "DTV 7-1",
    disabled: { undefined },
    imageOverlay: { undefined },
    loop: { undefined },
    marqueeOn: "focus",
    noAutoPlay: { undefined },
    placeholder: { undefined },
    progress: 0.5,
    showProgress: { undefined },
    subtitle: "07:00 AM - 08:00 AM",
    text: { undefined },
    textAlign: "end",
    title: "Program Name",
    source: "http://media.w3.org/2010/05/sintel/trailer.mp4"
  },
  {
    caption: "DTV 7-1",
    disabled: { undefined },
    imageOverlay: { undefined },
    loop: { undefined },
    marqueeOn: "focus",
    noAutoPlay: { undefined },
    placeholder: { undefined },
    progress: 0.5,
    showProgress: { undefined },
    subtitle: "07:00 AM - 08:00 AM",
    text: { undefined },
    textAlign: "end",
    title: "Program Name",
    source: "http://media.w3.org/2010/05/sintel/trailer.mp4"
  },
  {
    caption: "DTV 7-1",
    disabled: { undefined },
    imageOverlay: { undefined },
    loop: { undefined },
    marqueeOn: "focus",
    noAutoPlay: { undefined },
    placeholder: { undefined },
    progress: 0.5,
    showProgress: { undefined },
    subtitle: "07:00 AM - 08:00 AM",
    text: { undefined },
    textAlign: "end",
    title: "Program Name",
    source: "http://media.w3.org/2010/05/sintel/trailer.mp4"
  },
  {
    caption: "DTV 7-1",
    disabled: { undefined },
    imageOverlay: { undefined },
    loop: { undefined },
    marqueeOn: "focus",
    noAutoPlay: { undefined },
    placeholder: { undefined },
    progress: 0.5,
    showProgress: { undefined },
    subtitle: "07:00 AM - 08:00 AM",
    text: { undefined },
    textAlign: "end",
    title: "Program Name",
    source: "http://media.w3.org/2010/05/sintel/trailer.mp4"
  },
  {
    caption: "DTV 7-1",
    disabled: { undefined },
    imageOverlay: { undefined },
    loop: { undefined },
    marqueeOn: "focus",
    noAutoPlay: { undefined },
    placeholder: { undefined },
    progress: 0.5,
    showProgress: { undefined },
    subtitle: "07:00 AM - 08:00 AM",
    text: { undefined },
    textAlign: "end",
    title: "Program Name",
    source: "http://media.w3.org/2010/05/sintel/trailer.mp4"
  }];
  const Container = SpotlightContainerDecorator(
    { enterTo: "default-element" },
    "div"
  );

  return (
    <MediaLayer videos={videosDetails} />
  );
};

export default Media;
