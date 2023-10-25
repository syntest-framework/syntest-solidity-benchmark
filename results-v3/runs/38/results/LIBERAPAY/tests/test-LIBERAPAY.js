const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYV4cshQ5 = await LIBERAPAY.new({from: accounts[2]});
		const uintJZloz7 = BigInt("429")
		const addressFKpXqLx = accounts[4]
		const uintjiaBEMZ = BigInt("76")
		const addressFUP0jAk = accounts[4]
		await LIBERAPAYV4cshQ5.showLockState.call(addressFKpXqLx, uintJZloz7, {from: accounts[4]});
		const uint256OhIpwG = await LIBERAPAYV4cshQ5.totalSupply.call({from: accounts[1]});
		await LIBERAPAYV4cshQ5.whenPaused.call({from: accounts[0]});
		await LIBERAPAYV4cshQ5.whenNotPaused.call({from: accounts[2]});
		const booldUhRM2F = await LIBERAPAYV4cshQ5.transfer.call(addressFUP0jAk, uintjiaBEMZ, {from: accounts[2]});

		await expect(LIBERAPAYV4cshQ5.showLockState.call(addressFKpXqLx, uintJZloz7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJv6kOwj = await LIBERAPAY.new({from: accounts[1]});
		const addressyACAQeo = accounts[3]
		const uintEygTsks = BigInt("351")
		const addressfmuMZ00 = accounts[2]
		const uintjPSHhC1 = BigInt("1062")
		const addressph5XDlW = accounts[0]
		const uinto9WP4RR = BigInt("88")
		const addressITOyzJ = accounts[0]
		const addressqwwDMAS = await LIBERAPAYJv6kOwj.transferOwnership.call(addressyACAQeo, {from: accounts[3]});
		const boolhoF901n = await LIBERAPAYJv6kOwj.unlock.call(addressfmuMZ00, uintEygTsks, {from: accounts[1]});
		const boolFMz9Pib = await LIBERAPAYJv6kOwj.mint.call(addressph5XDlW, uintjPSHhC1, {from: accounts[3]});
		const boolEHmqECs = await LIBERAPAYJv6kOwj.transfer.call(addressITOyzJ, uinto9WP4RR, {from: accounts[0]});

		await expect(LIBERAPAYJv6kOwj.transferOwnership.call(addressyACAQeo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkugRvz = await LIBERAPAY.new({from: accounts[3]});
		const addressdMle2ew = "0x0000000000000000000000000000000000000001"
		const uintGUCEDex = BigInt("204")
		const uintdFzAEry = BigInt("48")
		const addressLxJYbf = accounts[1]
		const uintRYkvEMo = BigInt("285")
		const addressjys8v7 = accounts[4]
		await LIBERAPAYkugRvz.f.call({from: accounts[0]});
		const addressMDtQZR4 = await LIBERAPAYkugRvz.upgradeTo.call(addressdMle2ew, {from: accounts[3]});
		const boolwKMKw58 = await LIBERAPAYkugRvz.burn.call(uintGUCEDex, {from: accounts[3]});
		const boolpkCQS0J = await LIBERAPAYkugRvz.decreaseAllowance.call(addressLxJYbf, uintdFzAEry, {from: accounts[2]});
		const boolGvOQRQT = await LIBERAPAYkugRvz.distribute.call(addressjys8v7, uintRYkvEMo, {from: accounts[3]});

		await expect(LIBERAPAYkugRvz.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYV0lqph8 = await LIBERAPAY.new({from: accounts[1]});
		const uintdrCDMwB = BigInt("826")
		const uintxgmiyiu = BigInt("892")
		const addressYcOdDyN = accounts[1]
		const uintMZfeBvE = BigInt("1727")
		const addressoyCeP3i = "0x0000000000000000000000000000000000000001"
		const uintsJ8oP9f = BigInt("906")
		const addressf23OyWB = accounts[0]
		const addresstKc4NBh = accounts[3]
		const boolvS0OIrf = await LIBERAPAYV0lqph8.lock.call(addressYcOdDyN, uintxgmiyiu, uintdrCDMwB, {from: accounts[1]});
		await LIBERAPAYV0lqph8.showLockState.call(addressoyCeP3i, uintMZfeBvE, {from: accounts[5]});
		const boolXTtgw0A = await LIBERAPAYV0lqph8.transferFrom.call(addresstKc4NBh, addressf23OyWB, uintsJ8oP9f, {from: accounts[2]});

		assert.equal(boolvS0OIrf, true)
		await expect(LIBERAPAYV0lqph8.showLockState.call(addressoyCeP3i, uintMZfeBvE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAYc6O3T = await LIBERAPAY.new({from: accounts[1]});
		const uintCjJUaM4 = BigInt("465")
		const addressXrl7Vkw = "0x0000000000000000000000000000000000000001"
		const addressUasuLYV = accounts[4]
		const addresskB0Xsgg = accounts[0]
		const uintUNFyfE = BigInt("223")
		const addressPVhr9ir = accounts[0]
		const boolrAWeeEX = await LIBERAPAYAYc6O3T.transfer.call(addressXrl7Vkw, uintCjJUaM4, {from: accounts[1]});
		const uint256KF3UDu9 = await LIBERAPAYAYc6O3T.currentBalanceOf.call(addressUasuLYV, {from: "0x0000000000000000000000000000000000000001"});
		const boolKzjedfP = await LIBERAPAYAYc6O3T.acceptOwnership.call({from: accounts[3]});
		const uint256i5lFNkr = await LIBERAPAYAYc6O3T.balanceOf.call(addresskB0Xsgg, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYAYc6O3T.showLockState.call(addressPVhr9ir, uintUNFyfE, {from: accounts[2]});

		assert.equal(boolrAWeeEX, true)
		assert.equal(uint256KF3UDu9, BigInt("0"))
		await expect(LIBERAPAYAYc6O3T.acceptOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYV0lqph8 = await LIBERAPAY.new({from: accounts[1]});
		const addressQiobixp = accounts[4]
		const uintejOyk0C = BigInt("65")
		const addresscBTZC8G = accounts[5]
		const uintH6vN97B = BigInt("826")
		const uintzKXCw27 = BigInt("892")
		const addressVJ1fDVd = accounts[1]
		const uintdgtT4nv = BigInt("1727")
		const addressyFIRKU3 = "0x0000000000000000000000000000000000000001"
		const uintpaIhGBm = BigInt("901")
		const addresskN7kgh = accounts[0]
		const addressHSVh1EL = accounts[3]
		const addressRvsALoC = await LIBERAPAYV0lqph8.upgradeTo.call(addressQiobixp, {from: accounts[1]});
		const boolHybmKnb = await LIBERAPAYV0lqph8.decreaseAllowance.call(addresscBTZC8G, uintejOyk0C, {from: accounts[4]});
		const boolvS0OIrf = await LIBERAPAYV0lqph8.lock.call(addressVJ1fDVd, uintzKXCw27, uintH6vN97B, {from: accounts[1]});
		await LIBERAPAYV0lqph8.showLockState.call(addressyFIRKU3, uintdgtT4nv, {from: accounts[5]});
		const boolXTtgw0A = await LIBERAPAYV0lqph8.transferFrom.call(addressHSVh1EL, addresskN7kgh, uintpaIhGBm, {from: accounts[2]});

		await expect(LIBERAPAYV0lqph8.decreaseAllowance.call(addresscBTZC8G, uintejOyk0C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYV0lqph8 = await LIBERAPAY.new({from: accounts[1]});
		const uintBVyycuB = BigInt("826")
		const uintZJanZV = BigInt("892")
		const addressXZpSA7N = accounts[1]
		const uintSsBdf5 = BigInt("1079")
		const addressH1hHbXy = accounts[0]
		const addressP4yzCJN = accounts[4]
		const uintpZnrU7D = BigInt("1760")
		const addresszoDZ8yR = "0x0000000000000000000000000000000000000001"
		const uintvAjkS7v = BigInt("906")
		const addressshpSQGw = accounts[0]
		const addressQgHRW2W = accounts[3]
		const boolvS0OIrf = await LIBERAPAYV0lqph8.lock.call(addressXZpSA7N, uintZJanZV, uintBVyycuB, {from: accounts[1]});
		const boolKYiqFD5 = await LIBERAPAYV0lqph8.increaseAllowance.call(addressH1hHbXy, uintSsBdf5, {from: accounts[0]});
		const boolrfHTFJY = await LIBERAPAYV0lqph8.unfreezeAccount.call(addressP4yzCJN, {from: accounts[3]});
		await LIBERAPAYV0lqph8.showLockState.call(addresszoDZ8yR, uintpZnrU7D, {from: accounts[5]});
		const boolXTtgw0A = await LIBERAPAYV0lqph8.transferFrom.call(addressQgHRW2W, addressshpSQGw, uintvAjkS7v, {from: accounts[2]});

		assert.equal(boolKYiqFD5, true)
		assert.equal(boolvS0OIrf, true)
		await expect(LIBERAPAYV0lqph8.unfreezeAccount.call(addressP4yzCJN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYo0I0OBP = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcqLIjaF = BigInt("1209")
		const addresswF6xc7 = accounts[4]
		const uintrw7SB3c = BigInt("1256")
		const uintJB9niA = BigInt("840")
		const addressbp1apoC = accounts[4]
		const uintiaHNLYw = BigInt("1255")
		const addressH5bn14o = accounts[1]
		const addressv3B5EEs = accounts[2]
		const uintKj45JoI = BigInt("1732")
		const addressX7reacj = accounts[3]
		await LIBERAPAYo0I0OBP.showLockState.call(addresswF6xc7, uintcqLIjaF, {from: accounts[4]});
		const booljUwcy7 = await LIBERAPAYo0I0OBP.lock.call(addressbp1apoC, uintJB9niA, uintrw7SB3c, {from: accounts[0]});
		const boolsIxwnUt = await LIBERAPAYo0I0OBP.transferFrom.call(addressv3B5EEs, addressH5bn14o, uintiaHNLYw, {from: accounts[1]});
		const boolIr1do5z = await LIBERAPAYo0I0OBP.burnFrom.call(addressX7reacj, uintKj45JoI, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKnTgMG = await LIBERAPAY.new({from: accounts[4]});
		const uintqlRtdEn = BigInt("787")
		const addressViRNPib = accounts[3]
		const uintA6yAgai = BigInt("359")
		const addressAmZ2teu = accounts[1]
		const addressSa4lxrQ = accounts[5]
		const addressU0nOAVq = accounts[0]
		const boolueEMvJ = await LIBERAPAYKnTgMG.approve.call(addressViRNPib, uintqlRtdEn, {from: accounts[2]});
		const boolZRD5j1g = await LIBERAPAYKnTgMG.unlock.call(addressAmZ2teu, uintA6yAgai, {from: accounts[1]});
		const boolGySXj73 = await LIBERAPAYKnTgMG.unfreezeAccount.call(addressSa4lxrQ, {from: accounts[1]});
		const boolEJOpQiN = await LIBERAPAYKnTgMG.freezeAccount.call(addressU0nOAVq, {from: accounts[0]});

		assert.equal(boolueEMvJ, true)
		await expect(LIBERAPAYKnTgMG.unlock.call(addressAmZ2teu, uintA6yAgai, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKEof8mw = await LIBERAPAY.new({from: accounts[1]});
		const addresszqXSKt = accounts[4]
		const addressIzu1Djf = accounts[5]
		const uint256Fu2nweE = await LIBERAPAYKEof8mw.allowance.call(addressIzu1Djf, addresszqXSKt, {from: accounts[3]});
		await LIBERAPAYKEof8mw.onlyNewOwner.call({from: accounts[4]});

		assert.equal(uint256Fu2nweE, BigInt("0"))
		await expect(LIBERAPAYKEof8mw.onlyNewOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAYc6O3T = await LIBERAPAY.new({from: accounts[1]});
		const uintySQulr1 = BigInt("465")
		const addressJw3Z4Bq = "0x0000000000000000000000000000000000000001"
		const addressTPtNzFw = accounts[5]
		const addressJ0jSIkA = accounts[0]
		const boolrAWeeEX = await LIBERAPAYAYc6O3T.transfer.call(addressJw3Z4Bq, uintySQulr1, {from: accounts[1]});
		const uint256KF3UDu9 = await LIBERAPAYAYc6O3T.currentBalanceOf.call(addressTPtNzFw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256i5lFNkr = await LIBERAPAYAYc6O3T.balanceOf.call(addressJ0jSIkA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolrAWeeEX, true)
		assert.equal(uint256KF3UDu9, BigInt("0"))
		assert.equal(uint256i5lFNkr, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYV0lqph8 = await LIBERAPAY.new({from: accounts[1]});
		const uintiHWi44s = BigInt("826")
		const uintz2IIJu7 = BigInt("892")
		const addressk4rejEM = accounts[1]
		const uintoopcXEJ = BigInt("1727")
		const addressENiMT6 = "0x0000000000000000000000000000000000000001"
		const uintzgMkIRr = BigInt("1948")
		const addressFUyIOJv = accounts[5]
		const boolvS0OIrf = await LIBERAPAYV0lqph8.lock.call(addressk4rejEM, uintz2IIJu7, uintiHWi44s, {from: accounts[1]});
		await LIBERAPAYV0lqph8.showLockState.call(addressENiMT6, uintoopcXEJ, {from: accounts[5]});
		const boolRbhPa6A = await LIBERAPAYV0lqph8.burnFrom.call(addressFUyIOJv, uintzgMkIRr, {from: accounts[3]});

		assert.equal(boolvS0OIrf, true)
		await expect(LIBERAPAYV0lqph8.showLockState.call(addressENiMT6, uintoopcXEJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYV0lqph8 = await LIBERAPAY.new({from: accounts[1]});
		const uintUf8a3U = BigInt("826")
		const uintpSQLgPI = BigInt("892")
		const addressUvP7LH = accounts[1]
		const addresstmIbi0w = accounts[3]
		const uintEP0wrTX = BigInt("906")
		const addressv0v1RB8 = accounts[0]
		const addressl3Uz1fF = accounts[3]
		const boolvS0OIrf = await LIBERAPAYV0lqph8.lock.call(addressUvP7LH, uintpSQLgPI, uintUf8a3U, {from: accounts[1]});
		const addressSdl0eiL = await LIBERAPAYV0lqph8.transferOwnership.call(addresstmIbi0w, {from: accounts[1]});
		const boolXTtgw0A = await LIBERAPAYV0lqph8.transferFrom.call(addressl3Uz1fF, addressv0v1RB8, uintEP0wrTX, {from: accounts[2]});
		const uint256Z9AFw6s = await LIBERAPAYV0lqph8.getNowTime.call({from: accounts[4]});
		await LIBERAPAYV0lqph8.whenPaused.call({from: accounts[4]});

		assert.equal(boolvS0OIrf, true)
		await expect(LIBERAPAYV0lqph8.transferFrom.call(addressl3Uz1fF, addressv0v1RB8, uintEP0wrTX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYV0lqph8 = await LIBERAPAY.new({from: accounts[1]});
		const uintMv8mMxQ = BigInt("826")
		const uintoEK5Cei = BigInt("1403")
		const addressJGWawNK = accounts[1]
		const uintOVsyiYF = BigInt("1727")
		const addressoOWQXsR = "0x0000000000000000000000000000000000000001"
		const addressjqn2tYO = accounts[5]
		const uintKOrjFXg = BigInt("906")
		const addresse1YPYYE = accounts[0]
		const addressFNPQGck = accounts[3]
		const boolvS0OIrf = await LIBERAPAYV0lqph8.lock.call(addressJGWawNK, uintoEK5Cei, uintMv8mMxQ, {from: accounts[1]});
		await LIBERAPAYV0lqph8.showLockState.call(addressoOWQXsR, uintOVsyiYF, {from: accounts[5]});
		const boolsENn4BB = await LIBERAPAYV0lqph8.freezeAccount.call(addressjqn2tYO, {from: accounts[1]});
		const boolXTtgw0A = await LIBERAPAYV0lqph8.transferFrom.call(addressFNPQGck, addresse1YPYYE, uintKOrjFXg, {from: accounts[2]});

		assert.equal(boolvS0OIrf, true)
		await expect(LIBERAPAYV0lqph8.showLockState.call(addressoOWQXsR, uintOVsyiYF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKEof8mw = await LIBERAPAY.new({from: accounts[1]});
		const uintOPxZ4QS = BigInt("787")
		const addressIapVt7m = accounts[1]
		const uint256JV7ZdZB = await LIBERAPAYKEof8mw.getNowTime.call({from: accounts[3]});
		const boolWwXyvg8 = await LIBERAPAYKEof8mw.transfer.call(addressIapVt7m, uintOPxZ4QS, {from: accounts[4]});
		await LIBERAPAYKEof8mw.onlyNewOwner.call({from: accounts[4]});

		assert.equal(uint256JV7ZdZB, BigInt("1630229721"))
		await expect(LIBERAPAYKEof8mw.transfer.call(addressIapVt7m, uintOPxZ4QS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAYc6O3T = await LIBERAPAY.new({from: accounts[1]});
		const addressHFJTaK = accounts[5]
		const addressCBPgBWT = accounts[4]
		const uintzKrvMq = BigInt("465")
		const addressJwJACSl = "0x0000000000000000000000000000000000000000"
		const addressHf5IQku = accounts[0]
		const booligQlxuT = await LIBERAPAYAYc6O3T.unfreezeAccount.call(addressHFJTaK, {from: accounts[1]});
		const addressPKgk8xx = await LIBERAPAYAYc6O3T.notFrozen.call(addressCBPgBWT, {from: accounts[2]});
		const boolrAWeeEX = await LIBERAPAYAYc6O3T.transfer.call(addressJwJACSl, uintzKrvMq, {from: accounts[1]});
		const uint256i5lFNkr = await LIBERAPAYAYc6O3T.balanceOf.call(addressHf5IQku, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYAYc6O3T.unfreezeAccount.call(addressHFJTaK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYV0lqph8 = await LIBERAPAY.new({from: accounts[1]});
		const uintaxJ56It = BigInt("891")
		const addressxESdg7Z = accounts[0]
		const addressGrq6fpZ = accounts[3]
		await LIBERAPAYV0lqph8.pause.call({from: accounts[1]});
		const boolXTtgw0A = await LIBERAPAYV0lqph8.transferFrom.call(addressGrq6fpZ, addressxESdg7Z, uintaxJ56It, {from: accounts[2]});

		await expect(LIBERAPAYV0lqph8.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYV0lqph8 = await LIBERAPAY.new({from: accounts[1]});
		const uintkPbxzB = BigInt("866")
		const uintN3PLwII = BigInt("906")
		const addresstBco0er = accounts[0]
		const addressuDSVl5A = accounts[3]
		const uintIQ9obsH = BigInt("292")
		const boolmELDVVL = await LIBERAPAYV0lqph8.burn.call(uintkPbxzB, {from: accounts[1]});
		const boolXTtgw0A = await LIBERAPAYV0lqph8.transferFrom.call(addressuDSVl5A, addresstBco0er, uintN3PLwII, {from: accounts[2]});
		const booldpTXPVT = await LIBERAPAYV0lqph8.burn.call(uintIQ9obsH, {from: accounts[1]});

		assert.equal(boolmELDVVL, true)
		await expect(LIBERAPAYV0lqph8.transferFrom.call(addressuDSVl5A, addresstBco0er, uintN3PLwII, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAYc6O3T = await LIBERAPAY.new({from: accounts[1]});
		const uintihFp71D = BigInt("563")
		const addresso6idf1i = accounts[0]
		const addressmEFaggj = accounts[2]
		const addressmsB4E8Q = accounts[0]
		const boolxRCS5nc = await LIBERAPAYAYc6O3T.distribute.call(addresso6idf1i, uintihFp71D, {from: accounts[1]});
		const uint256i5lFNkr = await LIBERAPAYAYc6O3T.balanceOf.call(addressmEFaggj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vDzo3aU = await LIBERAPAYAYc6O3T.currentBalanceOf.call(addressmsB4E8Q, {from: accounts[2]});

		assert.equal(boolxRCS5nc, true)
		assert.equal(uint256i5lFNkr, BigInt("0"))
		assert.equal(uint256vDzo3aU, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAYc6O3T = await LIBERAPAY.new({from: accounts[1]});
		const uintZJEhN6T = BigInt("1461")
		const addressVQ0ixLA = accounts[2]
		const uintCuI6zW8 = BigInt("999")
		const addressAvde4CF = accounts[4]
		const addressn91VU6k = accounts[2]
		const boolq1DrgQv = await LIBERAPAYAYc6O3T.unlock.call(addressVQ0ixLA, uintZJEhN6T, {from: accounts[1]});
		const boolAm43atU = await LIBERAPAYAYc6O3T.increaseAllowance.call(addressAvde4CF, uintCuI6zW8, {from: accounts[2]});
		const uint256i5lFNkr = await LIBERAPAYAYc6O3T.balanceOf.call(addressn91VU6k, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYAYc6O3T.unlock.call(addressVQ0ixLA, uintZJEhN6T, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAYc6O3T = await LIBERAPAY.new({from: accounts[1]});
		const uintnil7Ryl = BigInt("1466")
		const address5MljsY = accounts[1]
		const uintYyf8Yht = BigInt("459")
		const addressDfUrDAT = "0x0000000000000000000000000000000000000001"
		const uinthd3Jxld = BigInt("909")
		const boolwE8Iad5 = await LIBERAPAYAYc6O3T.mint.call(address5MljsY, uintnil7Ryl, {from: accounts[1]});
		const boolrAWeeEX = await LIBERAPAYAYc6O3T.transfer.call(addressDfUrDAT, uintYyf8Yht, {from: accounts[1]});
		const booldvVKR5O = await LIBERAPAYAYc6O3T.burn.call(uinthd3Jxld, {from: accounts[3]});

		await expect(LIBERAPAYAYc6O3T.mint.call(address5MljsY, uintnil7Ryl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})