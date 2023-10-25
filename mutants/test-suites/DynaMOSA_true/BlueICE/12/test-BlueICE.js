const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEUpWQshs = await BlueICE.new({from: accounts[3]});
		const addressFBvk2Ox = accounts[1]
		const uintUBSW8j = BigInt("364")
		const uinti20XjTc = BigInt("155")
		const boolhPIdfGE = await BlueICEUpWQshs.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qQj1BKV = await BlueICEUpWQshs.rewardPerToken.call({from: accounts[1]});
		const uint256UPPfBat = await BlueICEUpWQshs.earned.call(addressFBvk2Ox, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256QDSqctr = await BlueICEUpWQshs.unstake.call(uintUBSW8j, {from: accounts[1]});
//		const uint256KeoOI8B = await BlueICEUpWQshs.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256BeiKHIJ = await BlueICEUpWQshs.unstake.call(uinti20XjTc, {from: accounts[4]});

		assert.equal(boolhPIdfGE, false)
		assert.equal(uint256UPPfBat, BigInt("0"))
		assert.equal(uint256qQj1BKV, BigInt("0"))
		await expect(BlueICEUpWQshs.unstake.call(uintUBSW8j, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEBRcwjim = await BlueICE.new({from: accounts[4]});
		const uintcDKt4af = BigInt("645")
		const addressrWtIRmf = accounts[2]
		const addresscYMkDM = accounts[4]
//		const uint256nRgMiP1 = await BlueICEBRcwjim.stake.call(uintcDKt4af, {from: accounts[0]});
//		const addressKSFsznU = await BlueICEBRcwjim.transferOwnership.call(addressrWtIRmf, {from: "0x0000000000000000000000000000000000000001"});
//		const addressrioNXWl = await BlueICEBRcwjim.updateReward.call(addresscYMkDM, {from: accounts[2]});

		await expect(BlueICEBRcwjim.stake.call(uintcDKt4af, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEr56NBRt = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXJczAHE = accounts[0]
		const uintLf02iVk = BigInt("1955")
		await BlueICEr56NBRt.renounceOwnership.call({from: accounts[2]});
		const boolgzXl5j = await BlueICEr56NBRt.isOwner.call({from: accounts[3]});
		const uint256i2kMdHz = await BlueICEr56NBRt.rewardPerToken.call({from: accounts[3]});
		const addressk9Bqak = await BlueICEr56NBRt.updateReward.call(addressXJczAHE, {from: accounts[3]});
		const uint256Jqez8H0 = await BlueICEr56NBRt.unstake.call(uintLf02iVk, {from: accounts[1]});
	});

	it('test for BlueICE', async () => {
		const BlueICELy2R4Mn = await BlueICE.new({from: accounts[3]});
		const uintxCgl6Xr = BigInt("71")
//		await BlueICELy2R4Mn.onlyOwner.call({from: accounts[5]});
//		const uint256Sa7vohX = await BlueICELy2R4Mn.notifyRewardAmount.call(uintxCgl6Xr, {from: accounts[4]});
//		await BlueICELy2R4Mn.renounceOwnership.call({from: accounts[0]});

		await expect(BlueICELy2R4Mn.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEPhZHz0e = await BlueICE.new({from: accounts[2]});
		const uint256T9rmgmy = await BlueICEPhZHz0e.rewardPerToken.call({from: accounts[4]});
//		await BlueICEPhZHz0e.renounceOwnership.call({from: accounts[4]});
//		const uint256cHarVi0 = await BlueICEPhZHz0e.getCurrentRewardReserve.call({from: accounts[0]});
//		const uint256XYA7QqU = await BlueICEPhZHz0e.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uint256T9rmgmy, BigInt("0"))
		await expect(BlueICEPhZHz0e.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEv2dFqc8 = await BlueICE.new({from: accounts[3]});
		const addressAEuzhJP = accounts[1]
		const uint256D7CmOMQ = await BlueICEv2dFqc8.earned.call(addressAEuzhJP, {from: accounts[0]});
//		await BlueICEv2dFqc8.exit.call({from: accounts[2]});
//		const uint256B8sBS1p = await BlueICEv2dFqc8.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ylZq6k3 = await BlueICEv2dFqc8.getCurrentRewardReserve.call({from: accounts[3]});
//		await BlueICEv2dFqc8.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256D7CmOMQ, BigInt("0"))
		await expect(BlueICEv2dFqc8.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnJDdE08 = await BlueICE.new({from: accounts[4]});
		const boolWIzNbbb = await BlueICEnJDdE08.isOwner.call({from: accounts[1]});
		const uint256bPt6rlA = await BlueICEnJDdE08.getCurrentRewardReserve.call({from: accounts[1]});
		const boolCApjbCz = await BlueICEnJDdE08.isOwner.call({from: accounts[0]});

		assert.equal(boolCApjbCz, false)
		assert.equal(boolWIzNbbb, false)
		assert.equal(uint256bPt6rlA, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICEBRcwjim = await BlueICE.new({from: accounts[4]});
		const addressfp3J7hS = accounts[2]
		const uintlhe9v9B = BigInt("634")
		const addressPRov9aI = accounts[5]
		const addressBFg3ufN = accounts[4]
		const addressPfbv5Cy = await BlueICEBRcwjim.transferOwnership.call(addressfp3J7hS, {from: accounts[4]});
//		const uint256nRgMiP1 = await BlueICEBRcwjim.stake.call(uintlhe9v9B, {from: accounts[0]});
//		const addressKSFsznU = await BlueICEBRcwjim.transferOwnership.call(addressPRov9aI, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256RsGR7k0 = await BlueICEBRcwjim.getCurrentRewardReserve.call({from: accounts[2]});
//		const addressrioNXWl = await BlueICEBRcwjim.updateReward.call(addressBFg3ufN, {from: accounts[2]});

		await expect(BlueICEBRcwjim.stake.call(uintlhe9v9B, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEgS1Ipld = await BlueICE.new({from: accounts[1]});
		const uintrKw72P2 = BigInt("294")
		const addressarrayU2ostWk = await BlueICEgS1Ipld.getCommunity.call({from: accounts[0]});
//		const uint256YoeZudP = await BlueICEgS1Ipld.unstake.call(uintrKw72P2, {from: "0x0000000000000000000000000000000000000001"});
//		await BlueICEgS1Ipld.renounceOwnership.call({from: accounts[2]});
//		const addressT6fjc2 = await BlueICEgS1Ipld.owner.call({from: accounts[4]});
//		const addressarrayID0CdcN = await BlueICEgS1Ipld.getCommunity.call({from: accounts[3]});
//		await BlueICEgS1Ipld.checkhalv.call({from: accounts[0]});

		assert.equal(addressarrayU2ostWk, )
		await expect(BlueICEgS1Ipld.unstake.call(uintrKw72P2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEBRcwjim = await BlueICE.new({from: accounts[4]});
		const uintKHhLwjL = BigInt("1785")
		const addresssc2SJSI = accounts[2]
		const addressGr619Jd = accounts[5]
		const uintwETDzIn = BigInt("546")
		const addresssvGSDbP = accounts[4]
//		await BlueICEBRcwjim.claimRewards.call({from: accounts[5]});
//		const uint256jUCTUXJ = await BlueICEBRcwjim.notifyRewardAmount.call(uintKHhLwjL, {from: "0x0000000000000000000000000000000000000001"});
//		await BlueICEBRcwjim.exit.call({from: accounts[1]});
//		const addressPfbv5Cy = await BlueICEBRcwjim.transferOwnership.call(addresssc2SJSI, {from: accounts[4]});
//		const addressKSFsznU = await BlueICEBRcwjim.transferOwnership.call(addressGr619Jd, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256RsGR7k0 = await BlueICEBRcwjim.getCurrentRewardReserve.call({from: accounts[2]});
//		const addressarrayLosqvyk = await BlueICEBRcwjim.getCommunity.call({from: accounts[4]});
//		const uint256cPTiMg8 = await BlueICEBRcwjim.unstake.call(uintwETDzIn, {from: accounts[2]});
//		const addresscvlOEod = await BlueICEBRcwjim.owner.call({from: accounts[2]});
//		const addressrioNXWl = await BlueICEBRcwjim.updateReward.call(addresssvGSDbP, {from: accounts[2]});

		await expect(BlueICEBRcwjim.claimRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEBRcwjim = await BlueICE.new({from: accounts[4]});
		const uintWf7q4jc = BigInt("645")
		const addressWMoXmdP = await BlueICEBRcwjim.owner.call({from: accounts[5]});
//		const uint256nRgMiP1 = await BlueICEBRcwjim.stake.call(uintWf7q4jc, {from: accounts[0]});

		assert.equal(addressWMoXmdP, 0x4d13545C99bD4c7DF681b0313476B5F92bE42609)
		await expect(BlueICEBRcwjim.stake.call(uintWf7q4jc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEBRcwjim = await BlueICE.new({from: accounts[4]});
		const uintBzqMnGl = BigInt("646")
		const addressCcOpmUY = accounts[4]
//		await BlueICEBRcwjim.renounceOwnership.call({from: accounts[4]});
//		const uint256nRgMiP1 = await BlueICEBRcwjim.stake.call(uintBzqMnGl, {from: accounts[0]});
//		const addresssfRzPMb = await BlueICEBRcwjim.updateReward.call(addressCcOpmUY, {from: accounts[3]});

		await expect(BlueICEBRcwjim.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEBRcwjim = await BlueICE.new({from: accounts[4]});
		const uintJUqDLj = BigInt("852")
		const uintu3OS0bv = BigInt("27")
//		const uint256vMGkbvC = await BlueICEBRcwjim.notifyRewardAmount.call(uintJUqDLj, {from: accounts[4]});
//		const uint256V8mXJua = await BlueICEBRcwjim.stake.call(uintu3OS0bv, {from: accounts[1]});
//		const uint256lpG5OQk = await BlueICEBRcwjim.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(BlueICEBRcwjim.notifyRewardAmount.call(uintJUqDLj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})