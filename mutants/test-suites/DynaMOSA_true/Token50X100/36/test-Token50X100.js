const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100K89WVYP = await Token50X100.new({from: accounts[3]});
		const addressYEPhSA = accounts[3]
		const uintamAReIz = BigInt("1154")
		const addresshxGKKtR = accounts[2]
		const uintNwa1wz = BigInt("1684")
		const addressNgmO9Oq = accounts[3]
		const addressw9SMKE2 = accounts[4]
		const addressjHPKXTA = accounts[5]
		const boolYvQivq7 = true
		const addressYPPlaFk = accounts[0]
//		await Token50X100K89WVYP.setTokenContract.call(addressYEPhSA, {from: accounts[0]});
//		const boolAWehu9D = await Token50X100K89WVYP.transfer.call(addresshxGKKtR, uintamAReIz, {from: accounts[3]});
//		const boolRQRwgYS = await Token50X100K89WVYP.transfer.call(addressNgmO9Oq, uintNwa1wz, {from: accounts[3]});
//		await Token50X100K89WVYP.onlyOwner.call({from: accounts[4]});
//		await Token50X100K89WVYP.setLinkingAddresses.call(addressjHPKXTA, addressw9SMKE2, {from: accounts[5]});
//		await Token50X100K89WVYP.setWhiteListReceivers.call(addressYPPlaFk, boolYvQivq7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100K89WVYP.setTokenContract.call(addressYEPhSA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100EV5AzaY = await Token50X100.new({from: accounts[3]});
		const uintcEKp0Tu = BigInt("1100")
		const addressuwmq1or = accounts[0]
		const uintWLw57Ef = BigInt("105")
		const addressmMavNlk = accounts[4]
		const addressIifkre = accounts[3]
		const boolCVqyDLQ = false
		const addressNDo5PVH = accounts[4]
		const booltnizkZt = await Token50X100EV5AzaY.approve.call(addressuwmq1or, uintcEKp0Tu, {from: accounts[3]});
//		const boollEnxkl = await Token50X100EV5AzaY.transferFrom.call(addressIifkre, addressmMavNlk, uintWLw57Ef, {from: accounts[0]});
//		await Token50X100EV5AzaY.setWhiteListReceivers.call(addressNDo5PVH, boolCVqyDLQ, {from: accounts[2]});

		assert.equal(booltnizkZt, true)
		await expect(Token50X100EV5AzaY.transferFrom.call(addressIifkre, addressmMavNlk, uintWLw57Ef, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100MBJvrY = await Token50X100.new({from: accounts[0]});
		const uintAUPcgK = BigInt("407")
		const addressjHlfYzW = accounts[1]
		const uintJX722hC = BigInt("198")
//		await Token50X100MBJvrY.onlyOwner.call({from: accounts[0]});
//		const boolGjxFj6r = await Token50X100MBJvrY.increaseApproval.call(addressjHlfYzW, uintAUPcgK, {from: accounts[1]});
//		await Token50X100MBJvrY.lock.call({from: accounts[0]});
//		const boolYrLNF5W = await Token50X100MBJvrY.setMaxLockPeriod.call(uintJX722hC, {from: accounts[0]});

		await expect(Token50X100MBJvrY.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eoPLG5s = await Token50X100.new({from: accounts[1]});
		const addressQOuzN6j = accounts[0]
		const addresskxawd6v = accounts[4]
		const uintXqsJCZY = BigInt("196")
		const addressCnmzDQ = accounts[2]
		const uintzviekif = BigInt("1856")
		const addresszUxALJM = accounts[1]
		const boolER9T4SF = true
		const addressIwPPYB = accounts[3]
		const uintH5B6G6V = BigInt("879")
		const addressWKhGYqe = accounts[1]
		const addressY5KKBxH = accounts[4]
		const uint256XTyrygE = await Token50X100eoPLG5s.allowance.call(addresskxawd6v, addressQOuzN6j, {from: accounts[3]});
		const boolcwqbWAz = await Token50X100eoPLG5s.decreaseApproval.call(addressCnmzDQ, uintXqsJCZY, {from: accounts[1]});
//		const boolr8ajIgJ = await Token50X100eoPLG5s.transfer.call(addresszUxALJM, uintzviekif, {from: accounts[3]});
//		await Token50X100eoPLG5s.setWhiteList.call(addressIwPPYB, boolER9T4SF, {from: "0x0000000000000000000000000000000000000001"});
//		const boolvP7UkXD = await Token50X100eoPLG5s.issueTokens.call(addressY5KKBxH, addressWKhGYqe, uintH5B6G6V, {from: accounts[5]});

		assert.equal(boolcwqbWAz, true)
		assert.equal(uint256XTyrygE, BigInt("0"))
		await expect(Token50X100eoPLG5s.transfer.call(addresszUxALJM, uintzviekif, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100EV5AzaY = await Token50X100.new({from: accounts[3]});
		const uintwF5ByhK = BigInt("1100")
		const addressNtFoWA = accounts[0]
		const uintFArYRg = BigInt("742")
		const uintYfzWQVh = BigInt("1714")
		const addresstAsMvb = "0x0000000000000000000000000000000000000001"
		const uintlTyYfN = BigInt("105")
		const addressYWsUNN = accounts[5]
		const addressyfQr58E = accounts[3]
		const boolCVqyDLQ = false
		const addressMCQhXq = accounts[4]
		const booltnizkZt = await Token50X100EV5AzaY.approve.call(addressNtFoWA, uintwF5ByhK, {from: accounts[3]});
		const bool2HzlTA = await Token50X100EV5AzaY.setMaxLockPeriod.call(uintFArYRg, {from: accounts[3]});
		const boolr0FeFq = await Token50X100EV5AzaY.decreaseApproval.call(addresstAsMvb, uintYfzWQVh, {from: accounts[0]});
//		const boollEnxkl = await Token50X100EV5AzaY.transferFrom.call(addressyfQr58E, addressYWsUNN, uintlTyYfN, {from: accounts[0]});
//		await Token50X100EV5AzaY.setWhiteListReceivers.call(addressMCQhXq, boolCVqyDLQ, {from: accounts[2]});

		assert.equal(bool2HzlTA, false)
		assert.equal(boolr0FeFq, true)
		assert.equal(booltnizkZt, true)
		await expect(Token50X100EV5AzaY.transferFrom.call(addressyfQr58E, addressYWsUNN, uintlTyYfN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yHT2VK = await Token50X100.new({from: accounts[5]});
		const uintpAnmw0Z = BigInt("169")
		const stringfNQBMm5 = "FE7O3WfylqFvHLcbDvgTm4g9QnHHyMkhLlcRsIpzonsxeT5rUmbKeqqkruzplIBwJ3859LMhbDAyNU"
		const stringfYvguA = "WqVclkerWRIGhSdRNpjsB9Mo6nwoUR93tPMLtrJoj6wsWgDdstS9B5fMNU6r5oWR1SnY4M7CwlZxONimwl9"
		const boolQFB3Gnx = false
		const addressxrnMxLA = accounts[4]
		const boolq7MBznv = await Token50X100yHT2VK.setSymbolNameDecimals.call(stringfYvguA, stringfNQBMm5, uintpAnmw0Z, {from: accounts[5]});
//		await Token50X100yHT2VK.release.call({from: accounts[1]});
//		await Token50X100yHT2VK.lock.call({from: accounts[1]});
//		await Token50X100yHT2VK.setWhiteListReceivers.call(addressxrnMxLA, boolQFB3Gnx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100yHT2VK.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100EV5AzaY = await Token50X100.new({from: accounts[3]});
		const uintcETsGvt = BigInt("954")
		const addressCzufym9 = accounts[1]
		const addressDkBrZ6I = accounts[2]
		const uintINfAfDt = BigInt("1714")
		const addressiM0AvIo = "0x0000000000000000000000000000000000000001"
		const uintszY8EC = BigInt("640")
		const uinttdOxyvO = BigInt("419")
		const uintpQZEln = BigInt("105")
		const addressBGzP7E = accounts[6]
		const addressGf4V9PA = accounts[3]
		const boolCVqyDLQ = false
		const addressvMVOels = accounts[4]
		const bool2HzlTA = await Token50X100EV5AzaY.setMaxLockPeriod.call(uintcETsGvt, {from: accounts[3]});
		const uint256pCsXwSs = await Token50X100EV5AzaY.allowance.call(addressDkBrZ6I, addressCzufym9, {from: accounts[4]});
		const boolr0FeFq = await Token50X100EV5AzaY.decreaseApproval.call(addressiM0AvIo, uintINfAfDt, {from: accounts[0]});
//		const boolEUNlvm = await Token50X100EV5AzaY.safeLock.call(uinttdOxyvO, uintszY8EC, {from: accounts[3]});
//		const boollEnxkl = await Token50X100EV5AzaY.transferFrom.call(addressGf4V9PA, addressBGzP7E, uintpQZEln, {from: accounts[0]});
//		await Token50X100EV5AzaY.setWhiteListReceivers.call(addressvMVOels, boolCVqyDLQ, {from: accounts[2]});

		assert.equal(bool2HzlTA, false)
		assert.equal(boolr0FeFq, true)
		assert.equal(uint256pCsXwSs, BigInt("0"))
		await expect(Token50X100EV5AzaY.safeLock.call(uinttdOxyvO, uintszY8EC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100EV5AzaY = await Token50X100.new({from: accounts[3]});
		const uinta2OP7K = BigInt("954")
		const addresszhYVg4o = accounts[1]
		const addressxyt9x9d = accounts[2]
		const uintEinZxA0 = BigInt("1714")
		const addressRawwaSl = "0x0000000000000000000000000000000000000001"
		const uinta6yD1lL = BigInt("109")
		const addressENvGzr = accounts[6]
		const addressApAW75 = accounts[3]
		const boolCVqyDLQ = false
		const addressy2p3hNb = accounts[4]
		const addresscmVDGhY = accounts[0]
		const addressqgLyufI = "0x0000000000000000000000000000000000000001"
		const bool2HzlTA = await Token50X100EV5AzaY.setMaxLockPeriod.call(uinta2OP7K, {from: accounts[3]});
		const uint256pCsXwSs = await Token50X100EV5AzaY.allowance.call(addressxyt9x9d, addresszhYVg4o, {from: accounts[4]});
//		await Token50X100EV5AzaY.lock.call({from: accounts[3]});
//		const boolr0FeFq = await Token50X100EV5AzaY.decreaseApproval.call(addressRawwaSl, uintEinZxA0, {from: accounts[0]});
//		const boollEnxkl = await Token50X100EV5AzaY.transferFrom.call(addressApAW75, addressENvGzr, uinta6yD1lL, {from: accounts[0]});
//		await Token50X100EV5AzaY.setWhiteListReceivers.call(addressy2p3hNb, boolCVqyDLQ, {from: accounts[2]});
//		await Token50X100EV5AzaY.setLinkingAddresses.call(addressqgLyufI, addresscmVDGhY, {from: accounts[4]});

		assert.equal(bool2HzlTA, false)
		assert.equal(uint256pCsXwSs, BigInt("0"))
		await expect(Token50X100EV5AzaY.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yHT2VK = await Token50X100.new({from: accounts[5]});
		const uintx0oHGZn = BigInt("206")
		const addressozIP5fw = accounts[2]
		const uintvVXB6o6 = BigInt("884")
		const uintSzR9RI = BigInt("1632")
		const addressFYRqPgg = accounts[0]
		const addressATrGljy = accounts[2]
		const boolr1jtIK0 = await Token50X100yHT2VK.approve.call(addressozIP5fw, uintx0oHGZn, {from: accounts[2]});
//		const boolloaBlpg = await Token50X100yHT2VK._transfer.call(addressATrGljy, addressFYRqPgg, uintSzR9RI, uintvVXB6o6, {from: accounts[5]});
//		await Token50X100yHT2VK.lock.call({from: accounts[1]});

		assert.equal(boolr1jtIK0, true)
		await expect(Token50X100yHT2VK._transfer.call(addressATrGljy, addressFYRqPgg, uintSzR9RI, uintvVXB6o6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eoPLG5s = await Token50X100.new({from: accounts[1]});
		const uintlsHghU8 = BigInt("178")
		const addresszVJtqhv = accounts[2]
		const uintgLlPqm6 = BigInt("1856")
		const addressvoAB0d = accounts[1]
		const uintsSUBb1L = BigInt("1389")
		const uintPnTk5QD = BigInt("1860")
		const addresscoJnbH5 = "0x0000000000000000000000000000000000000001"
		const uintZZxK0dJ = BigInt("1553")
		const address5kegZ6 = accounts[4]
		const uintkaOGFvQ = BigInt("879")
		const addressCyuMUgu = accounts[1]
		const addressy3G6JBh = accounts[4]
		const boolcwqbWAz = await Token50X100eoPLG5s.decreaseApproval.call(addresszVJtqhv, uintlsHghU8, {from: accounts[1]});
		const uint256SYn8QbA = await Token50X100eoPLG5s.totalSupply.call({from: accounts[4]});
//		const boolr8ajIgJ = await Token50X100eoPLG5s.transfer.call(addressvoAB0d, uintgLlPqm6, {from: accounts[3]});
//		const boolsSIbHk = await Token50X100eoPLG5s.setVesting.call(addresscoJnbH5, uintPnTk5QD, uintsSUBb1L, {from: accounts[5]});
//		const boolZOlcYbZ = await Token50X100eoPLG5s.decreaseApproval.call(address5kegZ6, uintZZxK0dJ, {from: accounts[2]});
//		const boolvP7UkXD = await Token50X100eoPLG5s.issueTokens.call(addressy3G6JBh, addressCyuMUgu, uintkaOGFvQ, {from: accounts[5]});

		assert.equal(boolcwqbWAz, true)
		assert.equal(uint256SYn8QbA, BigInt("4714285714285710"))
		await expect(Token50X100eoPLG5s.transfer.call(addressvoAB0d, uintgLlPqm6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Aum5Xwl = await Token50X100.new({from: accounts[2]});
		const uintnsiacc3 = BigInt("1450")
		const addressJP5Yd1E = accounts[3]
		const uintNIFFyJv = BigInt("1594")
		const addressKUw0b70 = accounts[4]
		const uintfn9XHpv = BigInt("108")
		const addressJm01OP0 = accounts[1]
		const boolZb83UW5 = false
		const addressjNzKGWe = accounts[2]
		const booljfX4arf = await Token50X100Aum5Xwl.increaseApproval.call(addressJP5Yd1E, uintnsiacc3, {from: accounts[2]});
//		const booltB2sWD = await Token50X100Aum5Xwl.transfer.call(addressKUw0b70, uintNIFFyJv, {from: accounts[2]});
//		const boolY1D9YgF = await Token50X100Aum5Xwl.transfer.call(addressJm01OP0, uintfn9XHpv, {from: accounts[4]});
//		await Token50X100Aum5Xwl.setWhiteList.call(addressjNzKGWe, boolZb83UW5, {from: accounts[4]});

		assert.equal(booljfX4arf, true)
		await expect(Token50X100Aum5Xwl.transfer.call(addressKUw0b70, uintNIFFyJv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Aum5Xwl = await Token50X100.new({from: accounts[2]});
		const addressBqLLqVn = accounts[4]
		const uintC2zEjSL = BigInt("1618")
		const addresswkBJRm5 = accounts[4]
		const boolZb83UW5 = false
		const addressIW089CR = accounts[2]
		const uint256bNZiInp = await Token50X100Aum5Xwl.balanceOf.call(addressBqLLqVn, {from: accounts[0]});
//		const booltB2sWD = await Token50X100Aum5Xwl.transfer.call(addresswkBJRm5, uintC2zEjSL, {from: accounts[2]});
//		await Token50X100Aum5Xwl.setWhiteList.call(addressIW089CR, boolZb83UW5, {from: accounts[4]});

		assert.equal(uint256bNZiInp, BigInt("0"))
		await expect(Token50X100Aum5Xwl.transfer.call(addresswkBJRm5, uintC2zEjSL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100L3xAJIz = await Token50X100.new({from: accounts[0]});
		const uintZMEqsrh = BigInt("928")
		const uintlcTHTkz = BigInt("553")
		const addressY8QE5vj = "0x0000000000000000000000000000000000000000"
		const addressPvsaLBI = accounts[4]
		const boolOTFbskd = await Token50X100L3xAJIz.setMaxLockPeriod.call(uintZMEqsrh, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIHvtVxa = await Token50X100L3xAJIz.transfer.call(addressY8QE5vj, uintlcTHTkz, {from: accounts[3]});
//		const addressxfdYDtz = await Token50X100L3xAJIz.setOriginalContract.call(addressPvsaLBI, {from: accounts[2]});

		assert.equal(boolOTFbskd, false)
		await expect(Token50X100L3xAJIz.transfer.call(addressY8QE5vj, uintlcTHTkz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100EV5AzaY = await Token50X100.new({from: accounts[3]});
		const addressPbSxT5q = accounts[1]
		const address1f5v8f = accounts[2]
		const boolxOm0VXW = false
		const addressl73rWso = accounts[3]
		const uintFvDVdBv = BigInt("401")
		const addressUGsVjQ = accounts[0]
		const uintKsnEeLs = BigInt("94")
		const addressLFnZn3F = "0x0000000000000000000000000000000000000000"
		const uintZoIdr2L = BigInt("640")
		const uintVuMjgSz = BigInt("419")
		const uintSD5R5hP = BigInt("105")
		const address1pIpOm = accounts[6]
		const addressq3BQc4 = accounts[3]
		const uint256pCsXwSs = await Token50X100EV5AzaY.allowance.call(address1f5v8f, addressPbSxT5q, {from: accounts[4]});
//		await Token50X100EV5AzaY.setWhiteListReceivers.call(addressl73rWso, boolxOm0VXW, {from: accounts[3]});
//		const boolnwxOszz = await Token50X100EV5AzaY.transfer.call(addressUGsVjQ, uintFvDVdBv, {from: accounts[2]});
//		const boolr0FeFq = await Token50X100EV5AzaY.decreaseApproval.call(addressLFnZn3F, uintKsnEeLs, {from: accounts[0]});
//		const boolEUNlvm = await Token50X100EV5AzaY.safeLock.call(uintVuMjgSz, uintZoIdr2L, {from: accounts[3]});
//		const boollEnxkl = await Token50X100EV5AzaY.transferFrom.call(addressq3BQc4, address1pIpOm, uintSD5R5hP, {from: accounts[0]});

		assert.equal(uint256pCsXwSs, BigInt("0"))
		await expect(Token50X100EV5AzaY.setWhiteListReceivers.call(addressl73rWso, boolxOm0VXW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yHT2VK = await Token50X100.new({from: accounts[5]});
		const uintY9h8is5 = BigInt("496")
		const addressOr4w2q = accounts[2]
		const addresseP9W3x8 = accounts[2]
		const addressacyKHzV = accounts[2]
		const uintinCjAJs = BigInt("884")
		const uintxLdhjev = BigInt("1632")
		const addresspinBz82 = accounts[0]
		const addressr6iMAd0 = accounts[2]
		const boolr1jtIK0 = await Token50X100yHT2VK.approve.call(addressOr4w2q, uintY9h8is5, {from: accounts[2]});
//		await Token50X100yHT2VK.setLinkingAddresses.call(addressacyKHzV, addresseP9W3x8, {from: accounts[5]});
//		const boolloaBlpg = await Token50X100yHT2VK._transfer.call(addressr6iMAd0, addresspinBz82, uintxLdhjev, uintinCjAJs, {from: accounts[5]});

		assert.equal(boolr1jtIK0, true)
		await expect(Token50X100yHT2VK.setLinkingAddresses.call(addressacyKHzV, addresseP9W3x8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100L3xAJIz = await Token50X100.new({from: accounts[0]});
		const uintoCePpm5 = BigInt("928")
		const uintoLZMPUN = BigInt("553")
		const addressFfgTKuS = "0x0000000000000000000000000000000000000000"
		const address87PjbR = accounts[4]
		const address0niFZh = accounts[0]
		const boolOTFbskd = await Token50X100L3xAJIz.setMaxLockPeriod.call(uintoCePpm5, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100L3xAJIz.release.call({from: accounts[0]});
//		const boolIHvtVxa = await Token50X100L3xAJIz.transfer.call(addressFfgTKuS, uintoLZMPUN, {from: accounts[3]});
//		const addressxfdYDtz = await Token50X100L3xAJIz.setOriginalContract.call(address87PjbR, {from: accounts[2]});
//		await Token50X100L3xAJIz.setTokenContract.call(address0niFZh, {from: accounts[3]});

		assert.equal(boolOTFbskd, false)
		await expect(Token50X100L3xAJIz.release.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100L3xAJIz = await Token50X100.new({from: accounts[0]});
		const uintKDSGGre = BigInt("928")
		const uinta6gOLU = BigInt("553")
		const addressqBzWuUY = "0x00000000000000000000000000000000000000-1"
		const uintGdhv6qj = BigInt("1727")
		const addressiZ7ADgV = accounts[1]
		const uintSFYIPLc = BigInt("180")
		const addressEHOHFtI = accounts[4]
		const boolOTFbskd = await Token50X100L3xAJIz.setMaxLockPeriod.call(uintKDSGGre, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIHvtVxa = await Token50X100L3xAJIz.transfer.call(addressqBzWuUY, uinta6gOLU, {from: accounts[3]});
//		const boolUwsznSm = await Token50X100L3xAJIz.decreaseApproval.call(addressiZ7ADgV, uintGdhv6qj, {from: accounts[1]});
//		const boolDJxiHu9 = await Token50X100L3xAJIz.setMaxLockPeriod.call(uintSFYIPLc, {from: accounts[5]});
//		const addressxfdYDtz = await Token50X100L3xAJIz.setOriginalContract.call(addressEHOHFtI, {from: accounts[2]});

		assert.equal(boolOTFbskd, false)
		await expect(Token50X100L3xAJIz.transfer.call(addressqBzWuUY, uinta6gOLU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YifYed1 = await Token50X100.new({from: accounts[4]});
		const addressbsmmwkm = "0x0000000000000000000000000000000000000001"
		const uintpgS4iDx = BigInt("1715")
		const addressngBDO92 = accounts[3]
		const uintdBzXEX = BigInt("487")
		const uintRdP7Pc = BigInt("56")
		const addressim1nb2k = accounts[0]
		const addressYmhMRxi = accounts[1]
		const uintWXqJDU3 = BigInt("1741")
		const uintXwkrMPt = BigInt("465")
		const address39st7f = accounts[3]
		const uintI46MLNR = BigInt("261")
		const addressw0WHkNS = accounts[4]
		const addressKuvsMNK = await Token50X100YifYed1.transferOwnership.call(addressbsmmwkm, {from: accounts[4]});
//		const boolYYO1ZW0 = await Token50X100YifYed1.transfer.call(addressngBDO92, uintpgS4iDx, {from: accounts[1]});
//		const boolQRy5lbE = await Token50X100YifYed1._transfer.call(addressYmhMRxi, addressim1nb2k, uintRdP7Pc, uintdBzXEX, {from: accounts[4]});
//		const boolaDsmZa = await Token50X100YifYed1.setVesting.call(address39st7f, uintXwkrMPt, uintWXqJDU3, {from: accounts[3]});
//		const boolTlAkLh8 = await Token50X100YifYed1.decreaseApproval.call(addressw0WHkNS, uintI46MLNR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100YifYed1.transfer.call(addressngBDO92, uintpgS4iDx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100L3xAJIz = await Token50X100.new({from: accounts[0]});
		const uintWA0rrpL = BigInt("1007")
		const addresshdJTwpN = accounts[1]
		const uintTmMAdab = BigInt("1449")
		const uintGo3LE9M = BigInt("907")
		const addressPdORnk = accounts[2]
		const uintA6wDsGm = BigInt("139")
		const stringT1g9Edb = "t6Dt0KOdoZlrcOy9WPGnXrj5Ajohnkj8EsHKfgRM2FxDnb0Qaxa17LwVSezHe2653RflRfoqSNlhsWOkuPfPavqT"
		const stringGgj93Vp = "1OKTYSsdeECa40XTuj2hUUlHIAjzMFySwekaHSnKAxDoGBH4n0MxPlskiC3ERIVLmfyMxbYDvXZsT"
		const uintkHyAzEV = BigInt("553")
		const addresspUwhLPg = "0x0000000000000000000000000000000000000001"
		const boolxUjdDMv = await Token50X100L3xAJIz.approve.call(addresshdJTwpN, uintWA0rrpL, {from: "0x0000000000000000000000000000000000000001"});
		const boolL4FLu6d = await Token50X100L3xAJIz.setVesting.call(addressPdORnk, uintGo3LE9M, uintTmMAdab, {from: accounts[0]});
//		await Token50X100L3xAJIz.lock.call({from: accounts[0]});
//		await Token50X100L3xAJIz.setSymbolNameDecimals.call(stringGgj93Vp, stringT1g9Edb, uintA6wDsGm, {from: accounts[1]});
//		const boolIHvtVxa = await Token50X100L3xAJIz.transfer.call(addresspUwhLPg, uintkHyAzEV, {from: accounts[3]});

		assert.equal(boolL4FLu6d, true)
		assert.equal(boolxUjdDMv, true)
		await expect(Token50X100L3xAJIz.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100EV5AzaY = await Token50X100.new({from: accounts[3]});
		const address6UtWz4 = accounts[1]
		const addresslRjTwe8 = accounts[2]
		const uintCe1XHK7 = BigInt("94")
		const addressxMUzHKY = "0x00000000000000000000000000000000000000-1"
		const uintT3lD0XY = BigInt("105")
		const addressWXTPHc0 = accounts[6]
		const addresstAivT9o = accounts[3]
		const uint256pCsXwSs = await Token50X100EV5AzaY.allowance.call(addresslRjTwe8, address6UtWz4, {from: accounts[4]});
//		const boolr0FeFq = await Token50X100EV5AzaY.decreaseApproval.call(addressxMUzHKY, uintCe1XHK7, {from: accounts[0]});
//		const boollEnxkl = await Token50X100EV5AzaY.transferFrom.call(addresstAivT9o, addressWXTPHc0, uintT3lD0XY, {from: accounts[0]});

		assert.equal(uint256pCsXwSs, BigInt("0"))
		await expect(Token50X100EV5AzaY.decreaseApproval.call(addressxMUzHKY, uintCe1XHK7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yHT2VK = await Token50X100.new({from: accounts[5]});
		const uintRapzs1V = BigInt("68")
		const addressUOZA0rB = accounts[1]
		const boolfytWlv = true
		const addressrKVbGX = accounts[4]
		const uintO6MXMrV = BigInt("735")
		const uintfiHnnvx = BigInt("1632")
		const addressBrC9rT2 = accounts[0]
		const addresso3vJVL = accounts[2]
		const booldj2rr1 = await Token50X100yHT2VK.increaseApproval.call(addressUOZA0rB, uintRapzs1V, {from: accounts[0]});
//		await Token50X100yHT2VK.setWhiteList.call(addressrKVbGX, boolfytWlv, {from: accounts[5]});
//		const boolloaBlpg = await Token50X100yHT2VK._transfer.call(addresso3vJVL, addressBrC9rT2, uintfiHnnvx, uintO6MXMrV, {from: accounts[5]});

		assert.equal(booldj2rr1, true)
		await expect(Token50X100yHT2VK.setWhiteList.call(addressrKVbGX, boolfytWlv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100EV5AzaY = await Token50X100.new({from: accounts[3]});
		const addressEJyrTIQ = accounts[0]
		const addressMsdo8NQ = accounts[3]
		const addressiQYbu6l = accounts[2]
		const uintrocqjtU = BigInt("1712")
		const addressuZLd3N = accounts[2]
		const uintg9wAmcE = BigInt("1164")
		const addressNht6UXd = accounts[5]
		const uintqNqYOcQ = BigInt("561")
		const addressUKRNS4F = "0x0000000000000000000000000000000000000001"
		const address9SWXtU = accounts[3]
		const uintRBu8Hwd = BigInt("105")
		const addressFOJsTao = accounts[6]
		const addressCbeA9A = accounts[3]
//		await Token50X100EV5AzaY.setTokenContract.call(addressEJyrTIQ, {from: accounts[3]});
//		const uint256pCsXwSs = await Token50X100EV5AzaY.allowance.call(addressiQYbu6l, addressMsdo8NQ, {from: accounts[4]});
//		const booloiwU2KL = await Token50X100EV5AzaY.approve.call(addressuZLd3N, uintrocqjtU, {from: accounts[2]});
//		const boolVC61ruv = await Token50X100EV5AzaY.increaseApproval.call(addressNht6UXd, uintg9wAmcE, {from: accounts[2]});
//		const boolBv9oNHz = await Token50X100EV5AzaY.transferFrom.call(address9SWXtU, addressUKRNS4F, uintqNqYOcQ, {from: accounts[4]});
//		const boollEnxkl = await Token50X100EV5AzaY.transferFrom.call(addressCbeA9A, addressFOJsTao, uintRBu8Hwd, {from: accounts[0]});

		await expect(Token50X100EV5AzaY.setTokenContract.call(addressEJyrTIQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100zzF2dOv = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRrK99nq = BigInt("1279")
		const uintVE85to = BigInt("714")
		const addressbJzPMcc = accounts[2]
		const uintiPiVJo6 = BigInt("1443")
		const uintlugUx5w = BigInt("701")
		const addressUZseA4Y = "0x0000000000000000000000000000000000000001"
		const addressgUKbjWI = accounts[3]
		const uintnk0hh9j = BigInt("688")
		const uintbuL3BgG = BigInt("232")
		const boolwg8JfTv = await Token50X100zzF2dOv.setMaxLockPeriod.call(uintRrK99nq, {from: accounts[3]});
		const boolw0HBAjs = await Token50X100zzF2dOv.transfer.call(addressbJzPMcc, uintVE85to, {from: accounts[5]});
		const boolvnMba8 = await Token50X100zzF2dOv.setVesting.call(addressUZseA4Y, uintlugUx5w, uintiPiVJo6, {from: accounts[1]});
		await Token50X100zzF2dOv.setTokenContract.call(addressgUKbjWI, {from: accounts[2]});
		const booltezTC71 = await Token50X100zzF2dOv.safeLock.call(uintbuL3BgG, uintnk0hh9j, {from: accounts[0]});
	});
})