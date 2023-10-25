const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressyoJ1AVo = accounts[2]
		const LayerxPnQsyUM = await Layerx.new(addressyoJ1AVo, {from: accounts[3]});
		const uintEpmfkVM = BigInt("583")
		const uintLvPKBeh = BigInt("896")
		const uintidRrNgA = await LayerxPnQsyUM.lock.call(uintEpmfkVM, {from: accounts[0]});
		const uintQ3m7tLc = await LayerxPnQsyUM.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});
		const uintFAANYt8 = await LayerxPnQsyUM.exist.call(uintLvPKBeh, {from: accounts[1]});
		await LayerxPnQsyUM.addStakePayment.call({from: accounts[0]});
		await LayerxPnQsyUM.onlyOwner.call({from: accounts[1]});

		await expect(LayerxPnQsyUM.lock.call(uintEpmfkVM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressigJR36S = accounts[5]
		const LayerxRJilcG = await Layerx.new(addressigJR36S, {from: accounts[5]});
		const uinttQqivhp = BigInt("158")
		const addressk7yST2 = accounts[2]
		const boolbu07b5t = false
		const boolQQgF5i = true
		const boolIRIzPyh = await LayerxRJilcG.approve.call(addressk7yST2, uinttQqivhp, {from: accounts[2]});
		const boolRRBV8OT = await LayerxRJilcG.setIsPaused.call(boolbu07b5t, {from: accounts[1]});
		const boolhRyn3qN = await LayerxRJilcG.setIsPaused.call(boolQQgF5i, {from: accounts[1]});

		assert.equal(boolIRIzPyh, true)
		await expect(LayerxRJilcG.setIsPaused.call(boolbu07b5t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressAhri5Le = accounts[5]
		const LayerxhBO4cra = await Layerx.new(addressAhri5Le, {from: accounts[2]});
		const uintElTPlp = BigInt("2030")
		const uintxySHCIT = await LayerxhBO4cra.getStakesNum.call({from: accounts[3]});
		const uintpXzbo0M = await LayerxhBO4cra.exist.call(uintElTPlp, {from: accounts[4]});
		const uintv36JUSa = await LayerxhBO4cra.totalSupply.call({from: accounts[3]});

		assert.equal(uintxySHCIT, BigInt("1"))
		await expect(LayerxhBO4cra.exist.call(uintElTPlp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressnE2QZpS = accounts[1]
		const Layerxc9Rj11h = await Layerx.new(addressnE2QZpS, {from: accounts[1]});
		const addresssaP2Ey = accounts[4]
		const uintohTIKj = await Layerxc9Rj11h.getStakesNum.call({from: accounts[1]});
		const addressoQnXdez = await Layerxc9Rj11h.setNewStakeCreator.call(addresssaP2Ey, {from: accounts[1]});

		assert.equal(uintohTIKj, BigInt("1"))
	});

	it('test for Layerx', async () => {
		const addressYsfQa6u = accounts[1]
		const Layerxj8xIXn7 = await Layerx.new(addressYsfQa6u, {from: accounts[1]});
		const addressVYHYUT = accounts[1]
		const address77FBbZ = accounts[0]
		const uintJd8q1P = BigInt("873")
		const addressaiS0l7v = accounts[0]
		const addressuorNbAV = accounts[2]
		const addressMvSOr8B = accounts[1]
		const uinta40v0YF = await Layerxj8xIXn7.allowance.call(address77FBbZ, addressVYHYUT, {from: accounts[0]});
		const booluRNgYlx = await Layerxj8xIXn7.transfer.call(addressaiS0l7v, uintJd8q1P, {from: accounts[4]});
		const uintC9XO2Y = await Layerxj8xIXn7.totalSupply.call({from: accounts[3]});
		const uintK50N0wx = await Layerxj8xIXn7.allowance.call(addressMvSOr8B, addressuorNbAV, {from: accounts[5]});
		await Layerxj8xIXn7.paused.call({from: accounts[0]});

		assert.equal(uinta40v0YF, BigInt("0"))
		await expect(Layerxj8xIXn7.transfer.call(addressaiS0l7v, uintJd8q1P, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressDxqI5eL = accounts[2]
		const LayerxAsAYHNt = await Layerx.new(addressDxqI5eL, {from: accounts[4]});
		const uintalQLvGw = BigInt("781")
		const uintaJcBx4 = BigInt("205")
		await LayerxAsAYHNt.unlock.call({from: accounts[1]});
		const uint9XMe3V = await LayerxAsAYHNt.withdraw.call(uintalQLvGw, {from: accounts[3]});
		const uintygtQ12z = await LayerxAsAYHNt.exist.call(uintaJcBx4, {from: accounts[4]});

		await expect(LayerxAsAYHNt.unlock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressoPcKKQT = accounts[5]
		const Layerxgwwq5Z9 = await Layerx.new(addressoPcKKQT, {from: accounts[3]});
		const byteCmJF0U = "0x08061d1c0c0b03151807191d1d1f0e07100607170a0615201a11020c050b06"
		const uintosvvGOr = BigInt("1767")
		const addressmaay7mL = accounts[3]
		const uinttXwom78 = BigInt("357")
		const addressctU6Ifo = accounts[5]
		const booll7B9oG = await Layerxgwwq5Z9.approveAndCall.call(addressmaay7mL, uintosvvGOr, byteCmJF0U, {from: accounts[3]});
		await Layerxgwwq5Z9.f.call({from: accounts[5]});
		const boolVcHAbJw = await Layerxgwwq5Z9.approve.call(addressctU6Ifo, uinttXwom78, {from: accounts[4]});

		await expect(Layerxgwwq5Z9.approveAndCall.call(addressmaay7mL, uintosvvGOr, byteCmJF0U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresshFztrcu = accounts[5]
		const LayerxgIYVgHJ = await Layerx.new(addresshFztrcu, {from: accounts[1]});
		const uinturEo7Mj = BigInt("803")
		const addressaZrsKDt = accounts[3]
		const boolWnlXibV = false
		const addressXTKQ3P1 = accounts[2]
		const uintOKMhRTl = await LayerxgIYVgHJ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jn0Fvil = await LayerxgIYVgHJ.burn.call(uinturEo7Mj, {from: accounts[0]});
		const addressKYWM3sb = await LayerxgIYVgHJ.setNewStakeCreator.call(addressaZrsKDt, {from: "0x0000000000000000000000000000000000000001"});
		const boolXrStivM = await LayerxgIYVgHJ.setIsPaused.call(boolWnlXibV, {from: accounts[2]});
		const addressroaVkCR = await LayerxgIYVgHJ.transferOwnership.call(addressXTKQ3P1, {from: accounts[4]});
		const uintybgdwsL = await LayerxgIYVgHJ.totalSupply.call({from: accounts[5]});

		assert.equal(uintOKMhRTl, BigInt("40000000000000000000000"))
		await expect(LayerxgIYVgHJ.burn.call(uinturEo7Mj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressjR98K85 = accounts[2]
		const LayerxAsAYHNt = await Layerx.new(addressjR98K85, {from: accounts[4]});
		const uintyHdF7ww = BigInt("781")
		const uintrkdiClq = BigInt("205")
		const uint9XMe3V = await LayerxAsAYHNt.withdraw.call(uintyHdF7ww, {from: accounts[3]});
		const uintygtQ12z = await LayerxAsAYHNt.exist.call(uintrkdiClq, {from: accounts[4]});

		await expect(LayerxAsAYHNt.withdraw.call(uintyHdF7ww, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUi44Qc = accounts[1]
		const Layerxc9Rj11h = await Layerx.new(addressUi44Qc, {from: accounts[1]});
		const uinttfqUuJP = BigInt("67")
		const addresszXSqW8u = "0x0000000000000000000000000000000000000001"
		const addressnS0aKo = accounts[2]
		const addressHsCrEYb = accounts[4]
		const bool69TccY = await Layerxc9Rj11h.transferFrom.call(addressnS0aKo, addresszXSqW8u, uinttfqUuJP, {from: accounts[4]});
		const uintohTIKj = await Layerxc9Rj11h.getStakesNum.call({from: accounts[1]});
		const addressoQnXdez = await Layerxc9Rj11h.setNewStakeCreator.call(addressHsCrEYb, {from: accounts[1]});

		await expect(Layerxc9Rj11h.transferFrom.call(addressnS0aKo, addresszXSqW8u, uinttfqUuJP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address0pP4ti = accounts[1]
		const Layerxc9Rj11h = await Layerx.new(address0pP4ti, {from: accounts[1]});
		const uintnLbEBXG = BigInt("890")
		const addressjLwxvYw = accounts[0]
		const addresskCcogVW = accounts[1]
		const addressXqbqQcO = accounts[5]
		const boolLNU0dU = await Layerxc9Rj11h.approve.call(addressjLwxvYw, uintnLbEBXG, {from: accounts[4]});
		const uintFdA1iqf = await Layerxc9Rj11h.balanceOf.call(addresskCcogVW, {from: accounts[2]});
		const uintohTIKj = await Layerxc9Rj11h.getStakesNum.call({from: accounts[1]});
		const addressoQnXdez = await Layerxc9Rj11h.setNewStakeCreator.call(addressXqbqQcO, {from: accounts[1]});

		assert.equal(boolLNU0dU, true)
		assert.equal(uintFdA1iqf, BigInt("40000000000000000000000"))
		assert.equal(uintohTIKj, BigInt("1"))
	});

	it('test for Layerx', async () => {
		const addressSSzLIlw = accounts[1]
		const Layerxc9Rj11h = await Layerx.new(addressSSzLIlw, {from: accounts[1]});
		const byteVCPvomX = "0x0312131d00000c1204140e021f1914031f14141c101813050c0b001319"
		const uintGbqLPqC = BigInt("1003")
		const addressx7uPlP0 = accounts[1]
		const addressYQkjkyE = accounts[1]
		await Layerxc9Rj11h.f.call({from: accounts[3]});
		const boolrbVv0q = await Layerxc9Rj11h.approveAndCall.call(addressx7uPlP0, uintGbqLPqC, byteVCPvomX, {from: accounts[0]});
		const addressoQnXdez = await Layerxc9Rj11h.setNewStakeCreator.call(addressYQkjkyE, {from: accounts[1]});

		await expect(Layerxc9Rj11h.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressY8qXC74 = accounts[1]
		const Layerxc9Rj11h = await Layerx.new(addressY8qXC74, {from: accounts[1]});
		const uintndbzvJa = BigInt("1116")
		const byteJSkKtQw = "0x160b0700"
		const uintvtfaPuG = BigInt("1251")
		const addressJ440HMg = accounts[1]
		const addresskusaozb = accounts[2]
		const uint256WqBta4l = await Layerxc9Rj11h.burn.call(uintndbzvJa, {from: accounts[1]});
		const boolzE6C6A5 = await Layerxc9Rj11h.approveAndCall.call(addressJ440HMg, uintvtfaPuG, byteJSkKtQw, {from: accounts[3]});
		const addressoQnXdez = await Layerxc9Rj11h.setNewStakeCreator.call(addresskusaozb, {from: accounts[1]});

		await expect(Layerxc9Rj11h.approveAndCall.call(addressJ440HMg, uintvtfaPuG, byteJSkKtQw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQgaEPzV = accounts[1]
		const Layerxc9Rj11h = await Layerx.new(addressQgaEPzV, {from: accounts[1]});
		const addresswvF4opM = accounts[2]
		const addressvg2eEX8 = accounts[5]
		const addressoQnXdez = await Layerxc9Rj11h.setNewStakeCreator.call(addresswvF4opM, {from: accounts[1]});
		await Layerxc9Rj11h.addStakePayment.call({from: accounts[0]});
		const addressnSCwQyg = await Layerxc9Rj11h.setNewStakeCreator.call(addressvg2eEX8, {from: accounts[0]});

		await expect(Layerxc9Rj11h.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressefNbzuh = accounts[2]
		const LayerxDDpJNN4 = await Layerx.new(addressefNbzuh, {from: accounts[2]});
		const uintTbIFKQl = BigInt("112")
		const addressNZL5XPO = accounts[1]
		const uintROdDQrA = BigInt("139")
		const addressxxKfQHC = accounts[1]
		const addressFvuAI9K = accounts[0]
		const uintXDeuyZr = BigInt("637")
		const addressS0HSU4Q = accounts[3]
		const boolNf0Y2MT = await LayerxDDpJNN4.approve.call(addressNZL5XPO, uintTbIFKQl, {from: accounts[1]});
		const boolLygqRw3 = await LayerxDDpJNN4.transfer.call(addressxxKfQHC, uintROdDQrA, {from: accounts[2]});
		const addressFq6zuvB = await LayerxDDpJNN4.transferOwnership.call(addressFvuAI9K, {from: accounts[2]});
		const uintJMPiJ99 = await LayerxDDpJNN4.lock.call(uintXDeuyZr, {from: accounts[3]});
		const addressn8UpRqG = await LayerxDDpJNN4.setNewStakeCreator.call(addressS0HSU4Q, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLygqRw3, true)
		assert.equal(boolNf0Y2MT, true)
		await expect(LayerxDDpJNN4.lock.call(uintXDeuyZr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSI5zgOe = accounts[1]
		const Layerxc9Rj11h = await Layerx.new(addressSI5zgOe, {from: accounts[1]});
		const boolBNuGtb6 = false
		const addresshFVLyKx = accounts[2]
		const boolB1DL0c = await Layerxc9Rj11h.setIsPaused.call(boolBNuGtb6, {from: accounts[1]});
		const addressoQnXdez = await Layerxc9Rj11h.setNewStakeCreator.call(addresshFVLyKx, {from: accounts[1]});
	});

	it('test for Layerx', async () => {
		const addressOEU51ML = accounts[1]
		const Layerxc9Rj11h = await Layerx.new(addressOEU51ML, {from: accounts[1]});
		const addressdcyQ0fh = accounts[2]
		const addressoQnXdez = await Layerxc9Rj11h.setNewStakeCreator.call(addressdcyQ0fh, {from: accounts[1]});
		await Layerxc9Rj11h.addStakePayment.call({from: accounts[1]});

		await expect(Layerxc9Rj11h.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressffsN3TU = accounts[2]
		const Layerxj4P7AMI = await Layerx.new(addressffsN3TU, {from: "0x0000000000000000000000000000000000000001"});
		const uintT6A5ZVU = BigInt("571")
		const boolsVGk65t = true
		const addresstS1w66 = accounts[3]
		const addressQNIbVzn = accounts[0]
		const uintlT9os3m = BigInt("294")
		const addressDMgExOg = accounts[2]
		await Layerxj4P7AMI.f.call({from: accounts[2]});
		const uintMC3EGKB = await Layerxj4P7AMI.lock.call(uintT6A5ZVU, {from: accounts[4]});
		const boolaPS8RsS = await Layerxj4P7AMI.setIsPaused.call(boolsVGk65t, {from: accounts[0]});
		const uint34BGyI = await Layerxj4P7AMI.allowance.call(addressQNIbVzn, addresstS1w66, {from: accounts[0]});
		const boolPRd3DIz = await Layerxj4P7AMI.approve.call(addressDMgExOg, uintlT9os3m, {from: accounts[2]});
	});
})