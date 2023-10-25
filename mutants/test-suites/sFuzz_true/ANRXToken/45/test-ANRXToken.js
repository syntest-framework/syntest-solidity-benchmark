const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintffQAWDJ = BigInt("1101")
		const stringfUzgUcd = "BHYpIkHTwOg4YgXnpplJevR6Wz55apHcguWiSAdm4rC2JtTpk8Ds1A6EWrZaNs5V7WMmcmQbtpnWJK6FcGJrFNGB0dxM"
		const stringQogOiuW = "1IhnbWGt1sF0tXEzUdmiRpiCpiyk2"
		const uintX0QspSK = BigInt("1199")
		const ANRXTokenUlCv572 = await ANRXToken.new(uintffQAWDJ, stringfUzgUcd, stringQogOiuW, uintX0QspSK, {from: accounts[5]});
		const uintxdmuCjX = BigInt("481")
		const addressxBSP4xZ = accounts[2]
		const addressbM9gtX = accounts[1]
		const uintA3vdMN = BigInt("1423")
		const addressFnqHtma = accounts[2]
//		const boolGSX0Obi = await ANRXTokenUlCv572.transferFrom.call(addressbM9gtX, addressxBSP4xZ, uintxdmuCjX, {from: accounts[3]});
//		const uinttHdVqx1 = await ANRXTokenUlCv572.issue.call(uintA3vdMN, {from: accounts[2]});
//		const addressTBlkFYk = await ANRXTokenUlCv572.deprecate.call(addressFnqHtma, {from: accounts[4]});

		await expect(ANRXTokenUlCv572.transferFrom.call(addressbM9gtX, addressxBSP4xZ, uintxdmuCjX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintZvc9Z22 = BigInt("1577")
		const stringJ7qnZWx = "RZJHZT8kV3XU99XBezAFL83WnPp4fmUyDcA2AAipORuZoi66KiJaAzniwfjFRqCQZdEMX3j7"
		const stringtsiG09A = "yp2I9BCNeGVTHk5TDgJTR3Ui7GDw3d4XoSxjSge6ptAYvIzdt2VXDATbZSL5wDE5Hh2r74CLYe3XtHA1e3KC"
		const uintIyKgOMc = BigInt("1076")
		const ANRXTokenxyhSi9p = await ANRXToken.new(uintZvc9Z22, stringJ7qnZWx, stringtsiG09A, uintIyKgOMc, {from: accounts[4]});
		const addressCho2Fnv = accounts[5]
		const addressR1UwSz6 = accounts[3]
		const addressUoFIbq = accounts[1]
		const uintda4GHYb = BigInt("1813")
		const addressTBYz7xF = accounts[0]
		const addressJ1wJV37 = "0x0000000000000000000000000000000000000001"
		const addressgZNXgPZ = accounts[3]
		const uintd0s4JOd = await ANRXTokenxyhSi9p.allowance.call(addressR1UwSz6, addressCho2Fnv, {from: accounts[0]});
		const uintWoohysc = await ANRXTokenxyhSi9p.balanceOf.call(addressUoFIbq, {from: accounts[3]});
		const boolqsSuCjd = await ANRXTokenxyhSi9p.approve.call(addressTBYz7xF, uintda4GHYb, {from: accounts[3]});
		const uinti7Z1bUp = await ANRXTokenxyhSi9p.allowance.call(addressgZNXgPZ, addressJ1wJV37, {from: accounts[2]});

		assert.equal(boolqsSuCjd, true)
		assert.equal(uintWoohysc, BigInt("0"))
		assert.equal(uintd0s4JOd, BigInt("0"))
		assert.equal(uinti7Z1bUp, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintyeWzIWE = BigInt("118")
		const stringUcbFbD = "NV196tq7oo6WEzrYDB59lWwWp7FGv4gedsHMVjaO5MSJOzKO9ZGzyBRd4XT4z"
		const stringJLipP77 = "c5gn3SaxYp2w7M2e5gcMHCZSkLpRju1Ybb4knOPaKC35TYN0ivdV1bTJU"
		const uintWQCJARV = BigInt("1683")
		const ANRXTokenyjFAp3Y = await ANRXToken.new(uintyeWzIWE, stringUcbFbD, stringJLipP77, uintWQCJARV, {from: "0x0000000000000000000000000000000000000001"});
		const addresseYbLo69 = accounts[2]
		const addressQj8P8Sj = accounts[2]
		const addressDPas38h = accounts[1]
		const uintXD51hbJ = BigInt("1091")
		const addressyhM4Os = accounts[1]
		const addressOS40oG6 = accounts[3]
		const uintaLqHQhF = await ANRXTokenyjFAp3Y.balanceOf.call(addresseYbLo69, {from: accounts[5]});
		const uintcdhHMfR = await ANRXTokenyjFAp3Y.allowance.call(addressDPas38h, addressQj8P8Sj, {from: "0x0000000000000000000000000000000000000001"});
		const uintz6sbZRG = await ANRXTokenyjFAp3Y.issue.call(uintXD51hbJ, {from: accounts[5]});
		const uintS6T7WS = await ANRXTokenyjFAp3Y.balanceOf.call(addressyhM4Os, {from: accounts[4]});
		const uintWbhcLRq = await ANRXTokenyjFAp3Y.balanceOf.call(addressOS40oG6, {from: accounts[4]});
	});

	it('test for ANRXToken', async () => {
		const uintIkoFfQ = BigInt("143")
		const stringzkcUIcU = "YpEPJ2dhecrM9d95ySH2Vb4cVx"
		const stringgvKMr50 = "COfHFZqm1HCNT6bG2f4zD6onaTlr84F7TlDoC9fvQbcJJydRQkK8G6LDzqew1"
		const uintCdafvG = BigInt("166")
		const ANRXTokenV6ATNTg = await ANRXToken.new(uintIkoFfQ, stringzkcUIcU, stringgvKMr50, uintCdafvG, {from: accounts[1]});
		const uintp8RdjaD = BigInt("267")
		const addressXegXdyY = accounts[4]
		const addresslfYmmU8 = accounts[1]
		const addressuWGxQKf = accounts[0]
		const addressfTBP9cD = accounts[3]
		const uintjnj18ZK = BigInt("62")
		const boolX65POi8 = await ANRXTokenV6ATNTg.approve.call(addressXegXdyY, uintp8RdjaD, {from: accounts[3]});
//		const addressDxWsEPb = await ANRXTokenV6ATNTg.deprecate.call(addresslfYmmU8, {from: accounts[5]});
//		const uintfaaCFD1 = await ANRXTokenV6ATNTg.totalSupply.call({from: accounts[3]});
//		const uintQRH3BQ5 = await ANRXTokenV6ATNTg.balanceOf.call(addressuWGxQKf, {from: accounts[0]});
//		const uintwgMFByl = await ANRXTokenV6ATNTg.balanceOf.call(addressfTBP9cD, {from: accounts[1]});
//		const uintDeZL48e = await ANRXTokenV6ATNTg.redeem.call(uintjnj18ZK, {from: accounts[3]});

		assert.equal(boolX65POi8, true)
		await expect(ANRXTokenV6ATNTg.deprecate.call(addresslfYmmU8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinttLDvznm = BigInt("1884")
		const stringuwSiUse = "Q5taYemjyN9P8TbboKMOD4Q738n5"
		const stringmdRY06l = "E8on"
		const uintKGFHAQO = BigInt("1187")
		const ANRXTokenuznwrDe = await ANRXToken.new(uinttLDvznm, stringuwSiUse, stringmdRY06l, uintKGFHAQO, {from: accounts[1]});
		const addressZTaCW9m = accounts[1]
		const uintHZ6hgsp = await ANRXTokenuznwrDe.balanceOf.call(addressZTaCW9m, {from: accounts[0]});
		const uintgqqaIkU = await ANRXTokenuznwrDe.totalSupply.call({from: accounts[4]});

		assert.equal(uintHZ6hgsp, BigInt("1884"))
		assert.equal(uintgqqaIkU, BigInt("1884"))
	});

	it('test for ANRXToken', async () => {
		const uintIh6XSmw = BigInt("1577")
		const stringJ7qnZWx = "RZJHZT8kV3XU99XBezAFL83WnPp4fmUyDcA2AAipORuZoi66KiJaAzniwfjFRqCQZdEMX3j7"
		const stringtsiG09A = "yp2I9BCNeGVTHk5TDgJTR3Ui7GDw3d4XoSxjSge6ptAYvIzdt2VXDATbZSL5wDE5Hh2r74CLYe3XtHA1e3KC"
		const uintINVBBP8 = BigInt("1076")
		const ANRXTokenxyhSi9p = await ANRXToken.new(uintIh6XSmw, stringJ7qnZWx, stringtsiG09A, uintINVBBP8, {from: accounts[4]});
		const uintPZnS2L1 = BigInt("189")
		const addressX70gDX7 = accounts[5]
		const addressNgW9BOu = accounts[5]
		const addressTPgbOXk = accounts[3]
		const addressrUvEtG = accounts[1]
		const addressRxcaeHQ = accounts[4]
		const uintdqYW1Au = BigInt("1813")
		const addressqY88D5u = accounts[0]
		const boolNwwM3ah = await ANRXTokenxyhSi9p.approve.call(addressX70gDX7, uintPZnS2L1, {from: accounts[3]});
		const uintd0s4JOd = await ANRXTokenxyhSi9p.allowance.call(addressTPgbOXk, addressNgW9BOu, {from: accounts[0]});
		const uintWoohysc = await ANRXTokenxyhSi9p.balanceOf.call(addressrUvEtG, {from: accounts[3]});
		const addressNHUoxV = await ANRXTokenxyhSi9p.deprecate.call(addressRxcaeHQ, {from: accounts[4]});
		const boolqsSuCjd = await ANRXTokenxyhSi9p.approve.call(addressqY88D5u, uintdqYW1Au, {from: accounts[3]});

		assert.equal(boolNwwM3ah, true)
		assert.equal(boolqsSuCjd, true)
		assert.equal(uintWoohysc, BigInt("0"))
		assert.equal(uintd0s4JOd, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uint5Iz2ux = BigInt("169")
		const stringb9vArqZ = "OJEmUr9vqSKFdQwyxrXBKSRgKGYtk3Wx"
		const stringjCSTUGI = "dlGhAN5vyyae4wQX6x7Qvde"
		const uintWJCle8w = BigInt("801")
		const ANRXTokenWzG24Bi = await ANRXToken.new(uint5Iz2ux, stringb9vArqZ, stringjCSTUGI, uintWJCle8w, {from: accounts[1]});
		const addressJvpruo = accounts[3]
		const uinttSO8dc = BigInt("735")
		const addressGcIRSNf = accounts[0]
		const uintikzIuu = await ANRXTokenWzG24Bi.balanceOf.call(addressJvpruo, {from: accounts[2]});
//		const bool7BAGrI = await ANRXTokenWzG24Bi.transfer.call(addressGcIRSNf, uinttSO8dc, {from: accounts[5]});
//		const uintmdHPD5 = await ANRXTokenWzG24Bi.totalSupply.call({from: accounts[2]});

		assert.equal(uintikzIuu, BigInt("0"))
		await expect(ANRXTokenWzG24Bi.transfer.call(addressGcIRSNf, uinttSO8dc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintSuhcLxg = BigInt("1577")
		const stringJ7qnZWx = "RZJHZT8kV3XU99XBezAFL83WnPp4fmUyDcA2AAipORuZoi66KiJaAzniwfjFRqCQZdEMX3j7"
		const stringtsiG09A = "yp2I9BCNeGVTHk5TDgJTR3Ui7GDw3d4XoSxjSge6ptAYvIzdt2VXDATbZSL5wDE5Hh2r74CLYe3XtHA1e3KC"
		const uintPRhs5jn = BigInt("1076")
		const ANRXTokenxyhSi9p = await ANRXToken.new(uintSuhcLxg, stringJ7qnZWx, stringtsiG09A, uintPRhs5jn, {from: accounts[4]});
		const uintRdTSgP1 = BigInt("1659")
		const uintlJaGMkk = BigInt("396")
		const addressC7OfeyW = accounts[1]
		const addressCEB4prL = accounts[6]
		const addressyBlBJdo = accounts[3]
		const uintiashLAa = await ANRXTokenxyhSi9p.issue.call(uintRdTSgP1, {from: accounts[4]});
		const boolmprRLC = await ANRXTokenxyhSi9p.approve.call(addressC7OfeyW, uintlJaGMkk, {from: accounts[1]});
		const uintd0s4JOd = await ANRXTokenxyhSi9p.allowance.call(addressyBlBJdo, addressCEB4prL, {from: accounts[0]});

		assert.equal(boolmprRLC, true)
		assert.equal(uintd0s4JOd, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintQvwvPyy = BigInt("169")
		const stringb9vArqZ = "OJEmUr9vqSKFdQwyxrXBKSRgKGYtk3Wx"
		const stringjCSTUGI = "dlGhAN5vyyae4wQX6x7Qvde"
		const uintcd25uOZ = BigInt("801")
		const ANRXTokenWzG24Bi = await ANRXToken.new(uintQvwvPyy, stringb9vArqZ, stringjCSTUGI, uintcd25uOZ, {from: accounts[1]});
		const uintaqFeExA = BigInt("1497")
		const addressnub7S1p = accounts[3]
		const uintpYteWTP = BigInt("1343")
		const addressV1Ggdy = accounts[3]
//		const uintg0LWTWF = await ANRXTokenWzG24Bi.redeem.call(uintaqFeExA, {from: accounts[1]});
//		const uintikzIuu = await ANRXTokenWzG24Bi.balanceOf.call(addressnub7S1p, {from: accounts[2]});
//		const uintqEodXA = await ANRXTokenWzG24Bi.redeem.call(uintpYteWTP, {from: accounts[0]});
//		const addressAgRYhIK = await ANRXTokenWzG24Bi.deprecate.call(addressV1Ggdy, {from: accounts[4]});
//		const uintEsDan0t = await ANRXTokenWzG24Bi.totalSupply.call({from: accounts[1]});

		await expect(ANRXTokenWzG24Bi.redeem.call(uintaqFeExA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintJxuZOyV = BigInt("1012")
		const stringx58U3gT = "SqoDdcJiXBEj7pLAaiKh5jm9cd4OLO4iPRKubPTqCKTDFCf8tqFXQqIUsnRu7eA5mDMnnkDNBPhODzzntmHwT4OA3t7xUUs"
		const stringnyUnhWw = "yRWot1L3RdN0JlyzjVCTkqU6UvjJ19NPqUZL2kf2ckA9V70sdLlSXxAQzGsYwolTfTZS"
		const uintzuiF7dj = BigInt("36")
		const ANRXTokenysouvm6 = await ANRXToken.new(uintJxuZOyV, stringx58U3gT, stringnyUnhWw, uintzuiF7dj, {from: accounts[2]});
		const uintJLRKKom = BigInt("317")
		const uintLaEHBL5 = await ANRXTokenysouvm6.redeem.call(uintJLRKKom, {from: accounts[2]});
		const uintdVJcKa = await ANRXTokenysouvm6.totalSupply.call({from: accounts[3]});

		assert.equal(uintdVJcKa, BigInt("1012"))
	});

	it('test for ANRXToken', async () => {
		const uints2ImfFB = BigInt("169")
		const stringb9vArqZ = "OJEmUr9vqSKFdQwyxrXBKSRgKGYtk3Wx"
		const stringjCSTUGI = "dlGhAN5vyyae4wQX6x7Qvde"
		const uintnJsMGvq = BigInt("801")
		const ANRXTokenWzG24Bi = await ANRXToken.new(uints2ImfFB, stringb9vArqZ, stringjCSTUGI, uintnJsMGvq, {from: accounts[1]});
		const uintBv9BlCH = BigInt("1909")
		const uintTkvU0ji = BigInt("1150")
		const uintxaqrI79 = BigInt("572")
		const addressf3ue7RB = accounts[3]
//		const uintTzLHg6n = await ANRXTokenWzG24Bi.setParams.call(uintTkvU0ji, uintBv9BlCH, {from: accounts[1]});
//		const uintYyi6gDF = await ANRXTokenWzG24Bi.redeem.call(uintxaqrI79, {from: accounts[4]});
//		const uintikzIuu = await ANRXTokenWzG24Bi.balanceOf.call(addressf3ue7RB, {from: accounts[2]});

		await expect(ANRXTokenWzG24Bi.setParams.call(uintTkvU0ji, uintBv9BlCH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})