import { getVanillaBossImages } from "./database";

export default async function Page({
    params,
}: {
    params: { difficulty: string };
}) {
    console.log(await getVanillaBossImages());

    return <h2>Game {params.difficulty}</h2>;
}
