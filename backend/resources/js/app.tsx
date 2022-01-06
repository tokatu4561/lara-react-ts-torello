import React from "react";

import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { TargetList } from "./components/TargetList";
import { TaskCards } from "./components/TaskCards";

export function App() {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Switch>
                    <div className="min-h-screen bg-gray-300">
                        <div className="py-12">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 border-b border-gray-200">
                                        <Route path="/" exact>
                                            <TaskCards></TaskCards>
                                        </Route>
                                        <Route path="/target">
                                            <TargetList></TargetList>
                                        </Route>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
