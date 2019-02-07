import * as React from 'react';

export interface IProps {
    topContent?: React.ReactNode;
    leftContent?: React.ReactNode;
    centerContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    bottomContent?: React.ReactNode;
    border?: boolean;
}

export interface IState {}

class PageContainer extends React.Component<IProps, IState> {
    static defaultProps = {
        topContent: undefined,
        leftcontent: undefined,
        centerContent: undefined,
        rightContent: undefined,
        bottomContent: undefined,
        border: undefined
    };

    public render(): JSX.Element {
        return (
            <div className="container-fluid">
                {this.props.topContent && (
                    <div className="row border-black">
                        <div className="col">{this.props.topContent}</div>
                    </div>
                )}
                <div className="row border-black" style={{ minHeight: 700 }}>
                    {this.props.leftContent && <div className="col-2 border-red">{this.props.leftContent}</div>}
                    {this.props.centerContent && (
                        <div className="col">
                            <div className="text-center">{this.props.centerContent}</div>
                        </div>
                    )}
                    {this.props.rightContent && <div className="col-2 border-red">{this.props.rightContent}</div>}
                </div>
                {this.props.bottomContent && (
                    <div className="row border-black">
                        <div className="col-xs-1-12">{this.props.bottomContent}</div>
                    </div>
                )}
            </div>
        );
    }
}

export default PageContainer;
