<!--<div class="spinner-drop" />-->

<div class="spinner-outline">
	<svg
		class="animated"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		viewBox="-30 -30 102.66388 106.12053"
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
		viewBox="-30 -30 102.66388 106.12053"
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
	.spinner-outline {
		fill: transparent;
		stroke-width: 0.02rem;
		stroke: white;
		stroke-opacity: 0.5;

		& svg {
			height: 18rem;
			width: 18rem;
		}

		& .animated {
			stroke-dasharray: 48.28;
			stroke-dashoffset: 0;
			stroke-width: 0.1rem;
			stroke-opacity: 1;
			position: absolute;
			animation: linear outline infinite 2.5s;
			& .st0 {
				filter: drop-shadow(0px 0px 5px #f0413c);
				stroke: #f0413c;
			}
			& .st1 {
				filter: drop-shadow(0px 0px 5px white);
				stroke: white;
			}
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
