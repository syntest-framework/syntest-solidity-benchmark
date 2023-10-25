const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisqkFYXji = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfy9JK4 = BigInt("1689")
		const addresslRsp0MU = accounts[3]
		const uinteJnnARk = BigInt("284")
		const uintzGES5q9 = BigInt("332")
		const addressg8quzWL = accounts[4]
		await LedgisqkFYXji.lockState.call(addresslRsp0MU, uintfy9JK4, {from: accounts[4]});
		await LedgisqkFYXji.whenPaused.call({from: accounts[1]});
		await LedgisqkFYXji.whenNotFrozen.call({from: accounts[4]});
		const boolgPJZOf8 = await LedgisqkFYXji.transferWithLockAfter.call(addressg8quzWL, uintzGES5q9, uinteJnnARk, {from: accounts[0]});
		await LedgisqkFYXji.whenNotFrozen.call({from: accounts[4]});
	});

	it('test for Ledgis', async () => {
		const LedgisLw0j2ad = await Ledgis.new({from: accounts[1]});
		const uintjTet1l8 = BigInt("1124")
		const addressqGG5cK3 = accounts[1]
		const uintDt3Vb40 = BigInt("376")
		const addressGAwCfni = accounts[1]
		const uintzAqpdhi = BigInt("1657")
		const addressd7QECqb = accounts[0]
		const addressR5VVbMs = accounts[4]
		const uintIMpQIIw = BigInt("548")
		const addressAQUeojo = accounts[2]
		const addresstnglDKp = accounts[0]
		const uintYASXQZ1 = BigInt("1650")
		const uintWOxR6H8 = BigInt("1541")
		const addressR5vXMsW = accounts[4]
		const addresstXd1g4h = accounts[0]
//		const boolK4h6tzi = await LedgisLw0j2ad.mint.call(addressqGG5cK3, uintjTet1l8, {from: accounts[4]});
//		const boolzsU40HN = await LedgisLw0j2ad.increaseAllowance.call(addressGAwCfni, uintDt3Vb40, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcazAR5L = await LedgisLw0j2ad.transferFrom.call(addressR5VVbMs, addressd7QECqb, uintzAqpdhi, {from: accounts[1]});
//		const boolMPS177s = await LedgisLw0j2ad.transferFrom.call(addresstnglDKp, addressAQUeojo, uintIMpQIIw, {from: accounts[1]});
//		const boolf8XYKNI = await LedgisLw0j2ad.transferWithLockAfter.call(addressR5vXMsW, uintWOxR6H8, uintYASXQZ1, {from: accounts[3]});
//		const addressIts7gpm = await LedgisLw0j2ad.unfreeze.call(addresstXd1g4h, {from: accounts[4]});

		await expect(LedgisLw0j2ad.mint.call(addressqGG5cK3, uintjTet1l8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgismpPHQNI = await Ledgis.new({from: accounts[2]});
		const uintAOje7c = BigInt("1502")
		const addressLMFySDM = accounts[3]
		const uintABcGo6h = BigInt("1991")
		const addresstpV8rwt = accounts[4]
		const boolyAckuzt = await LedgismpPHQNI.approve.call(addressLMFySDM, uintAOje7c, {from: accounts[4]});
//		const boolkRFgXCT = await LedgismpPHQNI.transfer.call(addresstpV8rwt, uintABcGo6h, {from: accounts[1]});
//		await LedgismpPHQNI.whenNotFrozen.call({from: accounts[1]});

		assert.equal(boolyAckuzt, true)
		await expect(LedgismpPHQNI.transfer.call(addresstpV8rwt, uintABcGo6h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisVjLK7AA = await Ledgis.new({from: accounts[2]});
		const addressm8BtGIR = accounts[5]
		const uinteIWUP2F = BigInt("1442")
		const uintDvG9NGI = BigInt("863")
		const addressU2KHw9C = accounts[4]
		const addressFhsa792 = accounts[3]
		const uint256oak4SI = await LedgisVjLK7AA.currentTime.call({from: accounts[0]});
		const booltSW1GT = await LedgisVjLK7AA.isFrozen.call(addressm8BtGIR, {from: accounts[5]});
//		const boolZcMxY2J = await LedgisVjLK7AA.transferWithLockAfter.call(addressU2KHw9C, uintDvG9NGI, uinteIWUP2F, {from: accounts[0]});
//		const uint256hJ87tNC = await LedgisVjLK7AA.balanceOf.call(addressFhsa792, {from: accounts[5]});

		assert.equal(booltSW1GT, false)
		assert.equal(uint256oak4SI, BigInt("1630232935"))
		await expect(LedgisVjLK7AA.transferWithLockAfter.call(addressU2KHw9C, uintDvG9NGI, uinteIWUP2F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXoArlYM = await Ledgis.new({from: accounts[2]});
		const addressZNbcR6Q = accounts[2]
		const uint2562uXeDv = await LedgisXoArlYM.lockCount.call(addressZNbcR6Q, {from: accounts[4]});
		const uint256FqLYim2 = await LedgisXoArlYM.currentTime.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2562uXeDv, BigInt("0"))
		assert.equal(uint256FqLYim2, BigInt("1630232939"))
	});

	it('test for Ledgis', async () => {
		const LedgisznZEohn = await Ledgis.new({from: accounts[4]});
		const uintCmC8nd = BigInt("33")
		const addressXxaQlVM = accounts[4]
		const uintqS6khkY = BigInt("836")
		const addressq18osv4 = accounts[4]
		const uintK0Ezx5p = BigInt("1497")
		const uintxq1nOoS = BigInt("1503")
		const addressj9me8Z = accounts[2]
		const addressY82vQzO = accounts[4]
//		const boolrnqCsy5 = await LedgisznZEohn.decreaseAllowance.call(addressXxaQlVM, uintCmC8nd, {from: accounts[4]});
//		const boolI56Uf9t = await LedgisznZEohn.approve.call(addressq18osv4, uintqS6khkY, {from: accounts[1]});
//		const addressFncIUyK = await LedgisznZEohn.lock.call(addressj9me8Z, uintxq1nOoS, uintK0Ezx5p, {from: accounts[4]});
//		const addressYsH7ZK5 = await LedgisznZEohn.transferOwnership.call(addressY82vQzO, {from: accounts[3]});

		await expect(LedgisznZEohn.decreaseAllowance.call(addressXxaQlVM, uintCmC8nd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRubuAwD = await Ledgis.new({from: accounts[3]});
		const uintdew0c38 = BigInt("615")
		const uintE3cYJSI = BigInt("1660")
		const addressg6C2IZJ = "0x0000000000000000000000000000000000000001"
		const uintxYvoXZe = BigInt("1950")
		const uintWxTe3n = BigInt("1710")
		const addresszqiWcui = accounts[2]
//		const addresseas3Soz = await LedgisRubuAwD.lock.call(addressg6C2IZJ, uintE3cYJSI, uintdew0c38, {from: accounts[3]});
//		await LedgisRubuAwD.unpause.call({from: accounts[2]});
//		const boolKnLl5VE = await LedgisRubuAwD.transferWithLockAfter.call(addresszqiWcui, uintWxTe3n, uintxYvoXZe, {from: accounts[4]});
//		await LedgisRubuAwD.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisRubuAwD.lock.call(addressg6C2IZJ, uintE3cYJSI, uintdew0c38, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbzeQ2hC = await Ledgis.new({from: accounts[1]});
		const uintiYQNh27 = BigInt("715")
		const addressoveweqp = accounts[5]
		const uintXkWBkt = BigInt("1080")
		const addressvJmm6hN = accounts[4]
		const addressxbzLKYe = accounts[0]
		const uintAJ32ig = BigInt("1301")
		const addresscK1El8W = accounts[3]
//		await LedgisbzeQ2hC.lockState.call(addressoveweqp, uintiYQNh27, {from: accounts[4]});
//		const boolUA67jks = await LedgisbzeQ2hC.transferFrom.call(addressxbzLKYe, addressvJmm6hN, uintXkWBkt, {from: accounts[0]});
//		const booludlct1m = await LedgisbzeQ2hC.approve.call(addresscK1El8W, uintAJ32ig, {from: accounts[0]});
//		await LedgisbzeQ2hC.whenPaused.call({from: accounts[4]});

		await expect(LedgisbzeQ2hC.lockState.call(addressoveweqp, uintiYQNh27, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgismpPHQNI = await Ledgis.new({from: accounts[2]});
		const uintH0j1J9i = BigInt("1502")
		const addressZ4VntvY = accounts[3]
		const boolyAckuzt = await LedgismpPHQNI.approve.call(addressZ4VntvY, uintH0j1J9i, {from: accounts[4]});
//		await LedgismpPHQNI.whenNotFrozen.call({from: accounts[1]});

		assert.equal(boolyAckuzt, true)
		await expect(LedgismpPHQNI.whenNotFrozen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscRT4GH9 = await Ledgis.new({from: accounts[2]});
		const uintIPMSbHr = BigInt("1402")
		const address2Yz4Q9 = accounts[1]
		const uintVG9bCtW = BigInt("764")
		const addressIj1iIyj = accounts[1]
		const addressG7qLybR = accounts[1]
		const uint1rPElZ = BigInt("1999")
		const addressW7BYPMl = accounts[3]
//		await LedgiscRT4GH9.pause.call({from: accounts[2]});
//		const boollGe3lVc = await LedgiscRT4GH9.approve.call(address2Yz4Q9, uintIPMSbHr, {from: accounts[1]});
//		const bools4HFHsB = await LedgiscRT4GH9.transferFrom.call(addressG7qLybR, addressIj1iIyj, uintVG9bCtW, {from: "0x0000000000000000000000000000000000000001"});
//		const addressjqezco2 = await LedgiscRT4GH9.unlock.call(addressW7BYPMl, uint1rPElZ, {from: accounts[5]});

		await expect(LedgiscRT4GH9.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXoArlYM = await Ledgis.new({from: accounts[2]});
		const addressuDb9ZTJ = accounts[2]
		const addresswaWcR1a = accounts[1]
		const uint2562uXeDv = await LedgisXoArlYM.lockCount.call(addressuDb9ZTJ, {from: accounts[4]});
		const uint256VzooMTf = await LedgisXoArlYM.balanceOf.call(addresswaWcR1a, {from: accounts[3]});

		assert.equal(uint2562uXeDv, BigInt("0"))
		assert.equal(uint256VzooMTf, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgismpPHQNI = await Ledgis.new({from: accounts[2]});
		const uintULXSXNn = BigInt("1703")
		const address8dtwC2 = accounts[3]
		const uinttOGg9oY = BigInt("670")
		const addressH9PwgXh = accounts[4]
		const uintymt6aai = BigInt("1991")
		const addressWpCx5Qy = accounts[5]
//		const addressRYRzvr3 = await LedgismpPHQNI.unlock.call(address8dtwC2, uintULXSXNn, {from: accounts[2]});
//		const boolTlPxGZF = await LedgismpPHQNI.mint.call(addressH9PwgXh, uinttOGg9oY, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkRFgXCT = await LedgismpPHQNI.transfer.call(addressWpCx5Qy, uintymt6aai, {from: accounts[1]});

		await expect(LedgismpPHQNI.unlock.call(address8dtwC2, uintULXSXNn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXoArlYM = await Ledgis.new({from: accounts[2]});
		const addressvGEBYlI = accounts[2]
		const addressp5QhIq = accounts[1]
		const addressxTXbhpS = accounts[1]
		const addressMUaNpnD = accounts[1]
		const uint25699Eh1A = await LedgisXoArlYM.totalSupply.call({from: accounts[4]});
		const uint2562uXeDv = await LedgisXoArlYM.lockCount.call(addressvGEBYlI, {from: accounts[4]});
		const uint256CbMkSQ = await LedgisXoArlYM.allowance.call(addressxTXbhpS, addressp5QhIq, {from: accounts[2]});
		const uint256VzooMTf = await LedgisXoArlYM.balanceOf.call(addressMUaNpnD, {from: accounts[3]});

		assert.equal(uint2562uXeDv, BigInt("0"))
		assert.equal(uint25699Eh1A, BigInt("10000000000000"))
		assert.equal(uint256CbMkSQ, BigInt("0"))
		assert.equal(uint256VzooMTf, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisXoArlYM = await Ledgis.new({from: accounts[2]});
		const addressurfyLIk = accounts[2]
		const uint256VzooMTf = await LedgisXoArlYM.balanceOf.call(addressurfyLIk, {from: accounts[3]});
//		await LedgisXoArlYM.unpause.call({from: accounts[2]});

		assert.equal(uint256VzooMTf, BigInt("10000000000000"))
		await expect(LedgisXoArlYM.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgismpPHQNI = await Ledgis.new({from: accounts[2]});
		const uintbFpW0Z = BigInt("1502")
		const addressAl0tMD = accounts[3]
		const uintw7BaLD = BigInt("514")
		const addressk3tQe7A = accounts[2]
		const addressayUXong = accounts[3]
		const addressExlGLX = accounts[3]
		const boolyAckuzt = await LedgismpPHQNI.approve.call(addressAl0tMD, uintbFpW0Z, {from: accounts[4]});
		const boolB8TSYG = await LedgismpPHQNI.increaseAllowance.call(addressk3tQe7A, uintw7BaLD, {from: accounts[4]});
		const uint256onkMDP = await LedgismpPHQNI.allowance.call(addressExlGLX, addressayUXong, {from: accounts[1]});

		assert.equal(boolB8TSYG, true)
		assert.equal(boolyAckuzt, true)
		assert.equal(uint256onkMDP, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgiseDVrkOf = await Ledgis.new({from: accounts[0]});
		const addressJNiE28n = accounts[0]
		const addressA3P57kb = accounts[2]
		const uintLslY29F = BigInt("727")
		const addressh2moMOe = accounts[4]
		const uintCCSktTH = BigInt("1502")
		const addressbvmb0S8 = accounts[3]
		const uint256lCbne9K = await LedgiseDVrkOf.currentTime.call({from: accounts[1]});
		const uint256swX5gDS = await LedgiseDVrkOf.balanceOf.call(addressJNiE28n, {from: accounts[1]});
		const addressFBIvlY3 = await LedgiseDVrkOf.freeze.call(addressA3P57kb, {from: accounts[0]});
//		const boolUowCOtp = await LedgiseDVrkOf.transfer.call(addressh2moMOe, uintLslY29F, {from: accounts[4]});
//		const boolY6nDAEY = await LedgiseDVrkOf.increaseAllowance.call(addressbvmb0S8, uintCCSktTH, {from: accounts[3]});

		assert.equal(uint256lCbne9K, BigInt("1630232942"))
		assert.equal(uint256swX5gDS, BigInt("10000000000000"))
		await expect(LedgiseDVrkOf.transfer.call(addressh2moMOe, uintLslY29F, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisqBC0bIn = await Ledgis.new({from: accounts[3]});
		const uintFUAsM5 = BigInt("1872")
		const uintYzyScm = BigInt("116")
		const address0ISc6c = accounts[1]
		const addressVGyzAyj = accounts[5]
		const boolpcRuddu = await LedgisqBC0bIn.transferWithLockAfter.call(address0ISc6c, uintYzyScm, uintFUAsM5, {from: accounts[3]});
		const uint256R2A0OVM = await LedgisqBC0bIn.lockCount.call(addressVGyzAyj, {from: accounts[1]});

		assert.equal(boolpcRuddu, true)
		assert.equal(uint256R2A0OVM, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgismpPHQNI = await Ledgis.new({from: accounts[2]});
		const uintlLcEBEx = BigInt("1502")
		const addressbpkvpJb = accounts[4]
		const addressckGfaif = "0x0000000000000000000000000000000000000001"
		const uintMt6x649 = BigInt("1991")
		const addressFM1exEv = accounts[5]
		const uintlg4rwGS = BigInt("1607")
		const uintOXRJBa = BigInt("881")
		const addressLdFaqB0 = accounts[0]
//		await LedgismpPHQNI.renounceOwnership.call({from: accounts[2]});
//		const boolyAckuzt = await LedgismpPHQNI.approve.call(addressbpkvpJb, uintlLcEBEx, {from: accounts[4]});
//		const uint256iXIZEF = await LedgismpPHQNI.balanceOf.call(addressckGfaif, {from: accounts[1]});
//		await LedgismpPHQNI.whenPaused.call({from: accounts[2]});
//		const boolkRFgXCT = await LedgismpPHQNI.transfer.call(addressFM1exEv, uintMt6x649, {from: accounts[1]});
//		const addressaPoCNVx = await LedgismpPHQNI.lock.call(addressLdFaqB0, uintOXRJBa, uintlg4rwGS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgismpPHQNI.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgismpPHQNI = await Ledgis.new({from: accounts[2]});
		const addresszYVRT8 = accounts[3]
		const uintbpzyb3B = BigInt("1699")
		const addressKxs1Hxc = accounts[4]
		const uintu1Rd51e = BigInt("2000")
		const addressID21G1k = accounts[5]
		const uintFlvVDfp = BigInt("1184")
		const addressZKHHGmE = accounts[5]
		const addressnyjfXbf = await LedgismpPHQNI.unfreeze.call(addresszYVRT8, {from: accounts[2]});
//		const addressRYRzvr3 = await LedgismpPHQNI.unlock.call(addressKxs1Hxc, uintbpzyb3B, {from: accounts[2]});
//		const boolkRFgXCT = await LedgismpPHQNI.transfer.call(addressID21G1k, uintu1Rd51e, {from: accounts[1]});
//		const addressiPznzDE = await LedgismpPHQNI.burn.call(addressZKHHGmE, uintFlvVDfp, {from: accounts[2]});

		await expect(LedgismpPHQNI.unlock.call(addressKxs1Hxc, uintbpzyb3B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgismpPHQNI = await Ledgis.new({from: accounts[2]});
		const uintNo8Rxj0 = BigInt("1596")
		const uintHdx4VWD = BigInt("1074")
		const addresszt14np8 = accounts[1]
		const uinttX8VFl = BigInt("1991")
		const addressuIkHsNg = accounts[4]
		const boolHnfwNdE = await LedgismpPHQNI.transferWithLock.call(addresszt14np8, uintHdx4VWD, uintNo8Rxj0, {from: accounts[2]});
//		const boolkRFgXCT = await LedgismpPHQNI.transfer.call(addressuIkHsNg, uinttX8VFl, {from: accounts[1]});

		assert.equal(boolHnfwNdE, true)
		await expect(LedgismpPHQNI.transfer.call(addressuIkHsNg, uinttX8VFl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiseDVrkOf = await Ledgis.new({from: accounts[0]});
		const addressXxegPUE = accounts[0]
		const addressVcUfK7d = accounts[4]
		const addresstCvhOxA = accounts[5]
		const uintdHyult6 = BigInt("1151")
		const addressE4bVRzy = accounts[3]
		const uintl7TFeSQ = BigInt("727")
		const addressQnPRP48 = accounts[4]
		const uintQ5pSoNP = BigInt("1502")
		const addressiatXIft = accounts[3]
		const uint256lCbne9K = await LedgiseDVrkOf.currentTime.call({from: accounts[1]});
		const uint256swX5gDS = await LedgiseDVrkOf.balanceOf.call(addressXxegPUE, {from: accounts[1]});
		const uint256YecAe5n = await LedgiseDVrkOf.allowance.call(addresstCvhOxA, addressVcUfK7d, {from: accounts[3]});
		const uint256ppkMnJ = await LedgiseDVrkOf.afterTime.call(uintdHyult6, {from: accounts[3]});
		const addressFBIvlY3 = await LedgiseDVrkOf.freeze.call(addressE4bVRzy, {from: accounts[0]});
//		const boolUowCOtp = await LedgiseDVrkOf.transfer.call(addressQnPRP48, uintl7TFeSQ, {from: accounts[4]});
//		const boolY6nDAEY = await LedgiseDVrkOf.increaseAllowance.call(addressiatXIft, uintQ5pSoNP, {from: accounts[3]});

		assert.equal(uint256YecAe5n, BigInt("0"))
		assert.equal(uint256lCbne9K, BigInt("1630232947"))
		assert.equal(uint256ppkMnJ, BigInt("1630234098"))
		assert.equal(uint256swX5gDS, BigInt("10000000000000"))
		await expect(LedgiseDVrkOf.transfer.call(addressQnPRP48, uintl7TFeSQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgismpPHQNI = await Ledgis.new({from: accounts[2]});
		const uintfeX1Yve = BigInt("455")
		const uintCpaUZto = BigInt("792")
		const addressJ6EVINf = accounts[2]
		const uintCjQtZwx = BigInt("1703")
		const addressOjFUMCF = accounts[3]
		const uintxmEksJV = BigInt("1974")
		const addressR273Rq = accounts[5]
		const uintKRAJDSl = BigInt("1541")
		const uintjT3G9h = BigInt("1890")
		const addressDsf2HBC = accounts[2]
		const uintYRheHI = BigInt("2001")
		const addressye4F49 = accounts[5]
		const uint7KXp5g = BigInt("1262")
		const addressxtDa9rF = accounts[4]
		const addressR6c4miN = await LedgismpPHQNI.lockAfter.call(addressJ6EVINf, uintCpaUZto, uintfeX1Yve, {from: accounts[2]});
//		const addressRYRzvr3 = await LedgismpPHQNI.unlock.call(addressOjFUMCF, uintCjQtZwx, {from: accounts[2]});
//		const boolzOEJbx = await LedgismpPHQNI.approve.call(addressR273Rq, uintxmEksJV, {from: accounts[1]});
//		await LedgismpPHQNI.onlyOwner.call({from: accounts[3]});
//		const addressYPeaHuc = await LedgismpPHQNI.lockAfter.call(addressDsf2HBC, uintjT3G9h, uintKRAJDSl, {from: accounts[0]});
//		const boolkRFgXCT = await LedgismpPHQNI.transfer.call(addressye4F49, uintYRheHI, {from: accounts[1]});
//		const boolNZyj1vK = await LedgismpPHQNI.approve.call(addressxtDa9rF, uint7KXp5g, {from: accounts[0]});

		await expect(LedgismpPHQNI.unlock.call(addressOjFUMCF, uintCjQtZwx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgislxKSlOl = await Ledgis.new({from: accounts[4]});
		const addresszk2BDj1 = accounts[3]
		const addressxTDx26C = accounts[1]
		const addressVDWjxm = accounts[2]
		const uintMzIxD2e = BigInt("993")
		const addressKWsHolU = accounts[1]
		const uintPjfobLZ = BigInt("197")
		const uintHiFkHyI = BigInt("651")
		const addressUOgZFIC = accounts[2]
		const uint256CDaEU8J = await LedgislxKSlOl.balanceOf.call(addresszk2BDj1, {from: accounts[2]});
		const uint256wbDtB8h = await LedgislxKSlOl.lockCount.call(addressxTDx26C, {from: "0x0000000000000000000000000000000000000001"});
		const boolnuI66Ly = await LedgislxKSlOl.isFrozen.call(addressVDWjxm, {from: accounts[1]});
		const boolzBg6ROv = await LedgislxKSlOl.mint.call(addressKWsHolU, uintMzIxD2e, {from: accounts[4]});
//		const addressPORb9Mn = await LedgislxKSlOl.lockAfter.call(addressUOgZFIC, uintHiFkHyI, uintPjfobLZ, {from: accounts[0]});

		assert.equal(boolnuI66Ly, false)
		assert.equal(boolzBg6ROv, true)
		assert.equal(uint256CDaEU8J, BigInt("0"))
		assert.equal(uint256wbDtB8h, BigInt("0"))
		await expect(LedgislxKSlOl.lockAfter.call(addressUOgZFIC, uintHiFkHyI, uintPjfobLZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisfOADFnm = await Ledgis.new({from: accounts[4]});
		const addressc8WDV1M = accounts[4]
		const uintwjid13 = BigInt("262")
		const addressRT7wbrm = accounts[1]
		const uintMD1jeI = BigInt("771")
		const addresshMZkGm7 = accounts[2]
		const uintuGrmd48 = BigInt("1462")
		const addressN2H7qZ = accounts[1]
		const addressyG8NnUp = accounts[4]
		const addressvxrnjMn = accounts[4]
		const addressg7H0igU = await LedgisfOADFnm.transferOwnership.call(addressc8WDV1M, {from: accounts[4]});
//		const addressofPgNbQ = await LedgisfOADFnm.burn.call(addressRT7wbrm, uintwjid13, {from: accounts[1]});
//		const booluEMbYnm = await LedgisfOADFnm.transfer.call(addresshMZkGm7, uintMD1jeI, {from: accounts[3]});
//		const boolK8R8Fm = await LedgisfOADFnm.transferFrom.call(addressyG8NnUp, addressN2H7qZ, uintuGrmd48, {from: accounts[5]});
//		await LedgisfOADFnm.renounceOwnership.call({from: accounts[2]});
//		const boolbGp5fy = await LedgisfOADFnm.isFrozen.call(addressvxrnjMn, {from: accounts[2]});

		await expect(LedgisfOADFnm.burn.call(addressRT7wbrm, uintwjid13, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgismpPHQNI = await Ledgis.new({from: accounts[2]});
		const uintH7SXHB6 = BigInt("1483")
		const addressyRA2RuA = accounts[1]
		const address7T8bqn = accounts[3]
		const addressNY4QAJW = accounts[2]
		const addressHhU0k3o = accounts[3]
		const uintl2qdLTa = BigInt("223")
		const addresstrVbvCJ = accounts[4]
		const uintH3ArmNe = BigInt("64")
		const addressPrGY76i = accounts[4]
		const uinthAwSUA = BigInt("1115")
		const addressT9sGva8 = accounts[1]
		const addressQwLjIno = accounts[2]
		const uintmaaNVuo = BigInt("990")
		const uintCcNBYU6 = BigInt("1981")
		const addressFfrFhV4 = accounts[3]
		const booljXyuM8H = await LedgismpPHQNI.transfer.call(addressyRA2RuA, uintH7SXHB6, {from: accounts[2]});
		const uint256T2ReB3y = await LedgismpPHQNI.balanceOf.call(address7T8bqn, {from: accounts[0]});
		const uint256DA8G9ia = await LedgismpPHQNI.allowance.call(addressHhU0k3o, addressNY4QAJW, {from: accounts[2]});
//		const addressLl4saO = await LedgismpPHQNI.burn.call(addresstrVbvCJ, uintl2qdLTa, {from: accounts[2]});
//		const addressRYRzvr3 = await LedgismpPHQNI.unlock.call(addressPrGY76i, uintH3ArmNe, {from: accounts[2]});
//		const addresslTSaegn = await LedgismpPHQNI.burn.call(addressT9sGva8, uinthAwSUA, {from: accounts[3]});
//		const uint256B7CWPkb = await LedgismpPHQNI.lockCount.call(addressQwLjIno, {from: accounts[0]});
//		const addressutvFLkV = await LedgismpPHQNI.lockAfter.call(addressFfrFhV4, uintCcNBYU6, uintmaaNVuo, {from: accounts[1]});

		assert.equal(booljXyuM8H, true)
		assert.equal(uint256DA8G9ia, BigInt("0"))
		assert.equal(uint256T2ReB3y, BigInt("0"))
		await expect(LedgismpPHQNI.burn.call(addresstrVbvCJ, uintl2qdLTa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXoArlYM = await Ledgis.new({from: accounts[2]});
		const uints0H2a1F = BigInt("1704")
		const addressFmUQYkF = accounts[2]
		const addressptVJaA6 = accounts[1]
		const addressRuu7ocP = await LedgisXoArlYM.burn.call(addressFmUQYkF, uints0H2a1F, {from: accounts[2]});
		const uint256VzooMTf = await LedgisXoArlYM.balanceOf.call(addressptVJaA6, {from: accounts[3]});

		assert.equal(uint256VzooMTf, BigInt("0"))
	});
})