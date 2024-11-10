'use client';

import { Children, type PropsWithChildren } from 'react';

import { Content, List, Root, TabsTrigger } from '@radix-ui/react-tabs';

interface TabsRootProps {
  defaultValue?: string;
}

const TabsRoot = ({ defaultValue, children }: PropsWithChildren<TabsRootProps>) => {
  return <Root defaultValue={defaultValue}>{children}</Root>;
};

interface TabsListProps {
  titles: string[];
  className: string;
}

const TabsList = ({ titles, className, children }: PropsWithChildren<TabsListProps>) => {
  const tabs = Children.toArray(children);

  return (
    <List className={className}>
      {titles.map((title, i) => (
        <TabsTrigger asChild key={title} value={title}>
          {tabs[i]}
        </TabsTrigger>
      ))}
    </List>
  );
};

interface TabsContentProps {
  value: string;
}

const TabsContent = (props: PropsWithChildren<TabsContentProps>) => {
  return <Content {...props} />;
};

export { TabsRoot, TabsList, TabsContent };
