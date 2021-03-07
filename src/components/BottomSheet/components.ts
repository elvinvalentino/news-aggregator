import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import MuiBreadcrumbs from "@material-ui/core/Breadcrumbs";

import { theme } from "../../theme";

export const ArticleTitle = styled(Typography)`
	font-weight: 500;
`;

export const Breadcrumbs = styled(MuiBreadcrumbs)`
	color: #fff;
	font-size: 0.85em;
	margin: 0.8em 0 1.2em 0;
	font-weight: 400;
`;

export const ArticleAuthor = styled(Typography)`
	font-size: 1em;
	letter-spacing: 0.05em;
`;

export const ArticleDate = styled(Typography)`
	font-size: 0.8em;
	color: ${theme.palette.grey.A100};
	letter-spacing: 0.05em;
`;

export const ArticleImage = styled.img`
	width: 100%;
`;

export const ArticleContent = styled(Typography)`
	font-size: 1em;
	margin: 1.5em 0;
`;

export const ArticleLink = styled.a`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	color: #fff;
`;
