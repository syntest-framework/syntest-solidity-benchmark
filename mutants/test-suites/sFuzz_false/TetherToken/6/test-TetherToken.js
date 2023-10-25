const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintXPiS82a = BigInt("1024")
		const stringrP5sdHP = "ZT6qsTtjythoXPsDm6YSj88sBB4mS8n4hRHFoa116qyhs"
		const stringIg01Wjs = "ikpbdPYTLWid5FB3MIvwd6oe99J"
		const uintQULcwrg = BigInt("883")
		const TetherTokenPTuEEhD = await TetherToken.new(uintXPiS82a, stringrP5sdHP, stringIg01Wjs, uintQULcwrg, {from: accounts[3]});
		const uintDcQHBOM = BigInt("1618")
		const addressyTbiCxc = accounts[4]
		const addressgVAPPzm = accounts[5]
		const uintVPWhaJn = BigInt("579")
		const addressrPm9907 = accounts[4]
		const uintvKC9Ru8 = BigInt("517")
		const addressYxqU4il = accounts[0]
		const uintEFGgh7 = BigInt("1234")
		const uintMwhGjHd = BigInt("1883")
		const addresshtPIlyN = accounts[0]
		const addressT1zEvJ5 = accounts[3]
//		const addressYJn7pAD = await TetherTokenPTuEEhD.transferFrom.call(addressgVAPPzm, addressyTbiCxc, uintDcQHBOM, {from: accounts[5]});
//		const addressTW2UBrO = await TetherTokenPTuEEhD.approve.call(addressrPm9907, uintVPWhaJn, {from: accounts[1]});
//		const uintqWfyEOX = await TetherTokenPTuEEhD.redeem.call(uintvKC9Ru8, {from: accounts[1]});
//		const addresswPrh3Rl = await TetherTokenPTuEEhD.deprecate.call(addressYxqU4il, {from: accounts[4]});
//		const uintgUTfW20 = await TetherTokenPTuEEhD.redeem.call(uintEFGgh7, {from: accounts[1]});
//		const addressYmQzIuH = await TetherTokenPTuEEhD.transferFrom.call(addressT1zEvJ5, addresshtPIlyN, uintMwhGjHd, {from: accounts[5]});

		await expect(TetherTokenPTuEEhD.transferFrom.call(addressgVAPPzm, addressyTbiCxc, uintDcQHBOM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintR0kTKKn = BigInt("1166")
		const stringSDffzJK = "M18YXKLktv"
		const stringougOe9j = "Etby1oaKSggz5IlEwHx2DKiKY3y8wy6UEri71FDrHZ63vhYDrqTEqbvfxergMsk"
		const uintt4UlXif = BigInt("955")
		const TetherTokenEEKbfWO = await TetherToken.new(uintR0kTKKn, stringSDffzJK, stringougOe9j, uintt4UlXif, {from: accounts[5]});
		const addressFzqoHqw = accounts[4]
		const uintpvJaobS = BigInt("1020")
		const uintyeFEZvz = BigInt("1452")
		const addressMammDu9 = accounts[5]
		const uinth0Mr1X = await TetherTokenEEKbfWO.balanceOf.call(addressFzqoHqw, {from: accounts[2]});
//		const uintiqlhdO = await TetherTokenEEKbfWO.issue.call(uintpvJaobS, {from: accounts[2]});
//		const uintK4v4Iuf = await TetherTokenEEKbfWO.redeem.call(uintyeFEZvz, {from: accounts[2]});
//		const uintVlce2M = await TetherTokenEEKbfWO.balanceOf.call(addressMammDu9, {from: accounts[0]});

		assert.equal(uinth0Mr1X, BigInt("0"))
		await expect(TetherTokenEEKbfWO.issue.call(uintpvJaobS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uint79Cxeb = BigInt("276")
		const stringcur8dIo = "IebjdD0Lt5y5hBie8RmzSbGnC4ao0P4pVR4Aebypei6q"
		const stringQm5TosS = "RKh6VSdNJF"
		const uintDU2H6NS = BigInt("714")
		const TetherTokenRc7B3B7 = await TetherToken.new(uint79Cxeb, stringcur8dIo, stringQm5TosS, uintDU2H6NS, {from: accounts[2]});
		const addresskcpuYKp = accounts[3]
		const addresslnSkGIk = accounts[0]
		const addressTF55PTT = accounts[3]
		const addressol8aBhU = await TetherTokenRc7B3B7.deprecate.call(addresskcpuYKp, {from: accounts[2]});
		const uintwaqVH04 = await TetherTokenRc7B3B7.allowance.call(addressTF55PTT, addresslnSkGIk, {from: accounts[1]});

		assert.equal(uintwaqVH04, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintZLClMzx = BigInt("446")
		const stringKGQgdCF = "oJFKs0UWQPdkskgruhpCQMNUb5sfgvbx3oBKy"
		const stringevs99D2 = "9"
		const uintjwzBMUB = BigInt("1546")
		const TetherTokenw12JNG = await TetherToken.new(uintZLClMzx, stringKGQgdCF, stringevs99D2, uintjwzBMUB, {from: accounts[1]});
		const uinttIGHrMF = BigInt("535")
		const uintQtSqp2V = BigInt("1158")
		const uintSGuDWN6 = BigInt("1519")
		const uintaOr90vi = await TetherTokenw12JNG.totalSupply.call({from: accounts[3]});
		const uintYrzH62R = await TetherTokenw12JNG.issue.call(uinttIGHrMF, {from: accounts[1]});
		const uintP3LdEU = await TetherTokenw12JNG.issue.call(uintQtSqp2V, {from: accounts[1]});
//		const uintH38y1oB = await TetherTokenw12JNG.issue.call(uintSGuDWN6, {from: accounts[0]});

		assert.equal(uintaOr90vi, BigInt("446"))
		await expect(TetherTokenw12JNG.issue.call(uintSGuDWN6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintOFX4PQ = BigInt("429")
		const stringa3T7PCp = "DPQUYuJMwoEH1t9m8Xva8KEAPPvs4PFYmtxen5SaA4sRTDBuWahnki5"
		const stringtBLur6q = "vZn2mNW0MPScoxDEywQNGMJDGoJgnTvqttPdpzvlsxthNna9mtUwNCNHE6V4wLouRCTrnRali3jPk"
		const uintnNeL3i7 = BigInt("267")
		const TetherTokenJ3rv2y = await TetherToken.new(uintOFX4PQ, stringa3T7PCp, stringtBLur6q, uintnNeL3i7, {from: accounts[0]});
		const uintAHZgnPp = BigInt("478")
		const uintWN1sZ7z = BigInt("328")
		const addressWJmN2gN = accounts[2]
		const addresshNXItBd = accounts[4]
		const uintOxQKkBN = BigInt("814")
		const addressYS6ZyaV = accounts[3]
		const addressPe4865B = "0x0000000000000000000000000000000000000001"
//		const uintmKBGekv = await TetherTokenJ3rv2y.setParams.call(uintWN1sZ7z, uintAHZgnPp, {from: accounts[1]});
//		const addressWNs1HPq = await TetherTokenJ3rv2y.deprecate.call(addressWJmN2gN, {from: accounts[2]});
//		const uintQrAHsy2 = await TetherTokenJ3rv2y.balanceOf.call(addresshNXItBd, {from: accounts[0]});
//		const addressxyEHyn = await TetherTokenJ3rv2y.approve.call(addressYS6ZyaV, uintOxQKkBN, {from: accounts[0]});
//		const uintMqGF3dc = await TetherTokenJ3rv2y.balanceOf.call(addressPe4865B, {from: accounts[2]});

		await expect(TetherTokenJ3rv2y.setParams.call(uintWN1sZ7z, uintAHZgnPp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintpqwOStw = BigInt("175")
		const stringjGkQpee = "WjVggXfWyRdSMsIC6XgNiqRafv9CRETfOMLjFVOmFbgmroPnQo5927g5XULMqHpiKpFmiyc8jANz"
		const stringdQk3ItU = "fhjaWnoEoxzG"
		const uintQKEcIcr = BigInt("928")
		const TetherTokene77gvFb = await TetherToken.new(uintpqwOStw, stringjGkQpee, stringdQk3ItU, uintQKEcIcr, {from: accounts[1]});
		const uintftcFFK7 = BigInt("972")
		const uint2jUlmL = BigInt("235")
//		const uintaJrOjGL = await TetherTokene77gvFb.redeem.call(uintftcFFK7, {from: accounts[1]});
//		const uintrPkHYs = await TetherTokene77gvFb.totalSupply.call({from: accounts[3]});
//		const uintPfWhKTc = await TetherTokene77gvFb.issue.call(uint2jUlmL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokene77gvFb.redeem.call(uintftcFFK7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintNskIYaL = BigInt("622")
		const stringz2Eto3x = "qYBYxwKJMeNL7v6Fau2VVBLxBT2cIsBIQVunxeRTzHlGkWlTFb6AQ"
		const stringP42YXD = "Tz4zQEGAfwtiIG6SYFGt25FB6mcBZqL4B8EUsuUM93wnlWV3QKX1"
		const uintTjaGgHY = BigInt("1734")
		const TetherTokenJ3Y9jzE = await TetherToken.new(uintNskIYaL, stringz2Eto3x, stringP42YXD, uintTjaGgHY, {from: accounts[2]});
		const uintXGGJY50 = BigInt("503")
		const addressS15Ko4C = accounts[2]
		const uintVQvQI0u = BigInt("205")
		const addressUuUc8N2 = accounts[5]
		const addressW5Llqzg = "0x0000000000000000000000000000000000000001"
		const addresst6nC1tA = await TetherTokenJ3Y9jzE.approve.call(addressS15Ko4C, uintXGGJY50, {from: accounts[3]});
		const addressLvAbJIZ = await TetherTokenJ3Y9jzE.approve.call(addressUuUc8N2, uintVQvQI0u, {from: accounts[3]});
		const uintRHAi3eq = await TetherTokenJ3Y9jzE.balanceOf.call(addressW5Llqzg, {from: accounts[0]});

		assert.equal(uintRHAi3eq, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uinthUSbsTU = BigInt("622")
		const stringz2Eto3x = "qYBYxwKJMeNL7v6Fau2VVBLxBT2cIsBIQVunxeRTzHlGkWlTFb6AQ"
		const stringP42YXD = "Tz4zQEGAfwtiIG6SYFGt25FB6mcBZqL4B8EUsuUM93wnlWV3QKX1"
		const uintVKIbQe7 = BigInt("1734")
		const TetherTokenJ3Y9jzE = await TetherToken.new(uinthUSbsTU, stringz2Eto3x, stringP42YXD, uintVKIbQe7, {from: accounts[2]});
		const uintRLG78cc = BigInt("438")
		const addressF4kSjyx = "0x0000000000000000000000000000000000000001"
		const uintdSzlEIn = BigInt("484")
		const addressCuNOLZS = accounts[2]
		const uintsIISG9K = BigInt("311")
		const uintEqV0d4G = BigInt("2034")
		const address9MBHGj = "0x0000000000000000000000000000000000000001"
//		const addressVAuwQ1a = await TetherTokenJ3Y9jzE.transfer.call(addressF4kSjyx, uintRLG78cc, {from: "0x0000000000000000000000000000000000000001"});
//		const addresst6nC1tA = await TetherTokenJ3Y9jzE.approve.call(addressCuNOLZS, uintdSzlEIn, {from: accounts[3]});
//		const uintGTJi2Wj = await TetherTokenJ3Y9jzE.issue.call(uintsIISG9K, {from: accounts[2]});
//		const uintD8mAiNS = await TetherTokenJ3Y9jzE.issue.call(uintEqV0d4G, {from: accounts[0]});
//		const uintRHAi3eq = await TetherTokenJ3Y9jzE.balanceOf.call(address9MBHGj, {from: accounts[0]});

		await expect(TetherTokenJ3Y9jzE.transfer.call(addressF4kSjyx, uintRLG78cc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintfEgFCM = BigInt("1038")
		const stringLCexuLE = "TsbOoE1fy7uiHBP5XIwPBsSJNc8Ba8y4DbI0K"
		const stringIOjkTMA = "Jwwu8cFvGfbORA3PYIy5D4LdwkjMrOnw4RtWDj2wIJFGpmDCaA3Qsn2u9fafnK1eJP"
		const uintFBcMad6 = BigInt("1436")
		const TetherTokenwqdt4V5 = await TetherToken.new(uintfEgFCM, stringLCexuLE, stringIOjkTMA, uintFBcMad6, {from: "0x0000000000000000000000000000000000000001"});
		const uintm7scYOp = BigInt("243")
		const address5HepwW = accounts[5]
		const uintVX4S9To = BigInt("1856")
		const addressqXWFMj8 = accounts[4]
		const uintUMeNZWJ = BigInt("990")
		const uintQjSMQrn = BigInt("1803")
		const addresss0LUgBy = await TetherTokenwqdt4V5.approve.call(address5HepwW, uintm7scYOp, {from: accounts[3]});
		const addressPDOOG9q = await TetherTokenwqdt4V5.approve.call(addressqXWFMj8, uintVX4S9To, {from: accounts[4]});
		const uintiIO0wds = await TetherTokenwqdt4V5.issue.call(uintUMeNZWJ, {from: accounts[4]});
		const uintGKTskTO = await TetherTokenwqdt4V5.issue.call(uintQjSMQrn, {from: accounts[1]});
	});

	it('test for TetherToken', async () => {
		const uintTGBOuJm = BigInt("622")
		const stringz2Eto3x = "qYBYxwKJMeNL7v6Fau2VVBLxBT2cIsBIQVunxeRTzHlGkWlTFb6AQ"
		const stringP42YXD = "Tz4zQEGAfwtiIG6SYFGt25FB6mcBZqL4B8EUsuUM93wnlWV3QKX1"
		const uintjnM4UeW = BigInt("1734")
		const TetherTokenJ3Y9jzE = await TetherToken.new(uintTGBOuJm, stringz2Eto3x, stringP42YXD, uintjnM4UeW, {from: accounts[2]});
		const addressUVVYafo = "0x00000000000000000000000000000000000000-1"
		const uinthd6M3ZT = BigInt("1696")
//		const uintRHAi3eq = await TetherTokenJ3Y9jzE.balanceOf.call(addressUVVYafo, {from: accounts[0]});
//		const uintUASZJTs = await TetherTokenJ3Y9jzE.redeem.call(uinthd6M3ZT, {from: accounts[2]});

		await expect(TetherTokenJ3Y9jzE.balanceOf.call(addressUVVYafo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})