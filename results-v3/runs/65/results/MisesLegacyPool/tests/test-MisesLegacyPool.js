const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addresswPgNEUs = accounts[3]
		const addressrYM2y4k = accounts[2]
		const uintTDsQp00 = BigInt("1106")
		const uintEuYtibi = BigInt("1472")
		const MisesLegacyPoolnOLr7Xm = await MisesLegacyPool.new(addresswPgNEUs, addressrYM2y4k, uintTDsQp00, uintEuYtibi, {from: accounts[0]});
		const addressjsVujUF = accounts[4]
		const uint256R4AZf0 = await MisesLegacyPoolnOLr7Xm.rewardPerToken.call({from: accounts[2]});
		await MisesLegacyPoolnOLr7Xm.getReward.call({from: accounts[2]});
		const uint256yf7iaeF = await MisesLegacyPoolnOLr7Xm.earned.call(addressjsVujUF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256R4AZf0, BigInt("0"))
		await expect(MisesLegacyPoolnOLr7Xm.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresspxiSQCY = accounts[1]
		const addressa2DHZsO = accounts[5]
		const uintWzgO4lg = BigInt("744")
		const uintgKKRHs2 = BigInt("37")
		const MisesLegacyPoolFNY7ifU = await MisesLegacyPool.new(addresspxiSQCY, addressa2DHZsO, uintWzgO4lg, uintgKKRHs2, {from: accounts[2]});
		const uintjp2ihv = BigInt("848")
		const uintil8hqtp = BigInt("1789")
		const uint256nOn490M = await MisesLegacyPoolFNY7ifU.notifyRewardAmount.call(uintjp2ihv, {from: accounts[0]});
		await MisesLegacyPoolFNY7ifU.exit.call({from: accounts[4]});
		await MisesLegacyPoolFNY7ifU.exit.call({from: accounts[5]});
		const uint256RRfjqBg = await MisesLegacyPoolFNY7ifU.withdraw.call(uintil8hqtp, {from: accounts[5]});
		await MisesLegacyPoolFNY7ifU.getReward.call({from: accounts[2]});
		await MisesLegacyPoolFNY7ifU.getReward.call({from: accounts[2]});

		await expect(MisesLegacyPoolFNY7ifU.notifyRewardAmount.call(uintjp2ihv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresszuiEnIU = "0x0000000000000000000000000000000000000001"
		const addressgfZ15x8 = accounts[4]
		const uintwO6GM6C = BigInt("510")
		const uintQ3SXLrA = BigInt("772")
		const MisesLegacyPoolnmqQJwm = await MisesLegacyPool.new(addresszuiEnIU, addressgfZ15x8, uintwO6GM6C, uintQ3SXLrA, {from: accounts[2]});
		const addresskFpkPIW = accounts[1]
		const uintRQMjyK7 = BigInt("407")
		const uint256TiRgrrH = await MisesLegacyPoolnmqQJwm.earned.call(addresskFpkPIW, {from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPoolnmqQJwm.exit.call({from: accounts[1]});
		const uint256E4RDeNu = await MisesLegacyPoolnmqQJwm.rewardPerToken.call({from: accounts[0]});
		await MisesLegacyPoolnmqQJwm.getReward.call({from: accounts[4]});
		const uint256YoApAEI = await MisesLegacyPoolnmqQJwm.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256EKhdvZw = await MisesLegacyPoolnmqQJwm.withdraw.call(uintRQMjyK7, {from: accounts[2]});

		assert.equal(uint256TiRgrrH, BigInt("0"))
		await expect(MisesLegacyPoolnmqQJwm.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressXrtIAeG = accounts[2]
		const addressDF1ksUl = accounts[4]
		const uintew120Th = BigInt("69")
		const uintkJYczJg = BigInt("1551")
		const MisesLegacyPoolCyUIszr = await MisesLegacyPool.new(addressXrtIAeG, addressDF1ksUl, uintew120Th, uintkJYczJg, {from: accounts[3]});
		const addressM0Kru7D = accounts[2]
		const addresstPCZHV5 = accounts[3]
		const addressX65Ipn = await MisesLegacyPoolCyUIszr.updateReward.call(addressM0Kru7D, {from: accounts[4]});
		const uint256QjXYtmg = await MisesLegacyPoolCyUIszr.earned.call(addresstPCZHV5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MisesLegacyPoolCyUIszr.updateReward.call(addressM0Kru7D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressoyZDvyv = accounts[1]
		const addressHrThZzu = accounts[4]
		const uintKg9WMJg = BigInt("1093")
		const uintYVLHUvE = BigInt("1981")
		const MisesLegacyPoolUf20wRE = await MisesLegacyPool.new(addressoyZDvyv, addressHrThZzu, uintKg9WMJg, uintYVLHUvE, {from: accounts[5]});
		const uintHobxyv5 = BigInt("1722")
		const uintsdJr5Wo = BigInt("953")
		await MisesLegacyPoolUf20wRE.getReward.call({from: accounts[2]});
		const uint256eGxIlg4 = await MisesLegacyPoolUf20wRE.withdraw.call(uintHobxyv5, {from: accounts[0]});
		const uint256Ck07LqV = await MisesLegacyPoolUf20wRE.withdraw.call(uintsdJr5Wo, {from: accounts[0]});
		await MisesLegacyPoolUf20wRE.getReward.call({from: accounts[3]});
		const uint256CL9NIx8 = await MisesLegacyPoolUf20wRE.lastTimeRewardApplicable.call({from: accounts[2]});
		await MisesLegacyPoolUf20wRE.checkStart.call({from: accounts[4]});

		await expect(MisesLegacyPoolUf20wRE.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressfboqVUg = accounts[1]
		const addressuaobBOt = accounts[2]
		const uintB4nqRUt = BigInt("2014")
		const uinthSRfnT = BigInt("1797")
		const MisesLegacyPoolElW5Q0z = await MisesLegacyPool.new(addressfboqVUg, addressuaobBOt, uintB4nqRUt, uinthSRfnT, {from: "0x0000000000000000000000000000000000000001"});
		const addressyYmmFku = accounts[0]
		const addressGEiG4y5 = accounts[1]
		const addressJjji9Dz = await MisesLegacyPoolElW5Q0z.updateReward.call(addressyYmmFku, {from: accounts[2]});
		await MisesLegacyPoolElW5Q0z.getReward.call({from: accounts[0]});
		await MisesLegacyPoolElW5Q0z.checkStart.call({from: accounts[0]});
		const uint256aIykUMr = await MisesLegacyPoolElW5Q0z.earned.call(addressGEiG4y5, {from: accounts[4]});
		const uint256njuBFlt = await MisesLegacyPoolElW5Q0z.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressLtYYyR = accounts[2]
		const addressdgJibEU = accounts[3]
		const uintMbqpdmW = BigInt("1274")
		const uintKQe0sf8 = BigInt("105")
		const MisesLegacyPoolANRyvVN = await MisesLegacyPool.new(addressLtYYyR, addressdgJibEU, uintMbqpdmW, uintKQe0sf8, {from: accounts[4]});
		const uintAqGTXSw = BigInt("1570")
		const uint256vXU8xl1 = await MisesLegacyPoolANRyvVN.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256NCFSbWV = await MisesLegacyPoolANRyvVN.stake.call(uintAqGTXSw, {from: accounts[0]});

		assert.equal(uint256vXU8xl1, BigInt("0"))
		await expect(MisesLegacyPoolANRyvVN.stake.call(uintAqGTXSw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})