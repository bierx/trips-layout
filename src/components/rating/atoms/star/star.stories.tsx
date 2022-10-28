import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { Star } from "./star.component";
import { IStar } from "./star.types";

export default {
    title: "Star",
    component: Star,
};
const Template: Story<IStar> = (args) => <Star {...args} />;

export const Default = Template.bind({});

Default.args = {
    rating: 2.2,
    value: 3,
};
