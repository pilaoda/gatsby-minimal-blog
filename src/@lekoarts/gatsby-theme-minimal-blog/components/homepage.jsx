/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title";
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";


const Homepage = ({ posts }) => {
	const { basePath, blogPath } = useMinimalBlogConfig();

	return (
		<Layout>
			<Title text="最新内容">
				<Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>查看全部</Link>
			</Title>
			<Listing posts={posts} showTags={false} />
		</Layout>
	);
};

export default Homepage;

export const Head = () => null;
