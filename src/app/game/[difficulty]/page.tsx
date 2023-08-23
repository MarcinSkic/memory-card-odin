export default function Page({ params }: { params: { difficulty: string } }) {
    return <h2>Game {params.difficulty}</h2>;
}
