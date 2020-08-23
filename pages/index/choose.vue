<template>
	<view class="wrap">
		<view class="cell" @click="toDetail(1)">
			<image src="../../static/image/shuangseqiu.jpg"></image>
			<text>双色球</text>
		</view>
		
		<view class="cell" @click="toDetail(2)">
			<image src="../../static/image/daletou.jpg"></image>
			<text>大乐透</text>
		</view>
		
		<view class="cell" @click="toDetail(3)">
			<image src="../../static/image/qixingcai.jpg"></image>
			<text>七星彩</text>
		</view>
		
		
		<view class="title">选择您要对比的彩票种类</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toDetail(type){
				if(type==1){
					uni.navigateTo({
					    url: '/pages/index/shuangseqiu'
					});
				}
				if(type==2){
					uni.navigateTo({
					    url: '/pages/index/daletou'
					});
				}
				if(type==3){
					uni.navigateTo({
					    url: '/pages/index/qixingcai'
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		min-height: 100vh;
		padding:100rpx;
		box-sizing: border-box;
		width: 100vw;
		background: $bgColor;
	}
	
	.cell{
		padding:30rpx;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background:#fff;
		&:not(:first-child){
			margin-top: 50rpx;
		}
			image{
				width: 120rpx;
				height: 120rpx;
				margin-right: 50rpx;
			}
		
	}
	
	.title{
		color:#fff;
		text-align: center;
		margin: 50rpx auto;
		font-size: 36rpx;
	}
</style>
