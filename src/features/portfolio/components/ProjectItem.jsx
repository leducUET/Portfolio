export default function ProjectItem(props) {
  return (
    <>
      <a target="_blank" href={props.link} rel="noreferrer">
        <img src={props.srcImg} alt="" className="thumbnail" />
      </a>
      <h4>{props.title}</h4>
    </>
  );
}
