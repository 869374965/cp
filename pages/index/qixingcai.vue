<template>
	<view class="wrap">
		<text class="tip">每个位置至少选择1个球</text>
		<view class="top">
			<view class="cell">
				<text class="name">第1位</text>
				<view class="ball-wrap">
					<text class="ball red" :class="item.checked?'checked':''" @click="chooseBall(item,1)" v-for="(item,i) in red1" :key="'red1'+i">{{item.num}}</text>
				</view>
			</view>
			<view class="cell">
				<text class="name">第2位</text>
				<view class="ball-wrap">
					<text class="ball red" :class="item.checked?'checked':''" @click="chooseBall(item,2)" v-for="(item,i) in red2" :key="'red2'+i">{{item.num}}</text>
				</view>
			</view>
			<view class="cell">
				<text class="name">第3位</text>
				<view class="ball-wrap">
					<text class="ball red" :class="item.checked?'checked':''" @click="chooseBall(item,3)" v-for="(item,i) in red3" :key="'red3'+i">{{item.num}}</text>
				</view>
			</view>
			<view class="cell">
				<text class="name">第4位</text>
				<view class="ball-wrap">
					<text class="ball red" :class="item.checked?'checked':''" @click="chooseBall(item,4)" v-for="(item,i) in red4" :key="'red4'+i">{{item.num}}</text>
				</view>
			</view>
			<view class="cell">
				<text class="name">第5位</text>
				<view class="ball-wrap">
					<text class="ball red" :class="item.checked?'checked':''" @click="chooseBall(item,5)" v-for="(item,i) in red5" :key="'red5'+i">{{item.num}}</text>
				</view>
			</view>
			<view class="cell">
				<text class="name">第6位</text>
				<view class="ball-wrap">
					<text class="ball red" :class="item.checked?'checked':''" @click="chooseBall(item,6)" v-for="(item,i) in red6" :key="'red6'+i">{{item.num}}</text>
				</view>
			</view>
			<view class="cell">
				<text class="name">第7位</text>
				<view class="ball-wrap">
					<text class="ball red" :class="item.checked?'checked':''" @click="chooseBall(item,7)" v-for="(item,i) in red7" :key="'red7'+i">{{item.num}}</text>
				</view>
			</view>
		</view>
		<view class="title" v-if="ballList.length>0">您的选号</view>
		<view class="result" v-if="ballList.length>0">
			<view class="result-cell" v-for="(item,i) in ballList" :key="'ballList'+i">
				<text class="ball red" v-for="(v,j) in item" :key="'v'+j">{{v}}</text>
			</view>
		</view>
		
		<view class="clear" @click="clear">
			<image src="../../static/image/lajix.svg" mode=""></image>
			<text>清空选号</text>
		</view>
		<div class="btn-wrap">
			<button class="btn" type="warn" @click.native="nextStep" :disabled="disabled">确定选号</button>
			<button class="btn" type="default" @click.native="search" :disabled="disabled2">查询</button>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disabled: true,
				disabled2: true,
				red: [{
					num: '0',
					checked: false
				}, {
					num: '1',
					checked: false
				}, {
					num: '2',
					checked: false
				}, {
					num: '3',
					checked: false
				}, {
					num: '4',
					checked: false
				}, {
					num: '5',
					checked: false
				}, {
					num: '6',
					checked: false
				}, {
					num: '7',
					checked: false
				}, {
					num: '8',
					checked: false
				}, {
					num: '9',
					checked: false
				}],
				red1: [],
				red2: [],
				red3: [],
				red4: [],
				red5: [],
				red6: [],
				red7: [],
				checkedBall1:[],
				checkedBall2:[],
				checkedBall3:[],
				checkedBall4:[],
				checkedBall5:[],
				checkedBall6:[],
				checkedBall7:[],
				ballList: [],
				
			};
		},
		created() {
			this.red1 = JSON.parse(JSON.stringify(this.red))
			this.red2 = JSON.parse(JSON.stringify(this.red))
			this.red3 = JSON.parse(JSON.stringify(this.red))
			this.red4 = JSON.parse(JSON.stringify(this.red))
			this.red5 = JSON.parse(JSON.stringify(this.red))
			this.red6 = JSON.parse(JSON.stringify(this.red))
			this.red7 = JSON.parse(JSON.stringify(this.red))
		},
		methods: {
			chooseBall(item,pos) {
				item.checked = !item.checked
				if (!item.checked) {
					this['checkedBall'+pos].remove(item.num)
				}else{
					this['checkedBall'+pos].push(item.num)
				}
				if(this.checkedBall1.length>0&&this.checkedBall2.length>0&&this.checkedBall3.length>0&&this.checkedBall4.length>0&&this.checkedBall5.length>0&&this.checkedBall6.length>0&&this.checkedBall7.length>0){
					this.disabled=false
				}else{
					this.disabled=true
				}
			},
			nextStep() {
				if (this.disabled) {
					uni.showToast({
						icon: 'none',
						title: '每个位置至少选择1个球！'
					})
					return
				}
				
				this.checkedBall1.forEach(v1=>{
					this.checkedBall2.forEach(v2=>{
						this.checkedBall3.forEach(v3=>{
							this.checkedBall4.forEach(v4=>{
								this.checkedBall5.forEach(v5=>{
									this.checkedBall6.forEach(v6=>{
										this.checkedBall7.forEach(v7=>{
											let arr = [v1,v2,v3,v4,v5,v6,v7]
											this.ballList.push(arr)
										})
									})
								})
							})
						})
					})
				})
				this.disabled=true
				this.disabled2=false;
				this.clearChecked()
				
			},
			search(){
				if(this.disabled2){
					return
				}
				this.$http.post('/api/point/save',{type:'q-find'})
				let arr = []
				this.ballList.forEach(item=>{
					arr.push(item.join(','))
				})
				let params = {
					ball: arr
				}
				this.$http.post('/api/colorful/result', params).then(res => {
					uni.navigateTo({
						url: '/pages/index/result?type=3&ballList='+encodeURIComponent(JSON.stringify(arr))+'&result=' + encodeURIComponent(JSON.stringify(res.data))
					});
				})
			},
			clearChecked(){
				this.red1.forEach(v=>v.checked=false)
				this.red2.forEach(v=>v.checked=false)
				this.red3.forEach(v=>v.checked=false)
				this.red4.forEach(v=>v.checked=false)
				this.red5.forEach(v=>v.checked=false)
				this.red6.forEach(v=>v.checked=false)
				this.red7.forEach(v=>v.checked=false)
				
				this.checkedBall1 = []
				this.checkedBall2 = []
				this.checkedBall3 = []
				this.checkedBall4 = []
				this.checkedBall5 = []
				this.checkedBall6 = []
				this.checkedBall7 = []
			},
			clear(){
				this.red1.forEach(v=>v.checked=false)
				this.red2.forEach(v=>v.checked=false)
				this.red3.forEach(v=>v.checked=false)
				this.red4.forEach(v=>v.checked=false)
				this.red5.forEach(v=>v.checked=false)
				this.red6.forEach(v=>v.checked=false)
				this.red7.forEach(v=>v.checked=false)
				
				this.checkedBall1 = []
				this.checkedBall2 = []
				this.checkedBall3 = []
				this.checkedBall4 = []
				this.checkedBall5 = []
				this.checkedBall6 = []
				this.checkedBall7 = []
				
				this.ballList=[]
				
				this.disabled=true
				this.disabled2=true;
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
		margin-bottom: 20rpx;
	}

	.top {
		border-bottom: 1px solid #ccc;
		display: flex;
		flex-flow: column;
		padding-bottom: 20rpx;
	}

	.cell {
		display: flex;
		flex-flow: column;
		&:not(:first-child){
			margin-top: 20rpx;
		}

		.name {
			font-size: 24rpx;
			color:#666;
		}
		.ball-wrap{
			display: flex;
		}
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
		font-size: 30rpx;
		font-weight: bold;
		border-radius: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		margin: 5rpx;

		&.red {
			color: red;

			&.checked {
				background: red;
				color: #fff;
			}
		}

		&.blue {
			color: #2a82e4;

			&.checked {
				background: #2a82e4;
				color: #fff;
			}
		}


	}

	.title {
		font-size: 28rpx;
		margin-top: 40rpx;
		margin-bottom: 20rpx;
		padding-left: 10rpx;
	}

	.result {
		display: flex;
		flex-flow: column;
	}
	.result-cell{
		display: flex;
		flex-flow: row wrap;
		margin-bottom: 10rpx;
	}
	.btn-wrap{
		margin: 30rpx 0;
		display: flex;
		flex-flow: column;
	}
	.btn {
		margin-bottom: 20rpx;
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
