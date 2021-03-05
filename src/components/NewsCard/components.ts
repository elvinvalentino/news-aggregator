import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { theme } from "../../theme";

export const Card = styled.div`
	display: flex;
	background: ${theme.palette.primary.light};
	margin-bottom: 1.2em;
	box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
	overflow: hidden;
	height: 140px;
`;

export const CardImage = styled.img`
	width: 100px;
	height: 140px;
	object-fit: cover;
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	padding: 0.8em 1em;
`;
export const NewsTitle = styled(Typography)`
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-weight: 500;
	font-size: 20px;
`;
