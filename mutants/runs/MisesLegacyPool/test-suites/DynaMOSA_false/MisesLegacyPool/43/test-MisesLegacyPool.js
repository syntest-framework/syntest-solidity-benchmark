const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressm7I6KH5 = accounts[3]
		const addressML7NsyO = accounts[0]
		const uintKoTR2sz = BigInt("169")
		const uintCA13u8E = BigInt("1694")
		const MisesLegacyPoolW29a48 = await MisesLegacyPool.new(addressm7I6KH5, addressML7NsyO, uintKoTR2sz, uintCA13u8E, {from: accounts[5]});
		const uinttaZtQf6 = BigInt("1619")
		const addressIFgpY1e = accounts[0]
		const addressdWvnrKo = accounts[0]
		const uint2563CXa1A = await MisesLegacyPoolW29a48.stake.call(uinttaZtQf6, {from: accounts[3]});
		await MisesLegacyPoolW29a48.getReward.call({from: accounts[2]});
		const uint256F4jvKc2 = await MisesLegacyPoolW29a48.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Wtxy9u = await MisesLegacyPoolW29a48.earned.call(addressIFgpY1e, {from: accounts[4]});
		const uint256KgeFOk1 = await MisesLegacyPoolW29a48.earned.call(addressdWvnrKo, {from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPoolW29a48.getReward.call({from: accounts[3]});

		await expect(MisesLegacyPoolW29a48.stake.call(uinttaZtQf6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresskoI7dX6 = accounts[1]
		const addressW7nlHs8 = accounts[2]
		const uintHzR6cW = BigInt("432")
		const uintpnm2nS1 = BigInt("1898")
		const MisesLegacyPoolIONYSKk = await MisesLegacyPool.new(addresskoI7dX6, addressW7nlHs8, uintHzR6cW, uintpnm2nS1, {from: accounts[1]});
		const uint256FapqB1O = await MisesLegacyPoolIONYSKk.rewardPerToken.call({from: accounts[1]});
		await MisesLegacyPoolIONYSKk.getReward.call({from: accounts[0]});
		await MisesLegacyPoolIONYSKk.checkStart.call({from: accounts[1]});

		assert.equal(uint256FapqB1O, BigInt("0"))
		await expect(MisesLegacyPoolIONYSKk.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresslFNDdPe = accounts[1]
		const addressim9dnQH = accounts[3]
		const uintkMMytDl = BigInt("807")
		const uintGH6WUda = BigInt("1686")
		const MisesLegacyPoolhQNiHLh = await MisesLegacyPool.new(addresslFNDdPe, addressim9dnQH, uintkMMytDl, uintGH6WUda, {from: accounts[0]});
		const uintU2K13sS = BigInt("776")
		const uint256lYe8Jbn = await MisesLegacyPoolhQNiHLh.notifyRewardAmount.call(uintU2K13sS, {from: accounts[4]});
		await MisesLegacyPoolhQNiHLh.getReward.call({from: accounts[4]});
		const uint256oD0q8QO = await MisesLegacyPoolhQNiHLh.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(MisesLegacyPoolhQNiHLh.notifyRewardAmount.call(uintU2K13sS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressipqgNkh = accounts[1]
		const addressddKu9yU = accounts[0]
		const uintbkK1Sad = BigInt("1628")
		const uintIff8fBO = BigInt("831")
		const MisesLegacyPoolErLOFkL = await MisesLegacyPool.new(addressipqgNkh, addressddKu9yU, uintbkK1Sad, uintIff8fBO, {from: accounts[5]});
		const addresszVHrI9l = accounts[2]
		const uintVmckgiq = BigInt("980")
		const addressNpICIaV = accounts[1]
		await MisesLegacyPoolErLOFkL.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256hjJWG6S = await MisesLegacyPoolErLOFkL.earned.call(addresszVHrI9l, {from: accounts[3]});
		const uint256gE89u1 = await MisesLegacyPoolErLOFkL.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256A6PDCH = await MisesLegacyPoolErLOFkL.stake.call(uintVmckgiq, {from: accounts[4]});
		const addressi2oOwkk = await MisesLegacyPoolErLOFkL.updateReward.call(addressNpICIaV, {from: accounts[1]});

		await expect(MisesLegacyPoolErLOFkL.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressiajt6h7 = accounts[5]
		const addressEJCOyuI = accounts[2]
		const uinta2GD0yP = BigInt("787")
		const uintECmAJjx = BigInt("1928")
		const MisesLegacyPoolnaI4isv = await MisesLegacyPool.new(addressiajt6h7, addressEJCOyuI, uinta2GD0yP, uintECmAJjx, {from: accounts[4]});
		const uintOTi50km = BigInt("132")
		const uintdQv6yzZ = BigInt("1097")
		const addressyu5d5Ni = accounts[0]
		const uint256OEo9S5q = await MisesLegacyPoolnaI4isv.withdraw.call(uintOTi50km, {from: accounts[3]});
		const uint256XOauQ12 = await MisesLegacyPoolnaI4isv.notifyRewardAmount.call(uintdQv6yzZ, {from: accounts[4]});
		const addresscD4hQPK = await MisesLegacyPoolnaI4isv.updateReward.call(addressyu5d5Ni, {from: accounts[2]});
		const uint256QqNCGYe = await MisesLegacyPoolnaI4isv.rewardPerToken.call({from: accounts[3]});

		await expect(MisesLegacyPoolnaI4isv.withdraw.call(uintOTi50km, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressmFZorPS = accounts[0]
		const addressa5DUtB2 = accounts[2]
		const uintTK6EAeb = BigInt("540")
		const uintwuB8a5O = BigInt("954")
		const MisesLegacyPoolzvCGIev = await MisesLegacyPool.new(addressmFZorPS, addressa5DUtB2, uintTK6EAeb, uintwuB8a5O, {from: "0x0000000000000000000000000000000000000001"});
		const uintbqDGuw = BigInt("53")
		const uint256jxvDBj2 = await MisesLegacyPoolzvCGIev.lastTimeRewardApplicable.call({from: accounts[1]});
		await MisesLegacyPoolzvCGIev.exit.call({from: accounts[1]});
		await MisesLegacyPoolzvCGIev.exit.call({from: accounts[0]});
		const uint256Cf5FdT = await MisesLegacyPoolzvCGIev.rewardPerToken.call({from: accounts[0]});
		const uint256hYuJUZ7 = await MisesLegacyPoolzvCGIev.stake.call(uintbqDGuw, {from: accounts[4]});
		await MisesLegacyPoolzvCGIev.getReward.call({from: accounts[0]});
	});
})