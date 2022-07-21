import Progress from "../components/Progress";
export default function ProgramSkills() {
  return (
    <div className="container mt-auto mb-5">
      <div style={{ marginTop: "130px" }}>
        <p className="text-light h1 text-center">Mis hablidades de Desarrollo</p>
        <Progress width="80" title="Html" color="info" />
        <Progress width="50" title="CSS" color="info" />
        <Progress width="70" title="JavaScript" color="info" />
        <Progress width="70" title="Python" color="info" />
        <Progress width="80" title="Bootstrap" color="info" />
        <Progress width="60" title="React" color="info" />
        <Progress width="30" title="Java" color="warning" />
      </div>

    </div>
  );
}
