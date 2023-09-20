import React from 'react'
import './Footer.css'


const Footer = () => {
  return(
	<section className='footer-main'>
		<hr />
		<section className='footer-container'>
			<section className='footer-info-left'>
				<a href="Appdownload">Download our App</a>
			</section>
			<section className='footer-info-center'>
				<a href="ToS">Terms of service</a>
			</section>
			<section className='footer-info-right'>
				<a href="contact">Contact us</a>
			</section>
			
		</section>
		<section className='footer-copyright'>
				<p>©MovieHorizon</p>
			</section>

	</section>
	
  ) 
}

export default Footer

