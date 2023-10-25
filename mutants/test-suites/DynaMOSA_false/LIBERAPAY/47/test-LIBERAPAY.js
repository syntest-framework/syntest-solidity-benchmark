const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYLE9Xv7 = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBlVqxH = BigInt("94")
		const addressVO8KiFC = accounts[4]
		const addresskvkyeH8 = accounts[4]
		const uintAEEWwMO = BigInt("523")
		const addressXAD7xm8 = accounts[3]
		const addressj2xXpV = accounts[0]
		await LIBERAPAYLE9Xv7.showLockState.call(addressVO8KiFC, uintBlVqxH, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYLE9Xv7.f.call({from: accounts[4]});
		const addressKw6UhJk = await LIBERAPAYLE9Xv7.transferOwnership.call(addresskvkyeH8, {from: accounts[2]});
		await LIBERAPAYLE9Xv7.showLockState.call(addressXAD7xm8, uintAEEWwMO, {from: accounts[5]});
		await LIBERAPAYLE9Xv7.onlyNewOwner.call({from: accounts[4]});
		const boolVp5MHAP = await LIBERAPAYLE9Xv7.unfreezeAccount.call(addressj2xXpV, {from: accounts[5]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYzRKBrA5 = await LIBERAPAY.new({from: accounts[3]});
		const uintzc08OUx = BigInt("205")
		const uintMaY7Flr = BigInt("2047")
		const addressBPpkUE = accounts[1]
		const uintcHPldG9 = BigInt("1900")
		const addressBWEoK2k = accounts[2]
//		const boolrNWPpzx = await LIBERAPAYzRKBrA5.lock.call(addressBPpkUE, uintMaY7Flr, uintzc08OUx, {from: accounts[1]});
//		await LIBERAPAYzRKBrA5.onlyNewOwner.call({from: accounts[4]});
//		const boolIehXaaq = await LIBERAPAYzRKBrA5.unlock.call(addressBWEoK2k, uintcHPldG9, {from: accounts[0]});
//		const boolEEDsOyN = await LIBERAPAYzRKBrA5.acceptOwnership.call({from: accounts[4]});

		await expect(LIBERAPAYzRKBrA5.lock.call(addressBPpkUE, uintMaY7Flr, uintzc08OUx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrrKRN13 = await LIBERAPAY.new({from: accounts[3]});
		const addresseCwM0Ap = accounts[3]
		const addressVpXa1Z6 = accounts[5]
		const uintKjnzdYO = BigInt("1181")
		const addressCdCHkoq = accounts[0]
		const uint256AHRWePm = await LIBERAPAYrrKRN13.allowance.call(addressVpXa1Z6, addresseCwM0Ap, {from: accounts[2]});
//		const boolPsicSCE = await LIBERAPAYrrKRN13.transfer.call(addressCdCHkoq, uintKjnzdYO, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256o7GxNN = await LIBERAPAYrrKRN13.totalSupply.call({from: accounts[0]});

		assert.equal(uint256AHRWePm, BigInt("0"))
		await expect(LIBERAPAYrrKRN13.transfer.call(addressCdCHkoq, uintKjnzdYO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTUSDVBH = await LIBERAPAY.new({from: accounts[1]});
		const addressN8yT7MR = accounts[2]
		const addressqyFinn4 = accounts[3]
		const addressMigXKCQ = accounts[2]
//		await LIBERAPAYTUSDVBH.onlyNewOwner.call({from: accounts[4]});
//		const addressvUn8M0I = await LIBERAPAYTUSDVBH.transferOwnership.call(addressN8yT7MR, {from: accounts[0]});
//		const uint256BekAz9 = await LIBERAPAYTUSDVBH.allowance.call(addressMigXKCQ, addressqyFinn4, {from: accounts[4]});

		await expect(LIBERAPAYTUSDVBH.onlyNewOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIFhypbN = await LIBERAPAY.new({from: accounts[2]});
		const uintZyZ56GK = BigInt("1239")
		const addressAYnvxg = accounts[1]
		const uintrmFExaI = BigInt("1444")
		const addressSqxcaD = accounts[1]
		const uintLIdblKy = BigInt("277")
		const addressz1Yfrfe = "0x0000000000000000000000000000000000000001"
		const uintzsNoSJA = BigInt("672")
		const uintO6ghlUN = BigInt("51")
		const addressBmYaw2h = accounts[4]
		const addresspPy4go = accounts[5]
		const boolp28QuEy = await LIBERAPAYIFhypbN.approve.call(addressAYnvxg, uintZyZ56GK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolzRYn0Kg = await LIBERAPAYIFhypbN.burnFrom.call(addressSqxcaD, uintrmFExaI, {from: accounts[4]});
//		const boolwqyVQSs = await LIBERAPAYIFhypbN.increaseAllowance.call(addressz1Yfrfe, uintLIdblKy, {from: accounts[0]});
//		const boolQ56Kiq = await LIBERAPAYIFhypbN.lock.call(addressBmYaw2h, uintO6ghlUN, uintzsNoSJA, {from: accounts[3]});
//		const uint256PgZzG1y = await LIBERAPAYIFhypbN.balanceOf.call(addresspPy4go, {from: accounts[5]});

		assert.equal(boolp28QuEy, true)
		await expect(LIBERAPAYIFhypbN.burnFrom.call(addressSqxcaD, uintrmFExaI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYeUNGls7 = await LIBERAPAY.new({from: accounts[0]});
		const addressXmEhVlC = accounts[3]
		const uint256DyyWe48 = await LIBERAPAYeUNGls7.balanceOf.call(addressXmEhVlC, {from: accounts[1]});
//		await LIBERAPAYeUNGls7.whenNotPaused.call({from: accounts[5]});
//		const uint256fBkfKN9 = await LIBERAPAYeUNGls7.totalSupply.call({from: accounts[2]});
//		await LIBERAPAYeUNGls7.unpause.call({from: accounts[0]});

		assert.equal(uint256DyyWe48, BigInt("0"))
		await expect(LIBERAPAYeUNGls7.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrrKRN13 = await LIBERAPAY.new({from: accounts[3]});
		const addressh5gySvW = accounts[4]
		const addressJrbEQPD = accounts[5]
		const addressNKZdlvj = accounts[0]
		const uint256AHRWePm = await LIBERAPAYrrKRN13.allowance.call(addressJrbEQPD, addressh5gySvW, {from: accounts[2]});
		const uint256o7GxNN = await LIBERAPAYrrKRN13.totalSupply.call({from: accounts[0]});
//		const boolzxCkC7L = await LIBERAPAYrrKRN13.freezeAccount.call(addressNKZdlvj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256AHRWePm, BigInt("0"))
		assert.equal(uint256o7GxNN, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYrrKRN13.freezeAccount.call(addressNKZdlvj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTUSDVBH = await LIBERAPAY.new({from: accounts[1]});
		const addressO4NAGlB = accounts[5]
		const uintcqV2DOs = BigInt("531")
		const addressnIUKsCZ = accounts[4]
		const addressyn3MCWV = accounts[2]
		const addressucQucRd = accounts[4]
		const addressBi7GrrG = accounts[2]
		const uint256ujGAy9d = await LIBERAPAYTUSDVBH.balanceOf.call(addressO4NAGlB, {from: accounts[4]});
		const boolyImKfJg = await LIBERAPAYTUSDVBH.increaseAllowance.call(addressnIUKsCZ, uintcqV2DOs, {from: accounts[2]});
//		await LIBERAPAYTUSDVBH.onlyNewOwner.call({from: accounts[4]});
//		const addressvUn8M0I = await LIBERAPAYTUSDVBH.transferOwnership.call(addressyn3MCWV, {from: accounts[0]});
//		await LIBERAPAYTUSDVBH.f.call({from: accounts[0]});
//		const uint256BekAz9 = await LIBERAPAYTUSDVBH.allowance.call(addressBi7GrrG, addressucQucRd, {from: accounts[4]});

		assert.equal(boolyImKfJg, true)
		assert.equal(uint256ujGAy9d, BigInt("0"))
		await expect(LIBERAPAYTUSDVBH.onlyNewOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrrKRN13 = await LIBERAPAY.new({from: accounts[3]});
		const addressC1r2sy9 = accounts[3]
		const addressW7UECB5 = accounts[5]
		const uintwt6bAo9 = BigInt("1181")
		const addressqZHHifg = accounts[0]
//		await LIBERAPAYrrKRN13.f.call({from: accounts[3]});
//		const uint256AHRWePm = await LIBERAPAYrrKRN13.allowance.call(addressW7UECB5, addressC1r2sy9, {from: accounts[2]});
//		const boolPsicSCE = await LIBERAPAYrrKRN13.transfer.call(addressqZHHifg, uintwt6bAo9, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYrrKRN13.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256o7GxNN = await LIBERAPAYrrKRN13.totalSupply.call({from: accounts[0]});

		await expect(LIBERAPAYrrKRN13.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYmRTXQr3 = await LIBERAPAY.new({from: accounts[3]});
		const uintpHXXQaM = BigInt("619")
		const addressL3EhGC = accounts[1]
		const addresse9sIyS5 = accounts[2]
		const address64FyRq = accounts[4]
		const uintqncDHCp = BigInt("563")
		const addressWwpmFT9 = accounts[0]
//		const boolAuXUEjv = await LIBERAPAYmRTXQr3.transferFrom.call(addresse9sIyS5, addressL3EhGC, uintpHXXQaM, {from: accounts[2]});
//		await LIBERAPAYmRTXQr3.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256wgW0Z7F = await LIBERAPAYmRTXQr3.currentBalanceOf.call(address64FyRq, {from: accounts[1]});
//		const boolcYNE3l = await LIBERAPAYmRTXQr3.burnFrom.call(addressWwpmFT9, uintqncDHCp, {from: accounts[3]});
//		await LIBERAPAYmRTXQr3.whenNotPaused.call({from: accounts[4]});

		await expect(LIBERAPAYmRTXQr3.transferFrom.call(addresse9sIyS5, addressL3EhGC, uintpHXXQaM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYeUNGls7 = await LIBERAPAY.new({from: accounts[0]});
		const addressAVdZVPI = accounts[3]
		const uintcuHdyRU = BigInt("858")
		const addressGXnYrrm = accounts[3]
		const uint0urFa5 = BigInt("1512")
		const addresssFiD3rH = accounts[3]
		const uint256KpHvU6e = await LIBERAPAYeUNGls7.getNowTime.call({from: accounts[5]});
		const uint256lV5corw = await LIBERAPAYeUNGls7.totalSupply.call({from: accounts[2]});
		const uint256DyyWe48 = await LIBERAPAYeUNGls7.balanceOf.call(addressAVdZVPI, {from: accounts[1]});
//		await LIBERAPAYeUNGls7.whenNotPaused.call({from: accounts[5]});
//		const uint256fBkfKN9 = await LIBERAPAYeUNGls7.totalSupply.call({from: accounts[2]});
//		await LIBERAPAYeUNGls7.unpause.call({from: accounts[0]});
//		await LIBERAPAYeUNGls7.onlyNewOwner.call({from: accounts[0]});
//		const boolx7bP3wb = await LIBERAPAYeUNGls7.unlock.call(addressGXnYrrm, uintcuHdyRU, {from: accounts[1]});
//		const boolk8IP6VU = await LIBERAPAYeUNGls7.decreaseAllowance.call(addresssFiD3rH, uint0urFa5, {from: accounts[2]});

		assert.equal(uint256DyyWe48, BigInt("0"))
		assert.equal(uint256KpHvU6e, BigInt("1630230307"))
		assert.equal(uint256lV5corw, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYeUNGls7.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXfGdlk3 = await LIBERAPAY.new({from: accounts[2]});
		const addressgT8yp3P = accounts[4]
		const addressIIkbK1x = accounts[5]
		const uintpEZSJb8 = BigInt("1798")
		const addressAAkLczJ = accounts[4]
		const addressajmVgNB = accounts[1]
		const uint256c7ajusD = await LIBERAPAYXfGdlk3.currentBalanceOf.call(addressgT8yp3P, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshSK8PXO = await LIBERAPAYXfGdlk3.notFrozen.call(addressIIkbK1x, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYXfGdlk3.showLockState.call(addressAAkLczJ, uintpEZSJb8, {from: accounts[0]});
//		const boolRMZ0y4 = await LIBERAPAYXfGdlk3.unfreezeAccount.call(addressajmVgNB, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYXfGdlk3.unpause.call({from: accounts[3]});

		assert.equal(uint256c7ajusD, BigInt("0"))
		await expect(LIBERAPAYXfGdlk3.notFrozen.call(addressIIkbK1x, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXfGdlk3 = await LIBERAPAY.new({from: accounts[2]});
		const addressU4OtEgH = accounts[4]
		const uintdgVwUhl = BigInt("1798")
		const addressNE8DAna = accounts[4]
		const addressgoykw4j = accounts[1]
		const uint256c7ajusD = await LIBERAPAYXfGdlk3.currentBalanceOf.call(addressU4OtEgH, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYXfGdlk3.showLockState.call(addressNE8DAna, uintdgVwUhl, {from: accounts[0]});
//		const boolRMZ0y4 = await LIBERAPAYXfGdlk3.unfreezeAccount.call(addressgoykw4j, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYXfGdlk3.unpause.call({from: accounts[3]});

		assert.equal(uint256c7ajusD, BigInt("0"))
		await expect(LIBERAPAYXfGdlk3.showLockState.call(addressNE8DAna, uintdgVwUhl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkaRaSH0 = await LIBERAPAY.new({from: accounts[4]});
		const uintayWfXg = BigInt("1531")
		const addressyoGMlbN = accounts[4]
		const uintG6YrMtp = BigInt("1029")
		const uintDgQbXUw = BigInt("1685")
		const addresswzFDfEL = accounts[2]
		const addresspy0F340 = accounts[0]
		const addressH7bJ4Kh = accounts[4]
		const addresspPqp3s3 = accounts[1]
		const uintWtB2pOF = BigInt("666")
		const addressfSMiGxp = accounts[3]
		const boolEYq64aJ = await LIBERAPAYkaRaSH0.increaseAllowance.call(addressyoGMlbN, uintayWfXg, {from: accounts[2]});
//		const boolDXVOUjY = await LIBERAPAYkaRaSH0.lock.call(addresswzFDfEL, uintDgQbXUw, uintG6YrMtp, {from: accounts[4]});
//		const booljpGWzrr = await LIBERAPAYkaRaSH0.freezeAccount.call(addresspy0F340, {from: accounts[1]});
//		const uint256XzAolNH = await LIBERAPAYkaRaSH0.allowance.call(addresspPqp3s3, addressH7bJ4Kh, {from: accounts[1]});
//		const boolZf58Qw1 = await LIBERAPAYkaRaSH0.approve.call(addressfSMiGxp, uintWtB2pOF, {from: accounts[4]});
//		const boolHGkOIaQ = await LIBERAPAYkaRaSH0.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEYq64aJ, true)
		await expect(LIBERAPAYkaRaSH0.lock.call(addresswzFDfEL, uintDgQbXUw, uintG6YrMtp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYeUNGls7 = await LIBERAPAY.new({from: accounts[0]});
		const addressYeh0Yy = accounts[3]
		const addressAbxQrsu = accounts[2]
		const uinthE7mtCY = BigInt("237")
		const addressmzm3BqX = accounts[4]
		const addressUMJ0d1O = accounts[0]
		const uint256DyyWe48 = await LIBERAPAYeUNGls7.balanceOf.call(addressYeh0Yy, {from: accounts[1]});
//		const boolgPWHn3r = await LIBERAPAYeUNGls7.unfreezeAccount.call(addressAbxQrsu, {from: accounts[0]});
//		const boolpZvEzHd = await LIBERAPAYeUNGls7.transfer.call(addressmzm3BqX, uinthE7mtCY, {from: accounts[1]});
//		await LIBERAPAYeUNGls7.whenNotPaused.call({from: accounts[5]});
//		const uint256fBkfKN9 = await LIBERAPAYeUNGls7.totalSupply.call({from: accounts[2]});
//		const boolaK30ig = await LIBERAPAYeUNGls7.freezeAccount.call(addressUMJ0d1O, {from: accounts[1]});
//		await LIBERAPAYeUNGls7.unpause.call({from: accounts[0]});

		assert.equal(uint256DyyWe48, BigInt("0"))
		await expect(LIBERAPAYeUNGls7.unfreezeAccount.call(addressAbxQrsu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYmRTXQr3 = await LIBERAPAY.new({from: accounts[3]});
		const uintub0R3ZK = BigInt("77")
		const addressOujVUz = accounts[0]
		const uintwdAL1h2 = BigInt("709")
		const addresskrkYKen = accounts[1]
//		const boolYokiHaN = await LIBERAPAYmRTXQr3.decreaseAllowance.call(addressOujVUz, uintub0R3ZK, {from: accounts[2]});
//		const boolcYNE3l = await LIBERAPAYmRTXQr3.burnFrom.call(addresskrkYKen, uintwdAL1h2, {from: accounts[3]});

		await expect(LIBERAPAYmRTXQr3.decreaseAllowance.call(addressOujVUz, uintub0R3ZK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtyMn4j = await LIBERAPAY.new({from: accounts[4]});
		const addresshVq30qN = "0x0000000000000000000000000000000000000001"
		const addressBlEHtKZ = "0x0000000000000000000000000000000000000001"
		const uintMjEknNv = BigInt("1555")
		const addressUW3dJNG = accounts[4]
		const addressWvtsNET = await LIBERAPAYtyMn4j.upgradeTo.call(addresshVq30qN, {from: accounts[4]});
//		const addressbJTclZY = await LIBERAPAYtyMn4j.transferOwnership.call(addressBlEHtKZ, {from: accounts[2]});
//		const boolTHJafmx = await LIBERAPAYtyMn4j.increaseAllowance.call(addressUW3dJNG, uintMjEknNv, {from: accounts[3]});

		await expect(LIBERAPAYtyMn4j.transferOwnership.call(addressBlEHtKZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXfGdlk3 = await LIBERAPAY.new({from: accounts[2]});
		const addressA9W2cQ = accounts[5]
		const addresszCSkCWa = accounts[3]
		const uintMsstxqj = BigInt("1798")
		const addresseUsJRR = accounts[4]
		const addressfZr9UOB = accounts[4]
		const uintp56K2v = BigInt("631")
		const addresslO1nlap = accounts[5]
		const addressqogQisL = accounts[1]
		const addressfmP7wZz = accounts[2]
		const addresseoo7YbS = "0x0000000000000000000000000000000000000001"
		const addressRk1TEl6 = accounts[4]
		const addressqPs5qL4 = accounts[4]
		const uintDPKXer9 = BigInt("1537")
		const addressv6Nyp8A = accounts[0]
		const uintcSft5iI = BigInt("1003")
		const addressoodHdo = accounts[0]
		const uintPKBF2d = BigInt("244")
		const addressYy4GwX = accounts[2]
		const uintHZxbqLo = BigInt("452")
		const addressQ7ANSNK = accounts[3]
		const uint256c7ajusD = await LIBERAPAYXfGdlk3.currentBalanceOf.call(addressA9W2cQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolvwm2gDa = await LIBERAPAYXfGdlk3.freezeAccount.call(addresszCSkCWa, {from: accounts[2]});
//		await LIBERAPAYXfGdlk3.showLockState.call(addresseUsJRR, uintMsstxqj, {from: accounts[0]});
//		const boolqhLMFWh = await LIBERAPAYXfGdlk3.freezeAccount.call(addressfZr9UOB, {from: accounts[1]});
//		await LIBERAPAYXfGdlk3.showLockState.call(addresslO1nlap, uintp56K2v, {from: accounts[1]});
//		await LIBERAPAYXfGdlk3.onlyNewOwner.call({from: accounts[1]});
//		const boolRMZ0y4 = await LIBERAPAYXfGdlk3.unfreezeAccount.call(addressqogQisL, {from: "0x0000000000000000000000000000000000000001"});
//		const booljxVYgj9 = await LIBERAPAYXfGdlk3.unfreezeAccount.call(addressfmP7wZz, {from: accounts[4]});
//		const boolxB0eEP = await LIBERAPAYXfGdlk3.unfreezeAccount.call(addresseoo7YbS, {from: accounts[1]});
//		const uint256wAOsTX = await LIBERAPAYXfGdlk3.allowance.call(addressqPs5qL4, addressRk1TEl6, {from: accounts[4]});
//		const boolwhtlu1Y = await LIBERAPAYXfGdlk3.approve.call(addressv6Nyp8A, uintDPKXer9, {from: accounts[0]});
//		const bool6QmNoY = await LIBERAPAYXfGdlk3.distribute.call(addressoodHdo, uintcSft5iI, {from: accounts[2]});
//		await LIBERAPAYXfGdlk3.unpause.call({from: accounts[3]});
//		const booldFS8rFo = await LIBERAPAYXfGdlk3.approve.call(addressYy4GwX, uintPKBF2d, {from: accounts[4]});
//		const boolYWSyzie = await LIBERAPAYXfGdlk3.unlock.call(addressQ7ANSNK, uintHZxbqLo, {from: accounts[4]});

		assert.equal(boolvwm2gDa, true)
		assert.equal(uint256c7ajusD, BigInt("0"))
		await expect(LIBERAPAYXfGdlk3.showLockState.call(addresseUsJRR, uintMsstxqj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXfGdlk3 = await LIBERAPAY.new({from: accounts[2]});
		const uintLfxA1YC = BigInt("1588")
		const addressl75DWuX = accounts[4]
		const uintO7J3iT = BigInt("1798")
		const addressfmeiyIw = accounts[5]
		const boolSMPi1rf = await LIBERAPAYXfGdlk3.distribute.call(addressl75DWuX, uintLfxA1YC, {from: accounts[2]});
//		await LIBERAPAYXfGdlk3.showLockState.call(addressfmeiyIw, uintO7J3iT, {from: accounts[0]});
//		await LIBERAPAYXfGdlk3.pause.call({from: accounts[4]});
//		await LIBERAPAYXfGdlk3.unpause.call({from: accounts[3]});

		assert.equal(boolSMPi1rf, true)
		await expect(LIBERAPAYXfGdlk3.showLockState.call(addressfmeiyIw, uintO7J3iT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYmRTXQr3 = await LIBERAPAY.new({from: accounts[3]});
		const addressvKhPD3Q = "0x0000000000000000000000000000000000000001"
		const addressFoQ3aS8 = accounts[1]
		const address9ktUOQ = accounts[3]
		const addresswDuCJOC = await LIBERAPAYmRTXQr3.transferOwnership.call(addressvKhPD3Q, {from: accounts[3]});
		const uint256Vjhn09S = await LIBERAPAYmRTXQr3.currentBalanceOf.call(addressFoQ3aS8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256U6Eb6Yr = await LIBERAPAYmRTXQr3.balanceOf.call(address9ktUOQ, {from: accounts[4]});
//		await LIBERAPAYmRTXQr3.onlyNewOwner.call({from: accounts[4]});

		assert.equal(uint256U6Eb6Yr, BigInt("3000000000000000000000000000"))
		assert.equal(uint256Vjhn09S, BigInt("0"))
		await expect(LIBERAPAYmRTXQr3.onlyNewOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrrKRN13 = await LIBERAPAY.new({from: accounts[3]});
		const uintGnwGEmk = BigInt("667")
		const addressQk4HVM = accounts[4]
		const addressjZye3R = accounts[5]
		const uintWiT2rTl = BigInt("702")
		const addressZwC9Pzn = accounts[0]
//		await LIBERAPAYrrKRN13.pause.call({from: accounts[3]});
//		const boolLxiXeGK = await LIBERAPAYrrKRN13.transferFrom.call(addressjZye3R, addressQk4HVM, uintGnwGEmk, {from: accounts[0]});
//		const boolPsicSCE = await LIBERAPAYrrKRN13.transfer.call(addressZwC9Pzn, uintWiT2rTl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYrrKRN13.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXfGdlk3 = await LIBERAPAY.new({from: accounts[2]});
		const uintm07xYv = BigInt("1764")
		const addressvM6WD5x = accounts[4]
		const uintV7D3nyA = BigInt("1798")
		const addressgkV7CIl = accounts[4]
//		const boolc2LSUd = await LIBERAPAYXfGdlk3.unlock.call(addressvM6WD5x, uintm07xYv, {from: accounts[2]});
//		await LIBERAPAYXfGdlk3.showLockState.call(addressgkV7CIl, uintV7D3nyA, {from: accounts[0]});

		await expect(LIBERAPAYXfGdlk3.unlock.call(addressvM6WD5x, uintm07xYv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXfGdlk3 = await LIBERAPAY.new({from: accounts[2]});
		const uintE088HR = BigInt("1187")
		const uintpNhQi2w = BigInt("1798")
		const addressdGZGYdi = accounts[4]
		const uintti7yNX5 = BigInt("1527")
		const uint095Jyq = BigInt("1816")
		const addressMwjcagk = accounts[3]
		const boolaEUmM6D = await LIBERAPAYXfGdlk3.burn.call(uintE088HR, {from: accounts[2]});
//		await LIBERAPAYXfGdlk3.showLockState.call(addressdGZGYdi, uintpNhQi2w, {from: accounts[0]});
//		const boolGZOCD6H = await LIBERAPAYXfGdlk3.lock.call(addressMwjcagk, uint095Jyq, uintti7yNX5, {from: accounts[1]});

		assert.equal(boolaEUmM6D, true)
		await expect(LIBERAPAYXfGdlk3.showLockState.call(addressdGZGYdi, uintpNhQi2w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})