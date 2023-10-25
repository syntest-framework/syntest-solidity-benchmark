const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringWMJEPlS = "NzDSoFrORRRZSK5v3BR14YwXniY7lGikwx2jjYQM5077H"
		const stringXJC8rXJ = "LgjLQEGeiunXHsMGxy73fxQOogjpWF0ckyEEuAR1MSSUzfcrYHjX0W0hHLcIUt5IR3LJLgt"
		const uintC69wOQo = BigInt("940")
		const WOLFH2gO36e = await WOLF.new(stringWMJEPlS, stringXJC8rXJ, uintC69wOQo, {from: accounts[4]});
		const addressCiUSLK = accounts[3]
		const addresstElxC69 = "0x0000000000000000000000000000000000000001"
		const uintI5Rowp6 = BigInt("1594")
		const addressvW8K75v = accounts[3]
		const uintwwO4uI = BigInt("438")
		const addressjitsG44 = accounts[1]
//		const boolPTUzJv2 = await WOLFH2gO36e.transferownership.call(addressCiUSLK, {from: accounts[1]});
//		const boolOzb1pv = await WOLFH2gO36e.transferownership.call(addresstElxC69, {from: accounts[0]});
//		const boolynXmnf = await WOLFH2gO36e.approve.call(addressvW8K75v, uintI5Rowp6, {from: accounts[0]});
//		const boolvbtzl9 = await WOLFH2gO36e.approveAndCall.call(addressjitsG44, uintwwO4uI, {from: accounts[3]});

		await expect(WOLFH2gO36e.transferownership.call(addressCiUSLK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringkL8O40W = "KVB52yrad9IBp5BKqjAHTBHcJSpC8et4PLwPlWZ62YDPq0Lo7MUYg2AzOrqVjinO"
		const string2ORflJ = "laO1yTrEogMmkkpsDrDdKxfWGSh7MGb0CJAzUk8gjJ85zfBuvzNYydxa5d4tkQeuRUADeoL11f"
		const uintV5XGvSL = BigInt("989")
		const WOLFJKatXWx = await WOLF.new(stringkL8O40W, string2ORflJ, uintV5XGvSL, {from: "0x0000000000000000000000000000000000000001"});
		const uintIE4Hseh = BigInt("873")
		const addressaaKMAX6 = "0x0000000000000000000000000000000000000001"
		const addressRq8fGuL = accounts[2]
		const uintNsfoVJl = BigInt("288")
		const addresshm3BqzW = accounts[3]
		const addressmKVFpZn = accounts[0]
		const uint5W8Ga1 = BigInt("1424")
		const addresscU19TSF = accounts[2]
		const uintZf5Ur9 = BigInt("1448")
		const addresstlEeKOx = accounts[2]
		const addressRnvDpj = accounts[4]
		const uintOHZCZr5 = BigInt("922")
		const addressMORCnaV = accounts[5]
		const addressa3r803V = accounts[5]
		const boolHLDgxDP = await WOLFJKatXWx.transferFrom.call(addressRq8fGuL, addressaaKMAX6, uintIE4Hseh, {from: accounts[1]});
		const boolzWqeR1k = await WOLFJKatXWx.transferFrom.call(addressmKVFpZn, addresshm3BqzW, uintNsfoVJl, {from: accounts[4]});
		const booltpPYVe = await WOLFJKatXWx.approveAndCall.call(addresscU19TSF, uint5W8Ga1, {from: accounts[4]});
		const boolyLxkcto = await WOLFJKatXWx.transferFrom.call(addressRnvDpj, addresstlEeKOx, uintZf5Ur9, {from: accounts[3]});
		const boolAP2utgd = await WOLFJKatXWx.transferFrom.call(addressa3r803V, addressMORCnaV, uintOHZCZr5, {from: accounts[3]});
	});

	it('test for WOLF', async () => {
		const stringVby3MEp = "8d2Bhqf88SNJfHg4oa6O63fXNbHGqexYhlRMOawIwWKOHqMIKOK3"
		const stringGcptXN5 = "QaiOxHggEBicuzJ475275MxCCBoTPE4"
		const uintTetQHof = BigInt("1087")
		const WOLFc97tqjn = await WOLF.new(stringVby3MEp, stringGcptXN5, uintTetQHof, {from: accounts[1]});
		const uintbAAaoTQ = BigInt("833")
		const addressryPKDSw = accounts[4]
		const uinttgAySCj = BigInt("727")
		const addressMlX7m7Q = accounts[4]
		const uintmuC2GTW = BigInt("1992")
		const addressqs3A96q = accounts[4]
//		const booluXn0M3z = await WOLFc97tqjn.approveAndCall.call(addressryPKDSw, uintbAAaoTQ, {from: accounts[3]});
//		const boolcRGYhBS = await WOLFc97tqjn.transfer.call(addressMlX7m7Q, uinttgAySCj, {from: accounts[5]});
//		const booltmXbKBP = await WOLFc97tqjn.approveAndCall.call(addressqs3A96q, uintmuC2GTW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WOLFc97tqjn.approveAndCall.call(addressryPKDSw, uintbAAaoTQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringNT9mIcH = "UJxml2juiPJW9dbIsgriKEVcTEdUHCVvOYsqlkDvVP9OMgqgBCD"
		const stringmdWFk2 = "LNBkJ0IyKMxhyyKw64RBrgKDSl0aC2KtGyWvmRQGAc2rHmABYb3GgEISM9QxefiKO92UZpRtE7raoM"
		const uintiZgke17 = BigInt("1733")
		const WOLFY9e84fg = await WOLF.new(stringNT9mIcH, stringmdWFk2, uintiZgke17, {from: accounts[1]});
		const uintSq01rwg = BigInt("1970")
		const addressOur6Pub = accounts[1]
		const addresshhsjMcy = "0x0000000000000000000000000000000000000001"
		const uintbqRz8C6 = BigInt("1404")
		const addressucQSRW4 = accounts[2]
//		const boolKQxYVRy = await WOLFY9e84fg.transferFrom.call(addresshhsjMcy, addressOur6Pub, uintSq01rwg, {from: accounts[1]});
//		const boolc8QP2wI = await WOLFY9e84fg.approve.call(addressucQSRW4, uintbqRz8C6, {from: accounts[0]});

		await expect(WOLFY9e84fg.transferFrom.call(addresshhsjMcy, addressOur6Pub, uintSq01rwg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringjo2f0S = "cAhn07epTTDekoqsfXjK6nbPbW"
		const stringY7WujN = "qfzkkoQJ5DJ5VwdwG2WhHzHoC"
		const uintEiFYhkj = BigInt("1648")
		const WOLFbpCBNcS = await WOLF.new(stringjo2f0S, stringY7WujN, uintEiFYhkj, {from: accounts[0]});
		const uintbBuLNaA = BigInt("521")
		const addressEfABgVK = accounts[0]
		const addresst0OCrbe = accounts[4]
		const uintmjcuWfF = BigInt("113")
		const addressKK6yYhG = accounts[0]
		const addressZ09ytTF = accounts[4]
		const addressJdOUoqo = accounts[4]
		const uintBfXvs5Y = BigInt("513")
		const addressA9kaNe = accounts[1]
		const uintH0RQqTI = BigInt("1706")
		const addressms5m1RJ = accounts[0]
		const uintwr5BiYe = BigInt("1988")
		const addressXAaTgPR = accounts[2]
//		const boolRuuw7Fl = await WOLFbpCBNcS.transferFrom.call(addresst0OCrbe, addressEfABgVK, uintbBuLNaA, {from: accounts[4]});
//		const bool5zeGnG = await WOLFbpCBNcS.transferFrom.call(addressZ09ytTF, addressKK6yYhG, uintmjcuWfF, {from: accounts[0]});
//		const boolu73x2NI = await WOLFbpCBNcS.transferownership.call(addressJdOUoqo, {from: accounts[0]});
//		const booldWCGRA = await WOLFbpCBNcS.transfer.call(addressA9kaNe, uintBfXvs5Y, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTX4Cwfd = await WOLFbpCBNcS.approveAndCall.call(addressms5m1RJ, uintH0RQqTI, {from: accounts[5]});
//		const boolUWnIzWI = await WOLFbpCBNcS.approve.call(addressXAaTgPR, uintwr5BiYe, {from: accounts[3]});

		await expect(WOLFbpCBNcS.transferFrom.call(addresst0OCrbe, addressEfABgVK, uintbBuLNaA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringVby3MEp = "8d2Bhqf88SNJfHg4oa6O63fXNbHGqexYhlRMOawIwWKOHqMIKOK3"
		const stringGcptXN5 = "QaiOxHggEBicuzJ475275MxCCBoTPE4"
		const uintfyEku3 = BigInt("1087")
		const WOLFc97tqjn = await WOLF.new(stringVby3MEp, stringGcptXN5, uintfyEku3, {from: accounts[1]});
		const uintofjgw0D = BigInt("727")
		const addressLG9Qsj = accounts[4]
		const uintv1VpKIt = BigInt("1992")
		const addresseFThsV = accounts[4]
//		const boolcRGYhBS = await WOLFc97tqjn.transfer.call(addressLG9Qsj, uintofjgw0D, {from: accounts[5]});
//		const booltmXbKBP = await WOLFc97tqjn.approveAndCall.call(addresseFThsV, uintv1VpKIt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WOLFc97tqjn.transfer.call(addressLG9Qsj, uintofjgw0D, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringjo2f0S = "cAhn07epTTDekoqsfXjK6nbPbW"
		const stringY7WujN = "qfzkkoQJ5DJ5VwdwG2WhHzHoC"
		const uintRBe06yE = BigInt("1648")
		const WOLFbpCBNcS = await WOLF.new(stringjo2f0S, stringY7WujN, uintRBe06yE, {from: accounts[0]});
		const uintWvQbz46 = BigInt("298")
		const addressHPSxdfG = accounts[4]
		const uinttRzP9Lw = BigInt("521")
		const addressNXUsJKq = accounts[0]
		const addressNEf1Npm = accounts[4]
		const addressl1Mc7Hk = accounts[4]
		const uintWaXYjKL = BigInt("513")
		const addresslTx3Ofu = accounts[1]
		const uintFxvp8if = BigInt("1706")
		const addressa4aKbce = accounts[1]
		const uintIzTthA1 = BigInt("1988")
		const addressBuhbFCg = accounts[2]
		const bool3MIJLD = await WOLFbpCBNcS.approveAndCall.call(addressHPSxdfG, uintWvQbz46, {from: accounts[0]});
//		const boolRuuw7Fl = await WOLFbpCBNcS.transferFrom.call(addressNEf1Npm, addressNXUsJKq, uinttRzP9Lw, {from: accounts[4]});
//		const boolu73x2NI = await WOLFbpCBNcS.transferownership.call(addressl1Mc7Hk, {from: accounts[0]});
//		const booldWCGRA = await WOLFbpCBNcS.transfer.call(addresslTx3Ofu, uintWaXYjKL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTX4Cwfd = await WOLFbpCBNcS.approveAndCall.call(addressa4aKbce, uintFxvp8if, {from: accounts[5]});
//		const boolUWnIzWI = await WOLFbpCBNcS.approve.call(addressBuhbFCg, uintIzTthA1, {from: accounts[3]});

		assert.equal(bool3MIJLD, true)
		await expect(WOLFbpCBNcS.transferFrom.call(addressNEf1Npm, addressNXUsJKq, uinttRzP9Lw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringjo2f0S = "cAhn07epTTDekoqsfXjK6nbPbW"
		const stringY7WujN = "qfzkkoQJ5DJ5VwdwG2WhHzHoC"
		const uintySxbm4e = BigInt("1648")
		const WOLFbpCBNcS = await WOLF.new(stringjo2f0S, stringY7WujN, uintySxbm4e, {from: accounts[0]});
		const uintYz29Og0 = BigInt("1821")
		const addressthoOn8F = accounts[4]
		const uintenWkG9Q = BigInt("578")
		const address1bCOrL = accounts[3]
		const uintDvG3MwI = BigInt("521")
		const addressD8zJRGP = accounts[0]
		const addressQOEu1cS = accounts[4]
		const uintV1L4m6X = BigInt("113")
		const addressqmB3gTO = accounts[1]
		const addresskmSAVA2 = accounts[4]
		const addressePUBOqJ = accounts[4]
		const uintS86s6CW = BigInt("513")
		const addressc9lgZx8 = accounts[1]
		const uintZbiNLV4 = BigInt("1988")
		const addressTeTrCrC = accounts[2]
		const boolzOysDr1 = await WOLFbpCBNcS.approve.call(addressthoOn8F, uintYz29Og0, {from: accounts[3]});
//		const boolOYW62o4 = await WOLFbpCBNcS.approveAndCall.call(address1bCOrL, uintenWkG9Q, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRuuw7Fl = await WOLFbpCBNcS.transferFrom.call(addressQOEu1cS, addressD8zJRGP, uintDvG3MwI, {from: accounts[4]});
//		const bool5zeGnG = await WOLFbpCBNcS.transferFrom.call(addresskmSAVA2, addressqmB3gTO, uintV1L4m6X, {from: accounts[0]});
//		const boolu73x2NI = await WOLFbpCBNcS.transferownership.call(addressePUBOqJ, {from: accounts[0]});
//		const booldWCGRA = await WOLFbpCBNcS.transfer.call(addressc9lgZx8, uintS86s6CW, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUWnIzWI = await WOLFbpCBNcS.approve.call(addressTeTrCrC, uintZbiNLV4, {from: accounts[3]});

		assert.equal(boolzOysDr1, true)
		await expect(WOLFbpCBNcS.approveAndCall.call(address1bCOrL, uintenWkG9Q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringvqHRdu = "2cJPcxLU49OLHShgxU4QXLLEU1kxxWiZxe4n2Xee5"
		const stringcDudKt = "SNVt5jGUSggpNxxOaTmJJ"
		const uintKtLMo4q = BigInt("1390")
		const WOLFMtbaTGE = await WOLF.new(stringvqHRdu, stringcDudKt, uintKtLMo4q, {from: accounts[2]});
		const uintvc4LBe6 = BigInt("124")
		const addressg6rYZjC = accounts[2]
		const uintzyvg5u3 = BigInt("249")
		const addressAsiG2BI = accounts[2]
		const addressueEic74 = accounts[3]
		const uintabwc3hy = BigInt("405")
		const addressVugfV6B = accounts[1]
		const addressIzeoE87 = accounts[4]
		const uintIW3UGHG = BigInt("190")
		const addressgJsYYHJ = "0x0000000000000000000000000000000000000001"
		const uintnvQHKXF = BigInt("167")
		const addresswJYev6L = "0x0000000000000000000000000000000000000001"
		const boolD2ph1Fc = await WOLFMtbaTGE.approveAndCall.call(addressg6rYZjC, uintvc4LBe6, {from: accounts[2]});
		const boolxoyHWhj = await WOLFMtbaTGE.transfer.call(addressAsiG2BI, uintzyvg5u3, {from: accounts[2]});
		const boolP0TBhQ = await WOLFMtbaTGE.transferownership.call(addressueEic74, {from: accounts[2]});
//		const boolE5jmrI = await WOLFMtbaTGE.transferFrom.call(addressIzeoE87, addressVugfV6B, uintabwc3hy, {from: accounts[4]});
//		const boolSsEMrot = await WOLFMtbaTGE.approveAndCall.call(addressgJsYYHJ, uintIW3UGHG, {from: accounts[4]});
//		const boold6ZjCpc = await WOLFMtbaTGE.approve.call(addresswJYev6L, uintnvQHKXF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolD2ph1Fc, true)
		assert.equal(boolP0TBhQ, true)
		assert.equal(boolxoyHWhj, true)
		await expect(WOLFMtbaTGE.transferFrom.call(addressIzeoE87, addressVugfV6B, uintabwc3hy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringVby3MEp = "8d2Bhqf88SNJfHg4oa6O63fXNbHGqexYhlRMOawIwWKOHqMIKOK3"
		const stringGcptXN5 = "QaiOxHggEBicuzJ475275MxCCBoTPE4"
		const uintbCKw7fu = BigInt("1087")
		const WOLFc97tqjn = await WOLF.new(stringVby3MEp, stringGcptXN5, uintbCKw7fu, {from: accounts[1]});
		const uintebgJ3Ij = BigInt("0")
		const addressq9PbRkJ = accounts[1]
		const addressuYv7itn = accounts[0]
		const uintY7QG71S = BigInt("1937")
		const addresstHUz6Fv = accounts[5]
		const boolP6h7L2T = await WOLFc97tqjn.transferFrom.call(addressuYv7itn, addressq9PbRkJ, uintebgJ3Ij, {from: accounts[3]});
		const boolgYecUzx = await WOLFc97tqjn.approve.call(addresstHUz6Fv, uintY7QG71S, {from: accounts[3]});

		assert.equal(boolP6h7L2T, true)
		assert.equal(boolgYecUzx, true)
	});

	it('test for WOLF', async () => {
		const stringvqHRdu = "2cJPcxLU49OLHShgxU4QXLLEU1kxxWiZxe4n2Xee5"
		const stringcDudKt = "SNVt5jGUSggpNxxOaTmJJ"
		const uintf89HgR = BigInt("1390")
		const WOLFMtbaTGE = await WOLF.new(stringvqHRdu, stringcDudKt, uintf89HgR, {from: accounts[2]});
		const uintRBWjcsW = BigInt("0")
		const addresslYNhi5 = accounts[4]
		const uintbmIBGxn = BigInt("567")
		const addressMBxUBvp = "0x0000000000000000000000000000000000000001"
		const boolD2ph1Fc = await WOLFMtbaTGE.approveAndCall.call(addresslYNhi5, uintRBWjcsW, {from: accounts[2]});
		const boolvgny0kt = await WOLFMtbaTGE.approve.call(addressMBxUBvp, uintbmIBGxn, {from: accounts[4]});

		assert.equal(boolD2ph1Fc, true)
		assert.equal(boolvgny0kt, true)
	});
})