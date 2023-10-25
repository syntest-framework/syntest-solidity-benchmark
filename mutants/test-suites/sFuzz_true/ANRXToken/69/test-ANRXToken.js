const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintG1CR981 = BigInt("1639")
		const stringtffUpdo = "Q36BFTgrxL5r3hgQaaYHdSI2n9bexWtFD6RAr7ihIhjB8YiVQzyvCkDGOfLWKCipRiqhdjGtsvnivc6LQ2Y"
		const stringc6QW8bJ = "GO4acUW9lHK26BbvVVO8"
		const uintO4Db5cd = BigInt("1288")
		const ANRXTokenExNWcrA = await ANRXToken.new(uintG1CR981, stringtffUpdo, stringc6QW8bJ, uintO4Db5cd, {from: accounts[5]});
		const addresswvYvt63 = accounts[2]
		const uintQpJ7lm3 = BigInt("37")
		const addresshMiWs75 = accounts[3]
		const addressxLZA2w4 = accounts[4]
		const uintDf8QcE2 = BigInt("1373")
		const uintlpvXqYR = await ANRXTokenExNWcrA.totalSupply.call({from: accounts[1]});
		const uintSz26QeJ = await ANRXTokenExNWcrA.balanceOf.call(addresswvYvt63, {from: accounts[2]});
//		const boolIKfbSS8 = await ANRXTokenExNWcrA.transferFrom.call(addressxLZA2w4, addresshMiWs75, uintQpJ7lm3, {from: "0x0000000000000000000000000000000000000001"});
//		const uintuXMM5iS = await ANRXTokenExNWcrA.issue.call(uintDf8QcE2, {from: accounts[2]});

		assert.equal(uintSz26QeJ, BigInt("0"))
		assert.equal(uintlpvXqYR, BigInt("1639"))
		await expect(ANRXTokenExNWcrA.transferFrom.call(addressxLZA2w4, addresshMiWs75, uintQpJ7lm3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintVKTpNqY = BigInt("1758")
		const stringKhkRRN2 = "BkYUSv8e5ksSRdooCsmIgW4Xg3v9a1TpSXRRfOVU1aM2oKRNYgSztqaven8X49Ukt3QuUCHzC55NICe"
		const stringqT2cDSj = "bWwh1KdjRoM9Uka3iYE6R3ZKjbZBk5w73XWm5s4HHronygxED"
		const uintntk4NSM = BigInt("1524")
		const ANRXTokenw9MejO = await ANRXToken.new(uintVKTpNqY, stringKhkRRN2, stringqT2cDSj, uintntk4NSM, {from: "0x0000000000000000000000000000000000000001"});
		const addressevRhm92 = accounts[4]
		const uintIAR2XNP = BigInt("1592")
		const addressspjib5V = accounts[4]
		const uintrUudZNW = BigInt("1455")
		const addresss44OquH = accounts[4]
		const uinteiwuhaS = await ANRXTokenw9MejO.balanceOf.call(addressevRhm92, {from: accounts[1]});
		const boolBByYcyt = await ANRXTokenw9MejO.approve.call(addressspjib5V, uintIAR2XNP, {from: accounts[3]});
		const uintRCHdQLP = await ANRXTokenw9MejO.totalSupply.call({from: accounts[4]});
		const uintorDZOjv = await ANRXTokenw9MejO.issue.call(uintrUudZNW, {from: accounts[2]});
		const uintscKtWNS = await ANRXTokenw9MejO.balanceOf.call(addresss44OquH, {from: accounts[5]});
	});

	it('test for ANRXToken', async () => {
		const uintdPb6wWx = BigInt("1642")
		const stringk1SgPsb = "h6tJMFUIEHtHXJyeP1OgbOVoi8QdfQ23F14xoXb5kKcGqJge47cVlCfIXRBd2QSlHqnVxyaz2VQc"
		const stringt0w2lKJ = "PUhrbckEhID9L8j31VporaEWaHE"
		const uint3PBKnf = BigInt("541")
		const ANRXTokenV09vUf = await ANRXToken.new(uintdPb6wWx, stringk1SgPsb, stringt0w2lKJ, uint3PBKnf, {from: accounts[0]});
		const uintUTSwN4l = BigInt("1354")
		const uintxQC6j7N = BigInt("541")
		const uintK6yqC2F = BigInt("945")
		const addresscoHCI2H = accounts[3]
//		const uintETDkwFp = await ANRXTokenV09vUf.redeem.call(uintUTSwN4l, {from: accounts[1]});
//		const uintu25AMwB = await ANRXTokenV09vUf.issue.call(uintxQC6j7N, {from: accounts[0]});
//		const booljQ8KZ7U = await ANRXTokenV09vUf.transfer.call(addresscoHCI2H, uintK6yqC2F, {from: accounts[0]});

		await expect(ANRXTokenV09vUf.redeem.call(uintUTSwN4l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintV1TjkSP = BigInt("1004")
		const stringa9k6rpj = "tXiXt2mPm7sGZi4aKyZTFBfCY3cekm8WIDes6pQmzFmV2T8v6IeARg3C4TTbhwdJiwnSjIeCh2tGPncGjl"
		const stringAvKr8hD = "s7o5nlSPv9hjgGeSV767yNOyuO1AXsSBYG6SP1wrjXh5vAujIBqNvvvIBAWx2"
		const uintz3oJnSS = BigInt("467")
		const ANRXTokenQxrbeDN = await ANRXToken.new(uintV1TjkSP, stringa9k6rpj, stringAvKr8hD, uintz3oJnSS, {from: accounts[4]});
		const uinthKQZpwB = BigInt("715")
		const addressyS3pNgj = accounts[1]
		const uintlFfWwTm = BigInt("815")
		const uintbHCYh4Z = BigInt("1795")
		const uintPM7Mxs5 = await ANRXTokenQxrbeDN.totalSupply.call({from: accounts[2]});
		const boole5tceLs = await ANRXTokenQxrbeDN.approve.call(addressyS3pNgj, uinthKQZpwB, {from: accounts[2]});
//		const uintJhaIxBT = await ANRXTokenQxrbeDN.setParams.call(uintbHCYh4Z, uintlFfWwTm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boole5tceLs, true)
		assert.equal(uintPM7Mxs5, BigInt("1004"))
		await expect(ANRXTokenQxrbeDN.setParams.call(uintbHCYh4Z, uintlFfWwTm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintdH263E8 = BigInt("2037")
		const stringJpVhFOm = "LuCnFs"
		const stringdJ3NDhb = "QQL"
		const uintUbc3qXF = BigInt("1761")
		const ANRXTokenF6iQjS0 = await ANRXToken.new(uintdH263E8, stringJpVhFOm, stringdJ3NDhb, uintUbc3qXF, {from: accounts[2]});
		const uintuaXJ4q7 = BigInt("1998")
		const addressThFZhc5 = accounts[3]
		const addresso5xRxt = accounts[4]
		const addressTF3tpX = accounts[2]
		const boolg3td15a = await ANRXTokenF6iQjS0.approve.call(addressThFZhc5, uintuaXJ4q7, {from: accounts[2]});
		const uintiEvLnEc = await ANRXTokenF6iQjS0.allowance.call(addressTF3tpX, addresso5xRxt, {from: "0x0000000000000000000000000000000000000001"});
		const uintMb0PhBT = await ANRXTokenF6iQjS0.totalSupply.call({from: accounts[4]});

		assert.equal(boolg3td15a, true)
		assert.equal(uintMb0PhBT, BigInt("2037"))
		assert.equal(uintiEvLnEc, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uinttNMdqNF = BigInt("1004")
		const stringa9k6rpj = "tXiXt2mPm7sGZi4aKyZTFBfCY3cekm8WIDes6pQmzFmV2T8v6IeARg3C4TTbhwdJiwnSjIeCh2tGPncGjl"
		const stringAvKr8hD = "s7o5nlSPv9hjgGeSV767yNOyuO1AXsSBYG6SP1wrjXh5vAujIBqNvvvIBAWx2"
		const uintw2byEW3 = BigInt("467")
		const ANRXTokenQxrbeDN = await ANRXToken.new(uinttNMdqNF, stringa9k6rpj, stringAvKr8hD, uintw2byEW3, {from: accounts[4]});
		const uintoWFlgsp = BigInt("648")
		const addressvrKlMwe = accounts[1]
		const uint8yV4SC = BigInt("715")
		const addressxAoI2F5 = accounts[1]
		const uintIpjdiI = BigInt("815")
		const uintlHEP8oi = BigInt("1795")
		const uintPM7Mxs5 = await ANRXTokenQxrbeDN.totalSupply.call({from: accounts[2]});
//		const boolTyaF2wX = await ANRXTokenQxrbeDN.transfer.call(addressvrKlMwe, uintoWFlgsp, {from: accounts[0]});
//		const boole5tceLs = await ANRXTokenQxrbeDN.approve.call(addressxAoI2F5, uint8yV4SC, {from: accounts[2]});
//		const uintJhaIxBT = await ANRXTokenQxrbeDN.setParams.call(uintlHEP8oi, uintIpjdiI, {from: "0x0000000000000000000000000000000000000001"});
//		const uintp7MBxGM = await ANRXTokenQxrbeDN.totalSupply.call({from: accounts[2]});

		assert.equal(uintPM7Mxs5, BigInt("1004"))
		await expect(ANRXTokenQxrbeDN.transfer.call(addressvrKlMwe, uintoWFlgsp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintr7IoqGH = BigInt("2037")
		const stringJpVhFOm = "LuCnFs"
		const stringdJ3NDhb = "QQL"
		const uintS6ujrTc = BigInt("1761")
		const ANRXTokenF6iQjS0 = await ANRXToken.new(uintr7IoqGH, stringJpVhFOm, stringdJ3NDhb, uintS6ujrTc, {from: accounts[2]});
		const uintbQmPqWX = BigInt("1277")
		const uintF3OODj = BigInt("1998")
		const addressLzaHXSA = accounts[3]
		const uintRlEkyA = BigInt("1272")
		const addressqJLqSQZ = accounts[2]
		const addressWn0kAul = accounts[1]
		const addresskoeewI6 = accounts[4]
		const addressj74oRs = accounts[2]
		const uintDWjt3Fy = await ANRXTokenF6iQjS0.redeem.call(uintbQmPqWX, {from: accounts[2]});
		const boolg3td15a = await ANRXTokenF6iQjS0.approve.call(addressLzaHXSA, uintF3OODj, {from: accounts[2]});
//		const boolUOZbCxq = await ANRXTokenF6iQjS0.transferFrom.call(addressWn0kAul, addressqJLqSQZ, uintRlEkyA, {from: accounts[2]});
//		const uintiEvLnEc = await ANRXTokenF6iQjS0.allowance.call(addressj74oRs, addresskoeewI6, {from: "0x0000000000000000000000000000000000000001"});
//		const uintMb0PhBT = await ANRXTokenF6iQjS0.totalSupply.call({from: accounts[4]});

		assert.equal(boolg3td15a, true)
		await expect(ANRXTokenF6iQjS0.transferFrom.call(addressWn0kAul, addressqJLqSQZ, uintRlEkyA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintSUnjzmB = BigInt("2037")
		const stringJpVhFOm = "LuCnFs"
		const stringdJ3NDhb = "QQL"
		const uintKsEqWFM = BigInt("1761")
		const ANRXTokenF6iQjS0 = await ANRXToken.new(uintSUnjzmB, stringJpVhFOm, stringdJ3NDhb, uintKsEqWFM, {from: accounts[2]});
		const addressshaSA9c = accounts[2]
		const uintL80u3n = BigInt("1419")
		const addressfqglckU = accounts[0]
		const uintnMxoQLs = BigInt("2003")
		const addressX2cO7ML = accounts[3]
		const addressiQwRDAs = await ANRXTokenF6iQjS0.deprecate.call(addressshaSA9c, {from: accounts[2]});
		const booleEatId = await ANRXTokenF6iQjS0.approve.call(addressfqglckU, uintL80u3n, {from: accounts[1]});
		const boolg3td15a = await ANRXTokenF6iQjS0.approve.call(addressX2cO7ML, uintnMxoQLs, {from: accounts[2]});

		assert.equal(booleEatId, true)
		assert.equal(boolg3td15a, true)
	});

	it('test for ANRXToken', async () => {
		const uintJBPr3U = BigInt("2037")
		const stringJpVhFOm = "LuCnFs"
		const stringdJ3NDhb = "QQL"
		const uintl3rIOCT = BigInt("1761")
		const ANRXTokenF6iQjS0 = await ANRXToken.new(uintJBPr3U, stringJpVhFOm, stringdJ3NDhb, uintl3rIOCT, {from: accounts[2]});
		const uintlyJMn18 = BigInt("1197")
		const address9qUn2Q = accounts[3]
		const uintgH1hILv = BigInt("500")
		const uintvWBnFiH = await ANRXTokenF6iQjS0.issue.call(uintlyJMn18, {from: accounts[2]});
		const uintJ2cwcSI = await ANRXTokenF6iQjS0.balanceOf.call(address9qUn2Q, {from: accounts[4]});
//		const uintuDPpTR = await ANRXTokenF6iQjS0.issue.call(uintgH1hILv, {from: accounts[5]});

		assert.equal(uintJ2cwcSI, BigInt("0"))
		await expect(ANRXTokenF6iQjS0.issue.call(uintgH1hILv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintxkKYZ8D = BigInt("2037")
		const stringJpVhFOm = "LuCnFs"
		const stringdJ3NDhb = "QQL"
		const uintjNGBofJ = BigInt("1761")
		const ANRXTokenF6iQjS0 = await ANRXToken.new(uintxkKYZ8D, stringJpVhFOm, stringdJ3NDhb, uintjNGBofJ, {from: accounts[2]});
		const uintcwARmmk = BigInt("1336")
		const uintZcl32c8 = BigInt("783")
		const addressu6r0BmO = accounts[2]
//		const uintyck6NkD = await ANRXTokenF6iQjS0.setParams.call(uintZcl32c8, uintcwARmmk, {from: accounts[2]});
//		const uintJ2cwcSI = await ANRXTokenF6iQjS0.balanceOf.call(addressu6r0BmO, {from: accounts[4]});

		await expect(ANRXTokenF6iQjS0.setParams.call(uintZcl32c8, uintcwARmmk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})