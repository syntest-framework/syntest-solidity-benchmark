const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractF7ruGRz = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjxDOvHd = BigInt("1440")
		const addressWxJIJVm = accounts[3]
		const uintbZpUclJ = BigInt("335")
		const addressbr80u7f = accounts[4]
		const addressDcmyfyr = accounts[3]
		const addressd760r58 = accounts[3]
		const addressWKLKga = accounts[1]
		const addressUJzVzTv = accounts[3]
		const uintLLZ6d8I = BigInt("467")
		const addressLaUfWGU = accounts[4]
		const uintWIiyIsy = BigInt("834")
		const addressoQtbuvP = accounts[1]
		const boolw4H8rGh = await HTDD_contractF7ruGRz.approve.call(addressWxJIJVm, uintjxDOvHd, {from: accounts[3]});
		const booljtLcgc = await HTDD_contractF7ruGRz.transfer.call(addressbr80u7f, uintbZpUclJ, {from: accounts[0]});
		const uint256lOqSiC = await HTDD_contractF7ruGRz.allowance.call(addressd760r58, addressDcmyfyr, {from: accounts[3]});
		const uint256TAlbPqJ = await HTDD_contractF7ruGRz.allowance.call(addressUJzVzTv, addressWKLKga, {from: accounts[3]});
		const boolpchjxn9 = await HTDD_contractF7ruGRz.transfer.call(addressLaUfWGU, uintLLZ6d8I, {from: accounts[2]});
		const booldJNqXPT = await HTDD_contractF7ruGRz.approve.call(addressoQtbuvP, uintWIiyIsy, {from: accounts[4]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractSIPkBb = await HTDD_contract.new({from: accounts[0]});
		const uintq5ih5dU = BigInt("973")
		const addressnaZbNAP = accounts[0]
		const addressUVfNy5V = accounts[1]
		const uintFTnSknC = BigInt("1422")
		const addressd0bOrJK = accounts[4]
		const addressY9AkuxY = accounts[1]
		const addressHcPBLDZ = accounts[1]
		const addresskxBQDnw = accounts[3]
		const addressTpVlYnc = accounts[1]
		const addresshpj82E3 = accounts[1]
//		const boolRZgl85O = await HTDD_contractSIPkBb.transferFrom.call(addressUVfNy5V, addressnaZbNAP, uintq5ih5dU, {from: accounts[2]});
//		const bools8lyp8j = await HTDD_contractSIPkBb.transferFrom.call(addressY9AkuxY, addressd0bOrJK, uintFTnSknC, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256m72tcxq = await HTDD_contractSIPkBb.allowance.call(addresskxBQDnw, addressHcPBLDZ, {from: accounts[4]});
//		const uint256z9HnJlh = await HTDD_contractSIPkBb.allowance.call(addresshpj82E3, addressTpVlYnc, {from: accounts[1]});

		await expect(HTDD_contractSIPkBb.transferFrom.call(addressUVfNy5V, addressnaZbNAP, uintq5ih5dU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractkPxYj9 = await HTDD_contract.new({from: accounts[2]});
		const uintnnqmJk = BigInt("114")
		const addressmy3G81C = accounts[5]
		const uinthFUnXn3 = BigInt("1856")
		const addressNeG5b38 = accounts[4]
		const uintPws3RoI = BigInt("2023")
		const addressnjXfYPW = accounts[1]
		const boolN1znPfi = await HTDD_contractkPxYj9.approve.call(addressmy3G81C, uintnnqmJk, {from: "0x0000000000000000000000000000000000000001"});
		const booloX1CDSj = await HTDD_contractkPxYj9.approve.call(addressNeG5b38, uinthFUnXn3, {from: accounts[4]});
		const boolcE5sgOf = await HTDD_contractkPxYj9.approve.call(addressnjXfYPW, uintPws3RoI, {from: accounts[2]});

		assert.equal(boolN1znPfi, true)
		assert.equal(boolcE5sgOf, true)
		assert.equal(booloX1CDSj, true)
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractIxEblUc = await HTDD_contract.new({from: accounts[0]});
		const uintqulmv9n = BigInt("338")
		const addressTEHQmMv = accounts[4]
		const addresskyRIEt = accounts[3]
		const addressYmG2uWk = accounts[5]
		const uintmIGxePm = BigInt("1458")
		const addressdsvUiwf = accounts[0]
		const uinth0MwyP = BigInt("1254")
		const addressqJX1CE5 = accounts[5]
//		const boolaZbK37i = await HTDD_contractIxEblUc.transfer.call(addressTEHQmMv, uintqulmv9n, {from: accounts[2]});
//		const uint256I9R5lxH = await HTDD_contractIxEblUc.allowance.call(addressYmG2uWk, addresskyRIEt, {from: accounts[5]});
//		const boolauSe6S7 = await HTDD_contractIxEblUc.approve.call(addressdsvUiwf, uintmIGxePm, {from: accounts[3]});
//		const boolWSL9Fn9 = await HTDD_contractIxEblUc.approve.call(addressqJX1CE5, uinth0MwyP, {from: accounts[4]});

		await expect(HTDD_contractIxEblUc.transfer.call(addressTEHQmMv, uintqulmv9n, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractic4Rhu = await HTDD_contract.new({from: accounts[5]});
		const uintskQMQLv = BigInt("298")
		const addressgTIbl9I = accounts[1]
		const uintWYRlVpP = BigInt("2019")
		const addressF2Z3R7 = accounts[2]
		const uinteX6jJgo = BigInt("1170")
		const addressRZ0buXa = accounts[3]
		const uintXCdRe7 = BigInt("974")
		const addressInnvzXB = accounts[3]
		const uintkz03vqa = BigInt("328")
		const addressrE2NLAc = accounts[4]
		const addressXO4EtGh = accounts[4]
		const boolUl1Vqco = await HTDD_contractic4Rhu.transfer.call(addressgTIbl9I, uintskQMQLv, {from: accounts[5]});
		const boolpPrZJH8 = await HTDD_contractic4Rhu.transfer.call(addressF2Z3R7, uintWYRlVpP, {from: accounts[5]});
		const booljBx9ln8 = await HTDD_contractic4Rhu.approve.call(addressRZ0buXa, uinteX6jJgo, {from: accounts[3]});
		const boolW4wVhOg = await HTDD_contractic4Rhu.approve.call(addressInnvzXB, uintXCdRe7, {from: accounts[4]});
//		const boolIxxFesz = await HTDD_contractic4Rhu.transferFrom.call(addressXO4EtGh, addressrE2NLAc, uintkz03vqa, {from: accounts[4]});

		assert.equal(boolUl1Vqco, true)
		assert.equal(boolW4wVhOg, true)
		assert.equal(booljBx9ln8, true)
		assert.equal(boolpPrZJH8, true)
		await expect(HTDD_contractic4Rhu.transferFrom.call(addressXO4EtGh, addressrE2NLAc, uintkz03vqa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractMbbimJH = await HTDD_contract.new({from: accounts[0]});
		const addressOt1Py8U = "0x0000000000000000000000000000000000000001"
		const addressZUuaayZ = "0x0000000000000000000000000000000000000001"
		const uintukkdCPY = BigInt("579")
		const addressKyFP3Nt = "0x0000000000000000000000000000000000000001"
		const addresscV3KRq = accounts[2]
		const uint8yKcSw = BigInt("615")
		const addressPwIJiBE = accounts[2]
		const uintyO7IyJW = BigInt("930")
		const addressdPiKcsi = accounts[1]
		const uintxgFeeDd = BigInt("1615")
		const addresshfCO29Y = accounts[3]
		const uintAXY558T = BigInt("1155")
		const addresshcwjfx9 = accounts[4]
		const uint256LSDradM = await HTDD_contractMbbimJH.allowance.call(addressZUuaayZ, addressOt1Py8U, {from: accounts[1]});
//		const boolQiQpzc = await HTDD_contractMbbimJH.transferFrom.call(addresscV3KRq, addressKyFP3Nt, uintukkdCPY, {from: accounts[0]});
//		const booly3p5tAY = await HTDD_contractMbbimJH.approve.call(addressPwIJiBE, uint8yKcSw, {from: accounts[1]});
//		const boolYMgiLC = await HTDD_contractMbbimJH.approve.call(addressdPiKcsi, uintyO7IyJW, {from: accounts[0]});
//		const booli1RlLb = await HTDD_contractMbbimJH.approve.call(addresshfCO29Y, uintxgFeeDd, {from: accounts[4]});
//		const boolYjuY04R = await HTDD_contractMbbimJH.transfer.call(addresshcwjfx9, uintAXY558T, {from: accounts[3]});

		assert.equal(uint256LSDradM, BigInt("0"))
		await expect(HTDD_contractMbbimJH.transferFrom.call(addresscV3KRq, addressKyFP3Nt, uintukkdCPY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractMbbimJH = await HTDD_contract.new({from: accounts[0]});
		const uintHSkFXkb = BigInt("1057")
		const addressZS3IOYs = accounts[3]
		const uintPTqPG5B = BigInt("1625")
		const addressFq0NT0I = accounts[0]
		const addressQXwIV0K = accounts[0]
		const addressRQGRxmg = "0x0000000000000000000000000000000000000001"
		const addressuaXFMgf = "0x0000000000000000000000000000000000000001"
		const uintgMn2GbN = BigInt("579")
		const addressQf1ztaa = "0x0000000000000000000000000000000000000001"
		const addressNaI2Ilr = accounts[2]
		const uintUEPRetW = BigInt("615")
		const addressz0L1aE7 = accounts[2]
		const uintN2Ys2aS = BigInt("620")
		const addressTPmEa51 = accounts[4]
		const uintr6jJb1B = BigInt("903")
		const addresshwXJwTi = accounts[2]
		const uintIGI9etg = BigInt("1615")
		const addressoQsTHdo = accounts[3]
		const uintgQCl58 = BigInt("1155")
		const addressQ7e5ML2 = accounts[4]
		const uintKx4MaLD = BigInt("1274")
		const addressoM4lVa0 = accounts[0]
		const boolhudvL1k = await HTDD_contractMbbimJH.transfer.call(addressZS3IOYs, uintHSkFXkb, {from: accounts[0]});
//		const bool9qAFnv = await HTDD_contractMbbimJH.transferFrom.call(addressQXwIV0K, addressFq0NT0I, uintPTqPG5B, {from: accounts[3]});
//		const uint256LSDradM = await HTDD_contractMbbimJH.allowance.call(addressuaXFMgf, addressRQGRxmg, {from: accounts[1]});
//		const boolQiQpzc = await HTDD_contractMbbimJH.transferFrom.call(addressNaI2Ilr, addressQf1ztaa, uintgMn2GbN, {from: accounts[0]});
//		const booly3p5tAY = await HTDD_contractMbbimJH.approve.call(addressz0L1aE7, uintUEPRetW, {from: accounts[1]});
//		const booliL4YEY9 = await HTDD_contractMbbimJH.transfer.call(addressTPmEa51, uintN2Ys2aS, {from: accounts[0]});
//		const boolYMgiLC = await HTDD_contractMbbimJH.approve.call(addresshwXJwTi, uintr6jJb1B, {from: accounts[0]});
//		const booli1RlLb = await HTDD_contractMbbimJH.approve.call(addressoQsTHdo, uintIGI9etg, {from: accounts[4]});
//		const boolYjuY04R = await HTDD_contractMbbimJH.transfer.call(addressQ7e5ML2, uintgQCl58, {from: accounts[3]});
//		const bool8o1GG4 = await HTDD_contractMbbimJH.approve.call(addressoM4lVa0, uintKx4MaLD, {from: accounts[4]});

		assert.equal(boolhudvL1k, true)
		await expect(HTDD_contractMbbimJH.transferFrom.call(addressQXwIV0K, addressFq0NT0I, uintPTqPG5B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})