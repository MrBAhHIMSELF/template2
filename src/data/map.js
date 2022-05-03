npm install @googlemaps/react-wrapper
import { Wrapper, Status } from "@googlemaps/react-wrapper";
const render = (status: Status) => {
  return <h1>{status}</h1>;
};

<Wrapper apiKey={"https://data.cityofnewyork.us/resource/rsgh-akpg.json?$$app_token=3yrs3ewX0YYxoOpKKiJ0aWIxW"} render={render}>
  <YourComponent/>
</Wrapper>
const Map: React.FC<{}> = () => {};

const ref = React.useRef(null);
const [map, setMap] = React.useState();
=
React.useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
  }
}, [ref, map]);

return <div ref={ref} />