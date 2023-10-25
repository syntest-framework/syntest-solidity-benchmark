const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressxOLzqk1 = accounts[3]
		const LayerxkkhOBI4 = await Layerx.new(addressxOLzqk1, {from: accounts[5]});
		await LayerxkkhOBI4.paused.call({from: accounts[0]});
		const uints0mJymp = await LayerxkkhOBI4.totalSupply.call({from: accounts[3]});

		await expect(LayerxkkhOBI4.paused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQAkZFXC = "0x0000000000000000000000000000000000000001"
		const Layerx3ylL1a = await Layerx.new(addressQAkZFXC, {from: accounts[4]});
		const addressOLmMPz4 = accounts[4]
		const uinteJkxnY8 = BigInt("1822")
		const uintFdH91Tc = await Layerx3ylL1a.totalSupply.call({from: accounts[1]});
		const uintlznSMnf = await Layerx3ylL1a.balanceOf.call(addressOLmMPz4, {from: accounts[2]});
		const uintOtVk6TF = await Layerx3ylL1a.withdraw.call(uinteJkxnY8, {from: accounts[4]});

		assert.equal(uintFdH91Tc, BigInt("40000000000000000000000"))
		assert.equal(uintlznSMnf, BigInt("0"))
		await expect(Layerx3ylL1a.withdraw.call(uinteJkxnY8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQsnWHSh = accounts[4]
		const Layerxv8yO2dq = await Layerx.new(addressQsnWHSh, {from: "0x0000000000000000000000000000000000000001"});
		const uintfFPCLQ0 = BigInt("1842")
		const addressWBWPi61 = accounts[2]
		const uintWTYWZZ = BigInt("1944")
		const addressejLQjR3 = accounts[3]
		const uintSH7VByT = BigInt("436")
		await Layerxv8yO2dq.paused.call({from: accounts[1]});
		const boolXLEEER = await Layerxv8yO2dq.approve.call(addressWBWPi61, uintfFPCLQ0, {from: accounts[2]});
		const booliflWp55 = await Layerxv8yO2dq.approve.call(addressejLQjR3, uintWTYWZZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintap01D4C = await Layerxv8yO2dq.lock.call(uintSH7VByT, {from: accounts[4]});
	});

	it('test for Layerx', async () => {
		const addressTeu82Z = accounts[2]
		const LayerxIPrP5FG = await Layerx.new(addressTeu82Z, {from: accounts[4]});
		const uintCI80awP = BigInt("545")
		const addressXyjniWc = accounts[2]
		const uintwtOUXL7 = BigInt("1522")
		const uintSq8zx0 = BigInt("1672")
		const addressUNvldEN = accounts[0]
		const addresse6O060X = "0x0000000000000000000000000000000000000001"
		const boolp2geC25 = await LayerxIPrP5FG.approve.call(addressXyjniWc, uintCI80awP, {from: accounts[2]});
		const uint256BF5WWUs = await LayerxIPrP5FG.burn.call(uintwtOUXL7, {from: accounts[1]});
		await LayerxIPrP5FG.paused.call({from: accounts[1]});
		const boolctJdL5d = await LayerxIPrP5FG.approve.call(addressUNvldEN, uintSq8zx0, {from: accounts[0]});
		const addressexWSArH = await LayerxIPrP5FG.transferOwnership.call(addresse6O060X, {from: accounts[4]});

		assert.equal(boolp2geC25, true)
		await expect(LayerxIPrP5FG.burn.call(uintwtOUXL7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressBbYQ194 = accounts[4]
		const LayerxfhB7uHI = await Layerx.new(addressBbYQ194, {from: accounts[1]});
		const uintkXZf55I = BigInt("1381")
		const addressxG16qf4 = accounts[0]
		const addressJK57dI0 = accounts[3]
		const address8gA6Et = accounts[3]
		const boolmCiIvQC = await LayerxfhB7uHI.transferFrom.call(addressJK57dI0, addressxG16qf4, uintkXZf55I, {from: accounts[3]});
		const addressApvptTl = await LayerxfhB7uHI.setNewStakeCreator.call(address8gA6Et, {from: accounts[4]});

		await expect(LayerxfhB7uHI.transferFrom.call(addressJK57dI0, addressxG16qf4, uintkXZf55I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressm9D1cAz = accounts[3]
		const LayerxkkhOBI4 = await Layerx.new(addressm9D1cAz, {from: accounts[5]});
		const uintgT4dAnV = BigInt("1166")
		const addressXThMmII = accounts[4]
		const uints0mJymp = await LayerxkkhOBI4.totalSupply.call({from: accounts[3]});
		const boolKbUKdZp = await LayerxkkhOBI4.transfer.call(addressXThMmII, uintgT4dAnV, {from: accounts[3]});
		await LayerxkkhOBI4.onlyOwner.call({from: accounts[3]});

		assert.equal(boolKbUKdZp, true)
		assert.equal(uints0mJymp, BigInt("40000000000000000000000"))
		await expect(LayerxkkhOBI4.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressIUgGiqY = accounts[3]
		const LayerxkkhOBI4 = await Layerx.new(addressIUgGiqY, {from: accounts[5]});
		const uintq7D5SUY = BigInt("714")
		const uints0mJymp = await LayerxkkhOBI4.totalSupply.call({from: accounts[3]});
		const uinti8MNDX = await LayerxkkhOBI4.lock.call(uintq7D5SUY, {from: accounts[3]});

		assert.equal(uints0mJymp, BigInt("40000000000000000000000"))
		await expect(LayerxkkhOBI4.lock.call(uintq7D5SUY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address1jQGUx = accounts[3]
		const LayerxkkhOBI4 = await Layerx.new(address1jQGUx, {from: accounts[5]});
		const addresslxMqh9 = accounts[3]
		await LayerxkkhOBI4.addStakePayment.call({from: accounts[3]});
		const uints0mJymp = await LayerxkkhOBI4.totalSupply.call({from: accounts[3]});
		const addressn67W63e = await LayerxkkhOBI4.setNewStakeCreator.call(addresslxMqh9, {from: accounts[3]});

		await expect(LayerxkkhOBI4.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressa2ktXZB = accounts[3]
		const LayerxkkhOBI4 = await Layerx.new(addressa2ktXZB, {from: accounts[5]});
		const uints0mJymp = await LayerxkkhOBI4.totalSupply.call({from: accounts[3]});
		await LayerxkkhOBI4.unlock.call({from: accounts[0]});

		assert.equal(uints0mJymp, BigInt("40000000000000000000000"))
		await expect(LayerxkkhOBI4.unlock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresszVBiXno = accounts[3]
		const LayerxkkhOBI4 = await Layerx.new(addresszVBiXno, {from: accounts[5]});
		const addressx4irwv1 = accounts[5]
		const addressEfyRNWX = accounts[5]
		const addressOgNNkkl = accounts[1]
		await LayerxkkhOBI4.addStakePayment.call({from: accounts[0]});
		const uints0mJymp = await LayerxkkhOBI4.totalSupply.call({from: accounts[3]});
		const addressLqCvAWM = await LayerxkkhOBI4.transferOwnership.call(addressx4irwv1, {from: accounts[0]});
		const uintNAA7zE = await LayerxkkhOBI4.allowance.call(addressOgNNkkl, addressEfyRNWX, {from: accounts[4]});

		await expect(LayerxkkhOBI4.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYqUbVkW = accounts[5]
		const LayerxfA1FFzM = await Layerx.new(addressYqUbVkW, {from: accounts[1]});
		const byteSmRHnww = "0x1a1c0106171e0c"
		const uintXTUN85u = BigInt("1989")
		const addressDtr9ln1 = accounts[5]
		const addressmHX6RlQ = accounts[2]
		const booluUSSc72 = await LayerxfA1FFzM.approveAndCall.call(addressDtr9ln1, uintXTUN85u, byteSmRHnww, {from: accounts[0]});
		const addressHu6SFiS = await LayerxfA1FFzM.transferOwnership.call(addressmHX6RlQ, {from: accounts[4]});
		const uintDndHn4X = await LayerxfA1FFzM.getStakesNum.call({from: accounts[3]});
		await LayerxfA1FFzM.onlyOwner.call({from: accounts[1]});
		const uintONmcsNA = await LayerxfA1FFzM.totalSupply.call({from: accounts[5]});

		await expect(LayerxfA1FFzM.approveAndCall.call(addressDtr9ln1, uintXTUN85u, byteSmRHnww, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresskNAM4YO = accounts[3]
		const LayerxkkhOBI4 = await Layerx.new(addresskNAM4YO, {from: accounts[5]});
		const uints0mJymp = await LayerxkkhOBI4.totalSupply.call({from: accounts[3]});
		const uinthCDSAyK = await LayerxkkhOBI4.getStakesNum.call({from: accounts[1]});

		assert.equal(uinthCDSAyK, BigInt("1"))
		assert.equal(uints0mJymp, BigInt("40000000000000000000000"))
	});

	it('test for Layerx', async () => {
		const addresstfCZJAV = accounts[3]
		const LayerxkkhOBI4 = await Layerx.new(addresstfCZJAV, {from: accounts[5]});
		const addressrhaf9pq = accounts[3]
		const addressNLwm20L = accounts[0]
		const uints0mJymp = await LayerxkkhOBI4.totalSupply.call({from: accounts[3]});
		const uintI1IMd9k = await LayerxkkhOBI4.allowance.call(addressNLwm20L, addressrhaf9pq, {from: accounts[1]});

		assert.equal(uintI1IMd9k, BigInt("0"))
		assert.equal(uints0mJymp, BigInt("40000000000000000000000"))
	});

	it('test for Layerx', async () => {
		const addressInn6M3N = accounts[3]
		const LayerxkkhOBI4 = await Layerx.new(addressInn6M3N, {from: accounts[5]});
		const addressn6lSi0 = "0x0000000000000000000000000000000000000001"
		const uintUbUCiq8 = BigInt("90")
		const addressTrxL3F2 = await LayerxkkhOBI4.transferOwnership.call(addressn6lSi0, {from: accounts[3]});
		const uintI957tZ5 = await LayerxkkhOBI4.withdraw.call(uintUbUCiq8, {from: accounts[2]});
		await LayerxkkhOBI4.addStakePayment.call({from: accounts[3]});
		await LayerxkkhOBI4.addStakePayment.call({from: accounts[0]});

		await expect(LayerxkkhOBI4.withdraw.call(uintUbUCiq8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address9IHC6u = accounts[3]
		const LayerxkkhOBI4 = await Layerx.new(address9IHC6u, {from: accounts[5]});
		await LayerxkkhOBI4.f.call({from: accounts[0]});
		const uints0mJymp = await LayerxkkhOBI4.totalSupply.call({from: accounts[3]});

		await expect(LayerxkkhOBI4.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressGQT3uLT = accounts[3]
		const LayerxkkhOBI4 = await Layerx.new(addressGQT3uLT, {from: accounts[5]});
		const uintq0bg4pt = BigInt("293")
		const uints0mJymp = await LayerxkkhOBI4.totalSupply.call({from: accounts[3]});
		const uint256zIYSoB1 = await LayerxkkhOBI4.burn.call(uintq0bg4pt, {from: accounts[3]});

		assert.equal(uints0mJymp, BigInt("40000000000000000000000"))
	});

	it('test for Layerx', async () => {
		const addresswHqVatW = accounts[3]
		const LayerxkkhOBI4 = await Layerx.new(addresswHqVatW, {from: accounts[5]});
		const boolqfsoriX = false
		const uintLz85zYm = await LayerxkkhOBI4.getStakesNum.call({from: accounts[4]});
		const boolBCWLwf1 = await LayerxkkhOBI4.setIsPaused.call(boolqfsoriX, {from: accounts[3]});
		const uints0mJymp = await LayerxkkhOBI4.totalSupply.call({from: accounts[3]});

		assert.equal(uintLz85zYm, BigInt("1"))
		assert.equal(uints0mJymp, BigInt("40000000000000000000000"))
	});
})