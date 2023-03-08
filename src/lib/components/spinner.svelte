<!--<div class="spinner-drop" />-->

<div class="spinner-outline">
	<svg
		class="animated"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		viewBox="0 0 42.66388 46.12053"
		xml:space="preserve"
	>
		<g>
			<path
				class="st0"
				d="M11.33193,0.56027h10.00003c7.81048,7.81048,12.1895,12.1895,19.99998,19.99998v0.00002H11.33193
				c-3.90524-3.90524-6.09475-6.09475-9.99999-9.99999v-0.00002C5.23718,6.65502,7.42669,4.46551,11.33193,0.56027z"
			/>
		</g>
		<g>
			<path
				class="st1"
				d="M31.33195,45.56027H21.33192c-7.81048-7.81048-12.1895-12.1895-19.99998-19.99998v-0.00002h30.00001
				c3.90524,3.90524,6.09475,6.09475,9.99999,9.99999v0.00002C37.4267,39.46552,35.23719,41.65503,31.33195,45.56027z"
			/>
		</g>
	</svg>
	<svg
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		viewBox="0 0 42.66388 46.12053"
		xml:space="preserve"
	>
		<g>
			<path
				class="st0"
				d="M11.33193,0.56027h10.00003c7.81048,7.81048,12.1895,12.1895,19.99998,19.99998v0.00002H11.33193
				c-3.90524-3.90524-6.09475-6.09475-9.99999-9.99999v-0.00002C5.23718,6.65502,7.42669,4.46551,11.33193,0.56027z"
			/>
		</g>
		<g>
			<path
				class="st1"
				d="M31.33195,45.56027H21.33192c-7.81048-7.81048-12.1895-12.1895-19.99998-19.99998v-0.00002h30.00001
				c3.90524,3.90524,6.09475,6.09475,9.99999,9.99999v0.00002C37.4267,39.46552,35.23719,41.65503,31.33195,45.56027z"
			/>
		</g>
	</svg>
</div>

<style lang="scss">
	.spinner-drop {
		mask-image: url(https://branding.stratasource.org/i/strata/icon/ondark/mono.svg);
		mask-repeat: no-repeat;
		mask-position: center;
		-webkit-mask-image: url(https://branding.stratasource.org/i/strata/icon/ondark/mono.svg);
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-position: center;

		background-image: linear-gradient(0deg, #fff 50%, #f0413c 50%);

		height: 9rem;
		width: 9rem;

		animation: spin 2s infinite ease-out;

		margin: 3rem;
	}
	@keyframes spin {
		0% {
			background-position-y: 0rem;
		}
		70% {
			background-position-y: 4.5rem;
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(180deg);
			background-position-y: 4.5rem;
		}
	}

	.spinner-outline {
		fill: transparent;
		stroke-width: 0.02rem;
		stroke: white;
		stroke-opacity: 0.5;

		margin: 3rem;

		& svg {
			height: 9rem;
			width: 9rem;
		}

		& .animated {
			filter: drop-shadow(0px 0px 10px white);
			stroke-dasharray: 48.28;
			stroke-dashoffset: 0;
			stroke-width: 0.1rem;
			stroke-opacity: 1;
			position: absolute;
			animation: linear outline infinite 2.5s;
		}
	}
	@keyframes outline {
		0% {
			stroke-dashoffset: 0;
		}
		100% {
			stroke-dashoffset: 193.12;
		}
	}
</style>
