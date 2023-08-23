import { supabase } from "@/modules/databaseClient";
import { cache } from "react";

export const revalidate = 300;

export const getVanillaBossImages = cache(async function () {
    /*const { data, error } = await supabase.storage.createBucket("tescik", {
        public: true,
    });
    console.log(data, error);*/
    const { data, error } = await supabase.storage
        .from("card-images")
        .list(undefined, { limit: 20 });
    console.log(data, error);

    // const { data: data2, error: error2 } = await supabase.storage.listBuckets();
    // console.log(data2, error2);

    return data;
});
