import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AppIndex from "./appIndex";


class MainAppBody extends Component {
  render() {
    return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path='/' element={<AppIndex />} />
				</Routes>
			</Router>
		</React.Fragment>
    );
  }
}

export default MainAppBody;
