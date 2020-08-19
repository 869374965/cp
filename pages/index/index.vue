<template>
	<view class="content">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500" :circular="true"
					 indicator-active-color="#fff">
						<swiper-item v-for="(item,i) in images" :key="i">
							<image class="swiper-image" :src="item.url"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

		<view class="cell-wrap">
			<view class="cell">
				<view>
					<text class="title">双色球</text>
					<text class="time" v-if="data.two.id">第{{data.two.id}}期 {{data.two.time}}</text>
				</view>
				<view class="ball-wrap">
					<text class="ball red">{{data.two.redFirst}}</text>
					<text class="ball red">{{data.two.redSecond}}</text>
					<text class="ball red">{{data.two.redThird}}</text>
					<text class="ball red">{{data.two.redFour}}</text>
					<text class="ball red">{{data.two.redFive}}</text>
					<text class="ball red">{{data.two.redSix}}</text>
					<text class="ball blue">{{data.two.blue}}</text>
				</view>
			</view>
			<view class="btn" @click="toList(1)">历史开奖</view>
		</view>



		<view class="cell-wrap">
			<view class="cell">
				<view>
					<text class="title">大乐透</text>
					<text class="time" v-if="data.lottery.id">第{{data.lottery.id}}期 {{data.lottery.time}}</text>
				</view>
				<view class="ball-wrap">
					<text class="ball red">{{data.lottery.redFirst}}</text>
					<text class="ball red">{{data.lottery.redSecond}}</text>
					<text class="ball red">{{data.lottery.redThird}}</text>
					<text class="ball red">{{data.lottery.redFour}}</text>
					<text class="ball red">{{data.lottery.redFive}}</text>
					<text class="ball blue">{{data.lottery.blueFirst}}</text>
					<text class="ball blue">{{data.lottery.blueSecond}}</text>
				</view>
			</view>
			<view class="btn" @click="toList(2)">历史开奖</view>
		</view>


		<view class="cell-wrap">
			<view class="cell">
				<view>
					<text class="title">七星彩</text>
					<text class="time" v-if="data.colorful.id">第{{data.colorful.id}}期 {{data.colorful.time}}</text>
				</view>
				<view class="ball-wrap">
					<text class="ball red">{{data.colorful.redFirst}}</text>
					<text class="ball red">{{data.colorful.redSecond}}</text>
					<text class="ball red">{{data.colorful.redThird}}</text>
					<text class="ball red">{{data.colorful.redFour}}</text>
					<text class="ball red">{{data.colorful.blueFirst}}</text>
					<text class="ball red">{{data.colorful.blueSecond}}</text>
					<text class="ball red">{{data.colorful.blueThird}}</text>
				</view>
			</view>
			<view class="btn" @click="toList(3)">历史开奖</view>
		</view>

		<button type="default" @click="toChoose">推荐高概率号码</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				images: [],
				data: {
					two: {},
					lottery: {},
					colorful: {},
				}
			}
		},
		onShow() {
			this.getSwiper()
		},
		onLoad() {

		},
		created() {
			this.$http.post('/api/lottery/update', {})
			this.$http.post('/api/lottery/last').then(res => {
				this.data.two = res.data.two;
				this.data.lottery = res.data.lottery;
				this.data.colorful = res.data.colorful;
			})
		},
		methods: {
			toList(i) {
				if (i == 1) {
					this.$http.post('/api/point/save', {
						type: 's-history'
					})
				} else if (i == 2) {
					this.$http.post('/api/point/save', {
						type: 'd-history'
					})
				} else if (i == 3) {
					this.$http.post('/api/point/save', {
						type: 'q-history'
					})
				}
				uni.navigateTo({
					url: '/pages/index/list?type=' + i
				});
			},
			toChoose() {
				this.$http.post('/api/point/save', {
					type: 'index-btn'
				})
				uni.navigateTo({
					url: '/pages/index/choose'
				});
			},
			getSwiper() {
				this.$http.post('/api/picture/all').then(res => {
					this.images = res.data;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100vw;
		padding: 1rpx 0;
		min-height: 100vh;
		background: $bgColor;
	}

	.swiper-image {
		width: 100%;
		height: 100%;
	}

	swiper {
		height: 260rpx;
	}

	.cell-wrap {
		border-radius: 20rpx;
		background: #fff;
		padding: 30rpx;
		margin: 15rpx 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.cell {
			display: flex;
			flex-flow: column;

			.title {
				font-weight: bold;
				font-size: 30rpx;
				color: #333;
			}

			.time {
				margin-left: 10rpx;
				font-size: 26rpx;
				color: #666;
			}
		}

		.btn {
			background: #2a82e4;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 30rpx;
			padding: 10rpx;
			border-radius: 10rpx;
			width: 80rpx;
			height: 80rpx;
		}

		.ball-wrap {
			margin-top: 10rpx;
			display: flex;
			align-items: center;
		}
	}

	.ball {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		width: 40rpx;
		height: 40rpx;
		padding: 10rpx;
		border-radius: 40rpx;
		font-size: 30rpx;

		&:not(:first-child) {
			margin-left: 10rpx;
		}

		&.red {
			background: red;
		}

		&.blue {
			background: #2a82e4;
		}
	}

	button {
		font-size: 34rpx;
		background: #2a82e4;
		color: #fff;
		padding: 0 20rpx;
		margin: 40rpx 20rpx 20rpx;
	}
</style>
