const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintPswhTnN = BigInt("265")
		const stringgx7SPeX = "MVWpFNvUNeQ4UevUuY6iWyaKT8J8b7RFEesuqJXFD8obifhzusdys4mQCuJUGIYhmWY3pBWRRS"
		const stringxu8et0P = "kfWqXALdVGA"
		const INSCh0ugAi = await INS.new(uintPswhTnN, stringgx7SPeX, stringxu8et0P, {from: accounts[1]});
		const uintSqedntA = BigInt("816")
		const uintrnl0jlw = BigInt("1531")
		const addressF1ps51 = accounts[4]
		const uintnFGgBs = BigInt("1853")
		const addressSqlBtQ4 = "0x0000000000000000000000000000000000000001"
		const byteIu6Wqn = "0x200f0f"
		const uintaDnNPk0 = BigInt("1069")
		const addressjQm1iI = accounts[3]
		const uintAFsDUu = BigInt("863")
		const addressTBmWB4i = accounts[4]
		const boolF1jXYn7 = await INSCh0ugAi.burn.call(uintSqedntA, {from: accounts[1]});
		const bool7wTsMX = await INSCh0ugAi.approve.call(addressF1ps51, uintrnl0jlw, {from: accounts[0]});
		const boolzoddtVO = await INSCh0ugAi.approve.call(addressSqlBtQ4, uintnFGgBs, {from: accounts[0]});
//		const boolowhEL2 = await INSCh0ugAi.approveAndCall.call(addressjQm1iI, uintaDnNPk0, byteIu6Wqn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolX0u7Bxr = await INSCh0ugAi.transfer.call(addressTBmWB4i, uintAFsDUu, {from: accounts[2]});

		assert.equal(bool7wTsMX, true)
		assert.equal(boolF1jXYn7, true)
		assert.equal(boolzoddtVO, true)
		await expect(INSCh0ugAi.approveAndCall.call(addressjQm1iI, uintaDnNPk0, byteIu6Wqn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintpibZy0F = BigInt("924")
		const stringanJV01 = "7YHKSxPc6Rkyc2pwnX1zyW4ChL0WbmngTJrTubW9LLf5dBnK3gRlFp"
		const stringERmdTkp = "Mmr1a5w5R0EEQ"
		const INSsJUCLXP = await INS.new(uintpibZy0F, stringanJV01, stringERmdTkp, {from: accounts[1]});
		const uinthYxF9dB = BigInt("1830")
		const addressmHECYGo = accounts[5]
		const byteIiOaFb4 = "0x0a1a1f06130a1b1f20070f110118180501"
		const uintATxTzD = BigInt("314")
		const addressW2Xu9w3 = accounts[3]
		const uintta3jOUA = BigInt("15")
		const addressfncgBJc = accounts[5]
		const addressltzmS64 = accounts[0]
//		const boolDX3tdFZ = await INSsJUCLXP.burnFrom.call(addressmHECYGo, uinthYxF9dB, {from: accounts[2]});
//		const boolS3AXLd = await INSsJUCLXP.approveAndCall.call(addressW2Xu9w3, uintATxTzD, byteIiOaFb4, {from: accounts[0]});
//		const boolKQ7pdBD = await INSsJUCLXP.transferFrom.call(addressltzmS64, addressfncgBJc, uintta3jOUA, {from: accounts[0]});

		await expect(INSsJUCLXP.burnFrom.call(addressmHECYGo, uinthYxF9dB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uint1LBHdI = BigInt("1477")
		const stringvVYrrjq = "rt3r1uud"
		const stringI2SxOWz = "us6zH7yGLVZGtnYtvjhI2OPwFgk2y8aWYnfDRhihzgScLfbsliLjYlaSHqpN"
		const INSOdMrW9K = await INS.new(uint1LBHdI, stringvVYrrjq, stringI2SxOWz, {from: accounts[1]});
		const uintkubEQRA = BigInt("669")
		const addressdOq2lbZ = accounts[1]
		const uintLKl8z5S = BigInt("226")
		const address3NbP0g = accounts[3]
		const uintIgpszPw = BigInt("375")
		const addresse2PE1Q3 = accounts[4]
//		const boolHl9q1k = await INSOdMrW9K.burnFrom.call(addressdOq2lbZ, uintkubEQRA, {from: "0x0000000000000000000000000000000000000001"});
//		const bools3JYzm8 = await INSOdMrW9K.burnFrom.call(address3NbP0g, uintLKl8z5S, {from: accounts[4]});
//		const boolBeyKoHi = await INSOdMrW9K.transfer.call(addresse2PE1Q3, uintIgpszPw, {from: accounts[5]});

		await expect(INSOdMrW9K.burnFrom.call(addressdOq2lbZ, uintkubEQRA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uint1yIbZ6 = BigInt("49")
		const stringWn64d3 = "iIof6aRrzrPlA42"
		const stringg3SXltK = "6IGYRwSq6ULXyghKq0QfPR3SWWzuwjV4QqZzz01pJtSl4HLXcK5Sg7PeE"
		const INSktebXN = await INS.new(uint1yIbZ6, stringWn64d3, stringg3SXltK, {from: accounts[2]});
		const uintEKNfQbD = BigInt("409")
		const addressQ7yE9ni = accounts[5]
		const uintcKU1N75 = BigInt("1711")
		const addresssYd4Ow = accounts[2]
		const addressjxFfbI6 = "0x0000000000000000000000000000000000000001"
		const uinta0vNXcu = BigInt("1381")
		const addressrFvSuf = accounts[5]
		const boolW0zFIsE = await INSktebXN.approve.call(addressQ7yE9ni, uintEKNfQbD, {from: accounts[1]});
//		const boolNYPZKa0 = await INSktebXN.transferFrom.call(addressjxFfbI6, addresssYd4Ow, uintcKU1N75, {from: accounts[2]});
//		const boolfSb3M6e = await INSktebXN.approve.call(addressrFvSuf, uinta0vNXcu, {from: accounts[5]});

		assert.equal(boolW0zFIsE, true)
		await expect(INSktebXN.transferFrom.call(addressjxFfbI6, addresssYd4Ow, uintcKU1N75, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintaCh6wQ3 = BigInt("49")
		const stringWn64d3 = "iIof6aRrzrPlA42"
		const stringg3SXltK = "6IGYRwSq6ULXyghKq0QfPR3SWWzuwjV4QqZzz01pJtSl4HLXcK5Sg7PeE"
		const INSktebXN = await INS.new(uintaCh6wQ3, stringWn64d3, stringg3SXltK, {from: accounts[2]});
		const uintgsd0IG = BigInt("1277")
		const addressOtTeoxh = accounts[0]
		const uintOkqtPm = BigInt("409")
		const addressS7SrgD = accounts[5]
		const uintdHMSF7 = BigInt("1711")
		const addressiew57QK = accounts[2]
		const addressRTZ87QO = "0x0000000000000000000000000000000000000000"
		const uintClW0FA8 = BigInt("1381")
		const addressE972KR = accounts[5]
//		const boolIyI2tBc = await INSktebXN.transfer.call(addressOtTeoxh, uintgsd0IG, {from: accounts[0]});
//		const boolW0zFIsE = await INSktebXN.approve.call(addressS7SrgD, uintOkqtPm, {from: accounts[1]});
//		const boolNYPZKa0 = await INSktebXN.transferFrom.call(addressRTZ87QO, addressiew57QK, uintdHMSF7, {from: accounts[2]});
//		const boolfSb3M6e = await INSktebXN.approve.call(addressE972KR, uintClW0FA8, {from: accounts[5]});

		await expect(INSktebXN.transfer.call(addressOtTeoxh, uintgsd0IG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintkTcWDTv = BigInt("244")
		const stringny1Je2 = "EmpqTrR6RUJxAPPjjnMO4TrBMUfqHX51GT9vfL8WxbmwhEIrfDqMsSPaJz0rzW"
		const stringn0sESG0 = "mNaouElqJuRWdGryAD2l83RQtG2Hoo4oq33kt7r8DMJzEbWWfJQewIi5olmTVAqEOYJXj710Y8n"
		const INSGkNjrg = await INS.new(uintkTcWDTv, stringny1Je2, stringn0sESG0, {from: "0x0000000000000000000000000000000000000001"});
		const uintUfvL80P = BigInt("49")
		const byteDnTDPko = "0x040f1e0618131e19150e17161d0a0f1e03010e0b1f"
		const uintri7Wk9x = BigInt("1330")
		const addressRAvVWIg = accounts[3]
		const uintNyzjZX9 = BigInt("1076")
		const byteLV6NtFl = "0x0f091d1d1e1a0312151a0f0f141b"
		const uintA5Gqgq = BigInt("1176")
		const addressSB3AJZy = accounts[2]
		const uintPBb0Zs8 = BigInt("1709")
		const booliqd5lou = await INSGkNjrg.burn.call(uintUfvL80P, {from: accounts[3]});
		const boolMhYZj7N = await INSGkNjrg.approveAndCall.call(addressRAvVWIg, uintri7Wk9x, byteDnTDPko, {from: accounts[5]});
		const boolqjfWmfh = await INSGkNjrg.burn.call(uintNyzjZX9, {from: accounts[4]});
		const boolL42Iwv = await INSGkNjrg.approveAndCall.call(addressSB3AJZy, uintA5Gqgq, byteLV6NtFl, {from: accounts[1]});
		const boolLL5ZtsT = await INSGkNjrg.burn.call(uintPBb0Zs8, {from: accounts[1]});
	});

	it('test for INS', async () => {
		const uintLFmsaEi = BigInt("49")
		const stringWn64d3 = "iIof6aRrzrPlA42"
		const stringg3SXltK = "6IGYRwSq6ULXyghKq0QfPR3SWWzuwjV4QqZzz01pJtSl4HLXcK5Sg7PeE"
		const INSktebXN = await INS.new(uintLFmsaEi, stringWn64d3, stringg3SXltK, {from: accounts[2]});
		const uintbn9oI2y = BigInt("1974")
		const addresse68LWl = accounts[4]
		const uintDz76xcf = BigInt("1277")
		const addressoegQL2L = accounts[0]
		const uintZdb8guX = BigInt("379")
		const addressI2HC4bn = accounts[5]
		const uintPS56NWR = BigInt("646")
		const addressW3DKMZm = accounts[0]
		const addressjc8Dprd = "0x0000000000000000000000000000000000000001"
		const uintKUoho3S = BigInt("1381")
		const addressezzpytT = accounts[5]
		const boolBx7e4XS = await INSktebXN.transfer.call(addresse68LWl, uintbn9oI2y, {from: accounts[2]});
//		const boolIyI2tBc = await INSktebXN.transfer.call(addressoegQL2L, uintDz76xcf, {from: accounts[0]});
//		const boolW0zFIsE = await INSktebXN.approve.call(addressI2HC4bn, uintZdb8guX, {from: accounts[1]});
//		const boolNBUDlkC = await INSktebXN.transferFrom.call(addressjc8Dprd, addressW3DKMZm, uintPS56NWR, {from: accounts[3]});
//		const boolfSb3M6e = await INSktebXN.approve.call(addressezzpytT, uintKUoho3S, {from: accounts[5]});

		assert.equal(boolBx7e4XS, true)
		await expect(INSktebXN.transfer.call(addressoegQL2L, uintDz76xcf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})