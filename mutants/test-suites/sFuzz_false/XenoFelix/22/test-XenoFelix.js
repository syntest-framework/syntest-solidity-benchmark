const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uinteIiVgv = BigInt("410")
		const uinttbGzfw0 = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uinteIiVgv, uinttbGzfw0, {from: accounts[5]});
		const uintc4xjENj = BigInt("1008")
		const addressVHoiBOb = accounts[2]
//		await XenoFelixWo9Lic.onlyPauser.call({from: accounts[1]});
//		const boolDLQChDG = await XenoFelixWo9Lic.transfer.call(addressVHoiBOb, uintc4xjENj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixWo9Lic.onlyPauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const XenoFelixb38lSxh = await XenoFelix.new({from: accounts[0]});
		const uintn9Thovc = BigInt("304")
		const addressqZhLiIG = accounts[4]
		const addresse4W2O5 = accounts[2]
		const uintaC4JLAw = BigInt("947")
		const addressaBUAiqn = accounts[0]
		const uinty8MfSHO = BigInt("137")
		const uintCObD3X = BigInt("2044")
		const addressltYI2qJ = accounts[1]
		const boolhF6ivIe = await XenoFelixb38lSxh.transferFrom.call(addresse4W2O5, addressqZhLiIG, uintn9Thovc, {from: accounts[0]});
		const uint8C8etZ9E = await XenoFelixb38lSxh.decimals.call({from: accounts[3]});
		const bool1pa7Jf = await XenoFelixb38lSxh.increaseAllowance.call(addressaBUAiqn, uintaC4JLAw, {from: accounts[4]});
		const uint256nAFB6uH = await XenoFelixb38lSxh.totalSupply.call({from: accounts[4]});
		const bool70qTT7 = await XenoFelixb38lSxh.transferWithLock.call(addressltYI2qJ, uintCObD3X, uinty8MfSHO, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringtY3jXc4 = "wYBhZgebnLVXxDyPqJUIFiQxx5uXhJBKRZ14k8NxDQXqgh8EmRzAQNNBtCWIxmaCPdmnW3Ud47VvBcJBQSAz07D4"
		const stringQGDJMv = "YofV7LukK3PJSQiYR4S63HJY"
		const uintEtOMjpz = BigInt("123")
		const XenoFelixiXPLDg8 = await XenoFelix.new(stringtY3jXc4, stringQGDJMv, uintEtOMjpz, {from: accounts[2]});
		const uintbEJQEDf = BigInt("1166")
		const addressM0YWlMz = accounts[0]
		const addressWGo39yX = accounts[1]
		const addressnfzOZIZ = "0x0000000000000000000000000000000000000001"
		const uintYTUyM5T = BigInt("338")
		const addressonjMAwu = accounts[1]
		const addressajbtc1m = accounts[4]
		const uint63gibG = BigInt("444")
		const uintOd77J5s = BigInt("550")
		const addressOIZJPpf = accounts[3]
		const boolVA73k5V = await XenoFelixiXPLDg8.approve.call(addressM0YWlMz, uintbEJQEDf, {from: accounts[2]});
		const addressnoePYWd = await XenoFelixiXPLDg8.notFrozenAndTransaction.call(addressnfzOZIZ, addressWGo39yX, {from: accounts[3]});
		const boolqjt8edf = await XenoFelixiXPLDg8.transferFrom.call(addressajbtc1m, addressonjMAwu, uintYTUyM5T, {from: accounts[3]});
		const boolk2aoLw = await XenoFelixiXPLDg8.transferWithLock.call(addressOIZJPpf, uintOd77J5s, uint63gibG, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringk2t1XnL = "RV6U"
		const stringFeKjH1k = "eLm2nEBRFFKvslm3kwtypdQFIqaR7a5Ayw5Ibef7oMPWvJb2GIAVjCWNQCGhsi5q2QX6eG1yg0wsNEI"
		const uintJnCdZx = BigInt("157")
		const XenoFelixwx7okfL = await XenoFelix.new(stringk2t1XnL, stringFeKjH1k, uintJnCdZx, {from: accounts[5]});
		const uintAi8xX6Z = BigInt("211")
		const uintabCATyZ = BigInt("1601")
		const addressrvO6HJF = accounts[3]
		const uinthFtigNO = BigInt("293")
		const addresshyGyra = accounts[2]
		const addressWjqztfb = accounts[4]
		const uintkbhPq8K = BigInt("975")
		const addressEQpsr1 = "0x0000000000000000000000000000000000000001"
		const addressuSufMB = accounts[4]
		const boolIkGeZq0 = await XenoFelixwx7okfL.lock.call(addressrvO6HJF, uintabCATyZ, uintAi8xX6Z, {from: "0x0000000000000000000000000000000000000001"});
		const bool6IoDpK = await XenoFelixwx7okfL.transferFrom.call(addressWjqztfb, addresshyGyra, uinthFtigNO, {from: accounts[2]});
		await XenoFelixwx7okfL.onlyNewOwner.call({from: accounts[2]});
		const boolBcrpXgU = await XenoFelixwx7okfL.transferFrom.call(addressuSufMB, addressEQpsr1, uintkbhPq8K, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringHxGEW74 = "tR9kR6XK9RRLhsB1bjbeluJQxIDOXiAYalujIBV0vPYGi3AQG3yjM4vjzPlmximMPe4oOxiluZAYKiP5RojCe"
		const stringwMcJp5y = "CMHeLFirjYPuI8N"
		const uintmchmUQu = BigInt("104")
		const XenoFelixfwj6Ep4 = await XenoFelix.new(stringHxGEW74, stringwMcJp5y, uintmchmUQu, {from: accounts[3]});
		const uintIzuEpsW = BigInt("1549")
		const addressEo7fAm3 = accounts[3]
		const addressKOv0LGG = accounts[1]
		await XenoFelixfwj6Ep4.renouncePauser.call({from: accounts[4]});
		const boolqpzwDPj = await XenoFelixfwj6Ep4.transferFrom.call(addressKOv0LGG, addressEo7fAm3, uintIzuEpsW, {from: accounts[0]});
		await XenoFelixfwj6Ep4.whenNotPaused.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringdynMF6y = "EynqKTyWbJLMPgYXfOZUrDlqHfX9rep3clCi4lolpnQu0ueCp8JzrbFm9fvf5kawiXIg8Oe8jRatdC42CODLotu6SWzYcBeV7"
		const string1BztTM = "1lvStxfL7fS4tmK3LLa1rVLym9XAoN9e39h6"
		const uintdTs6ngh = BigInt("143")
		const XenoFelixKNXMqKy = await XenoFelix.new(stringdynMF6y, string1BztTM, uintdTs6ngh, {from: "0x0000000000000000000000000000000000000001"});
		const uintl8yT8fD = BigInt("1663")
		const addressta8kQ3H = accounts[1]
		const addressjgXB1Qt = accounts[4]
		await XenoFelixKNXMqKy.onlyOwner.call({from: accounts[3]});
		const boolbwRBjW8 = await XenoFelixKNXMqKy.burnOwner.call(addressta8kQ3H, uintl8yT8fD, {from: accounts[4]});
		const addressRIJhBuI = await XenoFelixKNXMqKy.notFrozen.call(addressjgXB1Qt, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringpbjh6To = "zbPPVt826mAL6Mq7XwZvxuT60muJGsFKLGLlcGxwf4XTT64EEdAvp7NUpIKgcnlx6RYae4GLo"
		const stringkhsHk8K = "yV2hGn6QRp5P4JJP76C4kQi"
		const uintzL2QxYB = BigInt("1949")
		const uintQjP0B2g = BigInt("41")
		const XenoFelixXV0c5F1 = await XenoFelix.new(stringpbjh6To, stringkhsHk8K, uintzL2QxYB, uintQjP0B2g, {from: accounts[5]});
		const addresskl9kZg = accounts[3]
		const addressY7QDiBi = "0x0000000000000000000000000000000000000001"
		const addresslLXPIL5 = "0x0000000000000000000000000000000000000001"
		const addressIdV0Lso = accounts[4]
		const uint4ufLLE = BigInt("1769")
		const addresszIvQKEI = accounts[2]
		const addressGG7CfRI = accounts[3]
		const boolCO7n9tH = await XenoFelixXV0c5F1.isPauser.call(addresskl9kZg, {from: accounts[4]});
		const uint256ZImzZL7 = await XenoFelixXV0c5F1.balanceOf.call(addressY7QDiBi, {from: accounts[2]});
//		const addressQTLfCB = await XenoFelixXV0c5F1.notFrozenAndTransaction.call(addressIdV0Lso, addresslLXPIL5, {from: accounts[3]});
//		const boolA61PyZT = await XenoFelixXV0c5F1.transfer.call(addresszIvQKEI, uint4ufLLE, {from: accounts[1]});
//		const boolMOS44OJ = await XenoFelixXV0c5F1.freezeAccount.call(addressGG7CfRI, {from: accounts[3]});
//		const uint8SNVQK0F = await XenoFelixXV0c5F1.decimals.call({from: accounts[5]});

		assert.equal(boolCO7n9tH, false)
		assert.equal(uint256ZImzZL7, BigInt("0"))
		await expect(XenoFelixXV0c5F1.notFrozenAndTransaction.call(addressIdV0Lso, addresslLXPIL5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintBfH1GkC = BigInt("410")
		const uintKQLLD7n = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintBfH1GkC, uintKQLLD7n, {from: accounts[5]});
		const uintSAQVKnB = BigInt("1982")
		const addressUSVQEu = accounts[0]
		const uintsKvU7eR = BigInt("1008")
		const addressyeUe4ie = accounts[2]
//		const boolYQIWwd7 = await XenoFelixWo9Lic.decreaseAllowance.call(addressUSVQEu, uintSAQVKnB, {from: accounts[4]});
//		await XenoFelixWo9Lic.onlyPauser.call({from: accounts[1]});
//		const boolDLQChDG = await XenoFelixWo9Lic.transfer.call(addressyeUe4ie, uintsKvU7eR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixWo9Lic.decreaseAllowance.call(addressUSVQEu, uintSAQVKnB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintVBXDnvc = BigInt("410")
		const uinttUrVcVb = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintVBXDnvc, uinttUrVcVb, {from: accounts[5]});
		const uintbVuwUC = BigInt("1008")
		const addressVtBa5Yj = accounts[2]
//		await XenoFelixWo9Lic.pause.call({from: accounts[0]});
//		await XenoFelixWo9Lic.onlyPauser.call({from: accounts[1]});
//		const boolDLQChDG = await XenoFelixWo9Lic.transfer.call(addressVtBa5Yj, uintbVuwUC, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8hClF6JU = await XenoFelixWo9Lic.decimals.call({from: accounts[3]});
//		const boolFGEIrJW = await XenoFelixWo9Lic.paused.call({from: accounts[2]});

		await expect(XenoFelixWo9Lic.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpbjh6To = "zbPPVt826mAL6Mq7XwZvxuT60muJGsFKLGLlcGxwf4XTT64EEdAvp7NUpIKgcnlx6RYae4GLo"
		const stringkhsHk8K = "yV2hGn6QRp5P4JJP76C4kQi"
		const uintormcqNX = BigInt("1949")
		const uintjMEJss = BigInt("41")
		const XenoFelixXV0c5F1 = await XenoFelix.new(stringpbjh6To, stringkhsHk8K, uintormcqNX, uintjMEJss, {from: accounts[5]});
		const addressWvrddjH = accounts[3]
		const addresseATJEme = "0x0000000000000000000000000000000000000001"
		const addressc1qLyPt = accounts[4]
		const addressrNxvmz = accounts[5]
		const address1bVbry = "0x0000000000000000000000000000000000000001"
		const addressZHGMIm0 = accounts[5]
		const addressj17aSSj = accounts[4]
		const boolCO7n9tH = await XenoFelixXV0c5F1.isPauser.call(addressWvrddjH, {from: accounts[4]});
		const uint256ZImzZL7 = await XenoFelixXV0c5F1.balanceOf.call(addresseATJEme, {from: accounts[2]});
		const uint256ud4d8hd = await XenoFelixXV0c5F1.allowance.call(addressrNxvmz, addressc1qLyPt, {from: accounts[3]});
//		const addressQTLfCB = await XenoFelixXV0c5F1.notFrozenAndTransaction.call(addressZHGMIm0, address1bVbry, {from: accounts[3]});
//		const boolMOS44OJ = await XenoFelixXV0c5F1.freezeAccount.call(addressj17aSSj, {from: accounts[3]});
//		const uint8SNVQK0F = await XenoFelixXV0c5F1.decimals.call({from: accounts[5]});

		assert.equal(boolCO7n9tH, false)
		assert.equal(uint256ZImzZL7, BigInt("0"))
		assert.equal(uint256ud4d8hd, BigInt("0"))
		await expect(XenoFelixXV0c5F1.notFrozenAndTransaction.call(addressZHGMIm0, address1bVbry, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintWX1TTQL = BigInt("410")
		const uintCelsvQe = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintWX1TTQL, uintCelsvQe, {from: accounts[5]});
		const uintfTjBunJ = BigInt("1008")
		const addressemUzw1Q = accounts[2]
//		const boolDLQChDG = await XenoFelixWo9Lic.transfer.call(addressemUzw1Q, uintfTjBunJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixWo9Lic.transfer.call(addressemUzw1Q, uintfTjBunJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintVOP2CtJ = BigInt("410")
		const uintPC3PfLx = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintVOP2CtJ, uintPC3PfLx, {from: accounts[5]});
		const uintiBJCNcn = BigInt("1981")
		const addressOKA7J4 = accounts[3]
		const addressUFXskEc = "0x0000000000000000000000000000000000000001"
		const uintboYPNHO = BigInt("986")
		const addressJOxTN2A = accounts[2]
//		const booll5jTRjv = await XenoFelixWo9Lic.transferFrom.call(addressUFXskEc, addressOKA7J4, uintiBJCNcn, {from: accounts[0]});
//		const boolDLQChDG = await XenoFelixWo9Lic.transfer.call(addressJOxTN2A, uintboYPNHO, {from: "0x0000000000000000000000000000000000000001"});
//		const boolT46Yest = await XenoFelixWo9Lic.acceptOwnership.call({from: accounts[0]});

		await expect(XenoFelixWo9Lic.transferFrom.call(addressUFXskEc, addressOKA7J4, uintiBJCNcn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintApHYiwV = BigInt("410")
		const uintAvY4g42 = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintApHYiwV, uintAvY4g42, {from: accounts[5]});
		const uintbu3d8TD = BigInt("360")
		const addressYGPm4m2 = accounts[2]
		const uintK4th0yV = BigInt("1034")
		const addressYDK7rex = accounts[2]
		const boolabJzFGp = await XenoFelixWo9Lic.approve.call(addressYGPm4m2, uintbu3d8TD, {from: accounts[2]});
//		const boolDLQChDG = await XenoFelixWo9Lic.transfer.call(addressYDK7rex, uintK4th0yV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolabJzFGp, true)
		await expect(XenoFelixWo9Lic.transfer.call(addressYDK7rex, uintK4th0yV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpbjh6To = "zbPPVt826mAL6Mq7XwZvxuT60muJGsFKLGLlcGxwf4XTT64EEdAvp7NUpIKgcnlx6RYae4GLo"
		const stringkhsHk8K = "yV2hGn6QRp5P4JJP76C4kQi"
		const uintVXCf83 = BigInt("1949")
		const uintYXISeAt = BigInt("41")
		const XenoFelixXV0c5F1 = await XenoFelix.new(stringpbjh6To, stringkhsHk8K, uintVXCf83, uintYXISeAt, {from: accounts[5]});
		const addressLXDyTfQ = accounts[3]
		const addressFzHMfub = accounts[3]
		const uintb3gS5nq = BigInt("810")
		const addressEdY9o1G = accounts[0]
		const addressTGC9iOn = "0x0000000000000000000000000000000000000001"
		const addressuHxPxwe = accounts[5]
		const boolCO7n9tH = await XenoFelixXV0c5F1.isPauser.call(addressLXDyTfQ, {from: accounts[4]});
		const addressiU26Qfv = await XenoFelixXV0c5F1.addPauser.call(addressFzHMfub, {from: accounts[5]});
//		const boolqP46dy = await XenoFelixXV0c5F1.transfer.call(addressEdY9o1G, uintb3gS5nq, {from: "0x0000000000000000000000000000000000000001"});
//		const addressQTLfCB = await XenoFelixXV0c5F1.notFrozenAndTransaction.call(addressuHxPxwe, addressTGC9iOn, {from: accounts[3]});
//		const uint8SNVQK0F = await XenoFelixXV0c5F1.decimals.call({from: accounts[5]});

		assert.equal(boolCO7n9tH, false)
		await expect(XenoFelixXV0c5F1.transfer.call(addressEdY9o1G, uintb3gS5nq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintlgqaqwK = BigInt("410")
		const uintdq34wow = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintlgqaqwK, uintdq34wow, {from: accounts[5]});
		const uintSaKHX7t = BigInt("121")
		const addressqMpSe42 = accounts[2]
		const uintxCKQ75R = BigInt("1016")
		const addressHnYdWVd = accounts[2]
//		const addresstMG88HJ = await XenoFelixWo9Lic.burnFrom.call(addressqMpSe42, uintSaKHX7t, {from: accounts[5]});
//		const boolDLQChDG = await XenoFelixWo9Lic.transfer.call(addressHnYdWVd, uintxCKQ75R, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixWo9Lic.burnFrom.call(addressqMpSe42, uintSaKHX7t, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintPtBgHG = BigInt("410")
		const uintDFbhzeU = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintPtBgHG, uintDFbhzeU, {from: accounts[5]});
		const addressSqwOvHN = accounts[2]
		const uintOSBMn9t = BigInt("1869")
		const addressyPVGb8O = accounts[0]
		const addressfVA8P4R = "0x0000000000000000000000000000000000000001"
		const uintu8gCvZA = BigInt("1012")
		const addressUWSz4JC = accounts[2]
		const boolRJCPBwJ = await XenoFelixWo9Lic.paused.call({from: accounts[0]});
		const uint256Bv8k84 = await XenoFelixWo9Lic.balanceOf.call(addressSqwOvHN, {from: accounts[3]});
//		const boolD7jGKY3 = await XenoFelixWo9Lic.transferFrom.call(addressfVA8P4R, addressyPVGb8O, uintOSBMn9t, {from: accounts[2]});
//		const boolDLQChDG = await XenoFelixWo9Lic.transfer.call(addressUWSz4JC, uintu8gCvZA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRJCPBwJ, false)
		assert.equal(uint256Bv8k84, BigInt("0"))
		await expect(XenoFelixWo9Lic.transferFrom.call(addressfVA8P4R, addressyPVGb8O, uintOSBMn9t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uinteZ2PZT3 = BigInt("410")
		const uintPzkLAky = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uinteZ2PZT3, uintPzkLAky, {from: accounts[5]});
		const uintiEaypAb = BigInt("1043")
		const addressTFG1Qy = accounts[0]
		const addressseRma0s = accounts[1]
		const uintSupqLCE = BigInt("299")
		const addressAD3gGS8 = accounts[0]
		const uintnwHO958 = BigInt("258")
		const addressg0T6cGX = "0x0000000000000000000000000000000000000002"
		const addressUacHfO = accounts[0]
		const boolliLAtIl = await XenoFelixWo9Lic.increaseAllowance.call(addressTFG1Qy, uintiEaypAb, {from: accounts[2]});
//		const boolocITBDk = await XenoFelixWo9Lic.unfreezeAccount.call(addressseRma0s, {from: accounts[4]});
//		const boolk7kg5Ej = await XenoFelixWo9Lic.burnOwner.call(addressAD3gGS8, uintSupqLCE, {from: accounts[0]});
//		const boolXAJel7 = await XenoFelixWo9Lic.transferFrom.call(addressUacHfO, addressg0T6cGX, uintnwHO958, {from: accounts[2]});

		assert.equal(boolliLAtIl, true)
		await expect(XenoFelixWo9Lic.unfreezeAccount.call(addressseRma0s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintJ5nNXy6 = BigInt("410")
		const uintnpGzfJf = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintJ5nNXy6, uintnpGzfJf, {from: accounts[5]});
		const uintqINSrjS = BigInt("1372")
		const uintLrCYnY5 = BigInt("1008")
		const addressiSlGsyY = accounts[2]
		const uint8FVjZ3Kf = await XenoFelixWo9Lic.decimals.call({from: accounts[2]});
//		const uint256eKeg7T = await XenoFelixWo9Lic.burn.call(uintqINSrjS, {from: accounts[1]});
//		const boolDLQChDG = await XenoFelixWo9Lic.transfer.call(addressiSlGsyY, uintLrCYnY5, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8FVjZ3Kf, BigInt("111"))
		await expect(XenoFelixWo9Lic.burn.call(uintqINSrjS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintQ2PrbDC = BigInt("410")
		const uintXCrnOJ2 = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintQ2PrbDC, uintXCrnOJ2, {from: accounts[5]});
		const addresspiBoeKE = accounts[5]
		const uintFIVUGi8 = BigInt("1008")
		const addressHQxKqwX = accounts[3]
		const addressB7yGRV2 = accounts[2]
		const stringyWbB0BW = await XenoFelixWo9Lic.symbol.call({from: accounts[3]});
		const uint256BygRteu = await XenoFelixWo9Lic.balanceOf.call(addresspiBoeKE, {from: accounts[1]});
//		const boolDLQChDG = await XenoFelixWo9Lic.transfer.call(addressHQxKqwX, uintFIVUGi8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolPFGTBlY = await XenoFelixWo9Lic.isOwner.call(addressB7yGRV2, {from: accounts[5]});

		assert.equal(stringyWbB0BW, "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt")
		assert.equal(uint256BygRteu, BigInt("18244218881755290085577126291384630180392698414889403971160949221609739124736"))
		await expect(XenoFelixWo9Lic.transfer.call(addressHQxKqwX, uintFIVUGi8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringCRablzA = "Zzxhm5mpJszeOFXF7lHkf0eXl9sNDfIr9KGipWArJLwXXIKJEwLNeIFf"
		const stringRUonZM = "KxQY10hrUiCRwHLnZruZhb3XASpq6QQeFFeotA19uR9pytOxynSkA7uXupxxzJHiiEviyzrC"
		const uintyixGXf9 = BigInt("234")
		const XenoFelixo5Y6dmg = await XenoFelix.new(stringCRablzA, stringRUonZM, uintyixGXf9, {from: accounts[0]});
		const uintVegkoLy = BigInt("1937")
		const addressQ0gCHv2 = accounts[0]
		const addressn6cHvPD = accounts[4]
		const addressfEzpIbN = accounts[1]
		const addressqQd0sD4 = accounts[3]
		const boolui7odW9 = await XenoFelixo5Y6dmg.transferFrom.call(addressn6cHvPD, addressQ0gCHv2, uintVegkoLy, {from: accounts[5]});
		await XenoFelixo5Y6dmg.unpause.call({from: accounts[3]});
		const boolUAybE5v = await XenoFelixo5Y6dmg.isOwner.call(addressfEzpIbN, {from: accounts[1]});
		const uint256O4vQADh = await XenoFelixo5Y6dmg.balanceOf.call(addressqQd0sD4, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintJixgudp = BigInt("410")
		const uintPeCB6t = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintJixgudp, uintPeCB6t, {from: accounts[5]});
		const addressJymjXSe = accounts[5]
		const uint256BygRteu = await XenoFelixWo9Lic.balanceOf.call(addressJymjXSe, {from: accounts[1]});
		const stringOdqoFqG = await XenoFelixWo9Lic.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringOdqoFqG, "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h")
		assert.equal(uint256BygRteu, BigInt("18244218881755290085577126291384630180392698414889403971160949221609739124736"))
	});

	it('test for XenoFelix', async () => {
		const stringcB5ootD = "v6qJqAV8sjxzYM36HAbqeJTGG1AtOWaszhvkyIAIN7fSW8VcY9Rjvg2oyUgs6LaWPI6AGl"
		const stringcDGovAi = "BD9KOvLcGjReq27yPMG2T7GE8NpciPq4n9dCu5z5381i5rI83EfdyIDJx5EJ0IoRPEhGGNVdPDJmIDQ1zuciT1iUfgvdzO7ito"
		const uintYR5lv89 = BigInt("210")
		const XenoFelixHhNzvjT = await XenoFelix.new(stringcB5ootD, stringcDGovAi, uintYR5lv89, {from: accounts[4]});
		const uintBKvGBl = BigInt("1590")
		const addressqecFK7z = "0x0000000000000000000000000000000000000001"
		const uintnJeZVn = BigInt("1136")
		const addressqBx6Gyj = accounts[3]
		const uintCMUwc0j = BigInt("1840")
		const addressCsuyeXi = accounts[2]
		const boolIbjKPSK = await XenoFelixHhNzvjT.transfer.call(addressqecFK7z, uintBKvGBl, {from: accounts[1]});
		await XenoFelixHhNzvjT.whenNotPaused.call({from: accounts[3]});
		const boolnsK639k = await XenoFelixHhNzvjT.transfer.call(addressqBx6Gyj, uintnJeZVn, {from: accounts[2]});
		const boolKyHdv5q = await XenoFelixHhNzvjT.decreaseAllowance.call(addressCsuyeXi, uintCMUwc0j, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintVplh41L = BigInt("410")
		const uintFj29i5b = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintVplh41L, uintFj29i5b, {from: accounts[5]});
		const uintElBde1D = BigInt("1437")
		const addressENJFS9H = accounts[4]
		const addresssXNKLnY = accounts[6]
		const stringRvCiKsO = await XenoFelixWo9Lic.symbol.call({from: accounts[2]});
		const uint256EgRneS6 = await XenoFelixWo9Lic.totalSupply.call({from: accounts[4]});
//		const addressIf3pxl1 = await XenoFelixWo9Lic.burnFrom.call(addressENJFS9H, uintElBde1D, {from: accounts[5]});
//		const uint256BygRteu = await XenoFelixWo9Lic.balanceOf.call(addresssXNKLnY, {from: accounts[1]});

		assert.equal(stringRvCiKsO, "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt")
		assert.equal(uint256EgRneS6, BigInt("18244218881755290085577126291384630180392698414889403971160949221609739124736"))
		await expect(XenoFelixWo9Lic.burnFrom.call(addressENJFS9H, uintElBde1D, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintsKt4WGQ = BigInt("410")
		const uintqIlIgAL = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintsKt4WGQ, uintqIlIgAL, {from: accounts[5]});
		const addressIXMR3Ej = accounts[6]
		const uint256BygRteu = await XenoFelixWo9Lic.balanceOf.call(addressIXMR3Ej, {from: accounts[1]});
//		await XenoFelixWo9Lic.renouncePauser.call({from: accounts[2]});

		assert.equal(uint256BygRteu, BigInt("0"))
		await expect(XenoFelixWo9Lic.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintiNzeo1t = BigInt("410")
		const uinteBgIL1 = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintiNzeo1t, uinteBgIL1, {from: accounts[5]});
		const uintvzITtj1 = BigInt("401")
		const uintIdLSgTe = BigInt("380")
		const addressoIV4aJq = accounts[3]
		const addressciaCuBQ = accounts[4]
		const uintsLiMAw = BigInt("266")
		const addressJxzJnL5 = "0x0000000000000000000000000000000000000001"
		const addressQauyKPZ = accounts[0]
		const boololyOQuu = await XenoFelixWo9Lic.transferWithLock.call(addressoIV4aJq, uintIdLSgTe, uintvzITtj1, {from: accounts[5]});
		const boolnyGtrsY = await XenoFelixWo9Lic.isPauser.call(addressciaCuBQ, {from: accounts[4]});
//		const boolXAJel7 = await XenoFelixWo9Lic.transferFrom.call(addressQauyKPZ, addressJxzJnL5, uintsLiMAw, {from: accounts[2]});

		assert.equal(boolnyGtrsY, false)
		assert.equal(boololyOQuu, true)
		await expect(XenoFelixWo9Lic.transferFrom.call(addressQauyKPZ, addressJxzJnL5, uintsLiMAw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintLbqKrPZ = BigInt("410")
		const uintyg5ASgq = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintLbqKrPZ, uintyg5ASgq, {from: accounts[5]});
		const addresszx7KBrx = accounts[6]
		const uintCThW8Zn = BigInt("719")
		const addressOJ65kRx = accounts[3]
		const addressrkB4VQ2 = accounts[4]
		const addressG4YWE1S = accounts[0]
		const uint256BygRteu = await XenoFelixWo9Lic.balanceOf.call(addresszx7KBrx, {from: accounts[1]});
//		const boolaKswfCr = await XenoFelixWo9Lic.burnOwner.call(addressOJ65kRx, uintCThW8Zn, {from: accounts[5]});
//		const addressWtSuI7L = await XenoFelixWo9Lic.notFrozen.call(addressrkB4VQ2, {from: accounts[1]});
//		const addressus9vDvc = await XenoFelixWo9Lic.removePauser.call(addressG4YWE1S, {from: accounts[4]});
//		await XenoFelixWo9Lic.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256BygRteu, BigInt("0"))
		await expect(XenoFelixWo9Lic.burnOwner.call(addressOJ65kRx, uintCThW8Zn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringvPuys9E = "R79Ix7xqIbC5HqJHLUVPvqxtyH5QoSSlJV7y876Xpq0NjtMzgMqx0ss4EXZH9HFpUcMmOkWTSvCxzMHZOaISrD6rol"
		const stringgiWfGZ2 = "x15eTLSkjTCdR275hG8L3YcXlfTKB2CoLMx1M6DinDPEyiJHk"
		const uintDGRd9Nc = BigInt("221")
		const XenoFelixpZnmSoo = await XenoFelix.new(stringvPuys9E, stringgiWfGZ2, uintDGRd9Nc, {from: accounts[1]});
		const uintAkb8LK9 = BigInt("446")
		const addressD6JIWle = "0x0000000000000000000000000000000000000001"
		const addressEvA4MIb = accounts[4]
		const uintZctGnfy = BigInt("787")
		const addressJ4AioIH = "0x0000000000000000000000000000000000000001"
		const boolTcsx3rm = await XenoFelixpZnmSoo.approve.call(addressD6JIWle, uintAkb8LK9, {from: accounts[2]});
		await XenoFelixpZnmSoo.onlyNewOwner.call({from: accounts[2]});
		const addressaYnwWoG = await XenoFelixpZnmSoo.removePauser.call(addressEvA4MIb, {from: accounts[0]});
		await XenoFelixpZnmSoo.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolIRzzCSw = await XenoFelixpZnmSoo.burnOwner.call(addressJ4AioIH, uintZctGnfy, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uintrGqblup = BigInt("410")
		const uintFBOp3fd = BigInt("111")
		const XenoFelixWo9Lic = await XenoFelix.new(stringtFKM3gi, stringJXzNC9, uintrGqblup, uintFBOp3fd, {from: accounts[5]});
		const address73ftrI = accounts[5]
		const addressTLW1bJY = accounts[5]
		const uintC45Ci2q = BigInt("1550")
		const addressdXoGzPw = accounts[3]
		const uint256BygRteu = await XenoFelixWo9Lic.balanceOf.call(address73ftrI, {from: accounts[1]});
		const boolXVwkeKD = await XenoFelixWo9Lic.isOwner.call(addressTLW1bJY, {from: accounts[2]});
//		const boolHYYnB5 = await XenoFelixWo9Lic.decreaseAllowance.call(addressdXoGzPw, uintC45Ci2q, {from: accounts[1]});

		assert.equal(boolXVwkeKD, true)
		assert.equal(uint256BygRteu, BigInt("18244218881755290085577126291384630180392698414889403971160949221609739124736"))
		await expect(XenoFelixWo9Lic.decreaseAllowance.call(addressdXoGzPw, uintC45Ci2q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})