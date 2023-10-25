const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressbxeH2rO = "0x0000000000000000000000000000000000000001"
		const LayerxHWLXEnP = await Layerx.new(addressbxeH2rO, {from: accounts[2]});
		const boolH08Xjx = false
		const uintRMX9wt = BigInt("1470")
		const uintLhEpvgc = BigInt("1658")
		const addressTWwKwsf = accounts[4]
		const boolpnDEsSO = await LayerxHWLXEnP.setIsPaused.call(boolH08Xjx, {from: accounts[4]});
		const uintzWGhpa = await LayerxHWLXEnP.lock.call(uintRMX9wt, {from: accounts[4]});
		const uintFqmZtdg = await LayerxHWLXEnP.exist.call(uintLhEpvgc, {from: accounts[2]});
		await LayerxHWLXEnP.f.call({from: accounts[2]});
		const addresswvslSxP = await LayerxHWLXEnP.setNewStakeCreator.call(addressTWwKwsf, {from: accounts[5]});
		const uintB02RFM8 = await LayerxHWLXEnP.getStakesNum.call({from: accounts[2]});

		await expect(LayerxHWLXEnP.setIsPaused.call(boolH08Xjx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressiFrzTzx = accounts[1]
		const LayerxT31qH9 = await Layerx.new(addressiFrzTzx, {from: accounts[1]});
		const uintYIgJuzE = BigInt("1613")
		const uintIUn7lU = BigInt("1959")
		await LayerxT31qH9.onlyOwner.call({from: accounts[3]});
		await LayerxT31qH9.paused.call({from: accounts[5]});
		const uintEFzKupa = await LayerxT31qH9.withdraw.call(uintYIgJuzE, {from: accounts[3]});
		const uintSzosqHZ = await LayerxT31qH9.lock.call(uintIUn7lU, {from: accounts[4]});
		const uintKgA3xyv = await LayerxT31qH9.getStakesNum.call({from: accounts[0]});

		await expect(LayerxT31qH9.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressa7oGL8O = accounts[0]
		const LayerxQXtiiak = await Layerx.new(addressa7oGL8O, {from: accounts[3]});
		const addresszmxZdiI = accounts[3]
		const uintdsRUM3i = await LayerxQXtiiak.getStakesNum.call({from: accounts[2]});
		const uintLWywvl = await LayerxQXtiiak.getStakesNum.call({from: accounts[0]});
		const addressChy0k2 = await LayerxQXtiiak.transferOwnership.call(addresszmxZdiI, {from: accounts[1]});

		assert.equal(uintLWywvl, BigInt("1"))
		assert.equal(uintdsRUM3i, BigInt("1"))
		await expect(LayerxQXtiiak.transferOwnership.call(addresszmxZdiI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressFcoisc8 = accounts[2]
		const LayerxOmgGTIE = await Layerx.new(addressFcoisc8, {from: accounts[4]});
		const addresskNoMeSL = accounts[2]
		const addresscOw20Ce = accounts[2]
		await LayerxOmgGTIE.unlock.call({from: accounts[2]});
		const uintm6ee8yQ = await LayerxOmgGTIE.totalSupply.call({from: accounts[2]});
		const uintYPUNuJP = await LayerxOmgGTIE.allowance.call(addresscOw20Ce, addresskNoMeSL, {from: accounts[4]});

		await expect(LayerxOmgGTIE.unlock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressyQdJJhr = "0x0000000000000000000000000000000000000001"
		const LayerxXuOngdf = await Layerx.new(addressyQdJJhr, {from: accounts[0]});
		const uintJDsZw9E = BigInt("1966")
		await LayerxXuOngdf.addStakePayment.call({from: accounts[0]});
		const uints4wFGgF = await LayerxXuOngdf.lock.call(uintJDsZw9E, {from: accounts[2]});
		await LayerxXuOngdf.unlock.call({from: accounts[2]});

		await expect(LayerxXuOngdf.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressAWn0YMq = accounts[1]
		const LayerxsxYB6s0 = await Layerx.new(addressAWn0YMq, {from: "0x0000000000000000000000000000000000000001"});
		const boolHoW17TS = true
		const addressDq40RcR = "0x0000000000000000000000000000000000000001"
		const bool99Om5S = await LayerxsxYB6s0.setIsPaused.call(boolHoW17TS, {from: "0x0000000000000000000000000000000000000001"});
		const uintO4UBCBO = await LayerxsxYB6s0.balanceOf.call(addressDq40RcR, {from: accounts[4]});
		await LayerxsxYB6s0.addStakePayment.call({from: accounts[5]});
	});

	it('test for Layerx', async () => {
		const addressdoB0nu2 = accounts[3]
		const LayerxY5aTYSq = await Layerx.new(addressdoB0nu2, {from: accounts[1]});
		const uintOWUHtSS = BigInt("1039")
		const addresspSvidrz = "0x0000000000000000000000000000000000000001"
		const uintJ5BEGdp = BigInt("745")
		const addressTrQPlqr = accounts[1]
		const uintIVTPrwz = await LayerxY5aTYSq.totalSupply.call({from: accounts[3]});
		const boolQ2smBPX = await LayerxY5aTYSq.transfer.call(addresspSvidrz, uintOWUHtSS, {from: accounts[1]});
		const uintrNJaYKK = await LayerxY5aTYSq.exist.call(uintJ5BEGdp, {from: accounts[3]});
		const uint5kaMf8 = await LayerxY5aTYSq.balanceOf.call(addressTrQPlqr, {from: accounts[0]});

		assert.equal(uintIVTPrwz, BigInt("40000000000000000000000"))
		await expect(LayerxY5aTYSq.transfer.call(addresspSvidrz, uintOWUHtSS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressdx0faaK = accounts[3]
		const Layerx5svmx3 = await Layerx.new(addressdx0faaK, {from: accounts[3]});
		const uintUCXqwr = BigInt("1264")
		const addressEZPfNUQ = "0x0000000000000000000000000000000000000001"
		const addressBO0I1Qx = accounts[1]
		const boolcRsWx7 = await Layerx5svmx3.approve.call(addressEZPfNUQ, uintUCXqwr, {from: accounts[1]});
		const addressX6oBHIK = await Layerx5svmx3.setNewStakeCreator.call(addressBO0I1Qx, {from: accounts[5]});

		assert.equal(boolcRsWx7, true)
		await expect(Layerx5svmx3.setNewStakeCreator.call(addressBO0I1Qx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressv1TpZQd = accounts[3]
		const LayerxUTNLgr5 = await Layerx.new(addressv1TpZQd, {from: accounts[0]});
		const byteI3jmwSJ = "0x0b141b111414190f0f1c1d0d1714000c0e2010110b0612"
		const uintrsoREBa = BigInt("1592")
		const addressVPiy1fS = accounts[0]
		const uintkP355p = BigInt("1667")
		const addressUDD4Kgp = accounts[4]
		const boolZCU6ydV = await LayerxUTNLgr5.approveAndCall.call(addressVPiy1fS, uintrsoREBa, byteI3jmwSJ, {from: accounts[2]});
		await LayerxUTNLgr5.addStakePayment.call({from: accounts[2]});
		const boolgLNvN7J = await LayerxUTNLgr5.approve.call(addressUDD4Kgp, uintkP355p, {from: accounts[4]});

		await expect(LayerxUTNLgr5.approveAndCall.call(addressVPiy1fS, uintrsoREBa, byteI3jmwSJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresso7aNEIC = accounts[3]
		const Layerx5svmx3 = await Layerx.new(addresso7aNEIC, {from: accounts[3]});
		const addressutg15l4 = accounts[2]
		const uintZX21wgi = BigInt("961")
		const uintiNBtySL = BigInt("1264")
		const addressAdnyoN = "0x0000000000000000000000000000000000000000"
		const addressrEuuo85 = await Layerx5svmx3.transferOwnership.call(addressutg15l4, {from: accounts[3]});
		const uintiuy4KIn = await Layerx5svmx3.withdraw.call(uintZX21wgi, {from: accounts[2]});
		const boolcRsWx7 = await Layerx5svmx3.approve.call(addressAdnyoN, uintiNBtySL, {from: accounts[1]});

		await expect(Layerx5svmx3.withdraw.call(uintZX21wgi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressePZzIx = accounts[3]
		const Layerx5svmx3 = await Layerx.new(addressePZzIx, {from: accounts[3]});
		const uintIRvJwoH = BigInt("1264")
		const addresslb4ApwF = "0x0000000000000000000000000000000000000001"
		const uintPO14hIS = BigInt("1199")
		const boolcRsWx7 = await Layerx5svmx3.approve.call(addresslb4ApwF, uintIRvJwoH, {from: accounts[1]});
		const uintQOTvWIq = await Layerx5svmx3.lock.call(uintPO14hIS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolcRsWx7, true)
		await expect(Layerx5svmx3.lock.call(uintPO14hIS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressoGD0FOF = accounts[3]
		const Layerx5svmx3 = await Layerx.new(addressoGD0FOF, {from: accounts[3]});
		const uintFvhFKnX = BigInt("1264")
		const addresssCTlezl = accounts[3]
		const uintpLgpKID = BigInt("1707")
		const addressU5kXF9x = accounts[3]
		const addressBhsxaxg = accounts[2]
		const boolcRsWx7 = await Layerx5svmx3.approve.call(addresssCTlezl, uintFvhFKnX, {from: accounts[1]});
		const boold91Alw9 = await Layerx5svmx3.transferFrom.call(addressBhsxaxg, addressU5kXF9x, uintpLgpKID, {from: accounts[2]});

		assert.equal(boolcRsWx7, true)
		await expect(Layerx5svmx3.transferFrom.call(addressBhsxaxg, addressU5kXF9x, uintpLgpKID, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressDUEr9C2 = accounts[3]
		const Layerx5svmx3 = await Layerx.new(addressDUEr9C2, {from: accounts[3]});
		const addresskaS0Bhl = accounts[4]
		const uintTUd1Zdy = BigInt("1264")
		const address1Cf36z = accounts[3]
		const uintFVgXBts = await Layerx5svmx3.balanceOf.call(addresskaS0Bhl, {from: accounts[2]});
		const uintAWxEcKc = await Layerx5svmx3.getStakesNum.call({from: accounts[1]});
		const boolcRsWx7 = await Layerx5svmx3.approve.call(address1Cf36z, uintTUd1Zdy, {from: accounts[1]});

		assert.equal(boolcRsWx7, true)
		assert.equal(uintAWxEcKc, BigInt("1"))
		assert.equal(uintFVgXBts, BigInt("0"))
	});

	it('test for Layerx', async () => {
		const addressEN3VbMY = accounts[3]
		const Layerx5svmx3 = await Layerx.new(addressEN3VbMY, {from: accounts[3]});
		const uintBoSq2UJ = BigInt("926")
		const addresszZ8hYk1 = "0x0000000000000000000000000000000000000001"
		const uintNQZYcO = BigInt("385")
		const uintUAXI0U0 = BigInt("1264")
		const addressw7a1iad = accounts[4]
		const booletXSL4u = await Layerx5svmx3.transfer.call(addresszZ8hYk1, uintBoSq2UJ, {from: accounts[3]});
		const uint256sPHAhxw = await Layerx5svmx3.burn.call(uintNQZYcO, {from: accounts[1]});
		const boolcRsWx7 = await Layerx5svmx3.approve.call(addressw7a1iad, uintUAXI0U0, {from: accounts[1]});
		const uintPd2V9l = await Layerx5svmx3.getStakesNum.call({from: accounts[4]});

		assert.equal(booletXSL4u, true)
		await expect(Layerx5svmx3.burn.call(uintNQZYcO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressKH4HQT = accounts[3]
		const Layerx5svmx3 = await Layerx.new(addressKH4HQT, {from: accounts[3]});
		const uintqreQjsy = BigInt("1552")
		const uintVF1zBN2 = BigInt("1264")
		const addresscWJ6T6S = "0x0000000000000000000000000000000000000003"
		const uint256ZxoUvAC = await Layerx5svmx3.burn.call(uintqreQjsy, {from: accounts[3]});
		const boolcRsWx7 = await Layerx5svmx3.approve.call(addresscWJ6T6S, uintVF1zBN2, {from: accounts[1]});

		assert.equal(boolcRsWx7, true)
	});

	it('test for Layerx', async () => {
		const addresswENr7v = accounts[3]
		const Layerx5svmx3 = await Layerx.new(addresswENr7v, {from: accounts[3]});
		const uintCxiFiY = BigInt("1264")
		const addressfEyZL4T = "0x0000000000000000000000000000000000000003"
		const addressIYnyAP = accounts[1]
		const addressEHKmJmn = "0x0000000000000000000000000000000000000001"
		const boolcRsWx7 = await Layerx5svmx3.approve.call(addressfEyZL4T, uintCxiFiY, {from: accounts[1]});
		const uintpmuvBdV = await Layerx5svmx3.allowance.call(addressEHKmJmn, addressIYnyAP, {from: accounts[4]});

		assert.equal(boolcRsWx7, true)
		assert.equal(uintpmuvBdV, BigInt("0"))
	});

	it('test for Layerx', async () => {
		const addressKG7zlCG = accounts[3]
		const Layerx5svmx3 = await Layerx.new(addressKG7zlCG, {from: accounts[3]});
		const uintDiaJmjo = BigInt("1264")
		const addressHsSgBmL = accounts[5]
		const bytec9Cd3oD = "0x110c0415101d11010f031916011c1b080716100e100b1e17"
		const uintaZn7pIp = BigInt("680")
		const addressn0cm2yJ = accounts[3]
		await Layerx5svmx3.addStakePayment.call({from: accounts[3]});
		const boolcRsWx7 = await Layerx5svmx3.approve.call(addressHsSgBmL, uintDiaJmjo, {from: accounts[1]});
		const boolZMOoD4f = await Layerx5svmx3.approveAndCall.call(addressn0cm2yJ, uintaZn7pIp, bytec9Cd3oD, {from: accounts[2]});

		await expect(Layerx5svmx3.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresscmWzaau = accounts[1]
		const LayerxF6sy0Cy = await Layerx.new(addresscmWzaau, {from: accounts[3]});
		const uintgQFNya = BigInt("441")
		await LayerxF6sy0Cy.f.call({from: accounts[0]});
		await LayerxF6sy0Cy.f.call({from: accounts[0]});
		const uintUy0he49 = await LayerxF6sy0Cy.exist.call(uintgQFNya, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxF6sy0Cy.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressKKkAQBE = accounts[3]
		const Layerx5svmx3 = await Layerx.new(addressKKkAQBE, {from: accounts[3]});
		const uintGwNequf = BigInt("1264")
		const addressgTcRCCx = "0x0000000000000000000000000000000000000001"
		const boolmJ35NQ9 = false
		const boolcRsWx7 = await Layerx5svmx3.approve.call(addressgTcRCCx, uintGwNequf, {from: accounts[1]});
		const boolsvnndw1 = await Layerx5svmx3.setIsPaused.call(boolmJ35NQ9, {from: accounts[3]});

		assert.equal(boolcRsWx7, true)
	});

	it('test for Layerx', async () => {
		const addressR7fMFTs = accounts[3]
		const Layerx5svmx3 = await Layerx.new(addressR7fMFTs, {from: accounts[3]});
		const addressb3Iq0kJ = accounts[1]
		const addressCO1uHKS = await Layerx5svmx3.setNewStakeCreator.call(addressb3Iq0kJ, {from: accounts[3]});
		await Layerx5svmx3.addStakePayment.call({from: accounts[3]});

		await expect(Layerx5svmx3.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})