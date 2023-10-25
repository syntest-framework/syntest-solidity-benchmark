const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addresslGrbRHY = accounts[2]
		const addressGPdqRei = accounts[3]
		const uintKB7gJns = BigInt("1216")
		const uintbglBpTj = BigInt("646")
		const MisesLegacyPoolK1tnv7B = await MisesLegacyPool.new(addresslGrbRHY, addressGPdqRei, uintKB7gJns, uintbglBpTj, {from: accounts[0]});
		const uintbYYPxek = BigInt("1756")
		const addressRRI2KCM = accounts[3]
		const uint256jZ8kwU = await MisesLegacyPoolK1tnv7B.withdraw.call(uintbYYPxek, {from: accounts[1]});
		await MisesLegacyPoolK1tnv7B.exit.call({from: accounts[3]});
		const uint2569J6wUr = await MisesLegacyPoolK1tnv7B.earned.call(addressRRI2KCM, {from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPoolK1tnv7B.getReward.call({from: accounts[2]});
		await MisesLegacyPoolK1tnv7B.getReward.call({from: accounts[4]});

		await expect(MisesLegacyPoolK1tnv7B.withdraw.call(uintbYYPxek, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressgFv3PS = accounts[1]
		const addressoAn18l4 = accounts[2]
		const uintXvnNCyV = BigInt("971")
		const uintEvZqlZX = BigInt("2034")
		const MisesLegacyPoolWRQJ3Pn = await MisesLegacyPool.new(addressgFv3PS, addressoAn18l4, uintXvnNCyV, uintEvZqlZX, {from: accounts[2]});
		const uintue68slv = BigInt("1013")
		const uint256KK9rMSI = await MisesLegacyPoolWRQJ3Pn.lastTimeRewardApplicable.call({from: accounts[5]});
		await MisesLegacyPoolWRQJ3Pn.checkStart.call({from: accounts[4]});
		const uint256Prkbf0S = await MisesLegacyPoolWRQJ3Pn.stake.call(uintue68slv, {from: accounts[2]});
		const uint256dYYQMp3 = await MisesLegacyPoolWRQJ3Pn.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256KK9rMSI, BigInt("0"))
		await expect(MisesLegacyPoolWRQJ3Pn.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressQICDpcA = accounts[4]
		const addressdpmSvvm = accounts[2]
		const uinthHWLNeo = BigInt("1953")
		const uintQWHYEiE = BigInt("1973")
		const MisesLegacyPoolAHydcIv = await MisesLegacyPool.new(addressQICDpcA, addressdpmSvvm, uinthHWLNeo, uintQWHYEiE, {from: accounts[1]});
		const uintrj3VC3O = BigInt("1627")
		await MisesLegacyPoolAHydcIv.getReward.call({from: accounts[4]});
		const uint256RGX8R8y = await MisesLegacyPoolAHydcIv.notifyRewardAmount.call(uintrj3VC3O, {from: accounts[2]});
		await MisesLegacyPoolAHydcIv.getReward.call({from: accounts[2]});
		const uint256Kta4qbZ = await MisesLegacyPoolAHydcIv.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(MisesLegacyPoolAHydcIv.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressjcG2VPE = accounts[3]
		const addressgUvEL5q = accounts[5]
		const uinty4VhQF9 = BigInt("1435")
		const uintFKZEm9O = BigInt("9")
		const MisesLegacyPoolKg8sWdX = await MisesLegacyPool.new(addressjcG2VPE, addressgUvEL5q, uinty4VhQF9, uintFKZEm9O, {from: "0x0000000000000000000000000000000000000001"});
		const addressOHtgTy4 = accounts[1]
		const uint256ewSs7DN = await MisesLegacyPoolKg8sWdX.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressRAZIql8 = await MisesLegacyPoolKg8sWdX.updateReward.call(addressOHtgTy4, {from: accounts[2]});
		await MisesLegacyPoolKg8sWdX.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPoolKg8sWdX.exit.call({from: accounts[2]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressqHG3pod = accounts[3]
		const addressQEAbikw = "0x0000000000000000000000000000000000000001"
		const uintvVrPP3g = BigInt("1906")
		const uintd8fqRid = BigInt("1371")
		const MisesLegacyPoolkbHgnlW = await MisesLegacyPool.new(addressqHG3pod, addressQEAbikw, uintvVrPP3g, uintd8fqRid, {from: accounts[2]});
		const addressEgHNOEZ = accounts[0]
		const uintNXcSiue = BigInt("969")
		const uintVYHdM4h = BigInt("980")
		await MisesLegacyPoolkbHgnlW.exit.call({from: accounts[4]});
		const uint256MoIQUge = await MisesLegacyPoolkbHgnlW.earned.call(addressEgHNOEZ, {from: accounts[5]});
		const uint256W2akwcN = await MisesLegacyPoolkbHgnlW.stake.call(uintNXcSiue, {from: accounts[0]});
		const uint256IN0C1U4 = await MisesLegacyPoolkbHgnlW.rewardPerToken.call({from: accounts[3]});
		const uint256v0mZcY3 = await MisesLegacyPoolkbHgnlW.withdraw.call(uintVYHdM4h, {from: accounts[3]});

		await expect(MisesLegacyPoolkbHgnlW.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressnoDXPz = accounts[0]
		const addresshBcMqvs = accounts[4]
		const uintQvMXv6Q = BigInt("259")
		const uintofDUYk3 = BigInt("1179")
		const MisesLegacyPoolAXi8iLc = await MisesLegacyPool.new(addressnoDXPz, addresshBcMqvs, uintQvMXv6Q, uintofDUYk3, {from: accounts[4]});
		const uintDFizKiV = BigInt("1131")
		const addressziit3cF = accounts[3]
		const uintDMHSV7f = BigInt("947")
		const addressOzMWUIZ = "0x0000000000000000000000000000000000000001"
		const uint256j1i3K8S = await MisesLegacyPoolAXi8iLc.stake.call(uintDFizKiV, {from: accounts[4]});
		const addressOlVPzFD = await MisesLegacyPoolAXi8iLc.updateReward.call(addressziit3cF, {from: accounts[4]});
		const uint256lRsuyQE = await MisesLegacyPoolAXi8iLc.withdraw.call(uintDMHSV7f, {from: accounts[0]});
		const addresstiCWyxO = await MisesLegacyPoolAXi8iLc.updateReward.call(addressOzMWUIZ, {from: accounts[5]});
		await MisesLegacyPoolAXi8iLc.getReward.call({from: accounts[4]});

		await expect(MisesLegacyPoolAXi8iLc.stake.call(uintDFizKiV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})