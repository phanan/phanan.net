<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/_reset";

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  height: 100%;
  font: normal 100 30px/50px Roboto, sans-serif;
  position: relative;
}

body {
	position: relative;
	height: 100%;
	padding: 55px 0 0 85px;
	text-transform: lowercase;
	color: #fff;
	background: #000 url("/phan-an.jpg") fixed center;
	background-size: cover;

	&::after {
		display: block;
		content: " ";
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, .8);
		z-index: -1;
  }

  @media only screen and (max-width: 640px) {
    background: #000;
    padding: 30px 20px;
    font-size: 20px;
  }
}

a {
	text-decoration: none;
	color: #fff;
	transition: .5s;
}

::selection {
	background: #fff;
	color: #000;
}
</style>
