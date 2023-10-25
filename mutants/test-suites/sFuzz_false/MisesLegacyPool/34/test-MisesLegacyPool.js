const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressBnQoMLk = accounts[0]
		const addressxZwNZtS = accounts[0]
		const uintRHKzkI = BigInt("1633")
		const uintWgHgW4 = BigInt("337")
		const MisesLegacyPooliLdOXxH = await MisesLegacyPool.new(addressBnQoMLk, addressxZwNZtS, uintRHKzkI, uintWgHgW4, {from: accounts[3]});
		const uintR8HxhiF = BigInt("1911")
		const uintdJn871i = BigInt("698")
		const addressUqCoDfc = accounts[3]
//		await MisesLegacyPooliLdOXxH.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256hCVBhAi = await MisesLegacyPooliLdOXxH.stake.call(uintR8HxhiF, {from: accounts[2]});
//		const uint256YZyORFX = await MisesLegacyPooliLdOXxH.withdraw.call(uintdJn871i, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ugu8Zpk = await MisesLegacyPooliLdOXxH.earned.call(addressUqCoDfc, {from: accounts[4]});

		await expect(MisesLegacyPooliLdOXxH.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressf1f7rqd = "0x0000000000000000000000000000000000000001"
		const addressCYqFvaE = accounts[2]
		const uintnGvcLNy = BigInt("82")
		const uintqC8sxbx = BigInt("1474")
		const MisesLegacyPoolkUMASnA = await MisesLegacyPool.new(addressf1f7rqd, addressCYqFvaE, uintnGvcLNy, uintqC8sxbx, {from: accounts[3]});
		const addressIZrFYAS = accounts[2]
		const uintVg8bXWz = BigInt("363")
		const uint256jRX1214 = await MisesLegacyPoolkUMASnA.earned.call(addressIZrFYAS, {from: accounts[2]});
//		const uint256PZcreU = await MisesLegacyPoolkUMASnA.withdraw.call(uintVg8bXWz, {from: accounts[2]});

		assert.equal(uint256jRX1214, BigInt("0"))
		await expect(MisesLegacyPoolkUMASnA.withdraw.call(uintVg8bXWz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressaBYfVYy = accounts[3]
		const addressHVxRrPH = "0x0000000000000000000000000000000000000001"
		const uintvIYxJ5v = BigInt("303")
		const uints9llwc5 = BigInt("35")
		const MisesLegacyPoolBsYLuMG = await MisesLegacyPool.new(addressaBYfVYy, addressHVxRrPH, uintvIYxJ5v, uints9llwc5, {from: accounts[1]});
		const addressgkJ2N4I = accounts[0]
		const uintMQKfEZq = BigInt("156")
		const uint256HY9Q07X = await MisesLegacyPoolBsYLuMG.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256k4hbztA = await MisesLegacyPoolBsYLuMG.earned.call(addressgkJ2N4I, {from: accounts[2]});
//		await MisesLegacyPoolBsYLuMG.getReward.call({from: accounts[3]});
//		const uint256MozGXyj = await MisesLegacyPoolBsYLuMG.rewardPerToken.call({from: accounts[0]});
//		const uint256JAnF9t = await MisesLegacyPoolBsYLuMG.withdraw.call(uintMQKfEZq, {from: accounts[0]});
//		await MisesLegacyPoolBsYLuMG.exit.call({from: accounts[3]});

		assert.equal(uint256HY9Q07X, BigInt("0"))
		assert.equal(uint256k4hbztA, BigInt("0"))
		await expect(MisesLegacyPoolBsYLuMG.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresskZMYfFw = accounts[5]
		const addresszTuGn0R = accounts[4]
		const uinta140bcJ = BigInt("1299")
		const uintHK8VTN1 = BigInt("1020")
		const MisesLegacyPoolwwqT67U = await MisesLegacyPool.new(addresskZMYfFw, addresszTuGn0R, uinta140bcJ, uintHK8VTN1, {from: accounts[2]});
		const addressCxUE3eh = accounts[4]
//		await MisesLegacyPoolwwqT67U.exit.call({from: accounts[2]});
//		await MisesLegacyPoolwwqT67U.checkStart.call({from: accounts[2]});
//		const addressjnRwRlM = await MisesLegacyPoolwwqT67U.updateReward.call(addressCxUE3eh, {from: accounts[5]});

		await expect(MisesLegacyPoolwwqT67U.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressRDZ0Tn = accounts[4]
		const addresssKEz2ce = accounts[2]
		const uintdpx2Kxc = BigInt("178")
		const uintUtKw8d = BigInt("730")
		const MisesLegacyPoolsHfC5md = await MisesLegacyPool.new(addressRDZ0Tn, addresssKEz2ce, uintdpx2Kxc, uintUtKw8d, {from: accounts[0]});
		const uintMI870s = BigInt("1354")
		const uintq4Va55 = BigInt("450")
//		const uint256ajGH1Cl = await MisesLegacyPoolsHfC5md.stake.call(uintMI870s, {from: accounts[5]});
//		const uint256Z9aXc3 = await MisesLegacyPoolsHfC5md.stake.call(uintq4Va55, {from: accounts[0]});
//		await MisesLegacyPoolsHfC5md.checkStart.call({from: accounts[2]});

		await expect(MisesLegacyPoolsHfC5md.stake.call(uintMI870s, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressQdTEhJ = accounts[2]
		const addressYgjrvHX = accounts[2]
		const uintQ6n2RtQ = BigInt("1082")
		const uinti2TGfrW = BigInt("1282")
		const MisesLegacyPool531CVi = await MisesLegacyPool.new(addressQdTEhJ, addressYgjrvHX, uintQ6n2RtQ, uinti2TGfrW, {from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPool531CVi.getReward.call({from: accounts[3]});
		const uint256oMJ9saF = await MisesLegacyPool531CVi.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPool531CVi.getReward.call({from: accounts[3]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressLUY6jLt = accounts[0]
		const addressqkIZKHu = accounts[4]
		const uintBXC7N5 = BigInt("330")
		const uintqqx72l = BigInt("32")
		const MisesLegacyPoolxzPe4NI = await MisesLegacyPool.new(addressLUY6jLt, addressqkIZKHu, uintBXC7N5, uintqqx72l, {from: accounts[0]});
		const uintXqqs7F = BigInt("1981")
//		const uint256HM5akyb = await MisesLegacyPoolxzPe4NI.notifyRewardAmount.call(uintXqqs7F, {from: accounts[4]});
//		const uint256yCmOyoq = await MisesLegacyPoolxzPe4NI.rewardPerToken.call({from: accounts[5]});

		await expect(MisesLegacyPoolxzPe4NI.notifyRewardAmount.call(uintXqqs7F, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})