<template>
	<view class="wrap">
		<scroll-view class="my-scroll-view" scroll-y @scrolltolower="loadData">
			<view class="cell-wrap" v-for="(item,i) in list" :key="i">
				<view class="cell">
					<view class="title-wrap">
						<text class="name">第{{item.id}}期</text>
						<text class="time">{{item.time}}</text>
					</view>
					<view class="ball-wrap" v-if="type===1">
						<text class="ball red">{{item.redFirst}}</text>
						<text class="ball red">{{item.redSecond}}</text>
						<text class="ball red">{{item.redThird}}</text>
						<text class="ball red">{{item.redFour}}</text>
						<text class="ball red">{{item.redFive}}</text>
						<text class="ball red">{{item.redSix}}</text>
						<text class="ball blue">{{item.blue}}</text>
					</view>
					<view class="ball-wrap" v-if="type===2">
						<text class="ball red">{{item.redFirst}}</text>
						<text class="ball red">{{item.redSecond}}</text>
						<text class="ball red">{{item.redThird}}</text>
						<text class="ball red">{{item.redFour}}</text>
						<text class="ball red">{{item.redFive}}</text>
						<text class="ball blue">{{item.blueFirst}}</text>
						<text class="ball blue">{{item.blueSecond}}</text>
					</view>
					<view class="ball-wrap" v-if="type===3">
						<text class="ball red">{{item.redFirst}}</text>
						<text class="ball red">{{item.blueFirst}}</text>
						<text class="ball red">{{item.redSecond}}</text>
						<text class="ball red">{{item.blueSecond}}</text>
						<text class="ball red">{{item.redThird}}</text>
						<text class="ball red">{{item.blueThird}}</text>
						<text class="ball red">{{item.redFour}}</text>
					</view>
				</view>
			</view>
			<uni-load-more :status="loadingType"></uni-load-more>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				loadingType:'loading',
				pageNum:0,
				pageSize:10,
				url:'',
				type:''
			};
		},
		onLoad(options){
			if(options.type=='1'){
				uni.setNavigationBarTitle({
					title: '双色球历史开奖'
				});
				this.type=1;
			}else if(options.type=='2'){
				uni.setNavigationBarTitle({
					title: '大乐透历史开奖'
				});
				this.type=2;
			}else{
				uni.setNavigationBarTitle({
					title: '七星彩历史开奖'
				});
				this.type=3;
			}
			this.list = JSON.parse(decodeURIComponent(options.list)).reverse()

		},
		created() {
			setTimeout(()=>{
				this.loadingType="nomore"
			},2000)
		},
		methods:{
			loadData(){
				return
				if (this.loadingType === 'loading') {
					//防止重复加载
					return;
				}
				this.pageNum++
				this.loadingType = 'loading';
				let params = {
					pageSize:this.pageSize,
					pageNum:this.pageNum
				}
				this.$http.post(this.url,params).then(res => {
					if (!res.data.list) {
						this.loadingType = 'nomore';
					}
					
					this.list = this.list.concat(res.data.list);
					this.loadingType = 'more'
					if (res.data.list.length === 0) {
						this.loadingType = 'nomore';
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		height: 100vh;
		padding: 1rpx 0;
		width: 100vw;
		background: $bgColor;
	}
	.my-scroll-view{
		height: 100%;
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
		font-size: 34rpx;

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
