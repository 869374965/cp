<template>
	<view class="wrap">
		<text class="tip">至少选择6个红球，1个蓝球</text>
		<view class="top">
			<text class="ball red" :class="item.checked?'checked':''" @click="chooseRed(item)" v-for="(item,i) in allRed" :key="i">{{item.num}}</text>
		</view>
		<view class="bottom">
			<text class="ball blue" v-for="(item,i) in allBlue" :key="i">{{item.num}}</text>
		</view>

		<view class="title" v-if="redList.length>0">您的选号</view>
		<view class="result" v-if="redList.length>0">
			<text class="ball red" v-for="(item,i) in redList" :key="i">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allRed: [{
					num: '01',
					checked: false
				},{
					num: '02',
					checked: false
				},{
					num: '03',
					checked: false
				},{
					num: '04',
					checked: false
				},{
					num: '05',
					checked: false
				},{
					num: '06',
					checked: false
				},{
					num: '07',
					checked: false
				},{
					num: '08',
					checked: false
				},{
					num: '09',
					checked: false
				},{
					num: '10',
					checked: false
				},{
					num: '11',
					checked: false
				},{
					num: '12',
					checked: false
				},{
					num: '13',
					checked: false
				},{
					num: '14',
					checked: false
				},{
					num: '15',
					checked: false
				},{
					num: '16',
					checked: false
				},{
					num: '17',
					checked: false
				},{
					num: '18',
					checked: false
				},{
					num: '19',
					checked: false
				},{
					num: '20',
					checked: false
				},{
					num: '21',
					checked: false
				},{
					num: '22',
					checked: false
				},{
					num: '23',
					checked: false
				},{
					num: '24',
					checked: false
				},{
					num: '25',
					checked: false
				},{
					num: '26',
					checked: false
				},{
					num: '27',
					checked: false
				},{
					num: '28',
					checked: false
				},{
					num: '29',
					checked: false
				},{
					num: '30',
					checked: false
				},{
					num: '31',
					checked: false
				},{
					num: '32',
					checked: false
				}],
				allBlue: [{
					num: '01',
					checked: false
				},{
					num: '02',
					checked: false
				},{
					num: '03',
					checked: false
				},{
					num: '04',
					checked: false
				},{
					num: '05',
					checked: false
				},{
					num: '06',
					checked: false
				},{
					num: '07',
					checked: false
				},{
					num: '08',
					checked: false
				},{
					num: '09',
					checked: false
				},{
					num: '10',
					checked: false
				},{
					num: '11',
					checked: false
				},{
					num: '12',
					checked: false
				},{
					num: '13',
					checked: false
				},{
					num: '14',
					checked: false
				},{
					num: '15',
					checked: false
				},{
					num: '16',
					checked: false
				}],
				redList: [],
				blue: ''
			};
		},
		methods: {
			chooseRed(item) {
				item.checked = !item.checked
				if(!item.checked){
					this.redList.remove(item.num)
					return
				}
				this.redList.push(item.num)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		min-height: 100vh;
		padding: 20rpx;
		box-sizing: border-box;
		width: 100vw;
		background: rgba(229, 229, 229, 1);
	}

	.tip {
		display: flex;
		font-size: 26rpx;
		padding: 0 20rpx 20rpx;
	}

	.top {
		border-bottom: 1px solid #ccc;
		display: flex;
		flex-flow: row wrap;
		padding-bottom: 20rpx;
	}

	.bottom {
		display: flex;
		flex-flow: row wrap;
		padding-top: 20rpx;
	}

	.ball {
		width: 40rpx;
		height: 40rpx;
		padding: 10rpx;
		font-size: 26rpx;
		font-weight: bold;
		border-radius: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		margin: 16rpx;

		&.red {
			color: red;
			&.checked{
				background:red;
				color:#fff;
			}
		}

		&.blue {
			color: #2a82e4;
			&.checked{
				background:2a82e4;
				color:#fff;
			}
		}
		
		
	}

	.title {
		font-size: 28rpx;
		margin-top: 40rpx;
		padding-left: 10rpx;
	}

	.result {
		display: flex;
		flex-flow: row wrap;
	}
</style>
