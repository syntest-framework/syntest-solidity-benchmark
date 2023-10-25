const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressaQ62epJ = accounts[0]
		const addressnFUcWma = accounts[5]
		const uinthKETBil = BigInt("294")
		const uinthXRkcue = BigInt("1026")
		const MisesLegacyPoolqSPmZYq = await MisesLegacyPool.new(addressaQ62epJ, addressnFUcWma, uinthKETBil, uinthXRkcue, {from: accounts[1]});
		const uinttnZpj00 = BigInt("1083")
		const uintI5ZcCNz = BigInt("920")
		const addressL8mRvu = accounts[4]
		const addressW57i0Zz = accounts[3]
		const uint256CWScQex = await MisesLegacyPoolqSPmZYq.notifyRewardAmount.call(uinttnZpj00, {from: accounts[5]});
		const uint256wP2ILk = await MisesLegacyPoolqSPmZYq.withdraw.call(uintI5ZcCNz, {from: accounts[1]});
		const addressYBtdRD = await MisesLegacyPoolqSPmZYq.updateReward.call(addressL8mRvu, {from: accounts[0]});
		await MisesLegacyPoolqSPmZYq.getReward.call({from: accounts[2]});
		const addressxwwCFPK = await MisesLegacyPoolqSPmZYq.updateReward.call(addressW57i0Zz, {from: accounts[4]});

		await expect(MisesLegacyPoolqSPmZYq.notifyRewardAmount.call(uinttnZpj00, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressnxn24Y3 = accounts[1]
		const addressFr5PjjL = accounts[2]
		const uintkjVmEr = BigInt("920")
		const uintdtpcCE8 = BigInt("1010")
		const MisesLegacyPooliWli7wo = await MisesLegacyPool.new(addressnxn24Y3, addressFr5PjjL, uintkjVmEr, uintdtpcCE8, {from: accounts[1]});
		const addresslvlrrad = accounts[0]
		const addressZUeWaEw = accounts[2]
		const addresstr3R7oI = accounts[2]
		const uint8tWDrz = BigInt("1176")
		const uint2565fo43J = await MisesLegacyPooliWli7wo.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressyr2DURS = await MisesLegacyPooliWli7wo.updateReward.call(addresslvlrrad, {from: accounts[3]});
		const uint256YTVcCGP = await MisesLegacyPooliWli7wo.earned.call(addressZUeWaEw, {from: accounts[3]});
		const uint256x8kSPpc = await MisesLegacyPooliWli7wo.earned.call(addresstr3R7oI, {from: accounts[4]});
		await MisesLegacyPooliWli7wo.exit.call({from: accounts[0]});
		const uint256jpJkwBe = await MisesLegacyPooliWli7wo.stake.call(uint8tWDrz, {from: accounts[4]});

		assert.equal(uint2565fo43J, BigInt("0"))
		await expect(MisesLegacyPooliWli7wo.updateReward.call(addresslvlrrad, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const address6QxmNS = accounts[1]
		const addressDMTzHQx = accounts[3]
		const uintZ7EE0bk = BigInt("1170")
		const uintPNmiDn = BigInt("3")
		const MisesLegacyPooljiHoJhm = await MisesLegacyPool.new(address6QxmNS, addressDMTzHQx, uintZ7EE0bk, uintPNmiDn, {from: accounts[1]});
		const uintKtz9TPZ = BigInt("744")
		await MisesLegacyPooljiHoJhm.getReward.call({from: accounts[0]});
		const uint256pVWQGvn = await MisesLegacyPooljiHoJhm.stake.call(uintKtz9TPZ, {from: accounts[1]});
		await MisesLegacyPooljiHoJhm.exit.call({from: accounts[1]});
		const uint256J0j7nJ = await MisesLegacyPooljiHoJhm.rewardPerToken.call({from: accounts[3]});
		const uint256CY3kEHi = await MisesLegacyPooljiHoJhm.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(MisesLegacyPooljiHoJhm.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressjmZU67x = accounts[0]
		const addresstRSUjL = accounts[3]
		const uintb15NJ62 = BigInt("1959")
		const uintE7HfuYz = BigInt("1055")
		const MisesLegacyPoolSfnGJOe = await MisesLegacyPool.new(addressjmZU67x, addresstRSUjL, uintb15NJ62, uintE7HfuYz, {from: accounts[2]});
		const uintO7nvm1Y = BigInt("645")
		const uintK4zqAYT = BigInt("382")
		const addressiRUNKag = accounts[4]
		const addressFHxcLEX = accounts[3]
		const uintP0VI5RJ = BigInt("1609")
		const uint256o8pFCdm = await MisesLegacyPoolSfnGJOe.withdraw.call(uintO7nvm1Y, {from: "0x0000000000000000000000000000000000000001"});
		const uint256k3cai1a = await MisesLegacyPoolSfnGJOe.withdraw.call(uintK4zqAYT, {from: accounts[4]});
		const uint256A4Cu0G = await MisesLegacyPoolSfnGJOe.earned.call(addressiRUNKag, {from: accounts[4]});
		const addressrp5bai = await MisesLegacyPoolSfnGJOe.updateReward.call(addressFHxcLEX, {from: accounts[3]});
		const uint256NCnWuxl = await MisesLegacyPoolSfnGJOe.withdraw.call(uintP0VI5RJ, {from: accounts[4]});

		await expect(MisesLegacyPoolSfnGJOe.withdraw.call(uintO7nvm1Y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresslCxTkT3 = accounts[1]
		const addressKmLc1yp = accounts[1]
		const uintZRvFBR4 = BigInt("256")
		const uintxczbRKr = BigInt("970")
		const MisesLegacyPoolcXx4zOa = await MisesLegacyPool.new(addresslCxTkT3, addressKmLc1yp, uintZRvFBR4, uintxczbRKr, {from: accounts[1]});
		await MisesLegacyPoolcXx4zOa.exit.call({from: accounts[1]});

		await expect(MisesLegacyPoolcXx4zOa.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresszrSyCF7 = accounts[5]
		const addressunvRJ8s = accounts[0]
		const uintJVfqafR = BigInt("835")
		const uintqPMyvz = BigInt("505")
		const MisesLegacyPoolhar8XBm = await MisesLegacyPool.new(addresszrSyCF7, addressunvRJ8s, uintJVfqafR, uintqPMyvz, {from: "0x0000000000000000000000000000000000000001"});
		const uintLgABrt1 = BigInt("1164")
		const addressZve8w4C = accounts[2]
		const uinty9sqk63 = BigInt("280")
		await MisesLegacyPoolhar8XBm.checkStart.call({from: accounts[0]});
		const uint256nSnB1I5 = await MisesLegacyPoolhar8XBm.withdraw.call(uintLgABrt1, {from: accounts[0]});
		const addressc2x0zb = await MisesLegacyPoolhar8XBm.updateReward.call(addressZve8w4C, {from: accounts[3]});
		await MisesLegacyPoolhar8XBm.getReward.call({from: accounts[0]});
		const uint256P0VPWnP = await MisesLegacyPoolhar8XBm.stake.call(uinty9sqk63, {from: accounts[4]});
	});
})