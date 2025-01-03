import Button from "@/app/Components/Button/Button";
import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "default", "danger"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    buttonText: "Default",
    type: "default",
    size: "md",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const Primary: Story = {
  args: {
    buttonText: "Primary",
    type: "primary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const Danger: Story = {
  args: {
    buttonText: "Danger",
    type: "danger",
    size: "md",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
