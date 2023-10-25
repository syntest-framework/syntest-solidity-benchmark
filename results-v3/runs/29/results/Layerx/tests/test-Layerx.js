const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const address1ve5Bw = accounts[2]
		const LayerxN9UXc3g = await Layerx.new(address1ve5Bw, {from: accounts[2]});
		const uintB6Ws1Dn = BigInt("1492")
		const addressGOdb0D = accounts[4]
		const byteLQs5eRU = "0x0f1e1a"
		const uintwzpehah = BigInt("1425")
		const addressO2aT0qz = accounts[5]
		const uintdPbBlTN = BigInt("84")
		const addressq72eT7w = accounts[0]
		const addressz81Xl0b = accounts[4]
		const uintTBljsjJ = BigInt("1858")
		const addressvvY7NIe = "0x0000000000000000000000000000000000000001"
		const addressquFvREf = accounts[4]
		await LayerxN9UXc3g.paused.call({from: accounts[3]});
		const boolpPczzkR = await LayerxN9UXc3g.approve.call(addressGOdb0D, uintB6Ws1Dn, {from: accounts[0]});
		const boolKXWpxd9 = await LayerxN9UXc3g.approveAndCall.call(addressO2aT0qz, uintwzpehah, byteLQs5eRU, {from: accounts[2]});
		const boolXQgjS1p = await LayerxN9UXc3g.transferFrom.call(addressz81Xl0b, addressq72eT7w, uintdPbBlTN, {from: accounts[1]});
		const boolamwWpCp = await LayerxN9UXc3g.transfer.call(addressvvY7NIe, uintTBljsjJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintxSBu09 = await LayerxN9UXc3g.balanceOf.call(addressquFvREf, {from: accounts[5]});

		await expect(LayerxN9UXc3g.paused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressZoRJQ6p = accounts[1]
		const LayerxgYMIJSi = await Layerx.new(addressZoRJQ6p, {from: accounts[0]});
		const boolXmLOSk = true
		const addressu2sKpaf = accounts[1]
		const addressJn5qsxS = accounts[3]
		const uintjEl5rxE = BigInt("1101")
		const addressou7ImbA = accounts[5]
		const boolGuxra9y = await LayerxgYMIJSi.setIsPaused.call(boolXmLOSk, {from: accounts[5]});
		const uintjEudAVC = await LayerxgYMIJSi.balanceOf.call(addressu2sKpaf, {from: accounts[2]});
		const addressQOciPkj = await LayerxgYMIJSi.setNewStakeCreator.call(addressJn5qsxS, {from: accounts[1]});
		await LayerxgYMIJSi.unlock.call({from: accounts[1]});
		const boolgb8uOAb = await LayerxgYMIJSi.approve.call(addressou7ImbA, uintjEl5rxE, {from: accounts[0]});
		await LayerxgYMIJSi.paused.call({from: accounts[2]});

		await expect(LayerxgYMIJSi.setIsPaused.call(boolXmLOSk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressCYFWIVh = accounts[1]
		const LayerxlI4A2lc = await Layerx.new(addressCYFWIVh, {from: accounts[3]});
		const uintgXyzEl = BigInt("1529")
		const uintjlrDfDa = BigInt("1702")
		const addresshsZPMaP = accounts[5]
		await LayerxlI4A2lc.unlock.call({from: accounts[5]});
		const uintpCNdIob = await LayerxlI4A2lc.withdraw.call(uintgXyzEl, {from: accounts[4]});
		await LayerxlI4A2lc.f.call({from: accounts[2]});
		await LayerxlI4A2lc.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolc3fcFIB = await LayerxlI4A2lc.approve.call(addresshsZPMaP, uintjlrDfDa, {from: accounts[0]});

		await expect(LayerxlI4A2lc.unlock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressTMUB2sp = "0x0000000000000000000000000000000000000001"
		const LayerxE3hwdWQ = await Layerx.new(addressTMUB2sp, {from: accounts[3]});
		const addressB2THIj3 = "0x0000000000000000000000000000000000000001"
		const boolWZjx4tJ = true
		const uintyFrlJI2 = BigInt("1279")
		const addressuZISXr = accounts[5]
		const addressYAox3Vh = accounts[4]
		const uintqsnC1Z = await LayerxE3hwdWQ.balanceOf.call(addressB2THIj3, {from: accounts[5]});
		const uintYErKLb = await LayerxE3hwdWQ.totalSupply.call({from: accounts[3]});
		const boolEoeDiY = await LayerxE3hwdWQ.setIsPaused.call(boolWZjx4tJ, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxE3hwdWQ.paused.call({from: accounts[3]});
		const boolYEjanB3 = await LayerxE3hwdWQ.transferFrom.call(addressYAox3Vh, addressuZISXr, uintyFrlJI2, {from: accounts[3]});

		assert.equal(uintYErKLb, BigInt("40000000000000000000000"))
		assert.equal(uintqsnC1Z, BigInt("40000000000000000000000"))
		await expect(LayerxE3hwdWQ.paused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresslQvmoOD = accounts[2]
		const LayerxQoCbjcJ = await Layerx.new(addresslQvmoOD, {from: accounts[4]});
		const addressez69zFD = accounts[1]
		const addressWtUvKR = accounts[1]
		const addressnyaxOOv = accounts[1]
		const addressnr52Oa = accounts[2]
		const uintsnI4Mfj = await LayerxQoCbjcJ.totalSupply.call({from: accounts[0]});
		const addressrco1kxn = await LayerxQoCbjcJ.setNewStakeCreator.call(addressez69zFD, {from: accounts[2]});
		const addressj6CUwjR = await LayerxQoCbjcJ.setNewStakeCreator.call(addressWtUvKR, {from: accounts[4]});
		const uintsJf0ShI = await LayerxQoCbjcJ.allowance.call(addressnr52Oa, addressnyaxOOv, {from: accounts[3]});

		assert.equal(uintsnI4Mfj, BigInt("40000000000000000000000"))
		await expect(LayerxQoCbjcJ.setNewStakeCreator.call(addressWtUvKR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressPzy1wMl = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addressPzy1wMl, {from: accounts[3]});
		const uintxZMes2x = BigInt("1939")
		const addressAJ7Gg3N = accounts[0]
		const addressJeGxmnB = accounts[1]
		const addressgf9C4yO = accounts[4]
		const uintWjUPb1I = await LayerxDbvg4B3.withdraw.call(uintxZMes2x, {from: "0x0000000000000000000000000000000000000001"});
		const uintJpKfqJn = await LayerxDbvg4B3.balanceOf.call(addressAJ7Gg3N, {from: accounts[2]});
		const addressWtZtMz5 = await LayerxDbvg4B3.transferOwnership.call(addressJeGxmnB, {from: accounts[4]});
		const addressNH3qKwl = await LayerxDbvg4B3.transferOwnership.call(addressgf9C4yO, {from: accounts[1]});

		await expect(LayerxDbvg4B3.withdraw.call(uintxZMes2x, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressARFFVj5 = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addressARFFVj5, {from: accounts[3]});
		const addressTgYUlor = accounts[1]
		const addressFpzleIZ = accounts[0]
		const addressaEF00aK = accounts[4]
		const addressFlcoaS8 = accounts[3]
		const uintJpKfqJn = await LayerxDbvg4B3.balanceOf.call(addressTgYUlor, {from: accounts[2]});
		const uintO7cJc4H = await LayerxDbvg4B3.allowance.call(addressaEF00aK, addressFpzleIZ, {from: accounts[4]});
		const addressNH3qKwl = await LayerxDbvg4B3.transferOwnership.call(addressFlcoaS8, {from: accounts[1]});

		assert.equal(uintJpKfqJn, BigInt("0"))
		assert.equal(uintO7cJc4H, BigInt("0"))
		await expect(LayerxDbvg4B3.transferOwnership.call(addressFlcoaS8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresstrOYdG5 = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addresstrOYdG5, {from: accounts[3]});
		const byteGRZJrlI = "0x1b1700161c13"
		const uintPWC2qG = BigInt("459")
		const addressiZmf9Ta = accounts[4]
		const addressy59XIAa = accounts[1]
		const boolnQho4wb = await LayerxDbvg4B3.approveAndCall.call(addressiZmf9Ta, uintPWC2qG, byteGRZJrlI, {from: accounts[0]});
		const uintJpKfqJn = await LayerxDbvg4B3.balanceOf.call(addressy59XIAa, {from: accounts[2]});

		await expect(LayerxDbvg4B3.approveAndCall.call(addressiZmf9Ta, uintPWC2qG, byteGRZJrlI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqBhjGnl = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addressqBhjGnl, {from: accounts[3]});
		const address2FPqpS = accounts[0]
		const addresseUidKMv = accounts[4]
		const uintl9wfFYs = await LayerxDbvg4B3.getStakesNum.call({from: accounts[0]});
		const uintJpKfqJn = await LayerxDbvg4B3.balanceOf.call(address2FPqpS, {from: accounts[2]});
		const addressNH3qKwl = await LayerxDbvg4B3.transferOwnership.call(addresseUidKMv, {from: accounts[1]});

		assert.equal(uintJpKfqJn, BigInt("0"))
		assert.equal(uintl9wfFYs, BigInt("1"))
		await expect(LayerxDbvg4B3.transferOwnership.call(addresseUidKMv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressf4v8yTX = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addressf4v8yTX, {from: accounts[3]});
		const addressWvrlV0z = accounts[0]
		const uintIxk0OLT = BigInt("1791")
		const addressNBJJaQf = accounts[0]
		const uintJpKfqJn = await LayerxDbvg4B3.balanceOf.call(addressWvrlV0z, {from: accounts[2]});
		const boolU0Toz4r = await LayerxDbvg4B3.transfer.call(addressNBJJaQf, uintIxk0OLT, {from: accounts[3]});

		assert.equal(uintJpKfqJn, BigInt("0"))
		await expect(LayerxDbvg4B3.transfer.call(addressNBJJaQf, uintIxk0OLT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressnsumx3R = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addressnsumx3R, {from: accounts[3]});
		const uintmDtKnJJ = BigInt("1105")
		const addressVTinuCr = accounts[1]
		const uintzeZ0FUa = await LayerxDbvg4B3.lock.call(uintmDtKnJJ, {from: accounts[1]});
		await LayerxDbvg4B3.onlyOwner.call({from: accounts[3]});
		const uintJpKfqJn = await LayerxDbvg4B3.balanceOf.call(addressVTinuCr, {from: accounts[2]});

		await expect(LayerxDbvg4B3.lock.call(uintmDtKnJJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYwVZgMa = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addressYwVZgMa, {from: accounts[3]});
		const uinttnQyIOb = BigInt("1908")
		const addresssuwDBH = accounts[1]
		const addressjtcGYqh = accounts[3]
		const addressHqDAhC = accounts[1]
		const boollxmFVfm = await LayerxDbvg4B3.transferFrom.call(addressjtcGYqh, addresssuwDBH, uinttnQyIOb, {from: accounts[2]});
		const uintJpKfqJn = await LayerxDbvg4B3.balanceOf.call(addressHqDAhC, {from: accounts[2]});

		await expect(LayerxDbvg4B3.transferFrom.call(addressjtcGYqh, addresssuwDBH, uinttnQyIOb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressH3bFFC = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addressH3bFFC, {from: accounts[3]});
		const addressmE1bSeW = accounts[6]
		const addressUyl1irE = accounts[1]
		const addressZsSRZp7 = accounts[5]
		const uintJpKfqJn = await LayerxDbvg4B3.balanceOf.call(addressmE1bSeW, {from: accounts[2]});
		await LayerxDbvg4B3.f.call({from: accounts[4]});
		const uintd7MZAAF = await LayerxDbvg4B3.allowance.call(addressZsSRZp7, addressUyl1irE, {from: accounts[3]});
		const uintoibXMg9 = await LayerxDbvg4B3.getStakesNum.call({from: accounts[2]});

		assert.equal(uintJpKfqJn, BigInt("0"))
		await expect(LayerxDbvg4B3.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresspzZtfgo = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addresspzZtfgo, {from: accounts[3]});
		const address0cRKag = accounts[4]
		const uintJpKfqJn = await LayerxDbvg4B3.balanceOf.call(address0cRKag, {from: accounts[2]});
		await LayerxDbvg4B3.addStakePayment.call({from: accounts[4]});

		assert.equal(uintJpKfqJn, BigInt("40000000000000000000000"))
		await expect(LayerxDbvg4B3.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresshTNWrDf = accounts[4]
		const LayerxuO9EnWP = await Layerx.new(addresshTNWrDf, {from: "0x0000000000000000000000000000000000000001"});
		const uintn1QeVOX = BigInt("573")
		const addressPJFgt7y = accounts[4]
		const uint7C3tgg = await LayerxuO9EnWP.getStakesNum.call({from: accounts[1]});
		const uintfnUbXRB = await LayerxuO9EnWP.exist.call(uintn1QeVOX, {from: accounts[4]});
		await LayerxuO9EnWP.paused.call({from: accounts[5]});
		const uintfbVkOJ = await LayerxuO9EnWP.balanceOf.call(addressPJFgt7y, {from: accounts[1]});
	});

	it('test for Layerx', async () => {
		const addresseOyE4Sw = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addresseOyE4Sw, {from: accounts[3]});
		const uintydx0aTx = BigInt("1857")
		const addressOicJeqJ = accounts[0]
		await LayerxDbvg4B3.addStakePayment.call({from: accounts[4]});
		const boolbB3Jfhs = await LayerxDbvg4B3.approve.call(addressOicJeqJ, uintydx0aTx, {from: accounts[3]});

		await expect(LayerxDbvg4B3.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressxB7hubm = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addressxB7hubm, {from: accounts[3]});
		const addressSANDKNU = accounts[0]
		await LayerxDbvg4B3.addStakePayment.call({from: accounts[1]});
		const uintJpKfqJn = await LayerxDbvg4B3.balanceOf.call(addressSANDKNU, {from: accounts[2]});

		await expect(LayerxDbvg4B3.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressbL5O4JK = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addressbL5O4JK, {from: accounts[3]});
		const uintUMLhgmG = BigInt("490")
		await LayerxDbvg4B3.addStakePayment.call({from: accounts[4]});
		const uint256WQsrdQh = await LayerxDbvg4B3.burn.call(uintUMLhgmG, {from: accounts[4]});
		const uintRb1c7UK = await LayerxDbvg4B3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxDbvg4B3.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressFSSjp7e = accounts[4]
		const LayerxDbvg4B3 = await Layerx.new(addressFSSjp7e, {from: accounts[3]});
		const addresscHGNNnQ = accounts[7]
		const addressuDscWGS = accounts[4]
		const uintJpKfqJn = await LayerxDbvg4B3.balanceOf.call(addresscHGNNnQ, {from: accounts[2]});
		const addressF4rR37U = await LayerxDbvg4B3.transferOwnership.call(addressuDscWGS, {from: accounts[4]});

		assert.equal(uintJpKfqJn, BigInt("0"))
	});
})