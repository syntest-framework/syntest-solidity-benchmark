const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardeFql6Fq = await AavePoolReward.new({from: accounts[5]});
		const uintIc9WNxh = BigInt("1295")
		const uintZ6Tif1A = BigInt("423")
//		const uint256j4gfH1M = await AavePoolRewardeFql6Fq.notifyRewardAmount.call(uintIc9WNxh, {from: accounts[4]});
//		await AavePoolRewardeFql6Fq.getReward.call({from: accounts[4]});
//		const uint256GJxZWo = await AavePoolRewardeFql6Fq.notifyRewardAmount.call(uintZ6Tif1A, {from: accounts[0]});

		await expect(AavePoolRewardeFql6Fq.notifyRewardAmount.call(uintIc9WNxh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardbnlFbST = await AavePoolReward.new({from: accounts[0]});
		const addressdQfu7L8 = accounts[5]
		const uintshvpL4Y = BigInt("963")
		const uintu790TDy = BigInt("475")
		const uint256h8lQPwJ = await AavePoolRewardbnlFbST.earned.call(addressdQfu7L8, {from: accounts[1]});
//		const uint256GCJEHmu = await AavePoolRewardbnlFbST.withdraw.call(uintshvpL4Y, {from: accounts[4]});
//		await AavePoolRewardbnlFbST.exit.call({from: accounts[4]});
//		const uint256ddGgh7s = await AavePoolRewardbnlFbST.withdraw.call(uintu790TDy, {from: accounts[3]});

		assert.equal(uint256h8lQPwJ, BigInt("0"))
		await expect(AavePoolRewardbnlFbST.withdraw.call(uintshvpL4Y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardRCFlN4K = await AavePoolReward.new({from: accounts[3]});
//		await AavePoolRewardRCFlN4K.exit.call({from: accounts[2]});
//		await AavePoolRewardRCFlN4K.getReward.call({from: accounts[1]});

		await expect(AavePoolRewardRCFlN4K.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardkoiiIrx = await AavePoolReward.new({from: accounts[2]});
		const addressCO7xv4v = accounts[1]
		const uintnBk5ypr = BigInt("1691")
		const uint256qAG9xkb = await AavePoolRewardkoiiIrx.rewardPerToken.call({from: accounts[0]});
//		await AavePoolRewardkoiiIrx.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await AavePoolRewardkoiiIrx.getReward.call({from: accounts[4]});
//		const addressEUpZMkE = await AavePoolRewardkoiiIrx.dev.call(addressCO7xv4v, {from: accounts[3]});
//		const uint256qcLnv1X = await AavePoolRewardkoiiIrx.stake.call(uintnBk5ypr, {from: accounts[4]});

		assert.equal(uint256qAG9xkb, BigInt("0"))
		await expect(AavePoolRewardkoiiIrx.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardulFb1m = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFQPTVVB = BigInt("1447")
		const uintkGe5Von = BigInt("332")
		const uint256KtVqAMU = await AavePoolRewardulFb1m.rewardPerToken.call({from: accounts[3]});
		const uint256HUKGoS = await AavePoolRewardulFb1m.withdraw.call(uintFQPTVVB, {from: accounts[0]});
		const uint256qsoJ7ar = await AavePoolRewardulFb1m.notifyRewardAmount.call(uintkGe5Von, {from: accounts[1]});
		await AavePoolRewardulFb1m.exit.call({from: accounts[1]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardvV9CftU = await AavePoolReward.new({from: accounts[3]});
		const uintjVtGDrG = BigInt("1567")
		const uintXnPVr0 = BigInt("374")
//		const uint256nGIExGO = await AavePoolRewardvV9CftU.stake.call(uintjVtGDrG, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256NjuiO8T = await AavePoolRewardvV9CftU.rewardPerToken.call({from: accounts[5]});
//		const uint256XUABjT1 = await AavePoolRewardvV9CftU.withdraw.call(uintXnPVr0, {from: accounts[1]});

		await expect(AavePoolRewardvV9CftU.stake.call(uintjVtGDrG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardRCFlN4K = await AavePoolReward.new({from: accounts[3]});
		const addresscLwsSMP = accounts[3]
		const uints73525j = BigInt("219")
//		const addresszPiF1Bq = await AavePoolRewardRCFlN4K.updateReward.call(addresscLwsSMP, {from: accounts[1]});
//		await AavePoolRewardRCFlN4K.getReward.call({from: accounts[1]});
//		const uint256aWXRMbW = await AavePoolRewardRCFlN4K.stake.call(uints73525j, {from: accounts[5]});
//		const uint256RgpRGQm = await AavePoolRewardRCFlN4K.rewardPerToken.call({from: accounts[2]});

		await expect(AavePoolRewardRCFlN4K.updateReward.call(addresscLwsSMP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardkoiiIrx = await AavePoolReward.new({from: accounts[2]});
		const uintNWPPhs = BigInt("1")
		const addresssOy1zxs = accounts[1]
		const uintIIgGpSr = BigInt("1691")
		const uint256qAG9xkb = await AavePoolRewardkoiiIrx.rewardPerToken.call({from: accounts[0]});
//		await AavePoolRewardkoiiIrx.getReward.call({from: accounts[4]});
//		const uint256Isez13n = await AavePoolRewardkoiiIrx.notifyRewardAmount.call(uintNWPPhs, {from: accounts[2]});
//		const addressEUpZMkE = await AavePoolRewardkoiiIrx.dev.call(addresssOy1zxs, {from: accounts[3]});
//		const uint256jNFWH29 = await AavePoolRewardkoiiIrx.rewardPerToken.call({from: accounts[2]});
//		const uint256qcLnv1X = await AavePoolRewardkoiiIrx.stake.call(uintIIgGpSr, {from: accounts[4]});

		assert.equal(uint256qAG9xkb, BigInt("0"))
		await expect(AavePoolRewardkoiiIrx.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardRCFlN4K = await AavePoolReward.new({from: accounts[3]});
		const addresshS0aKj = accounts[5]
//		await AavePoolRewardRCFlN4K.getReward.call({from: accounts[1]});
//		const addresseWHPKvF = await AavePoolRewardRCFlN4K.dev.call(addresshS0aKj, {from: accounts[3]});

		await expect(AavePoolRewardRCFlN4K.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})