import {
	Body,
	Button,
	Card,
	CardItem,
	Content,
	Icon,
	Left,
	Right,
	Text
} from "native-base";
import React, { Component } from "react";
import { Image, View, ImageBackground, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Event = props => {
	return (
		<Content padder>
			<Card>
				<CardItem header bordered>
					<Icon name="game-controller-b" />
					<Text>{props.event.title}</Text>
					<Left />
					<Text note>Shafik</Text>
				</CardItem>
				<CardItem cardBody>
					<Image
						source={{ uri: props.event.image }}
						style={{ height: 200, width: null, flex: 1 }}
					/>
				</CardItem>
				<CardItem>
					<Left>
						<Button transparent>
							<Icon active name="thumbs-up" />
							<Text>12 Likes</Text>
						</Button>
					</Left>
					<Body>
						<Button
							transparent
							onPress={() => {
								props.navigation.navigate("Chat");
							}}
						>
							<Icon active name="chatbubbles" />
							<Text>Connect</Text>
						</Button>
					</Body>
					<Right>
						<Text>11h ago</Text>
					</Right>
				</CardItem>
			</Card>
		</Content>
	);
};

const Job = props => {
	return (
		<Content padder>
			<Card>
				<CardItem>
					<Left>
						<Icon name="briefcase" />
						<Body>
							<Text>{props.event.title}</Text>
							<Text note>Omar Samman</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem cardBody>
					<Image
						source={{ uri: props.event.image }}
						style={{ height: 200, width: null, flex: 1 }}
					/>
				</CardItem>
				<CardItem>
					<Left>
						<Button transparent>
							<Icon active name="thumbs-up" />
							<Text>12 Likes</Text>
						</Button>
					</Left>
					<Body>
						<Button transparent onPress={() => {
							props.navigation.navigate("Chat");
						}}>
							<Icon active name="chatbubbles" />
							<Text>Connect</Text>
						</Button>
					</Body>
					<Right>
						<Text>11h ago</Text>
					</Right>
				</CardItem>
			</Card>
		</Content>
	);
};

const Post = props => {
	return (
		<Content padder>
			<Card>
				<CardItem>
					<Left>
						<Icon name="text" />
						<Body>
							<Text>{props.event.title}</Text>
							<Text note>Omar Samman</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem cardBody>
					<Image
						source={{ uri: props.event.image }}
						resizeMode="contain"
						style={{ height: 200, width: null, flex: 1 }}
					/>
				</CardItem>
				<CardItem>
					<Left>
						<Button transparent>
							<Icon active name="thumbs-up" />
							<Text>12 Likes</Text>
						</Button>
					</Left>
					<Body>
						<Button transparent onPress={() => {
							props.navigation.navigate("Chat");
						}}>
							<Icon active name="chatbubbles" />
							<Text>Connect</Text>
						</Button>
					</Body>
					<Right>
						<Text>11h ago</Text>
					</Right>
				</CardItem>
			</Card>
		</Content>
	);
};

const Announcement = props => {
	return (
		<Content padder>
			<Card>
				<CardItem header>
					<Text>{props.event.title}</Text>
				</CardItem>
				<Card>
					<Body>
						<Text>{props.event.description}</Text>
					</Body>
				</Card>
				<CardItem footer>
					<Button onPress={() => {
						props.navigation.navigate("Chat");
					}}>
						<Icon active name="chatbubbles" />
						<Text>Connect</Text>
					</Button>
				</CardItem>
			</Card>
		</Content>
	);
};

const Alumni = props => {
	return (
		<Content padder>
			<Card>
				<CardItem header bordered>
					<Text>{props.event.title}</Text>
				</CardItem>
				<CardItem cardBody>
					<Image
						source={{ uri: props.event.image }}
						resizeMode="contain"
						style={{ height: 200, width: null, flex: 1 }}
					/>
				</CardItem>
				<CardItem bordered>
					<Body>
						<Text>{props.event.description}</Text>
					</Body>
				</CardItem>
				<CardItem footer>
					<Button onPress={() => {
						props.navigation.navigate("Chat");
					}} >
						<Text> Connect </Text>
					</Button>
				</CardItem>
			</Card>
		</Content>
	);
};

class ListingLayout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			eventType: this.props.event.eventType
		};
	}
	render() {
		return (
			<Content>
				{this.props.event.eventType == "event" && (
					<Event event={this.props.event} navigation={this.props.navigation} />
				)}
				{this.props.event.eventType == "announcement" && (
					<Announcement event={this.props.event} navigation={this.props.navigation} />
				)}
				{this.props.event.eventType == "jobVacancy" && (
					<Job event={this.props.event} navigation={this.props.navigation} />
				)}
				{this.props.event.eventType == "post" && (
					<Post event={this.props.event} navigation={this.props.navigation} />
				)}
				{this.props.event.eventType == "alumni" && (
					<Alumni event={this.props.event} navigation={this.props.navigation} />
				)}
			</Content>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		paddingHorizontal: 10,
		paddingBottom: 5,
		flex: 1
	},
	descText: {
		fontSize: 15,
		color: "#fff",
		backgroundColor: "rgba(185,99,41,0.8)",
		marginLeft: 10,
		textAlign: "center"
	},
	title: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 25,
		marginLeft: 13,
		textAlign: "center"
	},
	postContainer: {
		backgroundColor: "#575fcf"
	},
	titleContainer: {},
	eventContainer: {},
	alumniContainer: {},
	jobContainer: {},
	announcementContainer: {},
	postTitle: {
		color: "#ffd32a"
	},
	linearGradient: {
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
		height: 200
	}
});

export default ListingLayout;
