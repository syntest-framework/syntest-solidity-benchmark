const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairV8LSFE5 = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnNPdgFx = accounts[3]
		await PlasmaswapPairV8LSFE5.lock.call({from: accounts[1]});
		const addressKJLKtcx = await PlasmaswapPairV8LSFE5.skim.call(addressnNPdgFx, {from: accounts[0]});
		const uint112mM20Fc = await PlasmaswapPairV8LSFE5.getReserves.call({from: accounts[1]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhodN3B = await PlasmaswapPair.new({from: accounts[5]});
		const addressDT1V8tM = "0x0000000000000000000000000000000000000001"
		const addressog3ksvx = accounts[0]
		const addressXJ96Oh = accounts[1]
		const addressvqrCY5s = accounts[4]
		const uint112sJctrnY = await PlasmaswapPairhodN3B.getReserves.call({from: accounts[3]});
		const uintFWmg6d6 = await PlasmaswapPairhodN3B.mint.call(addressDT1V8tM, {from: accounts[1]});
		const addressQSrOQDE = await PlasmaswapPairhodN3B.skim.call(addressog3ksvx, {from: accounts[4]});
		const addressWd4U8JN = await PlasmaswapPairhodN3B.skim.call(addressXJ96Oh, {from: accounts[0]});
		const uintl1EAqce = await PlasmaswapPairhodN3B.burn.call(addressvqrCY5s, {from: accounts[3]});

		await expect(PlasmaswapPairhodN3B.mint.call(addressDT1V8tM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairL2zxWDY = await PlasmaswapPair.new({from: accounts[2]});
		const addressG9cide2 = accounts[3]
		const addresslBNBXhF = accounts[4]
		const addressJevxC3 = accounts[4]
		const addressUrcnzup = accounts[1]
		const addressYNgLr3r = accounts[1]
		const addressp1O0agO = "0x0000000000000000000000000000000000000001"
		const addressc5ygUL0 = await PlasmaswapPairL2zxWDY.initialize.call(addresslBNBXhF, addressG9cide2, {from: accounts[4]});
		const addressN6z8uvZ = await PlasmaswapPairL2zxWDY.skim.call(addressJevxC3, {from: accounts[0]});
		const uintZBxpnii = await PlasmaswapPairL2zxWDY.burn.call(addressUrcnzup, {from: accounts[0]});
		const addressEvTtPKs = await PlasmaswapPairL2zxWDY.initialize.call(addressp1O0agO, addressYNgLr3r, {from: accounts[3]});

		await expect(PlasmaswapPairL2zxWDY.initialize.call(addresslBNBXhF, addressG9cide2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairfRLQfQn = await PlasmaswapPair.new({from: accounts[2]});
		await PlasmaswapPairfRLQfQn.sync.call({from: accounts[4]});
		await PlasmaswapPairfRLQfQn.sync.call({from: accounts[3]});

		await expect(PlasmaswapPairfRLQfQn.sync.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairf93KVPt = await PlasmaswapPair.new({from: accounts[5]});
		const byteeg83pFV = "0x04040d06"
		const addresswHwYDO = accounts[0]
		const uinteWUWpRZ = BigInt("1381")
		const uinttgN2J2O = BigInt("1532")
		const addresssQHZvsz = accounts[1]
		const addressrKLlbs8 = accounts[5]
		const addresszZddn7e = accounts[4]
		const uintz6sSUVB = await PlasmaswapPairf93KVPt.swap.call(uinttgN2J2O, uinteWUWpRZ, addresswHwYDO, byteeg83pFV, {from: accounts[0]});
		const uintRdaP2Eb = await PlasmaswapPairf93KVPt.mint.call(addresssQHZvsz, {from: accounts[0]});
		await PlasmaswapPairf93KVPt.sync.call({from: accounts[2]});
		const uintrrQnEMY = await PlasmaswapPairf93KVPt.mint.call(addressrKLlbs8, {from: accounts[5]});
		await PlasmaswapPairf93KVPt.lock.call({from: accounts[5]});
		const addresswSF3a7f = await PlasmaswapPairf93KVPt.skim.call(addresszZddn7e, {from: accounts[4]});

		await expect(PlasmaswapPairf93KVPt.swap.call(uinttgN2J2O, uinteWUWpRZ, addresswHwYDO, byteeg83pFV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairFXWpfu0 = await PlasmaswapPair.new({from: accounts[4]});
		const addressWXpOulH = accounts[1]
		const addressDPLLsK = accounts[5]
		const uintSfoTmDD = await PlasmaswapPairFXWpfu0.burn.call(addressWXpOulH, {from: accounts[2]});
		const uint112s5tkyYa = await PlasmaswapPairFXWpfu0.getReserves.call({from: accounts[4]});
		const addressPjgxQIZ = await PlasmaswapPairFXWpfu0.skim.call(addressDPLLsK, {from: "0x0000000000000000000000000000000000000001"});
		const uint112UbEUAWW = await PlasmaswapPairFXWpfu0.getReserves.call({from: accounts[1]});
		const uint112qoVap18 = await PlasmaswapPairFXWpfu0.getReserves.call({from: accounts[4]});

		await expect(PlasmaswapPairFXWpfu0.burn.call(addressWXpOulH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPair35XTPo = await PlasmaswapPair.new({from: accounts[5]});
		const addresssUAmFgb = accounts[4]
		const bytedJlaK8C = "0x0a0c0b1d16111e190b"
		const addressd9kM0Lo = accounts[2]
		const uintqe3Auk = BigInt("1152")
		const uintNeBNm3j = BigInt("107")
		const addressxQJAf8s = accounts[2]
		const addressd2I7wtd = accounts[2]
		const addressGG1UIxR = accounts[1]
		const addresswoy5eTe = accounts[3]
		const addressFAVSBUu = await PlasmaswapPair35XTPo.skim.call(addresssUAmFgb, {from: accounts[3]});
		const uintnXLqleN = await PlasmaswapPair35XTPo.swap.call(uintNeBNm3j, uintqe3Auk, addressd9kM0Lo, bytedJlaK8C, {from: accounts[5]});
		await PlasmaswapPair35XTPo.sync.call({from: accounts[5]});
		const uintl8DQASQ = await PlasmaswapPair35XTPo.burn.call(addressxQJAf8s, {from: accounts[4]});
		const addressu77sNh0 = await PlasmaswapPair35XTPo.initialize.call(addressGG1UIxR, addressd2I7wtd, {from: accounts[4]});
		const uintLnFeFvN = await PlasmaswapPair35XTPo.burn.call(addresswoy5eTe, {from: accounts[0]});

		await expect(PlasmaswapPair35XTPo.skim.call(addresssUAmFgb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairJ0cJ4nJ = await PlasmaswapPair.new({from: accounts[5]});
		const addressPbIYs34 = accounts[3]
		const addressJ7DrmZ0 = accounts[2]
		const addresswQqVy2p = accounts[1]
		await PlasmaswapPairJ0cJ4nJ.lock.call({from: accounts[0]});
		const uintfLQhd2H = await PlasmaswapPairJ0cJ4nJ.mint.call(addressPbIYs34, {from: accounts[4]});
		const uintAKUQzcN = await PlasmaswapPairJ0cJ4nJ.mint.call(addressJ7DrmZ0, {from: accounts[1]});
		const uintpaoIMHg = await PlasmaswapPairJ0cJ4nJ.mint.call(addresswQqVy2p, {from: accounts[3]});
		const uint112XjS57yJ = await PlasmaswapPairJ0cJ4nJ.getReserves.call({from: accounts[0]});

		await expect(PlasmaswapPairJ0cJ4nJ.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})