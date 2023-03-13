import { Component } from 'react';

export interface IPageProps {
  pageTitle: string;
}

class Page extends Component<IPageProps> {
  pageTitle: string;
  constructor(props: IPageProps) {
    super(props);
    this.pageTitle = props.pageTitle;
  }
  componentDidMount(): void {
    document.title = this.pageTitle;
  }
}

export default Page;
