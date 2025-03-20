import { useFetchOptionData } from "./useFetchOptionData";

function SelectOptions({ items, optionId, setOptionId }) {
  return (
    <select value={ optionId } onChange={ (e) => {
      setOptionId(e.target.value);
    }}>
      { items.map(item =>
          <option key={ item.id } value={ item.id }>
            { item.name }
          </option>
      )}
    </select>
  );
}

export default function Page() {
  const [ planetList, planetId, setPlanetId ] = useFetchOptionData('/planets')
  const [ placeList, placeId, setPlaceId ] = useFetchOptionData(planetId ? `/planets/${planetId}/places` : null) ;

  return (
      <>
        <label>
          Pick a planet: &nbsp;
          <SelectOptions
            items = { planetList }
            optionId = { planetId }
            setOptionId = { setPlanetId }
          />
        </label>
        <label>
          Pick a place: &nbsp;
          <SelectOptions
            items = { placeList }
            optionId = { placeId }
            setOptionId = { setPlaceId }
          />
        </label>
        <br />
        <p>You are going to: { placeId || '???' } on { planetId || '???'} </p>
      </>
  );
}
