const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeVIr45Kc = await Rootkit_finance.new({from: accounts[3]});
		const addressmwRnK2a = accounts[1]
		const addresseopZZa1 = accounts[2]
		const uintGXEsuq = BigInt("307")
		const addresseDhMeqF = accounts[3]
		const uintYqb12k = BigInt("1929")
		const addressUkPrAeT = accounts[0]
		const uint2riE4e = BigInt("379")
		const addressme1iNGv = accounts[4]
		const addressPIHlA87 = accounts[2]
		const uint256odV2Ooc = await Rootkit_financeVIr45Kc.balanceOf.call(addressmwRnK2a, {from: accounts[2]});
		const uint256oNGQkGt = await Rootkit_financeVIr45Kc.balanceOf.call(addresseopZZa1, {from: accounts[2]});
		const uint256Cfcmo7j = await Rootkit_financeVIr45Kc.totalSupply.call({from: accounts[0]});
		const boolnp1ZgcI = await Rootkit_financeVIr45Kc.transfer.call(addresseDhMeqF, uintGXEsuq, {from: accounts[4]});
		const boolcp9q8a0 = await Rootkit_financeVIr45Kc.transfer.call(addressUkPrAeT, uintYqb12k, {from: accounts[0]});
		const boolEXbKpX = await Rootkit_financeVIr45Kc.transferFrom.call(addressPIHlA87, addressme1iNGv, uint2riE4e, {from: accounts[4]});

		assert.equal(boolEXbKpX, false)
		assert.equal(boolcp9q8a0, false)
		assert.equal(boolnp1ZgcI, false)
		assert.equal(uint256Cfcmo7j, BigInt("10000000000000000000000"))
		assert.equal(uint256oNGQkGt, BigInt("0"))
		assert.equal(uint256odV2Ooc, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeeGtncm = await Rootkit_finance.new({from: accounts[4]});
		const addressd814Uzk = accounts[2]
		const addressiuhTEsH = accounts[0]
		const addresstVNBmbU = accounts[0]
		const address6HZGJa = accounts[5]
		const uintmIUfov = BigInt("1364")
		const addressKVeu8r6 = accounts[4]
		const uintSV4akt = BigInt("675")
		const addresseHiNZF = accounts[4]
		const addressRThaxwP = accounts[4]
		const uintS7PLHpq = await Rootkit_financeeGtncm.allowance.call(addressiuhTEsH, addressd814Uzk, {from: accounts[3]});
		const uint256gwMhFgB = await Rootkit_financeeGtncm.balanceOf.call(addresstVNBmbU, {from: accounts[5]});
		const uint256ag6kRaJ = await Rootkit_financeeGtncm.balanceOf.call(address6HZGJa, {from: accounts[3]});
		const boolh1EIS6F = await Rootkit_financeeGtncm.transfer.call(addressKVeu8r6, uintmIUfov, {from: accounts[4]});
		const boolzwvidmf = await Rootkit_financeeGtncm.transferFrom.call(addressRThaxwP, addresseHiNZF, uintSV4akt, {from: accounts[2]});

		assert.equal(boolh1EIS6F, true)
		assert.equal(boolzwvidmf, false)
		assert.equal(uint256ag6kRaJ, BigInt("0"))
		assert.equal(uint256gwMhFgB, BigInt("0"))
		assert.equal(uintS7PLHpq, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeV539Nh = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSO9Fyb2 = BigInt("1649")
		const addressqah9s2L = accounts[3]
		const uintVDIyiz6 = BigInt("1639")
		const addressrivdqwg = accounts[1]
		const addressHnqD57 = accounts[4]
		const addressiJXFOD = accounts[5]
		const uintZj5eY26 = BigInt("1427")
		const addressjV2t3Ay = "0x0000000000000000000000000000000000000001"
		const uintLnpeT1s = BigInt("949")
		const addressMpa8Bj6 = accounts[1]
		const addressLARHEao = accounts[5]
		const boolq0FISu = await Rootkit_financeV539Nh.transfer.call(addressqah9s2L, uintSO9Fyb2, {from: accounts[1]});
		const boolatbLgQt = await Rootkit_financeV539Nh.transfer.call(addressrivdqwg, uintVDIyiz6, {from: accounts[4]});
		const uintWooVs6 = await Rootkit_financeV539Nh.allowance.call(addressiJXFOD, addressHnqD57, {from: accounts[0]});
		const boolsApcf6S = await Rootkit_financeV539Nh.approve.call(addressjV2t3Ay, uintZj5eY26, {from: accounts[3]});
		const booladIgKEv = await Rootkit_financeV539Nh.transferFrom.call(addressLARHEao, addressMpa8Bj6, uintLnpeT1s, {from: accounts[4]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeuVkOM8S = await Rootkit_finance.new({from: accounts[3]});
		const addressqgHvB20 = accounts[4]
		const uintxy670Jf = BigInt("1067")
		const addressW2P8Hfr = accounts[0]
		const uintEsLDXPQ = BigInt("1764")
		const addressrPwa7O8 = accounts[1]
		const uint256jKYsUbu = await Rootkit_financeuVkOM8S.balanceOf.call(addressqgHvB20, {from: accounts[1]});
		const boolUvoCwFQ = await Rootkit_financeuVkOM8S.approve.call(addressW2P8Hfr, uintxy670Jf, {from: accounts[0]});
		const boolUBfH2GI = await Rootkit_financeuVkOM8S.transfer.call(addressrPwa7O8, uintEsLDXPQ, {from: accounts[0]});

		assert.equal(boolUBfH2GI, false)
		assert.equal(boolUvoCwFQ, true)
		assert.equal(uint256jKYsUbu, BigInt("0"))
	});
})