const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3FimnH6s = await YRX3.new({from: accounts[2]});
		const addressDf4C9UT = accounts[0]
//		await YRX3FimnH6s.exit.call({from: accounts[1]});
//		const addresstDM6Le3 = await YRX3FimnH6s.toPayable.call(addressDf4C9UT, {from: accounts[4]});
//		await YRX3FimnH6s.onlyRewardDistribution.call({from: accounts[0]});

		await expect(YRX3FimnH6s.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3UDv1cS = await YRX3.new({from: accounts[1]});
		const addressGrQTFiH = "0x0000000000000000000000000000000000000001"
		const addressiMsjexZ = "0x0000000000000000000000000000000000000001"
		const addresskJB2fzG = accounts[3]
//		await YRX3UDv1cS.onlyOwner.call({from: accounts[4]});
//		const uint256rKU2JO0 = await YRX3UDv1cS.rewardPerToken.call({from: accounts[3]});
//		const addressPEBbeXx = await YRX3UDv1cS.updateReward.call(addressGrQTFiH, {from: accounts[1]});
//		const addressooFoPt = await YRX3UDv1cS.updateReward.call(addressiMsjexZ, {from: accounts[5]});
//		const addressmA4EHkn = await YRX3UDv1cS.setRewardDistribution.call(addresskJB2fzG, {from: accounts[2]});

		await expect(YRX3UDv1cS.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Uu4VUqM = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uinto6X37Ae = BigInt("300")
		const addressF6EvDw3 = accounts[4]
		const addressjrfiGg5 = "0x0000000000000000000000000000000000000001"
		const uint256tVSRHr2 = await YRX3Uu4VUqM.stake.call(uinto6X37Ae, {from: accounts[1]});
		const uint256Xls1F0A = await YRX3Uu4VUqM.earned.call(addressF6EvDw3, {from: accounts[0]});
		await YRX3Uu4VUqM.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await YRX3Uu4VUqM.onlyRewardDistribution.call({from: accounts[5]});
		const uint256W7o7qrj = await YRX3Uu4VUqM.balanceOf.call(addressjrfiGg5, {from: accounts[0]});
	});

	it('test for YRX3', async () => {
		const YRX3N3NBBN8 = await YRX3.new({from: accounts[0]});
		const uintKwvBplo = BigInt("1585")
//		const uint256yLc0EKb = await YRX3N3NBBN8.stake.call(uintKwvBplo, {from: accounts[3]});
//		await YRX3N3NBBN8.onlyOwner.call({from: accounts[0]});
//		const boolkNZl9xZ = await YRX3N3NBBN8.isOwner.call({from: accounts[4]});
//		await YRX3N3NBBN8.getReward.call({from: accounts[4]});

		await expect(YRX3N3NBBN8.stake.call(uintKwvBplo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3GRsplmB = await YRX3.new({from: accounts[1]});
		const addressU9VMTvu = "0x0000000000000000000000000000000000000001"
//		await YRX3GRsplmB.renounceOwnership.call({from: accounts[3]});
//		await YRX3GRsplmB.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressyw2Mhwd = await YRX3GRsplmB.emergencyDrain.call(addressU9VMTvu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3GRsplmB.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3CJ5pfnF = await YRX3.new({from: accounts[1]});
		const uintAQpFzU6 = BigInt("1311")
		const address0M5y6s = accounts[1]
		const addressoUQ1iGK = accounts[5]
//		const uint256mK0HJo = await YRX3CJ5pfnF.withdraw.call(uintAQpFzU6, {from: "0x0000000000000000000000000000000000000001"});
//		const addresslmMXGpV = await YRX3CJ5pfnF.emergencyDrain.call(address0M5y6s, {from: accounts[4]});
//		const addressoqDjBPN = await YRX3CJ5pfnF.transferOwnership.call(addressoUQ1iGK, {from: accounts[0]});

		await expect(YRX3CJ5pfnF.withdraw.call(uintAQpFzU6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3LzCsfb = await YRX3.new({from: accounts[3]});
		const uintcoXLPZ3 = BigInt("1246")
		const uintmIVKtwu = BigInt("1175")
		const addressVVgBjVM = accounts[1]
//		await YRX3LzCsfb.getReward.call({from: accounts[1]});
//		const uint256jyer9ta = await YRX3LzCsfb.withdraw.call(uintcoXLPZ3, {from: accounts[5]});
//		const uint256aJe8z7n = await YRX3LzCsfb.stake.call(uintmIVKtwu, {from: accounts[0]});
//		const boolke775o = await YRX3LzCsfb.isOwner.call({from: accounts[0]});
//		const uint256xfG1W4 = await YRX3LzCsfb.earned.call(addressVVgBjVM, {from: accounts[1]});
//		await YRX3LzCsfb.checkStart.call({from: accounts[3]});

		await expect(YRX3LzCsfb.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3sFYgD13 = await YRX3.new({from: accounts[0]});
		const addressVN4H7Hj = accounts[3]
		const addressfjA3X2Z = accounts[4]
		const uintZ9GMRej = BigInt("1967")
//		const addressSrDmtxy = await YRX3sFYgD13.emergencyDrain.call(addressVN4H7Hj, {from: accounts[4]});
//		const boolt6cIlOR = await YRX3sFYgD13.isOwner.call({from: accounts[1]});
//		const addressRZt6fuu = await YRX3sFYgD13.emergencyDrain.call(addressfjA3X2Z, {from: accounts[5]});
//		const uint256GFEm1PI = await YRX3sFYgD13.withdraw.call(uintZ9GMRej, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3sFYgD13.emergencyDrain.call(addressVN4H7Hj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3FimnH6s = await YRX3.new({from: accounts[2]});
		const addresshOmq6d = accounts[2]
		const addresscGR54Xr = await YRX3FimnH6s.transferOwnership.call(addresshOmq6d, {from: accounts[2]});
//		await YRX3FimnH6s.exit.call({from: accounts[1]});
//		await YRX3FimnH6s.checkStart.call({from: accounts[5]});

		await expect(YRX3FimnH6s.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3NIfBnfG = await YRX3.new({from: accounts[2]});
		const uintPVTGrQ7 = BigInt("179")
		const uintg0lV2Ir = BigInt("179")
//		await YRX3NIfBnfG.getReward.call({from: accounts[3]});
//		const address2bXA4G = await YRX3NIfBnfG.owner.call({from: accounts[4]});
//		const uint256QDeZKGg = await YRX3NIfBnfG.withdraw.call(uintPVTGrQ7, {from: accounts[5]});
//		const uint256cxKjbU2 = await YRX3NIfBnfG.totalSupply.call({from: accounts[0]});
//		const uint256wvR4Ygj = await YRX3NIfBnfG.stake.call(uintg0lV2Ir, {from: accounts[3]});

		await expect(YRX3NIfBnfG.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3C4zNMBB = await YRX3.new({from: accounts[0]});
		const addressNGvTqBK = accounts[0]
		const addressNdYsIOO = accounts[3]
		const addressrDLjwrs = accounts[1]
		const addressdZNjfK = accounts[3]
		const uint256OgwhkaE = await YRX3C4zNMBB.totalSupply.call({from: accounts[2]});
		const uint256T1K3xxO = await YRX3C4zNMBB.earned.call(addressNGvTqBK, {from: accounts[0]});
		const address4TF3wh = await YRX3C4zNMBB.setRewardDistribution.call(addressNdYsIOO, {from: accounts[0]});
//		await YRX3C4zNMBB.checkNextEpoch.call({from: accounts[3]});
//		const uint256jNj9Yuw = await YRX3C4zNMBB.balanceOf.call(addressrDLjwrs, {from: accounts[5]});
//		const uint256yFT2GIE = await YRX3C4zNMBB.balanceOf.call(addressdZNjfK, {from: accounts[4]});

		assert.equal(uint256OgwhkaE, BigInt("0"))
		assert.equal(uint256T1K3xxO, BigInt("0"))
		await expect(YRX3C4zNMBB.checkNextEpoch.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3FimnH6s = await YRX3.new({from: accounts[2]});
		const uint256yp68wQq = await YRX3FimnH6s.lastTimeRewardApplicable.call({from: accounts[1]});
//		await YRX3FimnH6s.renounceOwnership.call({from: accounts[2]});
//		await YRX3FimnH6s.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256yp68wQq, BigInt("0"))
		await expect(YRX3FimnH6s.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})