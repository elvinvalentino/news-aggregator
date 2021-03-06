import styled from "styled-components";

import { theme } from "../../theme";

export const StyledCard = styled.div`
	display: flex;
	cursor: pointer;
	background: ${theme.palette.primary.light};
	box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
	overflow: hidden;
	height: 100%;
	max-height: 150px;
`;
