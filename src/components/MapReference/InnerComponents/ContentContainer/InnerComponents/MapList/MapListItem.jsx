export default function MapListItem(props){
    const itemClass = props.activeMap === props.mapId ? "map-list-item-active" : "map-list-item-inactive";

    return <li id={props.mapId} className={itemClass} onClick={props.handleCurrentMap}>{props.mapName}</li>
}
