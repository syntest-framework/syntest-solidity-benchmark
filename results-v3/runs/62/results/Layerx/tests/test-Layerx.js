const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressbsNarv2 = accounts[4]
		const LayerxIesZaPu = await Layerx.new(addressbsNarv2, {from: accounts[0]});
		const address8JxVLK = "0x0000000000000000000000000000000000000001"
		const addressxi7yOq8 = accounts[3]
		const uintHqv2fjb = BigInt("1944")
		const uintZmPerS9 = await LayerxIesZaPu.allowance.call(addressxi7yOq8, address8JxVLK, {from: accounts[1]});
		const uintQwCGJZ4 = await LayerxIesZaPu.exist.call(uintHqv2fjb, {from: accounts[3]});
		await LayerxIesZaPu.addStakePayment.call({from: accounts[3]});
		const uinty79O7YQ = await LayerxIesZaPu.totalSupply.call({from: accounts[2]});

		assert.equal(uintZmPerS9, BigInt("0"))
		await expect(LayerxIesZaPu.exist.call(uintHqv2fjb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresszCYeEK6 = accounts[2]
		const LayerxP448tD = await Layerx.new(addresszCYeEK6, {from: "0x0000000000000000000000000000000000000001"});
		const uintXTTjPhO = BigInt("354")
		const addressYlROlal = accounts[4]
		const addressZHjjB1 = accounts[2]
		const uintlMtmuo1 = BigInt("117")
		const boolpzVMSBa = await LayerxP448tD.transferFrom.call(addressZHjjB1, addressYlROlal, uintXTTjPhO, {from: accounts[1]});
		await LayerxP448tD.paused.call({from: accounts[3]});
		const uintFeYaT8q = await LayerxP448tD.exist.call(uintlMtmuo1, {from: accounts[0]});
	});

	it('test for Layerx', async () => {
		const addresssUiGypO = accounts[3]
		const LayerxzebZoO = await Layerx.new(addresssUiGypO, {from: accounts[1]});
		const addressiNZk5yN = accounts[0]
		const addressZiXZIg2 = accounts[1]
		const uintKlILVgw = BigInt("176")
		const uintrp8LbGN = await LayerxzebZoO.allowance.call(addressZiXZIg2, addressiNZk5yN, {from: accounts[1]});
		const uintBsCEOX2 = await LayerxzebZoO.lock.call(uintKlILVgw, {from: accounts[4]});
		await LayerxzebZoO.onlyOwner.call({from: accounts[1]});

		assert.equal(uintrp8LbGN, BigInt("0"))
		await expect(LayerxzebZoO.lock.call(uintKlILVgw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXJp5awG = accounts[0]
		const LayerxxcYDul = await Layerx.new(addressXJp5awG, {from: accounts[1]});
		const uintqLkuxKy = BigInt("783")
		const uint256A6pXEJ = await LayerxxcYDul.burn.call(uintqLkuxKy, {from: accounts[0]});
		await LayerxxcYDul.addStakePayment.call({from: accounts[4]});

		await expect(LayerxxcYDul.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressdoqxlrO = accounts[2]
		const LayerxgngvNNr = await Layerx.new(addressdoqxlrO, {from: accounts[3]});
		const uintPH3DW70 = BigInt("98")
		const addressjukbi7M = accounts[2]
		const addressUTto8i = accounts[2]
		const uintfwC5lSk = BigInt("1175")
		const addressUngglrS = accounts[1]
		const addressjcfzM0z = accounts[2]
		const uintOV6c4Vx = BigInt("654")
		const boolo3PXIt = await LayerxgngvNNr.transferFrom.call(addressUTto8i, addressjukbi7M, uintPH3DW70, {from: accounts[3]});
		const boolmF9dW1V = await LayerxgngvNNr.approve.call(addressUngglrS, uintfwC5lSk, {from: accounts[3]});
		const addresswkrWs7Y = await LayerxgngvNNr.setNewStakeCreator.call(addressjcfzM0z, {from: accounts[3]});
		const uintKLidZ7Q = await LayerxgngvNNr.withdraw.call(uintOV6c4Vx, {from: accounts[3]});

		await expect(LayerxgngvNNr.transferFrom.call(addressUTto8i, addressjukbi7M, uintPH3DW70, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressCo2oIdu = accounts[4]
		const LayerxIKnaVbg = await Layerx.new(addressCo2oIdu, {from: accounts[1]});
		const uintZmotbtM = BigInt("493")
		const addressneG1kzI = accounts[3]
		const uintAn5mgPI = BigInt("362")
		const addressgQs6zr = accounts[4]
		const boolZoUJLIX = await LayerxIKnaVbg.transfer.call(addressneG1kzI, uintZmotbtM, {from: accounts[5]});
		const uint3rZGay = await LayerxIKnaVbg.exist.call(uintAn5mgPI, {from: accounts[2]});
		await LayerxIKnaVbg.onlyOwner.call({from: accounts[2]});
		const uinttGuKdeo = await LayerxIKnaVbg.balanceOf.call(addressgQs6zr, {from: accounts[1]});

		await expect(LayerxIKnaVbg.transfer.call(addressneG1kzI, uintZmotbtM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressEzAez1t = accounts[3]
		const LayerxA12AOKr = await Layerx.new(addressEzAez1t, {from: accounts[0]});
		const uintsdt8DSa = BigInt("458")
		const uintH2bswYa = BigInt("1857")
		const addressb0O6h0j = accounts[0]
		const uintpYMHyMX = await LayerxA12AOKr.withdraw.call(uintsdt8DSa, {from: accounts[0]});
		const uintwJfq1pF = await LayerxA12AOKr.withdraw.call(uintH2bswYa, {from: accounts[1]});
		const uintdpLxTiI = await LayerxA12AOKr.getStakesNum.call({from: accounts[5]});
		const addressni78gnc = await LayerxA12AOKr.setNewStakeCreator.call(addressb0O6h0j, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxA12AOKr.withdraw.call(uintsdt8DSa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLRKXtA7 = accounts[0]
		const LayerxynrLXwR = await Layerx.new(addressLRKXtA7, {from: accounts[4]});
		const addressT75TeV = accounts[4]
		const addressy1dSaxG = accounts[4]
		const uintd2pX7cG = await LayerxynrLXwR.allowance.call(addressy1dSaxG, addressT75TeV, {from: accounts[0]});
		await LayerxynrLXwR.unlock.call({from: accounts[5]});
		await LayerxynrLXwR.addStakePayment.call({from: accounts[4]});

		assert.equal(uintd2pX7cG, BigInt("0"))
		await expect(LayerxynrLXwR.unlock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYv1JwT = accounts[0]
		const LayerxxcYDul = await Layerx.new(addressYv1JwT, {from: accounts[1]});
		const uintDObbBMA = BigInt("783")
		const addressb1SVUwT = accounts[2]
		const uint256A6pXEJ = await LayerxxcYDul.burn.call(uintDObbBMA, {from: accounts[0]});
		const uintIClr1bW = await LayerxxcYDul.balanceOf.call(addressb1SVUwT, {from: accounts[5]});

		assert.equal(uintIClr1bW, BigInt("0"))
	});

	it('test for Layerx', async () => {
		const addressHMAG0qO = accounts[0]
		const LayerxynrLXwR = await Layerx.new(addressHMAG0qO, {from: accounts[4]});
		const addressCHXAYSv = accounts[4]
		const addressEmhqVGi = accounts[0]
		const boolPbAZzEO = true
		const addressioMyP3 = accounts[0]
		const addressqrNNOcq = "0x0000000000000000000000000000000000000001"
		const uintPxmTPR0 = BigInt("587")
		const uintd2pX7cG = await LayerxynrLXwR.allowance.call(addressEmhqVGi, addressCHXAYSv, {from: accounts[0]});
		const booldoiLZYj = await LayerxynrLXwR.setIsPaused.call(boolPbAZzEO, {from: accounts[0]});
		const uintte7u4Ce = await LayerxynrLXwR.allowance.call(addressqrNNOcq, addressioMyP3, {from: accounts[3]});
		await LayerxynrLXwR.unlock.call({from: accounts[5]});
		const uintPsrvJZ = await LayerxynrLXwR.exist.call(uintPxmTPR0, {from: accounts[3]});
		await LayerxynrLXwR.addStakePayment.call({from: accounts[4]});

		assert.equal(uintd2pX7cG, BigInt("0"))
		assert.equal(uintte7u4Ce, BigInt("0"))
		await expect(LayerxynrLXwR.unlock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressWE75bbn = accounts[0]
		const LayerxxcYDul = await Layerx.new(addressWE75bbn, {from: accounts[1]});
		const uintwviZmhq = BigInt("759")
		const uint256A6pXEJ = await LayerxxcYDul.burn.call(uintwviZmhq, {from: accounts[0]});
		await LayerxxcYDul.f.call({from: accounts[4]});
		await LayerxxcYDul.addStakePayment.call({from: accounts[4]});

		await expect(LayerxxcYDul.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYOSNM1 = accounts[1]
		const LayerxTxg8JD = await Layerx.new(addressYOSNM1, {from: accounts[4]});
		const byteLpvtnQp = "0x1e06"
		const uintExmaSL = BigInt("207")
		const addressRHb00Bz = accounts[2]
		const addresset9ncB9 = "0x0000000000000000000000000000000000000001"
		const addressuQnDb19 = accounts[4]
		const uintFea5cvI = BigInt("777")
		const boolwNTaZ3M = await LayerxTxg8JD.approveAndCall.call(addressRHb00Bz, uintExmaSL, byteLpvtnQp, {from: accounts[0]});
		const uintSyunNCb = await LayerxTxg8JD.allowance.call(addressuQnDb19, addresset9ncB9, {from: accounts[5]});
		await LayerxTxg8JD.f.call({from: accounts[1]});
		const uintHFmvjNa = await LayerxTxg8JD.exist.call(uintFea5cvI, {from: accounts[4]});

		await expect(LayerxTxg8JD.approveAndCall.call(addressRHb00Bz, uintExmaSL, byteLpvtnQp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressdwtKpCo = accounts[0]
		const LayerxxcYDul = await Layerx.new(addressdwtKpCo, {from: accounts[1]});
		const uintYe4glpE = BigInt("233")
		const addresskPx4O8t = accounts[5]
		const boolzRjlwOR = await LayerxxcYDul.approve.call(addresskPx4O8t, uintYe4glpE, {from: accounts[4]});
		const uintXRGswdp = await LayerxxcYDul.totalSupply.call({from: accounts[2]});
		await LayerxxcYDul.addStakePayment.call({from: accounts[4]});

		assert.equal(boolzRjlwOR, true)
		assert.equal(uintXRGswdp, BigInt("40000000000000000000000"))
		await expect(LayerxxcYDul.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressHlwJ1ut = accounts[0]
		const LayerxxcYDul = await Layerx.new(addressHlwJ1ut, {from: accounts[1]});
		const addressYtq5JT = accounts[0]
		await LayerxxcYDul.addStakePayment.call({from: accounts[0]});
		const addressxpg3Cmj = await LayerxxcYDul.setNewStakeCreator.call(addressYtq5JT, {from: accounts[1]});

		await expect(LayerxxcYDul.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressGxLudej = accounts[0]
		const LayerxxcYDul = await Layerx.new(addressGxLudej, {from: accounts[1]});
		const uintZC0hAI7 = await LayerxxcYDul.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxxcYDul.addStakePayment.call({from: accounts[0]});

		assert.equal(uintZC0hAI7, BigInt("1"))
		await expect(LayerxxcYDul.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressD6ptFjn = accounts[0]
		const LayerxxcYDul = await Layerx.new(addressD6ptFjn, {from: accounts[1]});
		const addressC9tjxqy = accounts[2]
		const addressSzSDBo2 = await LayerxxcYDul.transferOwnership.call(addressC9tjxqy, {from: accounts[0]});
		await LayerxxcYDul.addStakePayment.call({from: accounts[4]});

		await expect(LayerxxcYDul.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressBGndjFP = accounts[1]
		const LayerxJOriMQ = await Layerx.new(addressBGndjFP, {from: accounts[5]});
		const addressQKaYSvt = accounts[0]
		const addressSQcCs0n = accounts[3]
		const addressVzxxtNY = accounts[4]
		const uintRASlnwB = await LayerxJOriMQ.allowance.call(addressSQcCs0n, addressQKaYSvt, {from: accounts[1]});
		const addressvJHuMkv = await LayerxJOriMQ.setNewStakeCreator.call(addressVzxxtNY, {from: accounts[1]});
		await LayerxJOriMQ.paused.call({from: accounts[1]});

		assert.equal(uintRASlnwB, BigInt("0"))
		await expect(LayerxJOriMQ.paused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})