import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { Rating } from "./rating.component";
import { IRating } from "./rating.types";

export default {
    title: "Rating",
    component: Rating,
};
const Template: Story<IRating> = (args) => <Rating {...args} />;

export const Default = Template.bind({});

Default.args = {
    rating: 3.2,
};
