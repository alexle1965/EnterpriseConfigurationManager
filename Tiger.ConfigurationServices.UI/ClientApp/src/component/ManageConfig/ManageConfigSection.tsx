import * as React from 'react';
import { EditButton } from '../Common/EditButton';
import { Options } from '../Common/Options';
import { ViewBy } from '../../models/Enum';

interface IProps {}

interface IState {
    checked: boolean;
    viewBy: string;
}

export class ManageConfigSection extends React.Component<IProps, IState> {
    public state: IState = {
        checked: false,
        viewBy: ViewBy.Config
    };
    public render(): JSX.Element {
        return (
            <>
                <div>
                    <h5>Manage Configuration Section</h5>
                </div>
                <div className="container-fluid">
                    <div className="row my-2 border-red">
                        <div className="col-2 text-center border-black">
                            <EditButton editMode={this.ToggleEdit} />
                        </div>
                        <div className="col-3 text-center border-black">
                            <Options option={this.state.viewBy} selectedView={this.ToggleView} />
                        </div>
                        <div className="col text-left border-black">configSelections</div>
                    </div>
                    <div className="row border-red">
                        <div className="col-4 border-black" />
                        <div className="col-4 text-center border-black">loading</div>
                        <div className="col-4 border-black" />
                    </div>
                    <div className="row border-red">
                        <div className="col  border-black">configResult</div>
                    </div>
                </div>
                <div>
                    <h6>Edit Mode is: {this.state.checked ? 'on' : 'off'}</h6>
                    <h6>View by: {this.state.viewBy}</h6>
                </div>
            </>
        );
    } // render

    private ToggleEdit = () => {
        this.setState({ checked: !this.state.checked });
    };

    private ToggleView = (view: string) => {
        this.setState({ viewBy: view });
    };
}
