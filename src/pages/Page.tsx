import { Component } from 'react';

export interface IPageProps {
  pageTitle?: string;
  setCurrentPageTitle?: (newTitle: string) => void;
}

class Page extends Component<IPageProps> {
  pageTitle: string;
  constructor(props: IPageProps) {
    super(props);
    const { pageTitle } = this.props;
    this.pageTitle = pageTitle || 'untitled';
  }
  componentDidMount(): void {
    const { setCurrentPageTitle } = this.props;
    if (setCurrentPageTitle) setCurrentPageTitle(this.pageTitle);
  }
}

export default Page;
