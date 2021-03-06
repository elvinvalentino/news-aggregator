import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Person from "@material-ui/icons/Person";
import Calender from "@material-ui/icons/CalendarToday";

import { theme } from "../../theme";

export const CardImage = styled.img`
	width: 100px;
	object-fit: cover;
`;

export const NewsTitle = styled(Typography)`
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-weight: 500;
	font-size: 20px;
	margin-bottom: 0.1em;
`;

export const PersonIcon = styled(Person)`
	color: ${theme.palette.grey.A100};
	font-size: 0.9em;
	margin-right: 0.5em;
`;

export const CalenderIcon = styled(Calender)`
	color: ${theme.palette.grey.A100};
	font-size: 0.9em;
	margin-right: 0.5em;
`;

export const Description = styled(Typography)`
	display: -webkit-box;
	color: ${theme.palette.grey.A100};
	margin-top: 0.7em;
	font-size: 0.85em;
	max-height: 3em;
	word-wrap: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	--webkit-box-direction: normal;
	-webkit-box-orient: vertical;
`;

export const SourceContainer = styled.div`
	display: flex;
	flex: 1;
	align-items: flex-end;
`;

export const Source = styled(Typography)`
	margin-top: 1em;
	font-size: 0.7em;
	font-weight: 300;
	color: ${theme.palette.grey.A100};
`;
