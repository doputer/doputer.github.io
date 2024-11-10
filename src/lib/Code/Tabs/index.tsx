import { type BrightProps, Code, type Extension } from 'bright';

import { TabsContent, TabsList, TabsRoot } from '@/lib/Code/Tabs/client';

const Root: BrightProps['Root'] = (props) => {
  const { subProps, title } = props;
  const titles = subProps?.length ? subProps.map((subProp) => subProp.title) : [title];

  const Root = Code.Root as (props: BrightProps) => JSX.Element;

  return (
    <TabsRoot defaultValue={titles[0]}>
      <Root {...(props as BrightProps)} />
    </TabsRoot>
  );
};

const TitleBarContent: BrightProps['TitleBarContent'] = (props) => {
  const { title, subProps } = props;
  const titles = subProps?.length ? subProps.map((subProp) => subProp.title) : [title];

  return (
    <div className="flex h-8 w-full items-center justify-between">
      <div className="ml-2 flex gap-1">
        <div className="size-3 rounded-full bg-[#abb2bf] opacity-20" />
        <div className="size-3 rounded-full bg-[#abb2bf] opacity-20" />
        <div className="size-3 rounded-full bg-[#abb2bf] opacity-20" />
      </div>
      <div className="w-12" />
      <TabsList titles={titles as string[]} className="flex w-full">
        {titles.map((title) => (
          <div
            key={title}
            className="flex-1 cursor-pointer py-1 text-center opacity-80 aria-selected:bg-[#282c34] aria-selected:text-white"
          >
            {title}
          </div>
        ))}
      </TabsList>
      <div className="w-12" />
    </div>
  );
};

const Pre: BrightProps['Pre'] = (brightProps) => {
  const { subProps } = brightProps;
  const propsList = subProps?.length ? subProps : [brightProps];

  const Pre = Code.Pre as (props: BrightProps) => JSX.Element;

  return (
    <>
      {propsList.map((props) => (
        <TabsContent key={props.title} value={props.title as string}>
          <Pre {...(props as BrightProps)} />
        </TabsContent>
      ))}
    </>
  );
};

const tabs: Extension = {
  name: 'tabs',
  Root: Root,
  TitleBarContent: TitleBarContent,
  Pre: Pre,
};

export default tabs;
