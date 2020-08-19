<template>
	<view class="wrap">
		<view class="title" style="margin-top:0;">
			根据大数据显示，您查询的号码：
		</view>
		<view class="ball-wrap" v-if="type!==3">
			<text class="ball red" v-for="(item,i) in result.red" :key="i">{{item}}</text>
			<text class="ball blue" v-for="(item,i) in result.blue" :key="i">{{item}}</text>
		</view>
		<view v-else>
			<scroll-view scroll-y class="my-scroll-view">
				<view class="ball-wrap" v-for="(item,i) in ballList" :key="i">
					<text class="ball red" v-for="(v,j) in item" :key="j">{{v}}</text>
				</view>
			</scroll-view>
		</view>

		<view class="title">历史开出详情</view>


		<!-- 双色球 -->
		<view class="table" v-if="type===1">
			<view class="cell">
				<text>开出</text>
				<text>6 + 1</text>
				<text>6 + 0</text>
				<text>5 + 1</text>
				<text>5 + 0</text>
				<text>4 + 1</text>
				<text>4 + 0</text>
				<text>3 + 1</text>
				<text>3 + 0</text>
				<text>2 + 1</text>
				<text>2 + 0</text>
				<text>1 + 1</text>
				<text>1 + 0</text>
				<text>0 + 0</text>
			</view>
			<view class="cell">
				<text>次数</text>
				<text>{{result.count1}}</text>
				<text>{{result.count2}}</text>
				<text>{{result.count3}}</text>
				<text>{{result.count4}}</text>
				<text>{{result.count5}}</text>
				<text>{{result.count6}}</text>
				<text>{{result.count7}}</text>
				<text>{{result.count8}}</text>
				<text>{{result.count9}}</text>
				<text>{{result.count10}}</text>
				<text>{{result.count11}}</text>
				<text>{{result.count12}}</text>
				<text>{{result.count13}}</text>
			</view>
			<view class="cell">
				<text style="color:#333;">操作</text>
				<text @click="toDetail(result.list1)">详情</text>
				<text @click="toDetail(result.list2)">详情</text>
				<text @click="toDetail(result.list3)">详情</text>
				<text @click="toDetail(result.list4)">详情</text>
			</view>
		</view>

		<!-- 大乐透 -->
		<view class="table" v-if="type===2">
			<view class="cell">
				<text>开出</text>
				<text>5 + 2</text>
				<text>5 + 1</text>
				<text>5 + 0</text>
				<text>4 + 2</text>
				<text>4 + 1</text>
				<text>4 + 0</text>
				<text>3 + 2</text>
				<text>3 + 1</text>
				<text>3 + 0</text>
				<text>2 + 2</text>
				<text>2 + 1</text>
				<text>2 + 0</text>
				<text>1 + 2</text>
				<text>1 + 1</text>
				<text>1 + 0</text>
				<text>0 + 2</text>
				<text>0 + 1</text>
				<text>0 + 0</text>
			</view>
			<view class="cell">
				<text>次数</text>
				<text>{{result.count1}}</text>
				<text>{{result.count2}}</text>
				<text>{{result.count3}}</text>
				<text>{{result.count4}}</text>
				<text>{{result.count5}}</text>
				<text>{{result.count6}}</text>
				<text>{{result.count7}}</text>
				<text>{{result.count8}}</text>
				<text>{{result.count9}}</text>
				<text>{{result.count10}}</text>
				<text>{{result.count11}}</text>
				<text>{{result.count12}}</text>
				<text>{{result.count13}}</text>
				<text>{{result.count14}}</text>
				<text>{{result.count15}}</text>
				<text>{{result.count16}}</text>
				<text>{{result.count17}}</text>
				<text>{{result.count18}}</text>
			</view>
			<view class="cell">
				<text style="color:#333;">操作</text>
				<text @click="toDetail(result.list1)">详情</text>
				<text @click="toDetail(result.list2)">详情</text>
				<text @click="toDetail(result.list3)">详情</text>
			</view>
		</view>


		<!-- 七星彩 -->
		<view class="table" v-if="type===3">
			<view class="cell">
				<text>开出</text>
				<text>一等奖</text>
				<text>二等奖</text>
				<text>三等奖</text>
				<text>四等奖</text>
				<text>五等奖</text>
				<text>六等奖</text>
			</view>
			<view class="cell">
				<text>次数</text>
				<text>{{result.count1}}</text>
				<text>{{result.count2}}</text>
				<text>{{result.count3}}</text>
				<text>{{result.count4}}</text>
				<text>{{result.count5}}</text>
				<text>{{result.count6}}</text>
			</view>
			<view class="cell">
				<text style="color:#333;">操作</text>
				<text @click="toDetail(result.list1)">详情</text>
				<text @click="toDetail(result.list2)">详情</text>
				<text @click="toDetail(result.list3)">详情</text>
				<text @click="toDetail(result.list4)">详情</text>
				<text @click="toDetail(result.list5)">详情</text>
				<text @click="toDetail(result.list6)">详情</text>
			</view>
		</view>


		<view class="title">
			根据大数据计算，为您推荐两组号码为：
		</view>
		<view class="result-wrap">
			<view class="ball-wrap">
				<text class="ball red" v-for="(item,i) in random1.red" :key="i">{{item}}</text>
				<text class="ball blue" v-for="(item,i) in random1.blue" :key="i">{{item}}</text>
			</view>
			<view class="ball-wrap">
				<text class="ball red" v-for="(item,i) in random2.red" :key="i">{{item}}</text>
				<text class="ball blue" v-for="(item,i) in random2.blue" :key="i">{{item}}</text>
			</view>
		</view>
		<button class="btn" type="default" @click.native="getRandom">换一换</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: '',
				url: '',
				result: {},
				random1: {
					red: [],
					blue: []
				},
				random2: {
					red: [],
					blue: []
				},
				ballList: []
			};
		},
		onLoad(options) {
			this.result = JSON.parse(decodeURIComponent(options.result))
			if (options.type === '1') {
				uni.setNavigationBarTitle({
					title: '双色球选号去重结果'
				});
				this.type = 1;
				this.url = '/api/two/random'
				this.result.red = this.result.red.split(',')
				this.result.blue = this.result.blue.split(',')
			} else if (options.type === '2') {
				uni.setNavigationBarTitle({
					title: '大乐透选号去重结果'
				});
				this.type = 2;
				this.url = '/api/lottery/random'
				this.result.red = this.result.red.split(',')
				this.result.blue = this.result.blue.split(',')
			} else {
				uni.setNavigationBarTitle({
					title: '七星彩选号去重结果'
				});
				this.type = 3;
				this.url = '/api/colorful/random'
				this.ballList = JSON.parse(decodeURIComponent(options.ballList)).map(item => {
					return item.split(',')
				})
				console.log(this.ballList)
			}
			this.getRandom()
		},
		methods: {
			getRandom() {
				if (this.type == 1) {
					this.$http.post('/api/point/save', {
						type: 's-random'
					})
				} else if (this.type == 2) {
					this.$http.post('/api/point/save', {
						type: 'd-random'
					})
				} else if (this.type == 3) {
					this.$http.post('/api/point/save', {
						type: 'q-random'
					})
				}
				this.$http.post(this.url).then(res => {
					let {
						random1,
						random2
					} = res.data;
					if (this.type !== 3) {

						this.random1.red = (random1.split('-')[0].substring(1, random1.split('-')[0].length - 1)).split(',')
						this.random1.blue = (random1.split('-')[1].substring(1, random1.split('-')[1].length - 1)).split(',')
						this.random2.red = (random2.split('-')[0].substring(1, random2.split('-')[0].length - 1)).split(',')
						this.random2.blue = (random2.split('-')[1].substring(1, random2.split('-')[1].length - 1)).split(',')
					} else {
						this.random1.red = random1.split(',')
						this.random2.red = random2.split(',')
					}
				})
			},
			toDetail(list) {
				console.log(list)
				if (list.length == 0) {
					uni.showToast({
						icon: 'none',
						title: '无历史开奖'
					})
					return
				}
				uni.navigateTo({
					url: `/pages/index/detail?type=${this.type}&list=${encodeURIComponent(JSON.stringify(list))}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		min-height: 100vh;
		background: $bgColor;
		padding: 20rpx;
	}

	.title {
		color: #fff;
		font-size: 34rpx;
		margin: 20rpx 0 10rpx;
	}

	.ball-wrap {
		margin-bottom: 10rpx;
		display: flex;
		flex-flow: row wrap;
		align-items: center;

		&:last-child {
			padding-bottom: 10rpx;
		}
	}

	.ball {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50rpx;
		height: 50rpx;
		padding: 10rpx;
		border-radius: 50rpx;
		font-size: 34rpx;
		background: #fff;
		margin-right: 10rpx;
		margin-top: 10rpx;

		&.red {
			color: red;
		}

		&.blue {
			color: #2a82e4;
		}
	}

	.table {
		padding: 20rpx;
		display: flex;
		align-items: flex-start;
		justify-content: space-around;
		background: #fff;
		border-radius: 20rpx;
		color: #333;

		.cell {
			flex: 1;
			display: flex;
			flex-flow: column;
			align-items: center;
			justify-content: center;

			&:not(:last-child) {
				border-right: 1px solid $bgColor;
			}

			&:last-child {
				color: $bgColor
			}

			text {
				display: inline-block;
				width: 100%;
				box-sizing: border-box;
				padding: 10rpx;
				text-align: center;
				// border: 1px solid $bgColor;

				&:not(:first-child) {
					// border-top: 1px solid $bgColor;
					// border-right: 1px solid $bgColor;
				}
			}
		}
	}

	.btn {
		margin: 40rpx 0;
	}

	.my-scroll-view {
		padding: 10rpx;
		border-radius: 10rpx;
		border: 1px solid #fff;
		max-height: 40vh;
		box-sizing: border-box;
		overflow: hidden;

	}
	
	button {
		font-size: 34rpx;
		background: #2a82e4;
		color: #fff;
		padding: 0 20rpx;
		margin: 40rpx 20rpx 20rpx;
	}
</style>
