<template>
	<view class="content">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500" :circular="true" indicator-active-color="#fff">
						<swiper-item v-for="(item,i) in 3" :key="i">
							<image class="swiper-image" src="https://img.xiaopiu.com/userImages/img44193173b89a9bd8.jpg"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		
		<view class="cell-wrap">
			<view class="cell">
				<text class="title">双色球</text>
				<text class="time">2000071期 2020-08-03</text>
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
			<view class="btn" @click="toList(1)">历史开奖</view>	
		</view>
		
		
		
		<view class="cell-wrap">
			<view class="cell">
				<text class="title">大乐透</text>
				<text class="time">2000071期 2020-08-03</text>
				<view class="ball-wrap">
					<text class="ball red">01</text>
					<text class="ball red">23</text>
					<text class="ball red">13</text>
					<text class="ball red">11</text>
					<text class="ball red">25</text>
					<text class="ball blue">09</text>
					<text class="ball blue">08</text>
				</view>
			</view>
			<view class="btn" @click="toList(2)">历史开奖</view>	
		</view>
		
		
		<view class="cell-wrap">
			<view class="cell">
				<text class="title">七星彩</text>
				<text class="time">2000071期 2020-08-03</text>
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
			<view class="btn" @click="toList(3)">历史开奖</view>	
		</view>
		
		  <button type="default" @click="toChoose">推荐高概率号码</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			toList(i){
				uni.navigateTo({
				    url: '/pages/index/list?type='+i
				});
			},
			toChoose(){
				uni.navigateTo({
				    url: '/pages/index/choose'
				});
			}
		}
	}
</script> 

<style lang="scss" scoped>
	.content{
		width:100vw;
		padding: 1rpx 0;
		min-height:100vh;
		background:$bgColor;
	}
	.swiper-image{
		width: 100%;
		height: 100%;
	}
	swiper {
		height: 260rpx;
	}
	
	.cell-wrap{
		border-radius: 20rpx;
		background:#fff;
		padding:30rpx;
		margin:15rpx 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.cell{
			display: flex;
			flex-flow: column;
			.title{
				font-weight: bold;
				font-size: 30rpx;
				color:#333;
			}
			.time{
				margin-top: 10rpx;
				font-size: 26rpx;
				color:#666;
			}
		}
		.btn{
			background:#2a82e4;
			color:#fff;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 30rpx;
			padding:10rpx;
			border-radius: 10rpx;
			width: 80rpx;
			height: 80rpx;
		}
		
		.ball-wrap{
			margin-top: 10rpx;
			display: flex;
			align-items: center;
		}
	}
	
	.ball{
		display: flex;
		align-items: center;
		justify-content: center;
		color:#fff;
		width: 50rpx;
		height: 50rpx;
		padding: 10rpx;
		border-radius: 50rpx;
		font-size: 24rpx;
		&:not(:first-child){
			margin-left: 10rpx;
		}
		&.red{
			background:red;
		}
		&.blue{
			background:#2a82e4;
		}
	}
	button{
		font-size: 34rpx;
		background:#2a82e4;
		color:#fff;
		padding:0 20rpx;
		margin:40rpx 20rpx 20rpx;
	}
</style>
