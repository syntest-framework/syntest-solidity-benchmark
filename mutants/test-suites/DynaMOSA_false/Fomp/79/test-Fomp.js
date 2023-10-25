const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressy6RFWSD = accounts[0]
		const FompxHNaliu = await Fomp.new(addressy6RFWSD, {from: accounts[4]});
		const uintH17ipk = BigInt("1029")
		const addressiozI59H = accounts[0]
		const addressr7fy9x = accounts[2]
		const addresscgCyiMl = accounts[0]
		const uintQ1zB1S = BigInt("628")
		const addressaQLjVL = accounts[3]
		const addressT1E5JF1 = accounts[1]
		const addressnWk1hsq = accounts[1]
		const addressn1BbSpU = accounts[0]
		const addresseQRDXsK = accounts[2]
		const boolPkeZI00 = await FompxHNaliu.approve.call(addressiozI59H, uintH17ipk, {from: accounts[3]});
		const uintGu0ItO7 = await FompxHNaliu.allowance.call(addresscgCyiMl, addressr7fy9x, {from: accounts[2]});
//		const boolr4iAPI = await FompxHNaliu.transferFrom.call(addressT1E5JF1, addressaQLjVL, uintQ1zB1S, {from: "0x0000000000000000000000000000000000000001"});
//		const uintncMBkdq = await FompxHNaliu.balanceOf.call(addressnWk1hsq, {from: accounts[0]});
//		const uintQlXildV = await FompxHNaliu.allowance.call(addresseQRDXsK, addressn1BbSpU, {from: accounts[4]});

		assert.equal(boolPkeZI00, true)
		assert.equal(uintGu0ItO7, BigInt("0"))
		await expect(FompxHNaliu.transferFrom.call(addressT1E5JF1, addressaQLjVL, uintQ1zB1S, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressbdLXZTS = accounts[1]
		const FompEtLCnLv = await Fomp.new(addressbdLXZTS, {from: accounts[4]});
		const uintlLmq9fT = BigInt("1149")
		const addresswsB0vgV = accounts[1]
		const uintRbkdp6w = BigInt("32")
		const addresskmkTaVC = accounts[0]
		const uintwxtIs3L = BigInt("1421")
		const addressHfmYPI1 = accounts[0]
		const addressJzkL49a = accounts[2]
		const uint96W0mAm9v = await FompEtLCnLv.getPriorVotes.call(addresswsB0vgV, uintlLmq9fT, {from: accounts[5]});
		const uint96VT6bAZn = await FompEtLCnLv.getPriorVotes.call(addresskmkTaVC, uintRbkdp6w, {from: accounts[4]});
		const booldJ39Ak6 = await FompEtLCnLv.approve.call(addressHfmYPI1, uintwxtIs3L, {from: accounts[5]});
		const uint96bfUUwpq = await FompEtLCnLv.getCurrentVotes.call(addressJzkL49a, {from: accounts[4]});

		assert.equal(booldJ39Ak6, true)
		assert.equal(uint96VT6bAZn, BigInt("0"))
		assert.equal(uint96W0mAm9v, BigInt("0"))
		assert.equal(uint96bfUUwpq, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresshQElsO = accounts[4]
		const FompGkXe6HR = await Fomp.new(addresshQElsO, {from: accounts[2]});
		const uint8ND9xs = BigInt("1038")
		const addressDvccSEm = accounts[0]
		const addresskx5zykH = accounts[3]
		const uintHMYS0am = BigInt("1767")
		const addressIVwZGlO = accounts[0]
//		const boolmtLukcL = await FompGkXe6HR.transfer.call(addressDvccSEm, uint8ND9xs, {from: accounts[3]});
//		const uint96JvaxblA = await FompGkXe6HR.getCurrentVotes.call(addresskx5zykH, {from: accounts[0]});
//		const boolVrgxTcw = await FompGkXe6HR.transfer.call(addressIVwZGlO, uintHMYS0am, {from: accounts[1]});

		await expect(FompGkXe6HR.transfer.call(addressDvccSEm, uint8ND9xs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressmAd8hrV = accounts[5]
		const FomppBAX7Fw = await Fomp.new(addressmAd8hrV, {from: "0x0000000000000000000000000000000000000001"});
		const uintDiHbeo1 = BigInt("1849")
		const addressi0d1Pg2 = accounts[3]
		const addresshsj4FT1 = accounts[2]
		const addressIFqF6LB = accounts[4]
		const uintyzmKBi4 = BigInt("1283")
		const addressCfk46Fh = accounts[0]
		const uint96MCBknzg = await FomppBAX7Fw.getPriorVotes.call(addressi0d1Pg2, uintDiHbeo1, {from: accounts[0]});
		const addressUG3LnWV = await FomppBAX7Fw.delegate.call(addresshsj4FT1, {from: accounts[3]});
		const uintlG7ztAR = await FomppBAX7Fw.balanceOf.call(addressIFqF6LB, {from: accounts[5]});
		const boolPblIaPl = await FomppBAX7Fw.approve.call(addressCfk46Fh, uintyzmKBi4, {from: accounts[1]});
	});

	it('test for Fomp', async () => {
		const addressiMqbA4W = accounts[2]
		const FompthNBRT6 = await Fomp.new(addressiMqbA4W, {from: accounts[1]});
		const uintgzT58M = BigInt("611")
		const addressyOrTCAN = accounts[0]
		const uintLAoDUq = BigInt("1488")
		const addressTaOyRu6 = accounts[0]
		const addressfc1j8xA = accounts[1]
		const addressjiqpYAf = accounts[2]
		const boolKzujcY = await FompthNBRT6.approve.call(addressyOrTCAN, uintgzT58M, {from: accounts[2]});
		const boolW4Zmir9 = await FompthNBRT6.approve.call(addressTaOyRu6, uintLAoDUq, {from: accounts[0]});
		const uintcRMptAD = await FompthNBRT6.balanceOf.call(addressfc1j8xA, {from: accounts[5]});
		const uintaxAlQFv = await FompthNBRT6.balanceOf.call(addressjiqpYAf, {from: accounts[3]});

		assert.equal(boolKzujcY, true)
		assert.equal(boolW4Zmir9, true)
		assert.equal(uintaxAlQFv, BigInt("1000000000000000000000000"))
		assert.equal(uintcRMptAD, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressAi38VPa = accounts[0]
		const FompY50QgnS = await Fomp.new(addressAi38VPa, {from: accounts[0]});
		const address3qyxB3 = accounts[2]
		const uintRORFBw3 = BigInt("1888")
		const addresscX7EQUR = accounts[0]
		const uintxdXl4pB = BigInt("1352")
		const addressOBWTTtA = accounts[0]
		const addressxpvbim = accounts[2]
		const addressXchv0Zd = accounts[4]
		const addressC97chK = await FompY50QgnS.delegate.call(address3qyxB3, {from: accounts[2]});
		const booljXA5KLL = await FompY50QgnS.approve.call(addresscX7EQUR, uintRORFBw3, {from: accounts[5]});
		const uint96p5mRdu = await FompY50QgnS.getPriorVotes.call(addressOBWTTtA, uintxdXl4pB, {from: accounts[4]});
		const uintGTLrkFL = await FompY50QgnS.allowance.call(addressXchv0Zd, addressxpvbim, {from: accounts[0]});

		assert.equal(booljXA5KLL, true)
		assert.equal(uint96p5mRdu, BigInt("0"))
		assert.equal(uintGTLrkFL, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressdpdOZxz = accounts[0]
		const FompY50QgnS = await Fomp.new(addressdpdOZxz, {from: accounts[0]});
		const addressRLMjQBo = accounts[2]
		const addressWGDEUXR = accounts[3]
		const uintMRqUaeM = BigInt("1888")
		const addressXNg7aLg = accounts[1]
		const uintsNbrMah = BigInt("1352")
		const addressFAxKFlW = accounts[0]
		const address4TG9X7 = accounts[2]
		const addressdb9Fc6k = accounts[4]
		const addressC97chK = await FompY50QgnS.delegate.call(addressRLMjQBo, {from: accounts[2]});
		const uint96zdxYpur = await FompY50QgnS.getCurrentVotes.call(addressWGDEUXR, {from: accounts[3]});
		const booljXA5KLL = await FompY50QgnS.approve.call(addressXNg7aLg, uintMRqUaeM, {from: accounts[5]});
		const uint96p5mRdu = await FompY50QgnS.getPriorVotes.call(addressFAxKFlW, uintsNbrMah, {from: accounts[4]});
		const uintGTLrkFL = await FompY50QgnS.allowance.call(addressdb9Fc6k, address4TG9X7, {from: accounts[0]});

		assert.equal(booljXA5KLL, true)
		assert.equal(uint96p5mRdu, BigInt("0"))
		assert.equal(uint96zdxYpur, BigInt("0"))
		assert.equal(uintGTLrkFL, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressI3LGOcZ = accounts[2]
		const FompthNBRT6 = await Fomp.new(addressI3LGOcZ, {from: accounts[1]});
		const uintlBymdO7 = BigInt("647")
		const addressEvpvcvW = accounts[0]
		const addressXmL7mCr = accounts[4]
		const uintI9vwHMW = BigInt("1182")
		const addressg3a0F0f = "0x0000000000000000000000000000000000000001"
		const uintiLAxr2k = BigInt("1488")
		const addressggPBo8l = accounts[0]
		const addressW9hrwEO = accounts[1]
		const addressHhbnSLv = accounts[2]
		const boolKzujcY = await FompthNBRT6.approve.call(addressEvpvcvW, uintlBymdO7, {from: accounts[2]});
		const addressAdPxu6 = await FompthNBRT6.delegate.call(addressXmL7mCr, {from: accounts[2]});
		const uint96dIXQBBx = await FompthNBRT6.getPriorVotes.call(addressg3a0F0f, uintI9vwHMW, {from: accounts[3]});
		const boolW4Zmir9 = await FompthNBRT6.approve.call(addressggPBo8l, uintiLAxr2k, {from: accounts[0]});
		const uintcRMptAD = await FompthNBRT6.balanceOf.call(addressW9hrwEO, {from: accounts[5]});
		const uintaxAlQFv = await FompthNBRT6.balanceOf.call(addressHhbnSLv, {from: accounts[3]});

		assert.equal(boolKzujcY, true)
		assert.equal(boolW4Zmir9, true)
		assert.equal(uint96dIXQBBx, BigInt("0"))
		assert.equal(uintaxAlQFv, BigInt("1000000000000000000000000"))
		assert.equal(uintcRMptAD, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressG1Zsrpc = accounts[1]
		const FomprofbjP = await Fomp.new(addressG1Zsrpc, {from: accounts[2]});
		const uintHAyGiYc = BigInt("1500")
		const addresshFm7wyy = accounts[5]
		const addressJKKMBQo = accounts[1]
		const byteC0fOwtr = "0x030b06010302191c181a06120601180902090c161c03141b06180617201d100c"
		const bytemMmU4jG = "0x010f1513150e01030b0d020c1c1219041b0d08001203111d0108110500150c1e"
		const uintuQN9wEs = BigInt("47")
		const uintvt07d1K = BigInt("1796")
		const uintGOhWoEK = BigInt("1322")
		const addresseAZGrzc = accounts[0]
		const uintXMfvLB = BigInt("324")
		const addressz8lTnQU = accounts[1]
		const booloSUUE5H = await FomprofbjP.approve.call(addresshFm7wyy, uintHAyGiYc, {from: accounts[4]});
		const addresszxxC00G = await FomprofbjP.delegate.call(addressJKKMBQo, {from: accounts[2]});
//		const addressF7MXVYc = await FomprofbjP.delegateBySig.call(addresseAZGrzc, uintGOhWoEK, uintvt07d1K, uintuQN9wEs, bytemMmU4jG, byteC0fOwtr, {from: accounts[1]});
//		const uint96kX4fXv = await FomprofbjP.getPriorVotes.call(addressz8lTnQU, uintXMfvLB, {from: accounts[1]});

		assert.equal(booloSUUE5H, true)
		await expect(FomprofbjP.delegateBySig.call(addresseAZGrzc, uintGOhWoEK, uintvt07d1K, uintuQN9wEs, bytemMmU4jG, byteC0fOwtr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresswjCjekn = accounts[2]
		const FompthNBRT6 = await Fomp.new(addresswjCjekn, {from: accounts[1]});
		const uintEIoVHnJ = BigInt("647")
		const addressdEl7CZv = accounts[0]
		const addressI7TmjUH = accounts[4]
		const uintCC3gNbS = BigInt("3")
		const address54Px64 = "0x0000000000000000000000000000000000000001"
		const addressI7XKLn = accounts[2]
		const uintYWHIIVz = BigInt("1488")
		const addressPJAB4E5 = accounts[0]
		const addresslURxvF = accounts[1]
		const addressNN8VJo7 = accounts[2]
		const boolKzujcY = await FompthNBRT6.approve.call(addressdEl7CZv, uintEIoVHnJ, {from: accounts[2]});
		const addressAdPxu6 = await FompthNBRT6.delegate.call(addressI7TmjUH, {from: accounts[2]});
		const uint96dIXQBBx = await FompthNBRT6.getPriorVotes.call(address54Px64, uintCC3gNbS, {from: accounts[3]});
		const addressskTbC6g = await FompthNBRT6.delegate.call(addressI7XKLn, {from: accounts[1]});
		const boolW4Zmir9 = await FompthNBRT6.approve.call(addressPJAB4E5, uintYWHIIVz, {from: accounts[0]});
		const uintcRMptAD = await FompthNBRT6.balanceOf.call(addresslURxvF, {from: accounts[5]});
		const uintaxAlQFv = await FompthNBRT6.balanceOf.call(addressNN8VJo7, {from: accounts[3]});

		assert.equal(boolKzujcY, true)
		assert.equal(boolW4Zmir9, true)
		assert.equal(uint96dIXQBBx, BigInt("0"))
		assert.equal(uintaxAlQFv, BigInt("1000000000000000000000000"))
		assert.equal(uintcRMptAD, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressa1xoWtL = accounts[2]
		const FompthNBRT6 = await Fomp.new(addressa1xoWtL, {from: accounts[1]});
		const byteJqHgEhw = "0x1505081820160b1d100d081715040f091a200e021f1d000e1810070d191f1d09"
		const bytejZIJCf = "0x171f061a1313051e0d0506160c0a1a0506141f0e171e0204160e02151c000008"
		const uintpdU04i = BigInt("27")
		const uintr5WEa1G = BigInt("1515")
		const uintjhHDvxs = BigInt("343")
		const addressLL9xXC = accounts[0]
		const addressfDzRabR = accounts[7]
		const uint6aB0C8 = BigInt("1111")
		const addressV3wgPUO = accounts[3]
		const addressqTEAQpN = "0x0000000000000000000000000000000000000001"
//		const addressfAf1imM = await FompthNBRT6.delegateBySig.call(addressLL9xXC, uintjhHDvxs, uintr5WEa1G, uintpdU04i, bytejZIJCf, byteJqHgEhw, {from: accounts[1]});
//		const addressAdPxu6 = await FompthNBRT6.delegate.call(addressfDzRabR, {from: accounts[2]});
//		const boolL2rT8Ox = await FompthNBRT6.transferFrom.call(addressqTEAQpN, addressV3wgPUO, uint6aB0C8, {from: accounts[1]});

		await expect(FompthNBRT6.delegateBySig.call(addressLL9xXC, uintjhHDvxs, uintr5WEa1G, uintpdU04i, bytejZIJCf, byteJqHgEhw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})