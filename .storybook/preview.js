import { addDecorator } from "@storybook/react";
import I18nProvider from "next-translate/I18nProvider";
import commonEN from "../locales/en/common.json";

import { ChakraProvider } from "@chakra-ui/react";

import * as nextImage from "next/image";

Object.defineProperty(nextImage, "default", {
    configurable: true,
    value: (props) => <img style={{position: 'absolute', inset: 0, objectFit: 'cover', height: '100%', width: "100%"}} {...props} />,
});

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
