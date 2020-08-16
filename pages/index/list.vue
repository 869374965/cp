<template>
	<view class="wrap">
		<view class="cell-wrap" v-for="(item,i) in 10" :key="i">
			<view class="cell">
				<view class="title-wrap">
					<text class="name">第2000071期</text>
					<text class="time">2020-08-03</text>
				</view>
				<view class="ball-wrap">
					<text class="ball red">01</text>
					<text class="ball red">23</text>
					<text class="ball red">13</text>
					<text class="ball red">11</text>
					<text class="ball red">25</text>
					<text class="ball red">09</text>
					<text class="ball blue">08</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad(options){
			if(options.type==='1'){
				uni.setNavigationBarTitle({
					title: '双色球历史开奖'
				});
			}else if(options.type==='2'){
				uni.setNavigationBarTitle({
					title: '大乐透历史开奖'
				});
			}else{
				uni.setNavigationBarTitle({
					title: '七星彩历史开奖'
				});
			}

		},
		created() {
			uni.setNavigationBarTitle({
				title: '双色球历史开奖'
			});
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		min-height: 100vh;
		padding: 1rpx 0;
		width: 100vw;
		background: $bgColor;
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

			.title-wrap {
				.name {
					font-size: 32rpx;
					font-weight: bold;
					color: #333;
				}

				.time {
					margin-left: 28rpx;
					font-size: 30rpx;
					color: #999;
				}
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
			margin-top: 20rpx;
			display: flex;
			align-items: center;
		}
	}

	.ball {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		width: 50rpx;
		height: 50rpx;
		padding: 10rpx;
		border-radius: 50rpx;
		font-size: 24rpx;

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
</style>
