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
`;

export const CardImage = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
`;

export const CardContent = styled.div`
	overflow: hidden;
	padding: 0.2em;
`;
export const NewsTitle = styled(Typography)`
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;
