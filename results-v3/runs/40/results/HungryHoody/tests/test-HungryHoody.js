const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyTQeTb1o = await HungryHoody.new({from: accounts[3]});
		const uintCyJDGoe = BigInt("460")
		const uintONmJZtL = BigInt("634")
		const uintZ5GbaSw = BigInt("118")
		const uintpx4YN9M = BigInt("1759")
		const uintAIhkRhI = BigInt("701")
		const addressOcnhBrC = "0x0000000000000000000000000000000000000001"
		const addresst9kFdZC = accounts[1]
		const addressZO8ERD4 = accounts[2]
		const addresstxiGJpl = accounts[4]
		const uintxtU8pxo = BigInt("1002")
		const uintpGjrLpC = BigInt("1776")
		const uintJ8ttsVu = await HungryHoodyTQeTb1o.safeMul.call(uintONmJZtL, uintCyJDGoe, {from: accounts[3]});
		const uintgoYZZh5 = await HungryHoodyTQeTb1o.safeSub.call(uintpx4YN9M, uintZ5GbaSw, {from: accounts[4]});
		const booldNJWGmc = await HungryHoodyTQeTb1o.transferFrom.call(addresst9kFdZC, addressOcnhBrC, uintAIhkRhI, {from: accounts[4]});
		const uintZM3uvWB = await HungryHoodyTQeTb1o.allowance.call(addresstxiGJpl, addressZO8ERD4, {from: accounts[0]});
		const uintUWgcoP4 = await HungryHoodyTQeTb1o.safeAdd.call(uintpGjrLpC, uintxtU8pxo, {from: accounts[2]});

		assert.equal(uintJ8ttsVu, BigInt("291640"))
		assert.equal(uintgoYZZh5, BigInt("1641"))
		await expect(HungryHoodyTQeTb1o.transferFrom.call(addresst9kFdZC, addressOcnhBrC, uintAIhkRhI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyHB0DxS7 = await HungryHoody.new({from: accounts[5]});
		const addresssvpMKxO = accounts[2]
		const addressAHtqo3t = accounts[4]
		const addressMffQIug = accounts[5]
		const uintOyhtp2u = BigInt("1087")
		const addressMt1AOo3 = accounts[2]
		const addressNWYSFbp = accounts[2]
		const addresstRTWmeW = accounts[4]
		const uintWiTKkh4 = await HungryHoodyHB0DxS7.balanceOf.call(addresssvpMKxO, {from: accounts[0]});
		const uintG2bHKZ4 = await HungryHoodyHB0DxS7.allowance.call(addressMffQIug, addressAHtqo3t, {from: accounts[5]});
		const boolBd4r453 = await HungryHoodyHB0DxS7.transferFrom.call(addressNWYSFbp, addressMt1AOo3, uintOyhtp2u, {from: accounts[5]});
		const uintA6n7xad = await HungryHoodyHB0DxS7.balanceOf.call(addresstRTWmeW, {from: accounts[4]});

		assert.equal(uintG2bHKZ4, BigInt("0"))
		assert.equal(uintWiTKkh4, BigInt("0"))
		await expect(HungryHoodyHB0DxS7.transferFrom.call(addressNWYSFbp, addressMt1AOo3, uintOyhtp2u, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyScZLUtz = await HungryHoody.new({from: accounts[1]});
		const uinthFrbcGF = BigInt("312")
		const addressWHKAhjd = accounts[0]
		const uintqbmrmAG = BigInt("143")
		const uintGlaBVvK = BigInt("1163")
		const uintZCwdvWL = BigInt("1673")
		const uintvVhLxUZ = BigInt("599")
		const boolCSetkMJ = await HungryHoodyScZLUtz.transfer.call(addressWHKAhjd, uinthFrbcGF, {from: accounts[3]});
		const uintgucs0bN = await HungryHoodyScZLUtz.totalSupply.call({from: accounts[3]});
		const uintq1mfHo9 = await HungryHoodyScZLUtz.safeMul.call(uintGlaBVvK, uintqbmrmAG, {from: accounts[5]});
		const uintd1xajda = await HungryHoodyScZLUtz.safeDiv.call(uintvVhLxUZ, uintZCwdvWL, {from: accounts[4]});

		await expect(HungryHoodyScZLUtz.transfer.call(addressWHKAhjd, uinthFrbcGF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyERmpLnF = await HungryHoody.new({from: accounts[0]});
		const uintSQrNH6Q = BigInt("95")
		const uintioxgU7B = BigInt("606")
		const uintwspD5SB = BigInt("1286")
		const uinteIow2us = BigInt("1511")
		const uintXZgj6cA = BigInt("477")
		const addressy5WHcEH = accounts[0]
		const uintQNEYaKo = await HungryHoodyERmpLnF.safeSub.call(uintioxgU7B, uintSQrNH6Q, {from: "0x0000000000000000000000000000000000000001"});
		const uintgqYimuF = await HungryHoodyERmpLnF.safeAdd.call(uinteIow2us, uintwspD5SB, {from: accounts[1]});
		const boolcoU6U1 = await HungryHoodyERmpLnF.transfer.call(addressy5WHcEH, uintXZgj6cA, {from: accounts[3]});

		assert.equal(uintQNEYaKo, BigInt("511"))
		assert.equal(uintgqYimuF, BigInt("2797"))
		await expect(HungryHoodyERmpLnF.transfer.call(addressy5WHcEH, uintXZgj6cA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyxYeGdu3 = await HungryHoody.new({from: accounts[1]});
		const uintKG5NCVU = BigInt("1365")
		const addressSViHB33 = accounts[0]
		const addressxXqBuI = accounts[1]
		const uintRnq6apM = BigInt("913")
		const addressf73gENI = accounts[1]
		const addresshzf6Qr4 = accounts[1]
		const booln8n7CE5 = await HungryHoodyxYeGdu3.approve.call(addressSViHB33, uintKG5NCVU, {from: accounts[5]});
		const uintrlo1RSB = await HungryHoodyxYeGdu3.balanceOf.call(addressxXqBuI, {from: accounts[3]});
		const boolINNkSFQ = await HungryHoodyxYeGdu3.transferFrom.call(addresshzf6Qr4, addressf73gENI, uintRnq6apM, {from: accounts[4]});

		assert.equal(booln8n7CE5, true)
		assert.equal(uintrlo1RSB, BigInt("25000000000000000000"))
		await expect(HungryHoodyxYeGdu3.transferFrom.call(addresshzf6Qr4, addressf73gENI, uintRnq6apM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyGRBCiAm = await HungryHoody.new({from: accounts[4]});
		const addressazh0brP = accounts[0]
		const uintpes3Ak = BigInt("1096")
		const uintEHnU34J = BigInt("1354")
		const uintiOf3Hrh = BigInt("382")
		const uintq24Jksw = BigInt("940")
		const uintQBwX8MK = await HungryHoodyGRBCiAm.balanceOf.call(addressazh0brP, {from: accounts[2]});
		const uintQ7g1Fe = await HungryHoodyGRBCiAm.safeDiv.call(uintEHnU34J, uintpes3Ak, {from: accounts[3]});
		const uintCXwhB5Y = await HungryHoodyGRBCiAm.safeMul.call(uintq24Jksw, uintiOf3Hrh, {from: accounts[0]});

		assert.equal(uintCXwhB5Y, BigInt("359080"))
		assert.equal(uintQ7g1Fe, BigInt("1"))
		assert.equal(uintQBwX8MK, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyST8MS1c = await HungryHoody.new({from: accounts[2]});
		const addresspEVZqub = accounts[0]
		const addressCcUh1r4 = accounts[5]
		const uintvwMmPCK = BigInt("1236")
		const uintPhK848W = BigInt("603")
		const uintAE6J2Gp = await HungryHoodyST8MS1c.totalSupply.call({from: accounts[2]});
		const uintqs2pipf = await HungryHoodyST8MS1c.allowance.call(addressCcUh1r4, addresspEVZqub, {from: accounts[0]});
		const uintPthZP2e = await HungryHoodyST8MS1c.safeAdd.call(uintPhK848W, uintvwMmPCK, {from: accounts[1]});

		assert.equal(uintAE6J2Gp, BigInt("25000000000000000000"))
		assert.equal(uintPthZP2e, BigInt("1839"))
		assert.equal(uintqs2pipf, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodytkU0Tpi = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlYWhYP = BigInt("1245")
		const addressvuMjkva = accounts[4]
		const addresspFHmkP = accounts[1]
		const uintQU5rGf4 = BigInt("2015")
		const addressytkj6lc = accounts[5]
		const boolSqfDDku = await HungryHoodytkU0Tpi.transfer.call(addressvuMjkva, uintlYWhYP, {from: accounts[5]});
		const uintSIPiNS4 = await HungryHoodytkU0Tpi.totalSupply.call({from: accounts[4]});
		const uintBTpdIF0 = await HungryHoodytkU0Tpi.balanceOf.call(addresspFHmkP, {from: accounts[1]});
		const boolqS6QkZJ = await HungryHoodytkU0Tpi.transfer.call(addressytkj6lc, uintQU5rGf4, {from: "0x0000000000000000000000000000000000000001"});
	});
})