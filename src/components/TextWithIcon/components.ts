import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { theme } from "../../theme";

export const Label = styled(Typography)`
	color: ${theme.palette.grey.A100};
	font-size: 0.75em;
	margin-top: 0.2em;
	font-weight: 300;
`;
