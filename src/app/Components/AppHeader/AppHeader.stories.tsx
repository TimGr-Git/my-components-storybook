import AppHeader from "@/app/Components/AppHeader/AppHeader";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof AppHeader>;

const meta: Meta<StoryProps> = {
  argTypes: {
    type: {
      options: ["default", "minimal"],
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    type: "default",
  },
  render: ({ ...args }) => {
    return <AppHeader {...args}></AppHeader>;
  },
};

export const Minimal: Story = {
  tags: ["autodocs"],
  args: {
    type: "minimal",
  },
  render: ({ ...args }) => {
    return <AppHeader {...args}></AppHeader>;
  },
};
