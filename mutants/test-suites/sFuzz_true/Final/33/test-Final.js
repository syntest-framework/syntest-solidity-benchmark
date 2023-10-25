const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringbGPWVgK = "CS1xcHkVAs76jE1JVusfofu7y8bLSefQPh6VMmYKKD1H7h0VsW8rAG"
		const stringF239Bby = "iX"
		const uintNqWe62 = BigInt("1257")
		const FinalRCAbYq = await Final.new(stringbGPWVgK, stringF239Bby, uintNqWe62, {from: accounts[3]});
		const uintraHbs0z = BigInt("127")
		const addressxexmcSl = accounts[2]
		const uintgRd88am = BigInt("1959")
		const addresswhAlxok = accounts[3]
		const addressfmTVSfm = accounts[4]
		const uintru0oy3Q = BigInt("1502")
		const addresslSuT1sS = accounts[4]
		const addresspL72WZj = accounts[1]
		const uintIcuvHwe = BigInt("1724")
		const addressz2KYC4T = accounts[0]
		const boolfKKarV = await FinalRCAbYq.approve.call(addressxexmcSl, uintraHbs0z, {from: accounts[4]});
//		const boolRD0hHrm = await FinalRCAbYq.transfer.call(addresswhAlxok, uintgRd88am, {from: accounts[1]});
//		const uintokCvQL = await FinalRCAbYq.balanceOf.call(addressfmTVSfm, {from: accounts[4]});
//		const boollFPt5Wk = await FinalRCAbYq.transferFrom.call(addresspL72WZj, addresslSuT1sS, uintru0oy3Q, {from: accounts[1]});
//		const boolZA4JgB2 = await FinalRCAbYq.transfer.call(addressz2KYC4T, uintIcuvHwe, {from: accounts[2]});

		assert.equal(boolfKKarV, true)
		await expect(FinalRCAbYq.transfer.call(addresswhAlxok, uintgRd88am, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string2m2R2d = "FXzUErP7A4jrMdmR1Xs4Ql7IlxuqYo3MxGRUIV53uvsvo23J5INTmkTnOrg2LLsfWsoFIkoGKxEyPSlUttJsWSnKvIUvc9"
		const stringBHsCCLN = "UPN0KxG6lcMrZ2egYUqy9NqaQzEvI6Mu83xDB3VFhbAVghwurUQW9ag5WyuoYKTDbF0lAvhzqWDHchsfQOc6SM3yMvrhSViv26"
		const uintUut2YL3 = BigInt("963")
		const FinalgjkWBbt = await Final.new(string2m2R2d, stringBHsCCLN, uintUut2YL3, {from: accounts[0]});
		const uintoVPEiq6 = BigInt("401")
		const addressFUWdReb = accounts[3]
		const uintYudkNs = BigInt("755")
		const addressEw5DysM = accounts[4]
		const uintADY3iQ = BigInt("1185")
		const addresssqEwG2Z = accounts[4]
		const uintIRKXFvy = BigInt("328")
		const addresspZ1d1lg = accounts[5]
		const uintKFoaXdP = BigInt("844")
		const addressCtyIooR = accounts[4]
		const stringVMgY0Zc = await FinalgjkWBbt.name.call({from: accounts[2]});
		const boolTvD6JcT = await FinalgjkWBbt.approve.call(addressFUWdReb, uintoVPEiq6, {from: accounts[2]});
//		const boolEjVczPf = await FinalgjkWBbt.transfer.call(addressEw5DysM, uintYudkNs, {from: accounts[4]});
//		const boollq00Utf = await FinalgjkWBbt.approve.call(addresssqEwG2Z, uintADY3iQ, {from: accounts[0]});
//		const boolk3UjiyE = await FinalgjkWBbt.decreaseAllowance.call(addresspZ1d1lg, uintIRKXFvy, {from: accounts[0]});
//		const boolSsNsSok = await FinalgjkWBbt.decreaseAllowance.call(addressCtyIooR, uintKFoaXdP, {from: accounts[2]});

		assert.equal(boolTvD6JcT, true)
		assert.equal(stringVMgY0Zc, "FXzUErP7A4jrMdmR1Xs4Ql7IlxuqYo3MxGRUIV53uvsvo23J5INTmkTnOrg2LLsfWsoFIkoGKxEyPSlUttJsWSnKvIUvc9")
		await expect(FinalgjkWBbt.transfer.call(addressEw5DysM, uintYudkNs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringULX39U6 = "rm9M6tW0hX771en2tOjr3d9kynbRT4eHAIdPOchPQSJVjAc7t"
		const stringmU550bl = "vAcUCGpMAA92w4jLv8IpUkE2Q0yhocSyTGdTHDb7D7waMNYNvI"
		const uintzDta8T3 = BigInt("0")
		const Finalxn1azeT = await Final.new(stringULX39U6, stringmU550bl, uintzDta8T3, {from: accounts[2]});
		const uintVfbh88 = BigInt("439")
		const addressk014xxI = accounts[1]
		const addressHYdrG9 = accounts[3]
		const addressSgzhwSt = accounts[2]
		const uintJys1Z1m = BigInt("816")
		const addresssufvBXM = accounts[1]
		const bool1xzub2 = await Finalxn1azeT.approve.call(addressk014xxI, uintVfbh88, {from: accounts[0]});
		const uintGNHnx06 = await Finalxn1azeT.allowance.call(addressSgzhwSt, addressHYdrG9, {from: "0x0000000000000000000000000000000000000001"});
		const uintjhHoSh = await Finalxn1azeT.totalSupply.call({from: accounts[2]});
//		const boolNvxckMO = await Finalxn1azeT.approveAndCall.call(addresssufvBXM, uintJys1Z1m, {from: accounts[5]});

		assert.equal(bool1xzub2, true)
		assert.equal(uintGNHnx06, BigInt("0"))
		assert.equal(uintjhHoSh, BigInt("0"))
		await expect(Finalxn1azeT.approveAndCall.call(addresssufvBXM, uintJys1Z1m, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringSgnYGJ4 = "49RXHpr9bvMg2ACBOou617xqQDfauPdNNMXRAD1XgigWFYaOVtBMF"
		const stringfEl0vzL = "ITcfXWQdP6dehhT7eMKU1rCReD7GzG40uc6qrq6XXiAaT"
		const uintPY91hIz = BigInt("1521")
		const FinalC1auV4B = await Final.new(stringSgnYGJ4, stringfEl0vzL, uintPY91hIz, {from: accounts[2]});
		const uinthSTXwtq = BigInt("1554")
		const addresswxYfwF6 = accounts[3]
		const uintivo8qXo = BigInt("1052")
		const addressIl8250C = accounts[4]
		const uintj6SfBjO = BigInt("1797")
		const addressEKXf69r = "0x0000000000000000000000000000000000000001"
		const uintCcGynMT = BigInt("140")
		const addressd1hJtp2 = accounts[4]
		const uintbcsGhbD = BigInt("103")
		const addressNmAgvd0 = accounts[4]
		const boolfxXNls = await FinalC1auV4B.approve.call(addresswxYfwF6, uinthSTXwtq, {from: accounts[2]});
//		const boolT0dVD4M = await FinalC1auV4B.decreaseAllowance.call(addressIl8250C, uintivo8qXo, {from: "0x0000000000000000000000000000000000000001"});
//		const boolKy73QqP = await FinalC1auV4B.transfer.call(addressEKXf69r, uintj6SfBjO, {from: accounts[1]});
//		const boolYawB1GU = await FinalC1auV4B.increaseAllowance.call(addressd1hJtp2, uintCcGynMT, {from: accounts[0]});
//		const boolK6atJZ6 = await FinalC1auV4B.approve.call(addressNmAgvd0, uintbcsGhbD, {from: accounts[2]});

		assert.equal(boolfxXNls, true)
		await expect(FinalC1auV4B.decreaseAllowance.call(addressIl8250C, uintivo8qXo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringh9ND3L4 = "G5dgLh7kRC8MWRYtIAX6XWFfEe4Wi99XO6GxcufdR"
		const stringWfCSj8D = "XUpS9kDPqQEde8kOcb1nuQhaHTIsKseO9xbP0tK"
		const uintL8Yzjc = BigInt("41")
		const FinalLkuUxvg = await Final.new(stringh9ND3L4, stringWfCSj8D, uintL8Yzjc, {from: accounts[0]});
		const uintIXBWL7b = BigInt("1087")
		const addressIT80zmt = accounts[4]
		const addressC6AUqd9 = accounts[3]
		const uintPs4E5jj = BigInt("1163")
		const addresseccuRnH = accounts[1]
		const uintbM7qrP = BigInt("1081")
		const addressBdbSuy3 = accounts[4]
		const uintwYV6TCf = BigInt("1080")
		const addressNLWXwb = accounts[0]
		const uintivt0UC = BigInt("152")
		const addressFsLtS06 = accounts[3]
//		const boolRt1EhRq = await FinalLkuUxvg.transferFrom.call(addressC6AUqd9, addressIT80zmt, uintIXBWL7b, {from: accounts[0]});
//		const boolAYYXeGo = await FinalLkuUxvg.approveAndCall.call(addresseccuRnH, uintPs4E5jj, {from: accounts[0]});
//		const boolDvePcnV = await FinalLkuUxvg.transfer.call(addressBdbSuy3, uintbM7qrP, {from: accounts[3]});
//		const uint8hPb6yev = await FinalLkuUxvg.decimals.call({from: accounts[5]});
//		const boolUcshGu9 = await FinalLkuUxvg.approve.call(addressNLWXwb, uintwYV6TCf, {from: accounts[3]});
//		const boolR1HQl3W = await FinalLkuUxvg.approve.call(addressFsLtS06, uintivt0UC, {from: accounts[0]});

		await expect(FinalLkuUxvg.transferFrom.call(addressC6AUqd9, addressIT80zmt, uintIXBWL7b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringnJg65J6 = "Or6LG6Gj3sx56QuVnLqTbB4yrb4X9kcxWopl2OPGprxGxhQpTBmFzQ8U1yhskxxvGFVf5Yg"
		const stringSZpI0PF = "McMDXc9G"
		const uint8Sr74M = BigInt("1577")
		const FinalPHrWDwS = await Final.new(stringnJg65J6, stringSZpI0PF, uint8Sr74M, {from: "0x0000000000000000000000000000000000000001"});
		const uintndVYRWv = BigInt("1228")
		const addressd2ZmcuU = accounts[2]
		const uintI8yrVHH = BigInt("437")
		const addressNCDjlW9 = accounts[3]
		const uinty2eQMEY = BigInt("1986")
		const addresspAQr8mL = accounts[0]
		const addresscYd3rQ = accounts[1]
		const uintxlvOWU = BigInt("957")
		const addresshz6jRW = accounts[2]
		const boolUxRdse3 = await FinalPHrWDwS.transfer.call(addressd2ZmcuU, uintndVYRWv, {from: accounts[3]});
		const boolGWRcJU = await FinalPHrWDwS.approve.call(addressNCDjlW9, uintI8yrVHH, {from: accounts[0]});
		const boolfMFdiYK = await FinalPHrWDwS.decreaseAllowance.call(addresspAQr8mL, uinty2eQMEY, {from: accounts[1]});
		const booleYNN91t = await FinalPHrWDwS.transferownership.call(addresscYd3rQ, {from: "0x0000000000000000000000000000000000000001"});
		const booliHQ7GEA = await FinalPHrWDwS.approve.call(addresshz6jRW, uintxlvOWU, {from: accounts[0]});
	});

	it('test for Final', async () => {
		const stringULX39U6 = "rm9M6tW0hX771en2tOjr3d9kynbRT4eHAIdPOchPQSJVjAc7t"
		const stringmU550bl = "vAcUCGpMAA92w4jLv8IpUkE2Q0yhocSyTGdTHDb7D7waMNYNvI"
		const uintbSu9kY0 = BigInt("0")
		const Finalxn1azeT = await Final.new(stringULX39U6, stringmU550bl, uintbSu9kY0, {from: accounts[2]});
		const uintOd4gTfh = BigInt("118")
		const addressgdG7O4n = accounts[1]
		const addressyatdrJa = accounts[0]
		const uintymA6mJp = BigInt("5")
		const addressal71ID5 = accounts[0]
		const uintLzMUOJ1 = BigInt("1004")
		const addressCcXbcJG = accounts[1]
		const uintWUnueZe = BigInt("800")
		const addressmZqZB9 = accounts[1]
		const bool1xzub2 = await Finalxn1azeT.approve.call(addressgdG7O4n, uintOd4gTfh, {from: accounts[0]});
//		const boolMzATuG = await Finalxn1azeT.transferownership.call(addressyatdrJa, {from: accounts[3]});
//		const uint8Yc1XN7y = await Finalxn1azeT.decimals.call({from: accounts[3]});
//		const boolvWiYXXc = await Finalxn1azeT.transfer.call(addressal71ID5, uintymA6mJp, {from: "0x0000000000000000000000000000000000000001"});
//		const booll7gyLEj = await Finalxn1azeT.transfer.call(addressCcXbcJG, uintLzMUOJ1, {from: accounts[1]});
//		const boolNvxckMO = await Finalxn1azeT.approveAndCall.call(addressmZqZB9, uintWUnueZe, {from: accounts[5]});

		assert.equal(bool1xzub2, true)
		await expect(Finalxn1azeT.transferownership.call(addressyatdrJa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringULX39U6 = "rm9M6tW0hX771en2tOjr3d9kynbRT4eHAIdPOchPQSJVjAc7t"
		const stringmU550bl = "vAcUCGpMAA92w4jLv8IpUkE2Q0yhocSyTGdTHDb7D7waMNYNvI"
		const uintL7VJHLH = BigInt("0")
		const Finalxn1azeT = await Final.new(stringULX39U6, stringmU550bl, uintL7VJHLH, {from: accounts[2]});
		const addressh2uWa6Y = accounts[3]
		const addressHSv6BO = accounts[2]
		const uintmM4xE9T = BigInt("274")
		const addressCudmo6X = accounts[0]
		const uintQH9r7h3 = BigInt("816")
		const address48eeDc = accounts[3]
		const uintGNHnx06 = await Finalxn1azeT.allowance.call(addressHSv6BO, addressh2uWa6Y, {from: "0x0000000000000000000000000000000000000001"});
		const boolchFPMZj = await Finalxn1azeT.approveAndCall.call(addressCudmo6X, uintmM4xE9T, {from: accounts[2]});
//		const boolNvxckMO = await Finalxn1azeT.approveAndCall.call(address48eeDc, uintQH9r7h3, {from: accounts[5]});

		assert.equal(boolchFPMZj, true)
		assert.equal(uintGNHnx06, BigInt("0"))
		await expect(Finalxn1azeT.approveAndCall.call(address48eeDc, uintQH9r7h3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringULX39U6 = "rm9M6tW0hX771en2tOjr3d9kynbRT4eHAIdPOchPQSJVjAc7t"
		const stringmU550bl = "vAcUCGpMAA92w4jLv8IpUkE2Q0yhocSyTGdTHDb7D7waMNYNvI"
		const uintHGJL6F2 = BigInt("0")
		const Finalxn1azeT = await Final.new(stringULX39U6, stringmU550bl, uintHGJL6F2, {from: accounts[2]});
		const uintcvcmqYT = BigInt("0")
		const addressyWR7F0v = accounts[0]
		const boolvWiYXXc = await Finalxn1azeT.transfer.call(addressyWR7F0v, uintcvcmqYT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolvWiYXXc, true)
	});

	it('test for Final', async () => {
		const stringULX39U6 = "rm9M6tW0hX771en2tOjr3d9kynbRT4eHAIdPOchPQSJVjAc7t"
		const stringmU550bl = "vAcUCGpMAA92w4jLv8IpUkE2Q0yhocSyTGdTHDb7D7waMNYNvI"
		const uintLPSzGDv = BigInt("0")
		const Finalxn1azeT = await Final.new(stringULX39U6, stringmU550bl, uintLPSzGDv, {from: accounts[2]});
		const uintN5K7QmZ = BigInt("0")
		const addressC5nXcBD = accounts[4]
		const boolF1RtcrN = await Finalxn1azeT.approveAndCall.call(addressC5nXcBD, uintN5K7QmZ, {from: accounts[2]});

		assert.equal(boolF1RtcrN, true)
	});

	it('test for Final', async () => {
		const stringQyjbwnf = "4mEmR"
		const stringRM3yzwK = "LhwXu8B4u7QhBlPYUboksr3gfn9St9XGGcwYg9QQS5NFPo21Nu7u2Iz7AmVG1BaDHVAhHAZATKwmgHIvGZ5B9vKEa6"
		const uintN1zD6Dm = BigInt("1043")
		const FinaloTTSN1X = await Final.new(stringQyjbwnf, stringRM3yzwK, uintN1zD6Dm, {from: accounts[4]});
		const addressbfL4g23 = accounts[2]
		const uintocAIqG0 = BigInt("51")
		const addressxi13X40 = accounts[2]
		const addresss3ZzaXA = accounts[2]
		const boolNYamKyK = await FinaloTTSN1X.transferownership.call(addressbfL4g23, {from: accounts[4]});
//		const boolp1cBzrV = await FinaloTTSN1X.transferFrom.call(addresss3ZzaXA, addressxi13X40, uintocAIqG0, {from: accounts[1]});

		assert.equal(boolNYamKyK, true)
		await expect(FinaloTTSN1X.transferFrom.call(addresss3ZzaXA, addressxi13X40, uintocAIqG0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})