const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressdug4NnF = accounts[3]
		const addressJAqsopV = accounts[0]
		const uintvI5PN3u = BigInt("1446")
		const uintzo0ZIU0 = BigInt("1393")
		const MisesLegacyPoolNNurhV = await MisesLegacyPool.new(addressdug4NnF, addressJAqsopV, uintvI5PN3u, uintzo0ZIU0, {from: accounts[2]});
		const uintv4PdZVg = BigInt("732")
		const addressgHUF1Al = accounts[0]
//		const uint256i2E6tT2 = await MisesLegacyPoolNNurhV.notifyRewardAmount.call(uintv4PdZVg, {from: accounts[2]});
//		await MisesLegacyPoolNNurhV.exit.call({from: accounts[3]});
//		const addresssep75gT = await MisesLegacyPoolNNurhV.updateReward.call(addressgHUF1Al, {from: accounts[2]});

		await expect(MisesLegacyPoolNNurhV.notifyRewardAmount.call(uintv4PdZVg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresswPF8S7b = accounts[2]
		const addressPbx7JM2 = accounts[4]
		const uinthSFQr9b = BigInt("1225")
		const uintUCZLnCU = BigInt("1476")
		const MisesLegacyPoolFaW2GmU = await MisesLegacyPool.new(addresswPF8S7b, addressPbx7JM2, uinthSFQr9b, uintUCZLnCU, {from: accounts[0]});
		const addressEOktCG = accounts[0]
		const address8M0VPc = accounts[1]
		const addressTQ1AJ6 = accounts[1]
		const uintqiC8zWI = BigInt("940")
		const uint256gThpX6c = await MisesLegacyPoolFaW2GmU.earned.call(addressEOktCG, {from: accounts[3]});
		const uint256CDEkkHZ = await MisesLegacyPoolFaW2GmU.earned.call(address8M0VPc, {from: accounts[3]});
//		const address1kI9kG = await MisesLegacyPoolFaW2GmU.updateReward.call(addressTQ1AJ6, {from: accounts[1]});
//		const uint256oqUb9Ld = await MisesLegacyPoolFaW2GmU.notifyRewardAmount.call(uintqiC8zWI, {from: accounts[5]});

		assert.equal(uint256CDEkkHZ, BigInt("0"))
		assert.equal(uint256gThpX6c, BigInt("0"))
		await expect(MisesLegacyPoolFaW2GmU.updateReward.call(addressTQ1AJ6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresscgPwdGt = accounts[1]
		const addressKXIxPgF = accounts[0]
		const uintJ1bsRGF = BigInt("362")
		const uintneqeEEA = BigInt("564")
		const MisesLegacyPool8BfGqv = await MisesLegacyPool.new(addresscgPwdGt, addressKXIxPgF, uintJ1bsRGF, uintneqeEEA, {from: accounts[3]});
		const uint256rsEKAi3 = await MisesLegacyPool8BfGqv.lastTimeRewardApplicable.call({from: accounts[4]});
//		await MisesLegacyPool8BfGqv.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256BFiDNLK = await MisesLegacyPool8BfGqv.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256rsEKAi3, BigInt("0"))
		await expect(MisesLegacyPool8BfGqv.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressZnvAdOe = accounts[5]
		const addressF9vgHXO = accounts[1]
		const uintJkKI1iq = BigInt("1931")
		const uintehw08h3 = BigInt("1325")
		const MisesLegacyPoolRQiHOoM = await MisesLegacyPool.new(addressZnvAdOe, addressF9vgHXO, uintJkKI1iq, uintehw08h3, {from: accounts[3]});
		const uintwBmVMY9 = BigInt("502")
		const uinto1UF2TQ = BigInt("1254")
		const uintkyEQp1L = BigInt("918")
//		const uint256RkUk3my = await MisesLegacyPoolRQiHOoM.stake.call(uintwBmVMY9, {from: accounts[4]});
//		const uint256U9VqWHx = await MisesLegacyPoolRQiHOoM.stake.call(uinto1UF2TQ, {from: accounts[1]});
//		const uint256FjmIAsm = await MisesLegacyPoolRQiHOoM.stake.call(uintkyEQp1L, {from: accounts[0]});

		await expect(MisesLegacyPoolRQiHOoM.stake.call(uintwBmVMY9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressjHm29F1 = accounts[5]
		const addressGbMqPQv = accounts[4]
		const uintfvBvFDX = BigInt("252")
		const uintTXSLi3c = BigInt("759")
		const MisesLegacyPooluRVqfHC = await MisesLegacyPool.new(addressjHm29F1, addressGbMqPQv, uintfvBvFDX, uintTXSLi3c, {from: accounts[2]});
		const uinthdLe3Lc = BigInt("569")
//		const uint256P7N5BJX = await MisesLegacyPooluRVqfHC.withdraw.call(uinthdLe3Lc, {from: accounts[4]});
//		const uint256LybkQaf = await MisesLegacyPooluRVqfHC.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256KKQKuHa = await MisesLegacyPooluRVqfHC.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256IWJNhrV = await MisesLegacyPooluRVqfHC.rewardPerToken.call({from: accounts[1]});

		await expect(MisesLegacyPooluRVqfHC.withdraw.call(uinthdLe3Lc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressQtgQKzC = accounts[1]
		const addressuZC97go = accounts[0]
		const uintvKj4mH = BigInt("362")
		const uintoapwAbu = BigInt("564")
		const MisesLegacyPool8BfGqv = await MisesLegacyPool.new(addressQtgQKzC, addressuZC97go, uintvKj4mH, uintoapwAbu, {from: accounts[3]});
		const addressABhIGiC = accounts[0]
		const uint256t1E3ujY = await MisesLegacyPool8BfGqv.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256rsEKAi3 = await MisesLegacyPool8BfGqv.lastTimeRewardApplicable.call({from: accounts[4]});
//		await MisesLegacyPool8BfGqv.getReward.call({from: accounts[4]});
//		const uint2565b7SXN = await MisesLegacyPool8BfGqv.earned.call(addressABhIGiC, {from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPool8BfGqv.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256BFiDNLK = await MisesLegacyPool8BfGqv.rewardPerToken.call({from: accounts[1]});
//		const uint256sfUOUDM = await MisesLegacyPool8BfGqv.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256rsEKAi3, BigInt("0"))
		assert.equal(uint256t1E3ujY, BigInt("0"))
		await expect(MisesLegacyPool8BfGqv.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const address1QQNxY = accounts[1]
		const addressBhqTeEW = accounts[4]
		const uintOEkyyFe = BigInt("685")
		const uintafmXQCE = BigInt("2008")
		const MisesLegacyPoolT5LNQDr = await MisesLegacyPool.new(address1QQNxY, addressBhqTeEW, uintOEkyyFe, uintafmXQCE, {from: "0x0000000000000000000000000000000000000001"});
		const address6uERdc = accounts[5]
		const uint256ilJtfKb = await MisesLegacyPoolT5LNQDr.rewardPerToken.call({from: accounts[1]});
		const uint256zACkJOt = await MisesLegacyPoolT5LNQDr.rewardPerToken.call({from: accounts[0]});
		const addressspnDEZv = await MisesLegacyPoolT5LNQDr.updateReward.call(address6uERdc, {from: accounts[0]});
		await MisesLegacyPoolT5LNQDr.getReward.call({from: accounts[1]});
		await MisesLegacyPoolT5LNQDr.getReward.call({from: accounts[3]});
	});
})