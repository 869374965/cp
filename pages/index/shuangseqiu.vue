<template>
	<view class="wrap">
		<text class="tip">至少选择6个红球，1个蓝球</text>
		<view class="top">
			<text class="ball red" :class="item.checked?'checked':''" @click="chooseRed(item)" v-for="(item,i) in allRed" :key="'allRed'+i">{{item.num}}</text>
		</view>
		<view class="bottom">
			<text class="ball blue" :class="item.checked?'checked':''" v-for="(item,i) in allBlue" :key="'allBlue'+i" @click="chooseBlue(item)">{{item.num}}</text>
		</view>

		<view class="title" v-if="redList.length>0">您的选号</view>
		<view class="result" v-if="redList.length>0">
			<text class="ball red" v-for="(item,i) in redList" :key="'redList'+i">{{item}}</text>
			<text class="ball blue" v-for="(item,i) in blueList" :key="'blueList'+i">{{item}}</text>
		</view>
		<view class="clear" @click="clear">
			<image src="../../static/image/lajix.svg" mode=""></image>
			<text>清空选号</text>
		</view>
		<button class="btn" type="warn" @click.native="nextStep" :disabled="disabled">下一步</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disabled:true,
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
				},{
					num: '33',
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
				blueList: []
			};
		},
		watch:{
			redList(v){
				if(v.length>5 && this.blueList.length>0){
					this.disabled=false
				}else{
					this.disabled=true
				}
			},
			blueList(v){
				if(v.length>0 && this.redList.length>5){
					this.disabled=false
				}else{
					this.disabled=true
				}
			}
		},
		methods: {
			chooseRed(item) {
				item.checked = !item.checked
				if(!item.checked){
					this.redList.remove(item.num)
					return
				}
				this.redList.push(item.num)
			},
			
			chooseBlue(item) {
				item.checked = !item.checked
				if(!item.checked){
					this.blueList.remove(item.num)
					return
				}
				this.blueList.push(item.num)
			},
			
			nextStep(){
				if(this.disabled){
					uni.showToast({
						icon:'none',
						title:'请至少选择6个红球，1个蓝球！'
					})
				}else{
					this.$http.post('/api/point/save',{type:'s-find'})
					let params = {
						red:this.redList.join(','),
						blue:this.blueList.join(',')
					}
					this.$http.post('/api/two/result',params).then(res => {
						uni.navigateTo({
							url: '/pages/index/result?type=1&result=' + encodeURIComponent(JSON.stringify(res.data))
						});
					})
				}
			},
			clear(){
				this.redList=[];
				this.blueList=[];
				this.allRed.forEach(v=>{
					v.checked=false
				})
				this.allBlue.forEach(v=>{
					v.checked=false
				})
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
		width: 60rpx;
		height: 60rpx;
		padding: 10rpx;
		font-size: 36rpx;
		font-weight: bold;
		border-radius: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		margin: 10rpx;

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
				background:#2a82e4;
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
	
	.btn{
		margin: 40rpx 0;
		width:100%;
	}
	
	.clear{
		position:absolute;
		top:20rpx;
		right:20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color:$bgColor;
		image{
			width: 30rpx;
			height: 30rpx;
		}
	}
</style>
