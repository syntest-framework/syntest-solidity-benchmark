const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressMiadrN8 = accounts[5]
		const addressmCjxpfA = accounts[1]
		const QuickTokenGd6Qzu5 = await QuickToken.new(addressMiadrN8, addressmCjxpfA, {from: accounts[2]});
		const addresslzZL0wJ = accounts[2]
		const uintB2SmO3K = BigInt("1776")
		const addressCtlpdKK = accounts[0]
		const addressbi4fTfM = accounts[3]
		const uintOJoDFab = BigInt("1041")
		const addressGhNN0dG = accounts[4]
		const uintzhN2l0E = BigInt("965")
		const addressrhCKNs3 = accounts[2]
		const addressXhVBInL = accounts[5]
		const addressdCu3CPx = accounts[5]
		const addressBElCxpD = accounts[2]
		const uintvIn0qC = await QuickTokenGd6Qzu5.balanceOf.call(addresslzZL0wJ, {from: accounts[5]});
		const booluf9WyNX = await QuickTokenGd6Qzu5.transferFrom.call(addressbi4fTfM, addressCtlpdKK, uintB2SmO3K, {from: accounts[4]});
		const addresscH0C2KH = await QuickTokenGd6Qzu5.mint.call(addressGhNN0dG, uintOJoDFab, {from: accounts[0]});
		const boolt5CAMlj = await QuickTokenGd6Qzu5.transferFrom.call(addressXhVBInL, addressrhCKNs3, uintzhN2l0E, {from: accounts[1]});
		const uintcMofvq = await QuickTokenGd6Qzu5.balanceOf.call(addressdCu3CPx, {from: accounts[4]});
		const uinteSFbdb = await QuickTokenGd6Qzu5.balanceOf.call(addressBElCxpD, {from: accounts[5]});

		assert.equal(uintvIn0qC, BigInt("0"))
		await expect(QuickTokenGd6Qzu5.transferFrom.call(addressbi4fTfM, addressCtlpdKK, uintB2SmO3K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressc65Zlba = "0x0000000000000000000000000000000000000001"
		const addressYs2SPb0 = "0x0000000000000000000000000000000000000001"
		const QuickTokenKTordjM = await QuickToken.new(addressc65Zlba, addressYs2SPb0, {from: accounts[2]});
		const addresseaT2ITb = accounts[3]
		const uintLmZY4my = BigInt("1622")
		const addresstyJkPyi = accounts[1]
		const addressfeDLfZJ = accounts[1]
		const addressqrWI0d = accounts[0]
		const addresszGOnU3C = accounts[4]
		const addresskQJWIUZ = accounts[1]
		const addressQ4olDGn = accounts[3]
		const addressXaVexTz = accounts[4]
		const uintqqY1Ekw = await QuickTokenKTordjM.balanceOf.call(addresseaT2ITb, {from: accounts[3]});
		const boolPaGYUrm = await QuickTokenKTordjM.transfer.call(addresstyJkPyi, uintLmZY4my, {from: accounts[2]});
		const uintfOi4m88 = await QuickTokenKTordjM.allowance.call(addressqrWI0d, addressfeDLfZJ, {from: accounts[0]});
		const uintHMDAhNK = await QuickTokenKTordjM.balanceOf.call(addresszGOnU3C, {from: accounts[4]});
		const uintwG85oWr = await QuickTokenKTordjM.balanceOf.call(addresskQJWIUZ, {from: accounts[0]});
		const uintI04sHZs = await QuickTokenKTordjM.allowance.call(addressXaVexTz, addressQ4olDGn, {from: accounts[4]});

		assert.equal(uintqqY1Ekw, BigInt("0"))
		await expect(QuickTokenKTordjM.transfer.call(addresstyJkPyi, uintLmZY4my, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresssrK8XUW = accounts[3]
		const addresswHsAWaj = accounts[1]
		const QuickTokenxBrfPs7 = await QuickToken.new(addresssrK8XUW, addresswHsAWaj, {from: accounts[3]});
		const addressefaVL9R = accounts[1]
		const addressrT7esa7 = accounts[5]
		const addressXKYu29d = accounts[4]
		const addressRC8R4T = accounts[0]
		const uint4KkIec = await QuickTokenxBrfPs7.allowance.call(addressrT7esa7, addressefaVL9R, {from: accounts[1]});
		const uintFMdflRh = await QuickTokenxBrfPs7.balanceOf.call(addressXKYu29d, {from: accounts[3]});
		const uintMjyrDQM = await QuickTokenxBrfPs7.balanceOf.call(addressRC8R4T, {from: accounts[4]});

		assert.equal(uint4KkIec, BigInt("0"))
		assert.equal(uintFMdflRh, BigInt("0"))
		assert.equal(uintMjyrDQM, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressOZ98FIP = accounts[3]
		const addressoYRxLDt = accounts[0]
		const QuickTokengM27r8m = await QuickToken.new(addressOZ98FIP, addressoYRxLDt, {from: accounts[1]});
		const uintJXbG3N0 = BigInt("336")
		const addressmrw8QV5 = "0x0000000000000000000000000000000000000001"
		const uintO4yvNX5 = BigInt("1118")
		const addressHcj2RCj = accounts[2]
		const uinthsITpXj = BigInt("571")
		const addressiDb0Hga = accounts[0]
		const uintEq9PjVT = BigInt("1474")
		const addressOxb0OZa = accounts[1]
		const uintUS6G8Sa = BigInt("375")
		const addresskTo1p4N = "0x0000000000000000000000000000000000000001"
		const booldnXj5Mb = await QuickTokengM27r8m.transfer.call(addressmrw8QV5, uintJXbG3N0, {from: accounts[3]});
		const addressRhMdEQQ = await QuickTokengM27r8m.mint.call(addressHcj2RCj, uintO4yvNX5, {from: "0x0000000000000000000000000000000000000001"});
		const boolhLuoGPF = await QuickTokengM27r8m.approve.call(addressiDb0Hga, uinthsITpXj, {from: "0x0000000000000000000000000000000000000001"});
		const addressBGPxKxH = await QuickTokengM27r8m.mint.call(addressOxb0OZa, uintEq9PjVT, {from: accounts[3]});
		const boolmu8lzTb = await QuickTokengM27r8m.transfer.call(addresskTo1p4N, uintUS6G8Sa, {from: accounts[1]});

		assert.equal(booldnXj5Mb, true)
		await expect(QuickTokengM27r8m.mint.call(addressHcj2RCj, uintO4yvNX5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressEChsyy = accounts[4]
		const addressi2WTj1f = accounts[5]
		const QuickTokenICwadId = await QuickToken.new(addressEChsyy, addressi2WTj1f, {from: accounts[1]});
		const addressIPzhmxY = accounts[4]
		const addressylJXTJ9 = accounts[1]
		const uintVz3uR1n = BigInt("1097")
		const addressf47ZJGr = accounts[4]
		const uintCo7nLvy = BigInt("1807")
		const addressdeML9aY = accounts[4]
		const addresswC8NXt5 = accounts[5]
		const uintLti1mkf = BigInt("1048")
		const addresscoqL7v1 = accounts[1]
		const uintSzBsmaE = BigInt("502")
		const addressdbE0yy6 = accounts[4]
		const addressdbpPKOh = accounts[0]
		const uintUhGnMSE = await QuickTokenICwadId.allowance.call(addressylJXTJ9, addressIPzhmxY, {from: accounts[4]});
		const bool90s3Hj = await QuickTokenICwadId.approve.call(addressf47ZJGr, uintVz3uR1n, {from: accounts[0]});
		const boolxVd14FP = await QuickTokenICwadId.approve.call(addressdeML9aY, uintCo7nLvy, {from: accounts[3]});
		const uintsF3Batk = await QuickTokenICwadId.balanceOf.call(addresswC8NXt5, {from: accounts[4]});
		const addressgDxWHNg = await QuickTokenICwadId.mint.call(addresscoqL7v1, uintLti1mkf, {from: accounts[1]});
		const boolCBpNlkm = await QuickTokenICwadId.transferFrom.call(addressdbpPKOh, addressdbE0yy6, uintSzBsmaE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool90s3Hj, true)
		assert.equal(boolxVd14FP, true)
		assert.equal(uintUhGnMSE, BigInt("0"))
		assert.equal(uintsF3Batk, BigInt("0"))
		await expect(QuickTokenICwadId.mint.call(addresscoqL7v1, uintLti1mkf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressRkBgAv9 = accounts[4]
		const addressN87ogtZ = "0x0000000000000000000000000000000000000001"
		const QuickTokenofvXoe2 = await QuickToken.new(addressRkBgAv9, addressN87ogtZ, {from: accounts[1]});
		const addressk6xBgWH = "0x0000000000000000000000000000000000000001"
		const uintuw1G8Bg = BigInt("110")
		const addressptwkCa1 = accounts[0]
		const addressmkmP7Fa = accounts[0]
		const addressRWjpKW4 = "0x0000000000000000000000000000000000000001"
		const addressVGCB5r2 = accounts[1]
		const addressS738LCC = accounts[4]
		const addressEUAcVqf = accounts[3]
		const addressq2bQZi8 = await QuickTokenofvXoe2.setMinter.call(addressk6xBgWH, {from: "0x0000000000000000000000000000000000000001"});
		const boolstHLRf7 = await QuickTokenofvXoe2.transferFrom.call(addressmkmP7Fa, addressptwkCa1, uintuw1G8Bg, {from: accounts[4]});
		const addresslcITScP = await QuickTokenofvXoe2.setMinter.call(addressRWjpKW4, {from: "0x0000000000000000000000000000000000000001"});
		const uintRpzF8JZ = await QuickTokenofvXoe2.balanceOf.call(addressVGCB5r2, {from: accounts[4]});
		const uintCvhHTpf = await QuickTokenofvXoe2.allowance.call(addressEUAcVqf, addressS738LCC, {from: accounts[0]});

		await expect(QuickTokenofvXoe2.transferFrom.call(addressmkmP7Fa, addressptwkCa1, uintuw1G8Bg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressX6GupLp = accounts[3]
		const addressJKWQQXy = accounts[1]
		const QuickTokenp4CMzk = await QuickToken.new(addressX6GupLp, addressJKWQQXy, {from: "0x0000000000000000000000000000000000000001"});
		const addressJQ3piWV = accounts[4]
		const addressiu4H9u = accounts[3]
		const uintpDPwehn = BigInt("33")
		const addressONpph3c = accounts[3]
		const uint1ujgf0 = await QuickTokenp4CMzk.balanceOf.call(addressJQ3piWV, {from: accounts[0]});
		const uintqaunbgu = await QuickTokenp4CMzk.balanceOf.call(addressiu4H9u, {from: accounts[1]});
		const boolFkNwzQM = await QuickTokenp4CMzk.approve.call(addressONpph3c, uintpDPwehn, {from: accounts[3]});
	});

	it('test for QuickToken', async () => {
		const addresspcFv73B = accounts[1]
		const addressHTTCj7i = accounts[0]
		const QuickTokenYN1lswH = await QuickToken.new(addresspcFv73B, addressHTTCj7i, {from: accounts[1]});
		const addressIPDReJl = accounts[2]
		const uint8CPkwt = BigInt("877")
		const addresseYKtqA = accounts[3]
		const uintgY9yykc = BigInt("941")
		const addressQgK8akc = accounts[1]
		const addresscMLGdpM = accounts[1]
		const addressRk21PQ2 = accounts[5]
		const addressEGtZFiv = accounts[4]
		const addresspNqyvIL = await QuickTokenYN1lswH.setMinter.call(addressIPDReJl, {from: accounts[1]});
		const addresst7ecUm = await QuickTokenYN1lswH.mint.call(addresseYKtqA, uint8CPkwt, {from: accounts[4]});
		const boolceAkhpc = await QuickTokenYN1lswH.transfer.call(addressQgK8akc, uintgY9yykc, {from: accounts[3]});
		const uintJyszPCZ = await QuickTokenYN1lswH.allowance.call(addressRk21PQ2, addresscMLGdpM, {from: accounts[3]});
		const uintwUMpIit = await QuickTokenYN1lswH.balanceOf.call(addressEGtZFiv, {from: accounts[2]});

		await expect(QuickTokenYN1lswH.setMinter.call(addressIPDReJl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresswJ0jTKi = accounts[4]
		const addressx6hkTUP = accounts[5]
		const QuickTokenICwadId = await QuickToken.new(addresswJ0jTKi, addressx6hkTUP, {from: accounts[1]});
		const addressklhBTKU = accounts[4]
		const addressLqeWwSN = accounts[1]
		const uintRbi4nXX = BigInt("1097")
		const addresseNnQwNc = accounts[4]
		const uintEvWmGuf = BigInt("1807")
		const addressBZT8UyW = accounts[4]
		const addresscu5eikD = accounts[5]
		const uint0xOVP6 = BigInt("355")
		const addressHao76OY = accounts[1]
		const addressg2x9aI = accounts[2]
		const addressYVZDNZE = accounts[4]
		const uint7umUiv = BigInt("1048")
		const addressvGGMED1 = accounts[1]
		const uintUhGnMSE = await QuickTokenICwadId.allowance.call(addressLqeWwSN, addressklhBTKU, {from: accounts[4]});
		const bool90s3Hj = await QuickTokenICwadId.approve.call(addresseNnQwNc, uintRbi4nXX, {from: accounts[0]});
		const boolxVd14FP = await QuickTokenICwadId.approve.call(addressBZT8UyW, uintEvWmGuf, {from: accounts[3]});
		const uintsF3Batk = await QuickTokenICwadId.balanceOf.call(addresscu5eikD, {from: accounts[4]});
		const addressYKQ2C3q = await QuickTokenICwadId.mint.call(addressHao76OY, uint0xOVP6, {from: accounts[5]});
		const uintn5DinUD = await QuickTokenICwadId.balanceOf.call(addressg2x9aI, {from: accounts[5]});
		const uintxRpe0W2 = await QuickTokenICwadId.balanceOf.call(addressYVZDNZE, {from: accounts[3]});
		const addressgDxWHNg = await QuickTokenICwadId.mint.call(addressvGGMED1, uint7umUiv, {from: accounts[1]});

		assert.equal(bool90s3Hj, true)
		assert.equal(boolxVd14FP, true)
		assert.equal(uintUhGnMSE, BigInt("0"))
		assert.equal(uintn5DinUD, BigInt("0"))
		assert.equal(uintsF3Batk, BigInt("0"))
		assert.equal(uintxRpe0W2, BigInt("2000000000000"))
		await expect(QuickTokenICwadId.mint.call(addressvGGMED1, uint7umUiv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})