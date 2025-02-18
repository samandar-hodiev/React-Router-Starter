import { Link } from "react-router-dom";
import "./style.scss"

const index = () => {
	return (
		<section className="error page_404 w-full h-full">
			<div className="container mx-auto">
				<div className="row">
					<div className="col-sm-12 ">
						<div className="col-sm-10 col-sm-offset-1  text-center">
							<div className="four_zero_four_bg">
								<h1 className="text-center ">
									404
								</h1>
							</div>
							<div className="contant_box_404">
								<h3 className="h2">
									Look like you&lsquo;re lost
								</h3>
								<p>
									the page you are looking for not avaible!
								</p>
								<Link to="/" className="link_404">
									Go to Home
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default index;