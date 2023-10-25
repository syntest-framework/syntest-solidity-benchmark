const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3DhEuetL = await YRX3.new({from: accounts[4]});
		const uintsVrTGg4 = BigInt("890")
		const addresscHxDg11 = accounts[3]
		const addressdhyO1Ep = accounts[3]
		await YRX3DhEuetL.onlyRewardDistribution.call({from: accounts[1]});
		const uint256IUZPUtB = await YRX3DhEuetL.withdraw.call(uintsVrTGg4, {from: accounts[1]});
		await YRX3DhEuetL.exit.call({from: accounts[2]});
		await YRX3DhEuetL.onlyOwner.call({from: accounts[0]});
		const uint256QOWGXRx = await YRX3DhEuetL.earned.call(addresscHxDg11, {from: "0x0000000000000000000000000000000000000001"});
		const uint256z1YO7tz = await YRX3DhEuetL.earned.call(addressdhyO1Ep, {from: accounts[1]});

		await expect(YRX3DhEuetL.onlyRewardDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3t2OoJ9p = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbDBZ1wY = BigInt("1027")
		const addressebKVqtX = accounts[4]
		const uint256nkVFnvr = await YRX3t2OoJ9p.stake.call(uintbDBZ1wY, {from: accounts[5]});
		const uint256tjAaL6B = await YRX3t2OoJ9p.balanceOf.call(addressebKVqtX, {from: accounts[0]});
		await YRX3t2OoJ9p.exit.call({from: accounts[3]});
		await YRX3t2OoJ9p.getReward.call({from: accounts[1]});
	});

	it('test for YRX3', async () => {
		const YRX3ZHzhEr = await YRX3.new({from: accounts[1]});
		await YRX3ZHzhEr.renounceOwnership.call({from: accounts[4]});
		await YRX3ZHzhEr.onlyOwner.call({from: accounts[2]});
		await YRX3ZHzhEr.checkNextEpoch.call({from: accounts[2]});
		await YRX3ZHzhEr.getReward.call({from: accounts[1]});
		const addressLOA4uh = await YRX3ZHzhEr.owner.call({from: accounts[4]});
		await YRX3ZHzhEr.exit.call({from: accounts[4]});

		await expect(YRX3ZHzhEr.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rLW8eA = await YRX3.new({from: accounts[2]});
		const address7J96Io = accounts[2]
		await YRX3rLW8eA.exit.call({from: accounts[4]});
		const addressOv4NsLS = await YRX3rLW8eA.updateReward.call(address7J96Io, {from: accounts[1]});

		await expect(YRX3rLW8eA.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3WHw3TrR = await YRX3.new({from: accounts[1]});
		const uintIVVGQEl = BigInt("905")
		const uintWagRRcf = BigInt("550")
		const addresstpWfeD = accounts[1]
		const uint256asGGTCd = await YRX3WHw3TrR.stake.call(uintIVVGQEl, {from: accounts[4]});
		const uint256XWlD41I = await YRX3WHw3TrR.stake.call(uintWagRRcf, {from: accounts[5]});
		const addressJ6iYne8 = await YRX3WHw3TrR.toPayable.call(addresstpWfeD, {from: accounts[1]});
		await YRX3WHw3TrR.checkStart.call({from: accounts[3]});
		const uint256TX0XpLu = await YRX3WHw3TrR.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(YRX3WHw3TrR.stake.call(uintIVVGQEl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rLW8eA = await YRX3.new({from: accounts[2]});
		const addressuO260i = accounts[2]
		await YRX3rLW8eA.renounceOwnership.call({from: accounts[2]});
		const addressOv4NsLS = await YRX3rLW8eA.updateReward.call(addressuO260i, {from: accounts[1]});

		await expect(YRX3rLW8eA.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rLW8eA = await YRX3.new({from: accounts[2]});
		const uintRXp1k2 = BigInt("102")
		const addressxYQzPPN = accounts[2]
		const uint256od2OGW5 = await YRX3rLW8eA.withdraw.call(uintRXp1k2, {from: accounts[1]});
		const addresscoxRVIh = await YRX3rLW8eA.owner.call({from: accounts[3]});
		const uint256zr4L7Ty = await YRX3rLW8eA.rewardPerToken.call({from: accounts[0]});
		const addressOv4NsLS = await YRX3rLW8eA.updateReward.call(addressxYQzPPN, {from: accounts[1]});

		await expect(YRX3rLW8eA.withdraw.call(uintRXp1k2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rLW8eA = await YRX3.new({from: accounts[2]});
		const addressoiaowOc = accounts[3]
		await YRX3rLW8eA.getReward.call({from: accounts[3]});
		const addressOv4NsLS = await YRX3rLW8eA.updateReward.call(addressoiaowOc, {from: accounts[1]});

		await expect(YRX3rLW8eA.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rLW8eA = await YRX3.new({from: accounts[2]});
		const addressEE0pjjr = accounts[3]
		await YRX3rLW8eA.notifyRewardAmount.call({from: accounts[0]});
		const addressOv4NsLS = await YRX3rLW8eA.updateReward.call(addressEE0pjjr, {from: accounts[1]});

		await expect(YRX3rLW8eA.notifyRewardAmount.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rLW8eA = await YRX3.new({from: accounts[2]});
		const addressTWmZeH2 = accounts[3]
		const addressTNcc1p = await YRX3rLW8eA.owner.call({from: accounts[4]});
		const addressOv4NsLS = await YRX3rLW8eA.updateReward.call(addressTWmZeH2, {from: accounts[1]});

		assert.equal(addressTNcc1p, 0xaB7bD7dC7C5D7d9DAa8269983f62866F28bfB234)
		await expect(YRX3rLW8eA.updateReward.call(addressTWmZeH2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rLW8eA = await YRX3.new({from: accounts[2]});
		const address8VBk2t = accounts[4]
		const addressxCodGK = accounts[1]
		const addressMi9TrLz = await YRX3rLW8eA.setRewardDistribution.call(address8VBk2t, {from: accounts[2]});
		const addresswFcbNBs = await YRX3rLW8eA.emergencyDrain.call(addressxCodGK, {from: "0x0000000000000000000000000000000000000001"});
		await YRX3rLW8eA.getReward.call({from: accounts[3]});
		await YRX3rLW8eA.onlyRewardDistribution.call({from: accounts[5]});

		await expect(YRX3rLW8eA.emergencyDrain.call(addressxCodGK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3VIZdKNd = await YRX3.new({from: accounts[1]});
		const addressoxNFLIK = accounts[5]
		const addresspdmAkvb = await YRX3VIZdKNd.transferOwnership.call(addressoxNFLIK, {from: accounts[1]});
		await YRX3VIZdKNd.renounceOwnership.call({from: accounts[2]});
		await YRX3VIZdKNd.onlyOwner.call({from: accounts[1]});
		await YRX3VIZdKNd.getReward.call({from: accounts[4]});

		await expect(YRX3VIZdKNd.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})