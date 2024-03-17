export default function Apptitle(props){
    const {title = "Box Office", subtitle = "are you looking for a movie or an actor?"} = props;
    return <div>
    <h1>{title}</h1>
    <p>{subtitle}</p>
</div>
}