import {Card, CardBody, CardHeader, Heading, HStack, Image, Text} from "@chakra-ui/react";
import React from "react";
import {Game} from "../hooks/useGame";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
	game: Game;
}

function GameCard({game}: Props) {
	return (
		<Card borderRadius={10} overflow="hidden">
			<Image src={game.background_image} />
			<CardBody>
				<Heading fontSize="2xl">{game.name}</Heading>
				<HStack justifyContent="space-between">
					<PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
}

export default GameCard;
