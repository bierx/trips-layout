import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { Card } from "./card.component";
import { ICard } from "./card.types";

export default {
    title: "Card",
    component: Card,
};
const Template: Story<ICard> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: "European Quest",
    description: "8 Countries, 21 days",
    emission: "810 kg CO₂e",
    rating: 4.7,
    image: "https://as1.ftcdn.net/v2/jpg/03/06/86/54/1000_F_306865414_nNA4AkSzoVmCxSxKo1q2nS7OSLIoOgV1.jpg",
};
