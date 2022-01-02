import React from "react";

import * as ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { TaskCards } from "./components/TaskCards";

export function App() {
    return (
        <div>
            <Header></Header>
            <div className="min-h-screen bg-gray-300">
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 border-b border-gray-200">
                                <TaskCards></TaskCards>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
