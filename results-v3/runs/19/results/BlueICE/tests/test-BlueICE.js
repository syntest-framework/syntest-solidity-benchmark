const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEge2utD = await BlueICE.new({from: accounts[3]});
		const addressVq15RWe = "0x0000000000000000000000000000000000000001"
		const addressp2FzXM = accounts[3]
		await BlueICEge2utD.renounceOwnership.call({from: accounts[2]});
		const uint256yWaLwqP = await BlueICEge2utD.earned.call(addressVq15RWe, {from: accounts[0]});
		await BlueICEge2utD.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressRkd2Zq4 = await BlueICEge2utD.transferOwnership.call(addressp2FzXM, {from: accounts[0]});

		await expect(BlueICEge2utD.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEVxlO3sF = await BlueICE.new({from: accounts[0]});
		const addressbCoPXe4 = accounts[0]
		await BlueICEVxlO3sF.onlyOwner.call({from: accounts[2]});
		const addressLXNcD5 = await BlueICEVxlO3sF.updateReward.call(addressbCoPXe4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEVxlO3sF.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEvBwhHr = await BlueICE.new({from: accounts[2]});
		const uint256fRItKeN = await BlueICEvBwhHr.getCurrentRewardReserve.call({from: accounts[3]});
		await BlueICEvBwhHr.onlyOwner.call({from: accounts[5]});
		const uint256hy4dpGU = await BlueICEvBwhHr.rewardPerToken.call({from: accounts[5]});
		await BlueICEvBwhHr.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256fRItKeN, BigInt("500000000000000000000"))
		await expect(BlueICEvBwhHr.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEflT1Dj = await BlueICE.new({from: accounts[5]});
		const addressa3gPjq = accounts[0]
		const addressarrayxZoJWuM = await BlueICEflT1Dj.getCommunity.call({from: accounts[2]});
		const uint256oC5jrhl = await BlueICEflT1Dj.earned.call(addressa3gPjq, {from: accounts[2]});
		const uint256B49wYw = await BlueICEflT1Dj.getCurrentRewardReserve.call({from: accounts[1]});
		await BlueICEflT1Dj.onlyOwner.call({from: accounts[2]});

		assert.equal(addressarrayxZoJWuM, )
		assert.equal(uint256B49wYw, BigInt("500000000000000000000"))
		assert.equal(uint256oC5jrhl, BigInt("0"))
		await expect(BlueICEflT1Dj.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEHUoH2t7 = await BlueICE.new({from: accounts[5]});
		const uintOAqtiQw = BigInt("1244")
		const uintNM2bacJ = BigInt("1430")
		const uintGGyRbDu = BigInt("1721")
		const uint256IHdMfpJ = await BlueICEHUoH2t7.rewardPerToken.call({from: accounts[4]});
		const uint256enuU39M = await BlueICEHUoH2t7.unstake.call(uintOAqtiQw, {from: accounts[0]});
		const uint256bQaSNjE = await BlueICEHUoH2t7.stake.call(uintNM2bacJ, {from: accounts[0]});
		await BlueICEHUoH2t7.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256aFnoIkq = await BlueICEHUoH2t7.stake.call(uintGGyRbDu, {from: accounts[4]});

		assert.equal(uint256IHdMfpJ, BigInt("0"))
		await expect(BlueICEHUoH2t7.unstake.call(uintOAqtiQw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEHUoH2t7 = await BlueICE.new({from: accounts[5]});
		const uintxVz51ym = BigInt("1430")
		const uintyk3xwRE = BigInt("1721")
		const uint256IHdMfpJ = await BlueICEHUoH2t7.rewardPerToken.call({from: accounts[4]});
		const uint256bQaSNjE = await BlueICEHUoH2t7.stake.call(uintxVz51ym, {from: accounts[0]});
		await BlueICEHUoH2t7.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256aFnoIkq = await BlueICEHUoH2t7.stake.call(uintyk3xwRE, {from: accounts[4]});

		assert.equal(uint256IHdMfpJ, BigInt("0"))
		await expect(BlueICEHUoH2t7.stake.call(uintxVz51ym, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEge2utD = await BlueICE.new({from: accounts[3]});
		const addressTeDEShE = "0x0000000000000000000000000000000000000001"
		const addressPCqhO0 = accounts[0]
		const addresstsTEllH = accounts[3]
		const uint256yWaLwqP = await BlueICEge2utD.earned.call(addressTeDEShE, {from: accounts[0]});
		await BlueICEge2utD.exit.call({from: accounts[2]});
		await BlueICEge2utD.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressjmM8zmY = await BlueICEge2utD.transferOwnership.call(addressPCqhO0, {from: accounts[3]});
		const addressRkd2Zq4 = await BlueICEge2utD.transferOwnership.call(addresstsTEllH, {from: accounts[0]});

		assert.equal(uint256yWaLwqP, BigInt("0"))
		await expect(BlueICEge2utD.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEflT1Dj = await BlueICE.new({from: accounts[5]});
		const addressOwM3bUl = accounts[1]
		const addressarrayxZoJWuM = await BlueICEflT1Dj.getCommunity.call({from: accounts[2]});
		const addressBKMm2w = await BlueICEflT1Dj.owner.call({from: accounts[3]});
		const uint256oC5jrhl = await BlueICEflT1Dj.earned.call(addressOwM3bUl, {from: accounts[2]});
		const uint256B49wYw = await BlueICEflT1Dj.getCurrentRewardReserve.call({from: accounts[1]});
		await BlueICEflT1Dj.onlyOwner.call({from: accounts[2]});

		assert.equal(addressBKMm2w, 0x3F1dcFCeA8f490261A49C2Ae96Af91f81C0705e0)
		assert.equal(addressarrayxZoJWuM, )
		assert.equal(uint256B49wYw, BigInt("500000000000000000000"))
		assert.equal(uint256oC5jrhl, BigInt("0"))
		await expect(BlueICEflT1Dj.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEflT1Dj = await BlueICE.new({from: accounts[5]});
		const addressp6B3VEV = accounts[1]
		await BlueICEflT1Dj.claimRewards.call({from: accounts[0]});
		const addressarrayxZoJWuM = await BlueICEflT1Dj.getCommunity.call({from: accounts[2]});
		await BlueICEflT1Dj.exit.call({from: accounts[0]});
		const uint256oC5jrhl = await BlueICEflT1Dj.earned.call(addressp6B3VEV, {from: accounts[2]});
		const uint256B49wYw = await BlueICEflT1Dj.getCurrentRewardReserve.call({from: accounts[1]});
		await BlueICEflT1Dj.onlyOwner.call({from: accounts[2]});

		await expect(BlueICEflT1Dj.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEHUoH2t7 = await BlueICE.new({from: accounts[5]});
		const uintech1BHm = BigInt("664")
		const uintMSNUxBJ = BigInt("1419")
		const uint256IHdMfpJ = await BlueICEHUoH2t7.rewardPerToken.call({from: accounts[4]});
		const uint256jzMu5Es = await BlueICEHUoH2t7.notifyRewardAmount.call(uintech1BHm, {from: accounts[5]});
		const uint256j41QmUL = await BlueICEHUoH2t7.rewardPerToken.call({from: accounts[0]});
		const uint256bQaSNjE = await BlueICEHUoH2t7.stake.call(uintMSNUxBJ, {from: accounts[0]});
		await BlueICEHUoH2t7.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEHUoH2t7.onlyOwner.call({from: accounts[0]});

		assert.equal(uint256IHdMfpJ, BigInt("0"))
		await expect(BlueICEHUoH2t7.notifyRewardAmount.call(uintech1BHm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEg61q5lp = await BlueICE.new({from: accounts[5]});
		const addresssCqcXE6 = accounts[5]
		const addressUaLl3vm = accounts[2]
		const uintFHxJBWt = BigInt("942")
		const addressrUaFSHW = await BlueICEg61q5lp.owner.call({from: accounts[4]});
		const uint256a3fl4VJ = await BlueICEg61q5lp.earned.call(addresssCqcXE6, {from: "0x0000000000000000000000000000000000000001"});
		const addressiBz3UoF = await BlueICEg61q5lp.transferOwnership.call(addressUaLl3vm, {from: accounts[5]});
		const booleaSfD9S = await BlueICEg61q5lp.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256YI6i1Jq = await BlueICEg61q5lp.stake.call(uintFHxJBWt, {from: accounts[5]});
		const addressVktLKoZ = await BlueICEg61q5lp.owner.call({from: accounts[1]});

		assert.equal(addressrUaFSHW, 0x3F1dcFCeA8f490261A49C2Ae96Af91f81C0705e0)
		assert.equal(booleaSfD9S, false)
		assert.equal(uint256a3fl4VJ, BigInt("0"))
		await expect(BlueICEg61q5lp.stake.call(uintFHxJBWt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEal4PhdM = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzCfBAh = BigInt("1700")
		const uintGDVk3os = BigInt("1089")
		const uint256nLICbai = await BlueICEal4PhdM.notifyRewardAmount.call(uintzCfBAh, {from: accounts[5]});
		const bool8p0MVj = await BlueICEal4PhdM.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256EYB05ns = await BlueICEal4PhdM.unstake.call(uintGDVk3os, {from: accounts[4]});
		const addressarrayKOONArZ = await BlueICEal4PhdM.getCommunity.call({from: accounts[0]});
	});

	it('test for BlueICE', async () => {
		const BlueICETuJxVmc = await BlueICE.new({from: accounts[4]});
		const uintr5CqWaa = BigInt("1602")
		const uintdGSjlT = BigInt("1219")
		const uintrJSpOy = BigInt("1233")
		await BlueICETuJxVmc.renounceOwnership.call({from: accounts[4]});
		const uint256kHUezt = await BlueICETuJxVmc.stake.call(uintr5CqWaa, {from: accounts[4]});
		const uint256pymcWx3 = await BlueICETuJxVmc.stake.call(uintdGSjlT, {from: accounts[2]});
		const uint256dhJuLyl = await BlueICETuJxVmc.rewardPerToken.call({from: accounts[2]});
		const uint256J6G5zN3 = await BlueICETuJxVmc.unstake.call(uintrJSpOy, {from: accounts[3]});
		const addressarrayZuhgr8P = await BlueICETuJxVmc.getCommunity.call({from: accounts[4]});

		await expect(BlueICETuJxVmc.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})