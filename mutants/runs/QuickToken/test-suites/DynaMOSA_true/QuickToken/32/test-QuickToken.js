const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressNaeIPN = accounts[3]
		const addressf7DaDCm = accounts[2]
		const QuickTokenNo8EyUY = await QuickToken.new(addressNaeIPN, addressf7DaDCm, {from: "0x0000000000000000000000000000000000000001"});
		const uintQPORai = BigInt("270")
		const addressEOGAayV = accounts[4]
		const uintF6Wu2yt = BigInt("1685")
		const addressf8JjqDm = accounts[1]
		const addressX1GZXWy = accounts[2]
		const boolDFdRfgX = await QuickTokenNo8EyUY.approve.call(addressEOGAayV, uintQPORai, {from: accounts[3]});
		const boolfAqeic6 = await QuickTokenNo8EyUY.transferFrom.call(addressX1GZXWy, addressf8JjqDm, uintF6Wu2yt, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for QuickToken', async () => {
		const addresscUrgnbk = accounts[4]
		const addresswOCMkVa = accounts[2]
		const QuickTokenDVD5A5c = await QuickToken.new(addresscUrgnbk, addresswOCMkVa, {from: accounts[2]});
		const addressjhoO4kY = accounts[1]
		const addressiUSoZqK = accounts[2]
		const uintoUDPURS = BigInt("1144")
		const addressllRKZkW = accounts[1]
		const uintNLFVNE6 = BigInt("432")
		const addressxD2NyW7 = accounts[4]
		const uintJmYQQY = BigInt("1363")
		const addressFdi9MAg = accounts[2]
		const addressp5AvPf = await QuickTokenDVD5A5c.setMinter.call(addressjhoO4kY, {from: accounts[3]});
		const uintSUK3P9y = await QuickTokenDVD5A5c.balanceOf.call(addressiUSoZqK, {from: accounts[3]});
		const addressTIOTJDD = await QuickTokenDVD5A5c.mint.call(addressllRKZkW, uintoUDPURS, {from: accounts[4]});
		const boolI3PADnG = await QuickTokenDVD5A5c.approve.call(addressxD2NyW7, uintNLFVNE6, {from: accounts[2]});
		const boolOK0NUOt = await QuickTokenDVD5A5c.transfer.call(addressFdi9MAg, uintJmYQQY, {from: accounts[1]});

		await expect(QuickTokenDVD5A5c.setMinter.call(addressjhoO4kY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressPz1yUQp = accounts[2]
		const addressCkdmkFI = accounts[1]
		const QuickTokenYDExBRa = await QuickToken.new(addressPz1yUQp, addressCkdmkFI, {from: accounts[5]});
		const uintmpEqXK3 = BigInt("1598")
		const addressAZ0QRjb = accounts[5]
		const uintrQffUVW = BigInt("585")
		const addressecb074i = accounts[2]
		const uintDL3KMzd = BigInt("1519")
		const addressjZOT3O4 = "0x0000000000000000000000000000000000000001"
		const boolTA4Bl2T = await QuickTokenYDExBRa.approve.call(addressAZ0QRjb, uintmpEqXK3, {from: accounts[1]});
		const boolSsLasot = await QuickTokenYDExBRa.transfer.call(addressecb074i, uintrQffUVW, {from: accounts[2]});
		const boolfG6i5XA = await QuickTokenYDExBRa.approve.call(addressjZOT3O4, uintDL3KMzd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolSsLasot, true)
		assert.equal(boolTA4Bl2T, true)
		assert.equal(boolfG6i5XA, true)
	});

	it('test for QuickToken', async () => {
		const addressfMSlLKR = accounts[1]
		const addressXKnk1Tp = accounts[5]
		const QuickTokenwh2oiHg = await QuickToken.new(addressfMSlLKR, addressXKnk1Tp, {from: accounts[3]});
		const addressR5JyKQp = accounts[4]
		const uintgtjNcd8 = BigInt("274")
		const addressi3i9APm = accounts[3]
		const uintz5pwmp6 = BigInt("677")
		const addressBlAHy5h = accounts[2]
		const uintbeqPavg = BigInt("1550")
		const addressFql52PL = accounts[0]
		const uintsXk8SY6 = await QuickTokenwh2oiHg.balanceOf.call(addressR5JyKQp, {from: accounts[0]});
		const boolSg0iDl = await QuickTokenwh2oiHg.approve.call(addressi3i9APm, uintgtjNcd8, {from: accounts[2]});
		const addressb8Jckqj = await QuickTokenwh2oiHg.mint.call(addressBlAHy5h, uintz5pwmp6, {from: accounts[3]});
		const boolbrVLSwn = await QuickTokenwh2oiHg.transfer.call(addressFql52PL, uintbeqPavg, {from: accounts[1]});

		assert.equal(boolSg0iDl, true)
		assert.equal(uintsXk8SY6, BigInt("0"))
		await expect(QuickTokenwh2oiHg.mint.call(addressBlAHy5h, uintz5pwmp6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressicMCnsp = accounts[5]
		const addressR3JY9hn = accounts[2]
		const QuickTokenRlz94Qk = await QuickToken.new(addressicMCnsp, addressR3JY9hn, {from: accounts[4]});
		const uinthB7aosR = BigInt("443")
		const addresscyajYqe = accounts[1]
		const uintv8qm4E0 = BigInt("937")
		const addressK0nJhTj = "0x0000000000000000000000000000000000000001"
		const addressvg3AdUv = accounts[4]
		const uintgu9O8LX = BigInt("305")
		const addressiUCDRmN = accounts[1]
		const boolG340Er0 = await QuickTokenRlz94Qk.approve.call(addresscyajYqe, uinthB7aosR, {from: accounts[1]});
		const boolZKiEbg8 = await QuickTokenRlz94Qk.transferFrom.call(addressvg3AdUv, addressK0nJhTj, uintv8qm4E0, {from: accounts[1]});
		const boolGXbRm1 = await QuickTokenRlz94Qk.approve.call(addressiUCDRmN, uintgu9O8LX, {from: accounts[1]});

		assert.equal(boolG340Er0, true)
		await expect(QuickTokenRlz94Qk.transferFrom.call(addressvg3AdUv, addressK0nJhTj, uintv8qm4E0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressWkY3Zrt = accounts[4]
		const addressY5BRvpz = accounts[2]
		const QuickTokenuQaBkzz = await QuickToken.new(addressWkY3Zrt, addressY5BRvpz, {from: accounts[1]});
		const addressdxSugL = accounts[0]
		const addresssklYDVZ = accounts[0]
		const uintY0Cy39q = BigInt("1300")
		const addressBSkBMUI = accounts[5]
		const uintXpDLMuW = await QuickTokenuQaBkzz.allowance.call(addresssklYDVZ, addressdxSugL, {from: accounts[2]});
		const boolfFlpIiy = await QuickTokenuQaBkzz.approve.call(addressBSkBMUI, uintY0Cy39q, {from: accounts[2]});

		assert.equal(boolfFlpIiy, true)
		assert.equal(uintXpDLMuW, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressxJLxaug = accounts[0]
		const addresso6p2iKK = accounts[4]
		const QuickTokenGk5ZA48 = await QuickToken.new(addressxJLxaug, addresso6p2iKK, {from: accounts[4]});
		const addressiEvlTcZ = accounts[5]
		const addressTEsCWQn = accounts[3]
		const uintfYf053u = BigInt("1156")
		const addressld0Ggc = "0x0000000000000000000000000000000000000001"
		const uinta9ONItN = BigInt("143")
		const addressrEUZzL0 = accounts[5]
		const uintVLwt2N0 = BigInt("667")
		const addresswuo9hZH = accounts[3]
		const addressBi3RHTI = accounts[1]
		const uintMZukEk = await QuickTokenGk5ZA48.allowance.call(addressTEsCWQn, addressiEvlTcZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolme7IF0q = await QuickTokenGk5ZA48.transfer.call(addressld0Ggc, uintfYf053u, {from: accounts[5]});
		const boolXGPIr1 = await QuickTokenGk5ZA48.approve.call(addressrEUZzL0, uinta9ONItN, {from: accounts[2]});
		const boolto6Ekhs = await QuickTokenGk5ZA48.transferFrom.call(addressBi3RHTI, addresswuo9hZH, uintVLwt2N0, {from: accounts[0]});

		assert.equal(uintMZukEk, BigInt("0"))
		await expect(QuickTokenGk5ZA48.transfer.call(addressld0Ggc, uintfYf053u, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresshVrFtG = accounts[4]
		const addressn4732vP = accounts[2]
		const QuickTokenuQaBkzz = await QuickToken.new(addresshVrFtG, addressn4732vP, {from: accounts[1]});
		const addresst6xPo4 = accounts[0]
		const addressVlpCmn0 = accounts[0]
		const uintYaWyjtb = BigInt("834")
		const addresshD7COP1 = accounts[4]
		const uintq7JP241 = BigInt("1952")
		const addressnEI7bs = accounts[0]
		const addressTEbwAqr = accounts[3]
		const uintoBnDoSP = BigInt("1180")
		const addresscvSNDWQ = accounts[5]
		const uintXpDLMuW = await QuickTokenuQaBkzz.allowance.call(addressVlpCmn0, addresst6xPo4, {from: accounts[2]});
		const addressFqpjB6j = await QuickTokenuQaBkzz.mint.call(addresshD7COP1, uintYaWyjtb, {from: accounts[2]});
		const boolS1pkwAe = await QuickTokenuQaBkzz.approve.call(addressnEI7bs, uintq7JP241, {from: accounts[4]});
		const uintvo2LAGV = await QuickTokenuQaBkzz.balanceOf.call(addressTEbwAqr, {from: accounts[3]});
		const addresseWpMPKU = await QuickTokenuQaBkzz.mint.call(addresscvSNDWQ, uintoBnDoSP, {from: accounts[3]});

		assert.equal(boolS1pkwAe, true)
		assert.equal(uintXpDLMuW, BigInt("0"))
		assert.equal(uintvo2LAGV, BigInt("0"))
		await expect(QuickTokenuQaBkzz.mint.call(addresscvSNDWQ, uintoBnDoSP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})