const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADGUR5Afy = await ZAD.new({from: accounts[2]});
		const uintVX0Sg38 = BigInt("297")
		const addresszSxlooR = accounts[0]
		const uintZ09tEVZ = BigInt("651")
		const addressg9EJ6M = accounts[5]
		const addressCJYt3e = accounts[2]
		const addressQFsjX5n = accounts[4]
		const addressjZB43v = accounts[1]
		const uintaA2nfpa = BigInt("1627")
		const addresspnOmhzg = accounts[5]
		const boolwCOA1hp = await ZADGUR5Afy.approve.call(addresszSxlooR, uintVX0Sg38, {from: accounts[4]});
		const boolB1cTpuZ = await ZADGUR5Afy.approve.call(addressg9EJ6M, uintZ09tEVZ, {from: accounts[5]});
		const uint256OIgjH8m = await ZADGUR5Afy.allowance.call(addressQFsjX5n, addressCJYt3e, {from: accounts[1]});
		const uint256O7cBQI = await ZADGUR5Afy.balanceOf.call(addressjZB43v, {from: accounts[4]});
		const boolmcV6sfC = await ZADGUR5Afy.increaseAllowance.call(addresspnOmhzg, uintaA2nfpa, {from: accounts[4]});

		assert.equal(boolB1cTpuZ, true)
		assert.equal(boolmcV6sfC, true)
		assert.equal(boolwCOA1hp, true)
		assert.equal(uint256O7cBQI, BigInt("0"))
		assert.equal(uint256OIgjH8m, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADvp0DZyP = await ZAD.new({from: accounts[3]});
		const addressTbTkag = accounts[3]
		const uintOqr9Hwq = BigInt("632")
		const addressjULvhLH = accounts[3]
		const uintgVlmw7E = BigInt("1032")
		const addressBSUtHc = accounts[1]
		const uint256rjJuwMM = await ZADvp0DZyP.balanceOf.call(addressTbTkag, {from: accounts[4]});
		const booltI6YfV1 = await ZADvp0DZyP.increaseAllowance.call(addressjULvhLH, uintOqr9Hwq, {from: accounts[3]});
		const booljY7ub5B = await ZADvp0DZyP.approve.call(addressBSUtHc, uintgVlmw7E, {from: accounts[4]});
		const uint8n3qgLP = await ZADvp0DZyP.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringGHWjca = await ZADvp0DZyP.symbol.call({from: accounts[3]});

		assert.equal(booljY7ub5B, true)
		assert.equal(booltI6YfV1, true)
		assert.equal(stringGHWjca, "ZAD")
		assert.equal(uint256rjJuwMM, BigInt("0"))
		assert.equal(uint8n3qgLP, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADH8dYjb = await ZAD.new({from: accounts[1]});
		const uintVzAq2WR = BigInt("1714")
		const addressze9v1BZ = accounts[2]
		const boolWKJMXqZ = await ZADH8dYjb.decreaseAllowance.call(addressze9v1BZ, uintVzAq2WR, {from: accounts[3]});
		const uint8wTpKBsf = await ZADH8dYjb.decimals.call({from: accounts[0]});
		const stringC3Tde4I = await ZADH8dYjb.name.call({from: accounts[1]});

		await expect(ZADH8dYjb.decreaseAllowance.call(addressze9v1BZ, uintVzAq2WR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADkEFQIEq = await ZAD.new({from: accounts[0]});
		const uintJWQKad = BigInt("1754")
		const addresstMledCF = "0x0000000000000000000000000000000000000001"
		const uintjUzKmRg = BigInt("1305")
		const addressTFxhi1 = accounts[2]
		const addressLrGZU3 = accounts[3]
		const boolR3xmL3 = await ZADkEFQIEq.approve.call(addresstMledCF, uintJWQKad, {from: accounts[3]});
		const uint256BmIFo3n = await ZADkEFQIEq.totalSupply.call({from: accounts[4]});
		const boolUwMqJwY = await ZADkEFQIEq.transferFrom.call(addressLrGZU3, addressTFxhi1, uintjUzKmRg, {from: accounts[3]});

		assert.equal(boolR3xmL3, true)
		assert.equal(uint256BmIFo3n, BigInt("100000000000000000000000000"))
		await expect(ZADkEFQIEq.transferFrom.call(addressLrGZU3, addressTFxhi1, uintjUzKmRg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADriaavr = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const addressw4Rsb6i = accounts[0]
		const addressiXjNULW = accounts[1]
		const uint256IaqhsO4 = await ZADriaavr.balanceOf.call(addressw4Rsb6i, {from: accounts[3]});
		const uint256MzOPDOW = await ZADriaavr.balanceOf.call(addressiXjNULW, {from: accounts[1]});
	});

	it('test for ZAD', async () => {
		const ZADotmNcz = await ZAD.new({from: accounts[3]});
		const uintK83hiLc = BigInt("491")
		const uintQS1uf4b = BigInt("503")
		const addressBWwop2p = accounts[4]
		const uintBitrz7a = BigInt("1062")
		const addressZ0myvm = accounts[0]
		const addressX3C4MyP = accounts[2]
		const uint8KSR6fFA = await ZADotmNcz.decimals.call({from: accounts[3]});
		const uint256rC3ru4o = await ZADotmNcz._burn.call(uintK83hiLc, {from: accounts[1]});
		const stringQc9xGhI = await ZADotmNcz.symbol.call({from: accounts[2]});
		const boolnhds3Da = await ZADotmNcz.increaseAllowance.call(addressBWwop2p, uintQS1uf4b, {from: accounts[2]});
		const boolBFJFBt5 = await ZADotmNcz.transferFrom.call(addressX3C4MyP, addressZ0myvm, uintBitrz7a, {from: accounts[2]});

		assert.equal(uint8KSR6fFA, BigInt("18"))
		await expect(ZADotmNcz._burn.call(uintK83hiLc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADGUR5Afy = await ZAD.new({from: accounts[2]});
		const uintdpzAiR4 = BigInt("1040")
		const addressnJ2sPDg = accounts[4]
		const uintngSFijo = BigInt("297")
		const addressDEOByBG = accounts[0]
		const uintsdp7Qoh = BigInt("651")
		const addressrySJovL = accounts[5]
		const addressxTaU35 = accounts[2]
		const addressh3vWwbU = accounts[4]
		const addressIBDrpO = accounts[1]
		const uintj4EgKlB = BigInt("1627")
		const addresshG4O07n = accounts[5]
		const boolXA7OKCM = await ZADGUR5Afy.increaseAllowance.call(addressnJ2sPDg, uintdpzAiR4, {from: accounts[3]});
		const boolwCOA1hp = await ZADGUR5Afy.approve.call(addressDEOByBG, uintngSFijo, {from: accounts[4]});
		const boolB1cTpuZ = await ZADGUR5Afy.approve.call(addressrySJovL, uintsdp7Qoh, {from: accounts[5]});
		const stringTs9gOTu = await ZADGUR5Afy.name.call({from: accounts[2]});
		const uint256OIgjH8m = await ZADGUR5Afy.allowance.call(addressh3vWwbU, addressxTaU35, {from: accounts[1]});
		const uint256O7cBQI = await ZADGUR5Afy.balanceOf.call(addressIBDrpO, {from: accounts[4]});
		const boolmcV6sfC = await ZADGUR5Afy.increaseAllowance.call(addresshG4O07n, uintj4EgKlB, {from: accounts[4]});

		assert.equal(boolB1cTpuZ, true)
		assert.equal(boolXA7OKCM, true)
		assert.equal(boolmcV6sfC, true)
		assert.equal(boolwCOA1hp, true)
		assert.equal(stringTs9gOTu, "Zadkiel")
		assert.equal(uint256O7cBQI, BigInt("0"))
		assert.equal(uint256OIgjH8m, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADVPUjbCx = await ZAD.new({from: accounts[4]});
		const addressxNrMprO = accounts[3]
		const uinteM4bhYb = BigInt("290")
		const addressqsA26CO = accounts[2]
		const addressOvzwNcm = accounts[1]
		const uintrNkjbix = BigInt("1406")
		const addressNTohOaP = accounts[1]
		const uintGvO60t2 = BigInt("1275")
		const addresseJAw5CL = accounts[4]
		const uint256NwOKFVe = await ZADVPUjbCx.balanceOf.call(addressxNrMprO, {from: accounts[5]});
		const boolmhKcYQY = await ZADVPUjbCx.increaseAllowance.call(addressqsA26CO, uinteM4bhYb, {from: accounts[4]});
		const uint256PIsJWFY = await ZADVPUjbCx.balanceOf.call(addressOvzwNcm, {from: accounts[3]});
		const stringfvgxAUx = await ZADVPUjbCx.symbol.call({from: accounts[0]});
		const boolMJYJNW5 = await ZADVPUjbCx.transfer.call(addressNTohOaP, uintrNkjbix, {from: accounts[2]});
		const boolUY6shqj = await ZADVPUjbCx.transfer.call(addresseJAw5CL, uintGvO60t2, {from: accounts[1]});

		assert.equal(boolmhKcYQY, true)
		assert.equal(stringfvgxAUx, "ZAD")
		assert.equal(uint256NwOKFVe, BigInt("0"))
		assert.equal(uint256PIsJWFY, BigInt("0"))
		await expect(ZADVPUjbCx.transfer.call(addressNTohOaP, uintrNkjbix, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADkEFQIEq = await ZAD.new({from: accounts[0]});
		const uintM652aBC = BigInt("1754")
		const addresspaQw2Bx = "0x0000000000000000000000000000000000000000"
		const uintguPjP19 = BigInt("1305")
		const addressKTcLP1C = accounts[2]
		const addressS975hh = accounts[3]
		const uintFPRY1Te = BigInt("1247")
		const addressv3t2WPJ = accounts[3]
		const boolR3xmL3 = await ZADkEFQIEq.approve.call(addresspaQw2Bx, uintM652aBC, {from: accounts[3]});
		const uint256BmIFo3n = await ZADkEFQIEq.totalSupply.call({from: accounts[4]});
		const boolUwMqJwY = await ZADkEFQIEq.transferFrom.call(addressS975hh, addressKTcLP1C, uintguPjP19, {from: accounts[3]});
		const boolIbvaQen = await ZADkEFQIEq.increaseAllowance.call(addressv3t2WPJ, uintFPRY1Te, {from: accounts[3]});

		await expect(ZADkEFQIEq.approve.call(addresspaQw2Bx, uintM652aBC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})