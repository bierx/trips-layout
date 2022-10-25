import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { Emission } from "./emission.component";
import { IEmission } from "./emission.types";

export default {
    title: "Emission",
    component: Emission,
};
const Template: Story<IEmission> = (args) => <Emission {...args} />;

export const Default = Template.bind({});

Default.args = {
    emission: "810 kg CO₂e",
};
