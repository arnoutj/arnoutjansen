import getStaticFileUrl from "utils/getStaticFileUrl";
import BlurImage from "./BlurImage";

export default function Background() {
  return (
    <div className="-z-10">
      <BlurImage
        alt="Copyright 2023 © Arnout Jansen"
        src={getStaticFileUrl("background-1440.png")}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC/SURBVHgBjU85DoNAEPOy4UbQINEG+AEvzBt5AC0l4hCHODbrqVLG0kgz4/HaqxzHMb7voygK9H2Puq4xTROWZcE4jsjzHHEc4+V5HpqmgRWAPWvfdyGNMUjTFGEY4pVlGc7zlAVfoaiqKnRdB2JdV5RlCWWVhsQwDFBKIUkSOWTfti2CIMC2bdDP83xocRyHLK/rEoJg1vu+Mc8zlJ0Nc0VRJGWFcsQYruvKIcs6KEMbrbXY/YIz3fgHMm/8gS8aRFgdPOYSbgAAAABJRU5ErkJggg=="
        quality={50}
        sizes="100vw"
        priority
      />
    </div>
  );
}
