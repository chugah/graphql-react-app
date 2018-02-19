import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
	constructor(props) {
		super(props);
		this.state = { content: '', likes: '' };
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.mutate({
			variables: {
				songId: this.props.songId,
				content: this.state.content,
				likes: this.state.likes
			}
		});
		this.setState({ content: '' });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<label>Add a Lyric</label>
					<input type="text" value={this.state.content} onChange={event => this.setState({ content: event.target.value })} />
				</form>
			</div>
		);
	}
}

const mutation = gql`
	mutation AddLyricToSong ($content: String, $songId: ID) {
		addLyricToSong(content: $content, songId: $songId) {
			id
			lyrics {
				id
				content
				likes
			}
		}
	}
`;

export default graphql(mutation)(LyricCreate);