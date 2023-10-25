const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3ZecWfhw = await YRX3.new({from: accounts[0]});
		const addressZ74uVV7 = accounts[3]
		const uintcDkEET8 = BigInt("937")
//		const addressYfzSLh6 = await YRX3ZecWfhw.updateReward.call(addressZ74uVV7, {from: accounts[1]});
//		const uint256SRoPysl = await YRX3ZecWfhw.stake.call(uintcDkEET8, {from: accounts[0]});
//		await YRX3ZecWfhw.notifyRewardAmount.call({from: accounts[4]});
//		await YRX3ZecWfhw.renounceOwnership.call({from: accounts[4]});

		await expect(YRX3ZecWfhw.updateReward.call(addressZ74uVV7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3jASoSzD = await YRX3.new({from: accounts[5]});
		const addressMueurEm = "0x0000000000000000000000000000000000000001"
//		await YRX3jASoSzD.getReward.call({from: accounts[4]});
//		const addressZDmtlAm = await YRX3jASoSzD.transferOwnership.call(addressMueurEm, {from: accounts[1]});
//		await YRX3jASoSzD.getReward.call({from: accounts[5]});

		await expect(YRX3jASoSzD.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3ImemF6Z = await YRX3.new({from: accounts[3]});
		const addressUf85a4W = accounts[3]
		const addressKFrXzFH = accounts[4]
//		await YRX3ImemF6Z.renounceOwnership.call({from: accounts[3]});
//		const uint256eirLS9w = await YRX3ImemF6Z.totalSupply.call({from: accounts[2]});
//		const uint256RYUCG25 = await YRX3ImemF6Z.earned.call(addressUf85a4W, {from: accounts[4]});
//		const addressGT0Lutp = await YRX3ImemF6Z.transferOwnership.call(addressKFrXzFH, {from: accounts[2]});
//		const uint256XCKind6 = await YRX3ImemF6Z.rewardPerToken.call({from: accounts[1]});
//		const uint256RamwS7S = await YRX3ImemF6Z.totalSupply.call({from: accounts[4]});

		await expect(YRX3ImemF6Z.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3eFMdR2F = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUSn2o4m = accounts[3]
		const uintrfqz1f = BigInt("1873")
		const uintjbBwKgf = BigInt("1221")
		const addressLlNNr9 = await YRX3eFMdR2F.updateReward.call(addressUSn2o4m, {from: "0x0000000000000000000000000000000000000001"});
		await YRX3eFMdR2F.checkStart.call({from: accounts[1]});
		const uint2567HnFfa = await YRX3eFMdR2F.withdraw.call(uintrfqz1f, {from: accounts[3]});
		const uint256rZg3qn4 = await YRX3eFMdR2F.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256FG8NFsS = await YRX3eFMdR2F.stake.call(uintjbBwKgf, {from: accounts[4]});
		await YRX3eFMdR2F.checkNextEpoch.call({from: accounts[4]});
	});

	it('test for YRX3', async () => {
		const YRX3JG1DxsB = await YRX3.new({from: accounts[2]});
		const uintGvrxQK = BigInt("476")
		const addressu53bpV = accounts[4]
//		const uint256NQiqIAe = await YRX3JG1DxsB.stake.call(uintGvrxQK, {from: accounts[0]});
//		await YRX3JG1DxsB.getReward.call({from: accounts[4]});
//		const addressW2fADw8 = await YRX3JG1DxsB.toPayable.call(addressu53bpV, {from: accounts[5]});

		await expect(YRX3JG1DxsB.stake.call(uintGvrxQK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX382aghJ = await YRX3.new({from: accounts[4]});
		const uintXEqdb5A = BigInt("583")
//		const uint256bf6AAtk = await YRX382aghJ.withdraw.call(uintXEqdb5A, {from: accounts[2]});

		await expect(YRX382aghJ.withdraw.call(uintXEqdb5A, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX382aghJ = await YRX3.new({from: accounts[4]});
		const addressu9IOgLH = accounts[4]
		const uintkF4GUc9 = BigInt("582")
//		const addressUEBzcui = await YRX382aghJ.emergencyDrain.call(addressu9IOgLH, {from: accounts[4]});
//		const uint256bf6AAtk = await YRX382aghJ.withdraw.call(uintkF4GUc9, {from: accounts[2]});
//		await YRX382aghJ.exit.call({from: accounts[0]});

		await expect(YRX382aghJ.emergencyDrain.call(addressu9IOgLH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JG1DxsB = await YRX3.new({from: accounts[2]});
//		await YRX3JG1DxsB.getReward.call({from: accounts[4]});
//		const addressKj6J4e = await YRX3JG1DxsB.owner.call({from: accounts[1]});

		await expect(YRX3JG1DxsB.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JG1DxsB = await YRX3.new({from: accounts[2]});
//		await YRX3JG1DxsB.exit.call({from: accounts[3]});
//		await YRX3JG1DxsB.onlyOwner.call({from: accounts[2]});
//		await YRX3JG1DxsB.getReward.call({from: accounts[4]});

		await expect(YRX3JG1DxsB.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX382aghJ = await YRX3.new({from: accounts[4]});
		const addresswlfjo1E = accounts[1]
		const uintVgZA32O = BigInt("583")
		const addresspB6O1Bi = await YRX382aghJ.transferOwnership.call(addresswlfjo1E, {from: accounts[4]});
		const addressFi5unL = await YRX382aghJ.owner.call({from: accounts[0]});
//		const uint256bf6AAtk = await YRX382aghJ.withdraw.call(uintVgZA32O, {from: accounts[2]});

		assert.equal(addressFi5unL, 0x719A8fe87c4Dc0A7bA6579af1BdF13753F268A49)
		await expect(YRX382aghJ.withdraw.call(uintVgZA32O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JG1DxsB = await YRX3.new({from: accounts[2]});
		const addresshUNkUX = accounts[4]
		const addressKdhC9Ih = accounts[3]
//		await YRX3JG1DxsB.getReward.call({from: accounts[4]});
//		const addressEMwrVaV = await YRX3JG1DxsB.setRewardDistribution.call(addresshUNkUX, {from: accounts[2]});
//		const addressn5votWz = await YRX3JG1DxsB.updateReward.call(addressKdhC9Ih, {from: accounts[1]});

		await expect(YRX3JG1DxsB.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})