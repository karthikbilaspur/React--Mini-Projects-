// App.js 
import React, { Component } from "react"; 
import "./App.css"; 

class App extends Component { 
	constructor() { 
		super(); 
		this.state = { 
			colorList: [], 
			ColorIndex: null, 
			searchInput: "", 
			matchingColors: [], // Store matching colors 
		}; 
	} 

	componentDidMount() { 
		this.generateColorPalette(); 
	} 

	generateColorPalette = () => { 
		const maxColorBoxes = 21; 
		const colorList = []; 

		for (let i = 0; i < maxColorBoxes; i++) { 
			const randomHexColor = `#${Math.floor(Math.random() * 0xffffff) 
				.toString(16) 
				.padStart(6, "0")}`; 
			colorList.push(randomHexColor); 
		} 

		this.setState({ colorList, ColorIndex: null }); 
	}; 

	copyColorToClipboard = (hexValue, index) => { 
		navigator.clipboard 
			.writeText(hexValue) 
			.then(() => { 
				this.setState({ ColorIndex: index }); 
			}) 
			.catch(() => { 
				alert("Failed to copy the color code!"); 
			}); 
	}; 

	handleSearchChange = (e) => { 
		const searchInput = e.target.value.toLowerCase(); 

		// Color mapping with arrays of related colors 
		const colorMapping = { 
			red: ["#FF0000", "#FF5733", "#c21919", "#FF6347", "#FF4500"], 
			green: ["#00FF00", "#33FF73", "#C3FF00", "#228B22", "#008000"], 
			blue: ["#0000FF", "#3373FF", "#00C3FF", "#1E90FF", "#4169E1"], 
			yellow: ["#FFFF00", "#FFD700", "#FFEA00", "#F0E68C", "#FFAC33"], 
			pink: ["#FFC0CB", "#FF69B4", "#FF1493", "#FF6EB4", "#FF82AB"], 
			purple: ["#800080", "#9932CC", "#8A2BE2", "#A020F0", "#8000FF"], 
			orange: ["#FFA500", "#FFD700", "#FF8C00", "#FF7F50", "#FF4500"], 
			brown: ["#A52A2A", "#8B4513", "#D2691E", "#CD853F", "#DEB887"], 
			cyan: ["#00FFFF", "#20B2AA", "#40E0D0", "#00CED1", "#00C5CD"], 
			magenta: ["#FF00FF", "#FF69B4", "#DA70D6", "#BA55D3", "#FFA0B4"], 
			teal: ["#008080", "#008B8B", "#00FFFF", "#20B2AA", "#40E0D0"], 
			navy: ["#000080", "#00008B", "#0000FF", "#4169E1", "#0000CD"], 
			lime: ["#00FF00", "#32CD32", "#7FFF00", "#00FA9A", "#00FF7F"], 
			maroon: ["#800000", "#8B0000", "#B22222", "#A52A2A", "#800000"], 
			olive: ["#808000", "#6B8E23", "#556B2F", "#8FBC8B", "#9ACD32"], 
			silver: ["#C0C0C0", "#D3D3D3", "#DCDCDC", "#BEBEBE", "#A9A9A9"], 
			black: ["#000000", "#080808", "#121212", "#1C1C1C", "#262626"], 
			white: ["#FFFFFF", "#F5F5F5", "#FAFAFA", "#E0E0E0", "#D3D3D3"], 
			// Add more color mappings as needed 
		}; 

		// Check if the search input matches any color name 
		const matchingColors = colorMapping[searchInput] || []; 

		this.setState({ searchInput, matchingColors }); 
	}; 

	render() { 
		const filteredColorList = 
			this.state.matchingColors.length > 0 
				? this.state.matchingColors 
				: this.state.colorList; 

		return ( 
			<div> 
				<h1>Color Palette Generator</h1> 
				<div className="search-container"> 
					<input 
						type="text"
						className="search-input"
						placeholder="Search for a color"
						value={this.state.searchInput} 
						onChange={this.handleSearchChange} 
					/> 
				</div> 

				{/* Render matching colors */} 
				<ul className="container"> 
					{filteredColorList.map((hexValue, index) => ( 
						<li 
							className="color"
							key={index} 
							onClick={() => 
								this.copyColorToClipboard(hexValue, index) 
							} 
						> 
							<div 
								className="rect-box"
								style={{ background: hexValue }} 
							></div> 
							<span className="hex-value"> 
								{hexValue} 
								{this.state.ColorIndex === index && ( 
									<p className="message">Message</p> 
								)} 
							</span> 
						</li> 
					))} 
				</ul> 

				<button 
					className="refresh-btn"
					onClick={this.generateColorPalette} 
				> 
					Refresh Palette 
				</button> 
			</div> 
		); 
	} 
} 

export default App;
