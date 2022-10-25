import { addDecorator } from "@storybook/react";
import I18nProvider from "next-translate/I18nProvider";
import commonEN from "../locales/en/common.json";

import { ChakraProvider } from "@chakra-ui/react";

addDecorator((story) => {
    return (
        <I18nProvider
            lang={"en"}
            namespaces={{
                common: commonEN,
            }}
        >
            {story()}
        </I18nProvider>
    );
});

const withChakra = (StoryFn) => {
    return (
        <ChakraProvider>
            <div id="story-wrapper" style={{ minHeight: "100vh", backgroundColor: '#eee' }}>
                <StoryFn />
            </div>
        </ChakraProvider>
    );
};

addDecorator(withChakra);
