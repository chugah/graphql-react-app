import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSongLyric from '../queries/fetchSongLyric';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
	render() {
		const { song } = this.props.data;
		if(!song) {
			return (
				<div><span>Loading...</span></div>
			);
		}
		return (
			<div>
				<Link to="/">Back</Link>
				<h3>{song.title}</h3>
				<LyricList lyrics={song.lyrics} />
				<LyricCreate songId={this.props.params.id}/>
			</div>
		);
	}
}

export default graphql(fetchSongLyric, {
	options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);