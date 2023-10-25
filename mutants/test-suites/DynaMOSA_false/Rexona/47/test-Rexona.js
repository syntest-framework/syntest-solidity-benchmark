const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringgDlwqBh = "V3ijIstlZqVjKflxdUJPKdBUaQRImGPCF"
		const stringCVjhyLM = "xnGEGEWqsy8"
		const uintJLJnNHn = BigInt("1425")
		const RexonaqR52rJt = await Rexona.new(stringgDlwqBh, stringCVjhyLM, uintJLJnNHn, {from: accounts[1]});
		const uintS9driUM = BigInt("1090")
		const addressuEMFYqD = accounts[4]
		const uint92pWFI = BigInt("699")
		const addresskvvINWX = accounts[3]
//		const boolqKKctaM = await RexonaqR52rJt.transfer.call(addressuEMFYqD, uintS9driUM, {from: accounts[0]});
//		const boolVc4JCmf = await RexonaqR52rJt.approveAndCall.call(addresskvvINWX, uint92pWFI, {from: accounts[1]});

		await expect(RexonaqR52rJt.transfer.call(addressuEMFYqD, uintS9driUM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringCTDwOU = "PfANSJqP3OLrGIQobJnQG1XUFnJPMqSdG2tDbnzl8id8aFfpKd6bXv5VckpYViyH"
		const stringv0rqE8c = "qM8Y6hh9F6LORsZgeIcAtTAT1ZECAMwyObWwGHUywpraveg2gXVHezUZcryJh0wApVNmtfuxO9IXw"
		const uintuRgO5vg = BigInt("1334")
		const RexonaX6ut8H = await Rexona.new(stringCTDwOU, stringv0rqE8c, uintuRgO5vg, {from: accounts[4]});
		const uintZdxPlDm = BigInt("1093")
		const addressREQL6j4 = accounts[4]
		const addressCLlFNEq = accounts[3]
		const addressP2JQJC = accounts[0]
		const uintGYwDVFx = BigInt("129")
		const addresswr7BNW1 = accounts[1]
//		const boolDlmMapi = await RexonaX6ut8H.transfer.call(addressREQL6j4, uintZdxPlDm, {from: accounts[1]});
//		const boolB3RtjV = await RexonaX6ut8H.transferownership.call(addressCLlFNEq, {from: accounts[5]});
//		const boolcVUnGTv = await RexonaX6ut8H.transferownership.call(addressP2JQJC, {from: accounts[1]});
//		const boolPTRchJw = await RexonaX6ut8H.approve.call(addresswr7BNW1, uintGYwDVFx, {from: accounts[2]});

		await expect(RexonaX6ut8H.transfer.call(addressREQL6j4, uintZdxPlDm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringlCghdH = "OWtj2gsYvwvXhT7V2wz406X"
		const stringPsdJbfG = "9uzTNcOtY31z5vqTn1lPDq3kyuIMefUoMzMY2B3tLSmpw1bZmmfOArhUJbpQMEWqhKgvwO2PplUIkAMvP6TxuEG"
		const uintg45t2f = BigInt("62")
		const RexonabRgaFJX = await Rexona.new(stringlCghdH, stringPsdJbfG, uintg45t2f, {from: "0x0000000000000000000000000000000000000001"});
		const uintfl4rjz = BigInt("1679")
		const addressH3lnmpi = accounts[0]
		const uintX0KDD7L = BigInt("562")
		const addressCP3ugGC = accounts[3]
		const addressTrdNvQz = accounts[3]
		const boolGTRHums = await RexonabRgaFJX.approve.call(addressH3lnmpi, uintfl4rjz, {from: accounts[3]});
		const boola5CVsFi = await RexonabRgaFJX.transferFrom.call(addressTrdNvQz, addressCP3ugGC, uintX0KDD7L, {from: accounts[2]});
	});

	it('test for Rexona', async () => {
		const stringite3zU0 = "7pThBeT"
		const string1XIVcc = "PhzpbNM40QasaLpfGTh4TZ3EE6NbSuoUXXj2iz3p6GrWjXNutE3FI"
		const uintzEisGnS = BigInt("822")
		const RexonaJdDssm = await Rexona.new(stringite3zU0, string1XIVcc, uintzEisGnS, {from: accounts[3]});
		const uinti7MQJMT = BigInt("1274")
		const addressieFaQeO = "0x0000000000000000000000000000000000000001"
		const uintcNzeRgD = BigInt("1127")
		const addressDqFt2QH = accounts[1]
		const uintfhnutEN = BigInt("1648")
		const addresssVZOo71 = accounts[1]
		const addressmIbTxyd = accounts[1]
		const uintUxwoDO0 = BigInt("1724")
		const addressvTS3p6W = accounts[3]
		const boolnHlDUUx = await RexonaJdDssm.approve.call(addressieFaQeO, uinti7MQJMT, {from: accounts[4]});
//		const boolpKB04AL = await RexonaJdDssm.approveAndCall.call(addressDqFt2QH, uintcNzeRgD, {from: accounts[2]});
//		const boolV3DuXgb = await RexonaJdDssm.transferFrom.call(addressmIbTxyd, addresssVZOo71, uintfhnutEN, {from: accounts[4]});
//		const booluAH38Ju = await RexonaJdDssm.approve.call(addressvTS3p6W, uintUxwoDO0, {from: accounts[5]});

		assert.equal(boolnHlDUUx, true)
		await expect(RexonaJdDssm.approveAndCall.call(addressDqFt2QH, uintcNzeRgD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringgDlwqBh = "V3ijIstlZqVjKflxdUJPKdBUaQRImGPCF"
		const stringCVjhyLM = "xnGEGEWqsy8"
		const uintz18Qy1T = BigInt("1425")
		const RexonaqR52rJt = await Rexona.new(stringgDlwqBh, stringCVjhyLM, uintz18Qy1T, {from: accounts[1]});
		const uintfz5UNtv = BigInt("1910")
		const addressYf7DlWj = accounts[3]
		const uintfWYrMXg = BigInt("1090")
		const addressH73RKEm = accounts[4]
		const uintHWJ8Q5x = BigInt("1963")
		const addressDSZ1mle = accounts[1]
		const boolrwTDoz = await RexonaqR52rJt.approveAndCall.call(addressYf7DlWj, uintfz5UNtv, {from: accounts[1]});
//		const boolqKKctaM = await RexonaqR52rJt.transfer.call(addressH73RKEm, uintfWYrMXg, {from: accounts[0]});
//		const boolQpaQVYD = await RexonaqR52rJt.approve.call(addressDSZ1mle, uintHWJ8Q5x, {from: accounts[2]});

		assert.equal(boolrwTDoz, true)
		await expect(RexonaqR52rJt.transfer.call(addressH73RKEm, uintfWYrMXg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringgDlwqBh = "V3ijIstlZqVjKflxdUJPKdBUaQRImGPCF"
		const stringCVjhyLM = "xnGEGEWqsy8"
		const uintSLE4eK7 = BigInt("1425")
		const RexonaqR52rJt = await Rexona.new(stringgDlwqBh, stringCVjhyLM, uintSLE4eK7, {from: accounts[1]});
		const addressEpLdIf2 = accounts[0]
		const uintoh5Sl8m = BigInt("1654")
		const addressCcTRYB7 = "0x0000000000000000000000000000000000000001"
		const addressKKnS9k1 = accounts[3]
		const uintcKaSIlk = BigInt("125")
		const addressqIirE8p = accounts[3]
//		const boolcr9N9tm = await RexonaqR52rJt.transferownership.call(addressEpLdIf2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmYsNt6O = await RexonaqR52rJt.transferFrom.call(addressKKnS9k1, addressCcTRYB7, uintoh5Sl8m, {from: accounts[1]});
//		const boolVc4JCmf = await RexonaqR52rJt.approveAndCall.call(addressqIirE8p, uintcKaSIlk, {from: accounts[1]});

		await expect(RexonaqR52rJt.transferownership.call(addressEpLdIf2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringTDYvalQ = "8ZCNVeHCrTWMu6xAuoEnDPxI0cE1k3r"
		const stringSzPfmra = "MGj1LYArCiMVB51dTkkM5nan5jK4i52vUxLtWzJeTgJpTPsJ6VvtgcIuHCLRqO9CrGD3jDygHGaj4p3ieD"
		const uintcDDHqTi = BigInt("1037")
		const RexonamIZB1Rq = await Rexona.new(stringTDYvalQ, stringSzPfmra, uintcDDHqTi, {from: accounts[1]});
		const uintsB6mwMK = BigInt("0")
		const addressr9mT0G0 = accounts[3]
		const uinty72JASd = BigInt("180")
		const addressdEXy2wv = accounts[4]
		const booleDhOU9j = await RexonamIZB1Rq.transfer.call(addressr9mT0G0, uintsB6mwMK, {from: accounts[4]});
//		const booldUgGytc = await RexonamIZB1Rq.transfer.call(addressdEXy2wv, uinty72JASd, {from: accounts[0]});

		assert.equal(booleDhOU9j, true)
		await expect(RexonamIZB1Rq.transfer.call(addressdEXy2wv, uinty72JASd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringTDYvalQ = "8ZCNVeHCrTWMu6xAuoEnDPxI0cE1k3r"
		const stringSzPfmra = "MGj1LYArCiMVB51dTkkM5nan5jK4i52vUxLtWzJeTgJpTPsJ6VvtgcIuHCLRqO9CrGD3jDygHGaj4p3ieD"
		const uintWYwjq9N = BigInt("1037")
		const RexonamIZB1Rq = await Rexona.new(stringTDYvalQ, stringSzPfmra, uintWYwjq9N, {from: accounts[1]});
		const uintEI8h2dv = BigInt("0")
		const addressOSyXsKd = accounts[5]
		const uintwx5WwtG = BigInt("269")
		const addresstm0Vhqj = accounts[0]
		const uintSpGJrMK = BigInt("1035")
		const addressMoGMnzj = accounts[2]
		const boolETsU2UK = await RexonamIZB1Rq.approveAndCall.call(addressOSyXsKd, uintEI8h2dv, {from: accounts[1]});
//		const boolVSIDPA = await RexonamIZB1Rq.approveAndCall.call(addresstm0Vhqj, uintwx5WwtG, {from: accounts[0]});
//		const boolxpJNVQ4 = await RexonamIZB1Rq.approve.call(addressMoGMnzj, uintSpGJrMK, {from: accounts[3]});

		assert.equal(boolETsU2UK, true)
		await expect(RexonamIZB1Rq.approveAndCall.call(addresstm0Vhqj, uintwx5WwtG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})