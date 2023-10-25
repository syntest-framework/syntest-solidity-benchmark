const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintA7Z5w2n = BigInt("488")
		const stringJPWYSSG = "r9EykXkztR9II3GCULCUOMNWmU4N6PVJVi"
		const stringBRqnVzD = "TRbvAEHkVXn1SKI4OwpegJ78XRr3s3BrH7duJJohj28ty25DCaNhb1y2xOFRn"
		const uinth3ftWi1 = BigInt("268")
		const TetherTokenAlTbhlk = await TetherToken.new(uintA7Z5w2n, stringJPWYSSG, stringBRqnVzD, uinth3ftWi1, {from: accounts[4]});
		const uintrO2OmV9 = BigInt("1781")
		const addressBC510dg = accounts[1]
		const uint1iGVvn = BigInt("925")
		const addresstQAY6Cv = accounts[0]
		const uintWlZXQ6z = BigInt("1290")
		const uinthWj7ipm = BigInt("1384")
		const addressRjP2ihB = await TetherTokenAlTbhlk.approve.call(addressBC510dg, uintrO2OmV9, {from: accounts[3]});
		const addressZ7fXbCY = await TetherTokenAlTbhlk.approve.call(addresstQAY6Cv, uint1iGVvn, {from: accounts[0]});
		const uintbVvvQt5 = await TetherTokenAlTbhlk.issue.call(uintWlZXQ6z, {from: accounts[1]});
		const uintdza4s0n = await TetherTokenAlTbhlk.redeem.call(uinthWj7ipm, {from: accounts[1]});

		await expect(TetherTokenAlTbhlk.issue.call(uintWlZXQ6z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintuy79e35 = BigInt("1263")
		const stringsHfFpNv = "qOjXgudM3YTcqywBAgLi5m0NVsHfugLStE7naijuZ7EZnsUv"
		const stringhbvp0dk = "miL7mg3rPgDGOq7okdvWxsvv8m5G1dWiebJzte4qBe7lWJBXjzbYteeDmffCpH39KBo1q5FReg"
		const uintcNI5ah2 = BigInt("2001")
		const TetherTokenp04lXRJ = await TetherToken.new(uintuy79e35, stringsHfFpNv, stringhbvp0dk, uintcNI5ah2, {from: accounts[1]});
		const uintSnh5VPb = BigInt("1975")
		const addressMT6ZSir = accounts[4]
		const addressg4bn8hc = accounts[2]
		const uintF9kHG9I = BigInt("1486")
		const uintHRUbPuU = BigInt("1683")
		const addressEzugxpF = accounts[3]
		const addresseF0EhX6 = accounts[0]
		const addressFXTPgZu = accounts[4]
		const addresseGJijuh = accounts[2]
		const addressVfxJc5W = accounts[4]
		const addressadZiN5O = accounts[4]
		const addressWgbwK6L = accounts[4]
		const addressfjFJsoU = await TetherTokenp04lXRJ.transferFrom.call(addressg4bn8hc, addressMT6ZSir, uintSnh5VPb, {from: accounts[3]});
		const uintauLYeQs = await TetherTokenp04lXRJ.setParams.call(uintHRUbPuU, uintF9kHG9I, {from: accounts[1]});
		const uintKafMH8F = await TetherTokenp04lXRJ.allowance.call(addresseF0EhX6, addressEzugxpF, {from: accounts[1]});
		const uintgz39rw = await TetherTokenp04lXRJ.balanceOf.call(addressFXTPgZu, {from: accounts[2]});
		const uintCXGCKa7 = await TetherTokenp04lXRJ.allowance.call(addressVfxJc5W, addresseGJijuh, {from: accounts[4]});
		const uintQtlBsad = await TetherTokenp04lXRJ.allowance.call(addressWgbwK6L, addressadZiN5O, {from: accounts[0]});

		await expect(TetherTokenp04lXRJ.transferFrom.call(addressg4bn8hc, addressMT6ZSir, uintSnh5VPb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintILLWf7g = BigInt("1633")
		const stringXimDbqy = "qFAUnjQXThpmm9CelcJSoflm9O7Kk0qFo3OxQe34RWl1vRhpYjEnNME6yWAK4wGWGh"
		const stringM852VFR = "xWMO9LbR"
		const uintvGi2r6k = BigInt("1611")
		const TetherTokenKaBpI3 = await TetherToken.new(uintILLWf7g, stringXimDbqy, stringM852VFR, uintvGi2r6k, {from: accounts[4]});
		const uintKJs0yFV = BigInt("1567")
		const addresssmzcEgw = accounts[4]
		const uintAGDVR26 = BigInt("868")
		const uintR0hZtjv = BigInt("1152")
		const uinte51ulbj = BigInt("321")
		const uintsjXz7G3 = BigInt("961")
		const addressB5DjCvH = accounts[1]
		const addresso3pG5mi = await TetherTokenKaBpI3.approve.call(addresssmzcEgw, uintKJs0yFV, {from: accounts[4]});
		const uintgoje8fv = await TetherTokenKaBpI3.setParams.call(uintR0hZtjv, uintAGDVR26, {from: accounts[1]});
		const uintv1wAXU = await TetherTokenKaBpI3.setParams.call(uintsjXz7G3, uinte51ulbj, {from: accounts[4]});
		const addressCvRHwm = await TetherTokenKaBpI3.deprecate.call(addressB5DjCvH, {from: accounts[0]});

		await expect(TetherTokenKaBpI3.setParams.call(uintR0hZtjv, uintAGDVR26, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintR9TO80l = BigInt("401")
		const stringHjYh61A = "Y68corxTc1xahyUkQ7f7iDSoHiGzPaCnbDJhYK4DdrjXQRaIPvHVofvRGL0O8r"
		const stringuWxlixS = "YhHEFji4l6RnBkF3mHZvIF1kj7b2"
		const uintgXmTDAe = BigInt("693")
		const TetherTokenkYrT1dZ = await TetherToken.new(uintR9TO80l, stringHjYh61A, stringuWxlixS, uintgXmTDAe, {from: accounts[0]});
		const addressE7ckjEc = accounts[4]
		const addressORPyMpf = accounts[1]
		const addressF7YqiCn = accounts[5]
		const addressxklXlpR = accounts[4]
		const uintT4KVcne = BigInt("281")
		const addressjGe2MuP = accounts[5]
		const addresssAG695W = accounts[1]
		const addresshNnmCI = accounts[1]
		const addresstio6VU = accounts[2]
		const addressWZ5rKW4 = await TetherTokenkYrT1dZ.deprecate.call(addressE7ckjEc, {from: accounts[0]});
		const uinthfuRBJL = await TetherTokenkYrT1dZ.allowance.call(addressF7YqiCn, addressORPyMpf, {from: accounts[4]});
		const addressvNpZzCd = await TetherTokenkYrT1dZ.deprecate.call(addressxklXlpR, {from: "0x0000000000000000000000000000000000000001"});
		const addressUkgL3h8 = await TetherTokenkYrT1dZ.transferFrom.call(addresssAG695W, addressjGe2MuP, uintT4KVcne, {from: accounts[2]});
		const uintuAv8LUu = await TetherTokenkYrT1dZ.allowance.call(addresstio6VU, addresshNnmCI, {from: accounts[2]});

		assert.equal(uinthfuRBJL, BigInt("0"))
		await expect(TetherTokenkYrT1dZ.deprecate.call(addressxklXlpR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintBcVRI5 = BigInt("493")
		const stringhjNUEE = "X1W00PfcLmGBLaqTr1TgcRgvjhvlvinzOolAZ4F2Bhi3x0JFSAK7QjQ5wkVkmUbKsMVaU"
		const stringm4jcgw2 = "V872QNhPXDuWGB2tZDRIgfOjkDvhfoz1W1bDI7nyHEZdAswhdDGzfDAKHTkPMYs2vUQ5e904t"
		const uintHFtmuVu = BigInt("119")
		const TetherTokenNi0Dy6h = await TetherToken.new(uintBcVRI5, stringhjNUEE, stringm4jcgw2, uintHFtmuVu, {from: accounts[5]});
		const uintFObelRp = BigInt("126")
		const addressdun0NI7 = accounts[1]
		const uintNwUgrKk = BigInt("18")
		const addressIXlvQXY = accounts[5]
		const addressFKqJ2WC = accounts[3]
		const uintpxhexe0 = BigInt("97")
		const addressPcjXSVy = accounts[4]
		const addressIlbdueI = accounts[3]
		const addresszkH2dYg = await TetherTokenNi0Dy6h.transfer.call(addressdun0NI7, uintFObelRp, {from: accounts[0]});
		const addressIk0cUBm = await TetherTokenNi0Dy6h.transferFrom.call(addressFKqJ2WC, addressIXlvQXY, uintNwUgrKk, {from: accounts[1]});
		const uintz9yztTK = await TetherTokenNi0Dy6h.totalSupply.call({from: accounts[3]});
		const addresshzUA9my = await TetherTokenNi0Dy6h.transferFrom.call(addressIlbdueI, addressPcjXSVy, uintpxhexe0, {from: accounts[3]});

		await expect(TetherTokenNi0Dy6h.transfer.call(addressdun0NI7, uintFObelRp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintUaAGkKG = BigInt("1386")
		const stringZ4uymEq = "HwHgQl0g9563huvOfWJB3NFdwDsaKIR"
		const stringScBosj9 = "rSCA9FTvWIkCYJt5EKmOz"
		const uintMDuy4BD = BigInt("738")
		const TetherTokenQA7PRYJ = await TetherToken.new(uintUaAGkKG, stringZ4uymEq, stringScBosj9, uintMDuy4BD, {from: accounts[2]});
		const addressMg3GQs = accounts[1]
		const uint2NB7Cu = BigInt("530")
		const addressLkjUswA = accounts[2]
		const uintEFMmlN8 = await TetherTokenQA7PRYJ.balanceOf.call(addressMg3GQs, {from: accounts[3]});
		const uintf2Z9nIF = await TetherTokenQA7PRYJ.redeem.call(uint2NB7Cu, {from: accounts[4]});
		const addressaBj9j5n = await TetherTokenQA7PRYJ.deprecate.call(addressLkjUswA, {from: accounts[4]});

		assert.equal(uintEFMmlN8, BigInt("0"))
		await expect(TetherTokenQA7PRYJ.redeem.call(uint2NB7Cu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintIotNTyg = BigInt("301")
		const stringDUnF5su = "fLdRADOsdzYhFyaHa6N3JATpV5CxMi2r"
		const stringcLZueh = "nocO6IOWSFE8cfX2ILNg7GTW6BzFJnCGTf6xAGqvGRK6N3rwMdGpJRpAfqxTIopzuc68cgCJJ011SyyO8zfj2W2rMOzhK"
		const uintulStmTn = BigInt("637")
		const TetherTokenCkgrX8 = await TetherToken.new(uintIotNTyg, stringDUnF5su, stringcLZueh, uintulStmTn, {from: accounts[5]});
		const uintyWfDrlK = BigInt("521")
		const addressbeJ0eqM = accounts[3]
		const uintR5kisIA = BigInt("1088")
		const addressUkzgEwS = accounts[3]
		const addressisOH53y = accounts[4]
		const uintL3imsg = await TetherTokenCkgrX8.totalSupply.call({from: accounts[1]});
		const addresssyl8Tqo = await TetherTokenCkgrX8.approve.call(addressbeJ0eqM, uintyWfDrlK, {from: accounts[5]});
		const addressVhLVqBS = await TetherTokenCkgrX8.transferFrom.call(addressisOH53y, addressUkzgEwS, uintR5kisIA, {from: accounts[3]});

		assert.equal(uintL3imsg, BigInt("301"))
		await expect(TetherTokenCkgrX8.transferFrom.call(addressisOH53y, addressUkzgEwS, uintR5kisIA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintyMhZn3g = BigInt("807")
		const stringJb16Ctd = "m3HbAz6KoaYlVxWlC2sAP8"
		const stringhPL84br = "GXWMRDgYLMFuHTL5oJDJRt6pym3PdTbcamJpBrxKTPkOYOqyV7bS5wK5fuMfrAiKGibqF04q9vSYcJcMp"
		const uintaGrWHy = BigInt("742")
		const TetherTokenug6jYNb = await TetherToken.new(uintyMhZn3g, stringJb16Ctd, stringhPL84br, uintaGrWHy, {from: "0x0000000000000000000000000000000000000001"});
		const uintLkXjnpW = BigInt("849")
		const addressamATdgG = "0x0000000000000000000000000000000000000001"
		const addresssDVGh2m = "0x0000000000000000000000000000000000000001"
		const uintTprguPq = BigInt("1600")
		const addressv3oL0CE = accounts[5]
		const uintbur5roR = await TetherTokenug6jYNb.issue.call(uintLkXjnpW, {from: accounts[1]});
		const uintyWozxmr = await TetherTokenug6jYNb.balanceOf.call(addressamATdgG, {from: accounts[4]});
		const addressjRmVDg4 = await TetherTokenug6jYNb.deprecate.call(addresssDVGh2m, {from: accounts[1]});
		const addressUdIzwgq = await TetherTokenug6jYNb.approve.call(addressv3oL0CE, uintTprguPq, {from: accounts[2]});
	});
})