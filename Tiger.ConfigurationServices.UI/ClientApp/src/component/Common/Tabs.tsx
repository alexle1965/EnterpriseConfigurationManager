import * as React from 'react';

// context allows state to be shared between components
// ITabContext will contain the active tab name and the
// reference to the handleClick function
interface ITabsContext {
    activeName?: string;
    handleTabClick?: (name: string) => void;
}

interface ITabProps {
    name: string; // unique name for the tab
    initialActive?: boolean;
}

interface IProps {
    // headings: string[];
}
interface IState {
    activeName: string;
}

// pass an empty object to createContext since we do not have a default context
// this is why both of the context properties are optional
const TabsContext = React.createContext<ITabsContext>({});

export class Tabs extends React.Component<IProps, IState> {
    // The Tab component is defined as a static property on the Tabs component
    // this means Tab lives on the actual Tabs class and not in its instances
    // reference Tab in JSX using Tabs.Tab
    public static Tab: React.SFC<ITabProps> = props => (
        <TabsContext.Consumer>
            {(context: ITabsContext) => {
                const activeName = context.activeName ? context.activeName : props.initialActive ? props.name : '';
                const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
                    if (context.handleTabClick) {
                        context.handleTabClick(props.name);
                    }
                };
                return (
                    <li className="nav-item" onClick={handleClick}>
                        <a className={props.name === activeName ? 'nav-link active' : 'nav-link'}>{props.children}</a>
                    </li>
                );
            }}
        </TabsContext.Consumer>
    );

    // The context provider fills the context with values. The provider takes in a
    // property called "value" and set this to an object containing active tab and click event
    public render(): JSX.Element {
        return (
            <TabsContext.Provider value={{ activeName: this.state ? this.state.activeName : '', handleTabClick: this.handleTabClick }}>
                <ul className="nav nav-tabs">{this.props.children}</ul>
            </TabsContext.Provider>
        );
    } // render

    private handleTabClick = (name: string) => {
        this.setState({ activeName: name });
    };
}
