import React from "react";
import { Flex } from "@chakra-ui/react";
import useSWR from "swr";
import { Spinner } from "@chakra-ui/react";

import { fetcher } from "src/lib/fetcher";
import { Trips } from "@components/trips";

const Home: React.FC = () => {
    const { data, error } = useSWR("/api/trips", fetcher<{ trips: Trips[] }>);

    if (error) return <div>Failed to load</div>;
    if (!data)
        return (
            <Flex padding="50px" justify="center">
                <Spinner />
            </Flex>
        );

    return <Trips trips={data.trips} />;
};

export default Home;
