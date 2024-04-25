/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = () => {
	return (
		<footer
			sx={{
				boxSizing: `border-box`,
				display: `flex`,
				justifyContent: `space-between`,
				mt: [6],
				color: `secondary`,
				a: {
					variant: `links.secondary`,
				},
				flexDirection: [`column`, `column`, `row`],
				variant: `dividers.top`,
			}}
		>
			<div>
				&copy; {new Date().getFullYear()}
			</div>

			<div>
				<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030002003085" style={{
					fontFamily: "Microsoft YaHei",
					marginRight: "50px",
				}}>
					<img src="/beian.png" style={{ float: "left" }} />
					粤公网安备44030002003085号
				</a>

				<a href="https://beian.miit.gov.cn/" target="_blank" style={{
					fontFamily: "Microsoft YaHei",
				}}>
					粤ICP备2024229745号-1
				</a>
			</div>
		</footer>
	);
};

export default Footer;
