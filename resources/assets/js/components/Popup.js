import React, { Component } from "react";
import ReactDom from "react-dom";
import update from "react-addons-update";

var UsaStates = require("usa-states").UsaStates;
var countries = require("country-list")();

export default class Popup extends Component {
	constructor() {
		super()
		this.state = {
			form: {
				product: '',
				productQuantity: 0,
				qty: 1
			}
		}
	}
	change = (event) => {
		var name
	}
}
