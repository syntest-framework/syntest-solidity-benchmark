const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressYvSWq5u = accounts[0]
		const FompvB0f5pE = await Fomp.new(addressYvSWq5u, {from: accounts[2]});
		const addressSjb5Y7 = accounts[3]
		const addressyX01JxH = accounts[2]
		const byte9zVR1j = "0x0806050e16180a01071b0216071b110a14140b080b130e101a141c0315090115"
		const byteuyH2vS = "0x0c010318130815180b06041b140f1e041e0e061d122013051801010715021f0a"
		const uintoLWmznb = BigInt("36")
		const uintOLdj2wJ = BigInt("540")
		const uintAOZI1UT = BigInt("261")
		const addressTTRn5i6 = accounts[1]
		const addressTlmrZt = accounts[3]
		const addressNBdUuTy = accounts[3]
		const uint96mpsyiOh = await FompvB0f5pE.getCurrentVotes.call(addressSjb5Y7, {from: accounts[2]});
		const uint96QuW9qeM = await FompvB0f5pE.getCurrentVotes.call(addressyX01JxH, {from: accounts[0]});
		const address3JTaey = await FompvB0f5pE.delegateBySig.call(addressTTRn5i6, uintAOZI1UT, uintOLdj2wJ, uintoLWmznb, byteuyH2vS, byte9zVR1j, {from: accounts[3]});
		const uint96UXjU5wS = await FompvB0f5pE.getCurrentVotes.call(addressTlmrZt, {from: "0x0000000000000000000000000000000000000001"});
		const uint96sZltIWe = await FompvB0f5pE.getCurrentVotes.call(addressNBdUuTy, {from: accounts[2]});

		assert.equal(uint96QuW9qeM, BigInt("0"))
		assert.equal(uint96mpsyiOh, BigInt("0"))
		await expect(FompvB0f5pE.delegateBySig.call(addressTTRn5i6, uintAOZI1UT, uintOLdj2wJ, uintoLWmznb, byteuyH2vS, byte9zVR1j, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressI79cpR = accounts[2]
		const FompnmAox8X = await Fomp.new(addressI79cpR, {from: accounts[1]});
		const addressRYzD6i3 = accounts[4]
		const addresstvoQHJg = "0x0000000000000000000000000000000000000001"
		const addresssNHHMPb = accounts[0]
		const uintZxC8Rqp = BigInt("1089")
		const addressx4UK6dl = accounts[1]
		const addressuANysen = await FompnmAox8X.delegate.call(addressRYzD6i3, {from: accounts[2]});
		const uintisJQvRS = await FompnmAox8X.balanceOf.call(addresstvoQHJg, {from: accounts[1]});
		const uint96Fv9vg4d = await FompnmAox8X.getCurrentVotes.call(addresssNHHMPb, {from: accounts[0]});
		const boolpGGjJa4 = await FompnmAox8X.approve.call(addressx4UK6dl, uintZxC8Rqp, {from: accounts[3]});

		assert.equal(boolpGGjJa4, true)
		assert.equal(uint96Fv9vg4d, BigInt("0"))
		assert.equal(uintisJQvRS, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressWSAEiha = "0x0000000000000000000000000000000000000001"
		const FomphdRNaM8 = await Fomp.new(addressWSAEiha, {from: accounts[4]});
		const addressPl9vkX1 = accounts[4]
		const addressgPsXGoD = accounts[5]
		const uintf0zYu6r = BigInt("214")
		const addressjbIAYPX = accounts[1]
		const uintTeiMbl = BigInt("142")
		const addressFVntjio = accounts[5]
		const uintMJUkJ2B = BigInt("369")
		const addressae2AZIn = accounts[0]
		const addressAWEWxC = accounts[2]
		const uintwTirPs = BigInt("989")
		const addressoQgGyOt = accounts[1]
		const addressNYAyEel = accounts[0]
		const uintemFKy03 = await FomphdRNaM8.balanceOf.call(addressPl9vkX1, {from: accounts[0]});
		const uinteBngYYu = await FomphdRNaM8.balanceOf.call(addressgPsXGoD, {from: accounts[2]});
		const uint96F8Gpg8 = await FomphdRNaM8.getPriorVotes.call(addressjbIAYPX, uintf0zYu6r, {from: accounts[2]});
		const boolEnSpNCq = await FomphdRNaM8.approve.call(addressFVntjio, uintTeiMbl, {from: accounts[2]});
		const boolVmjE8P = await FomphdRNaM8.transferFrom.call(addressAWEWxC, addressae2AZIn, uintMJUkJ2B, {from: accounts[1]});
		const boolerthxbi = await FomphdRNaM8.transferFrom.call(addressNYAyEel, addressoQgGyOt, uintwTirPs, {from: accounts[4]});

		assert.equal(boolEnSpNCq, true)
		assert.equal(uint96F8Gpg8, BigInt("0"))
		assert.equal(uinteBngYYu, BigInt("0"))
		assert.equal(uintemFKy03, BigInt("0"))
		await expect(FomphdRNaM8.transferFrom.call(addressAWEWxC, addressae2AZIn, uintMJUkJ2B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressZaO7OaP = accounts[0]
		const FompxK3U04s = await Fomp.new(addressZaO7OaP, {from: accounts[1]});
		const addressXwI8jXZ = "0x0000000000000000000000000000000000000001"
		const uintMnp9cKo = BigInt("1331")
		const addressHf4Mix = accounts[0]
		const bytevhqzOE = "0x1206011b080c07061416040b1f120412121b0d061e090f1e15161d031f17021e"
		const byteB3uephS = "0x0413120e0705170802140d14120f0e03041c18070a1d091a0a0e0d18111f0103"
		const uintl3gLzX3 = BigInt("199")
		const uintAqwfymq = BigInt("1046")
		const uintHJfG1s = BigInt("1077")
		const addressgUmxYtx = accounts[1]
		const addressX3uOnMW = accounts[3]
		const uint96RNeU7Lv = await FompxK3U04s.getCurrentVotes.call(addressXwI8jXZ, {from: accounts[3]});
		const boolGSk37R2 = await FompxK3U04s.transfer.call(addressHf4Mix, uintMnp9cKo, {from: accounts[2]});
		const addressoih6rAt = await FompxK3U04s.delegateBySig.call(addressgUmxYtx, uintHJfG1s, uintAqwfymq, uintl3gLzX3, byteB3uephS, bytevhqzOE, {from: accounts[5]});
		const addressSZI5yYk = await FompxK3U04s.delegate.call(addressX3uOnMW, {from: accounts[0]});

		assert.equal(uint96RNeU7Lv, BigInt("0"))
		await expect(FompxK3U04s.transfer.call(addressHf4Mix, uintMnp9cKo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressblMnQWf = accounts[2]
		const FompavwfgpR = await Fomp.new(addressblMnQWf, {from: accounts[1]});
		const addresszOEHjKM = accounts[0]
		const uintzMRpnY3 = BigInt("294")
		const addressXtMTbYU = "0x0000000000000000000000000000000000000001"
		const addresspFYYk5z = "0x0000000000000000000000000000000000000001"
		const uintkhwAMuE = BigInt("229")
		const addressM8ol762 = accounts[0]
		const addressYUs5H6Q = accounts[3]
		const addresskHZgfN4 = accounts[3]
		const address9YLRIs = await FompavwfgpR.delegate.call(addresszOEHjKM, {from: accounts[2]});
		const boolF45hUlW = await FompavwfgpR.approve.call(addressXtMTbYU, uintzMRpnY3, {from: accounts[1]});
		const uint96wnTnEe7 = await FompavwfgpR.getCurrentVotes.call(addresspFYYk5z, {from: accounts[0]});
		const boolByZEyte = await FompavwfgpR.approve.call(addressM8ol762, uintkhwAMuE, {from: accounts[4]});
		const uintjES0Gq = await FompavwfgpR.allowance.call(addresskHZgfN4, addressYUs5H6Q, {from: accounts[2]});

		assert.equal(boolByZEyte, true)
		assert.equal(boolF45hUlW, true)
		assert.equal(uint96wnTnEe7, BigInt("0"))
		assert.equal(uintjES0Gq, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressALouFQd = accounts[2]
		const FompislRrlW = await Fomp.new(addressALouFQd, {from: accounts[0]});
		const addressPJDgFK = accounts[4]
		const addressAzzEZGs = accounts[1]
		const uintellQQZ5 = BigInt("1678")
		const addressZsTx6SA = accounts[1]
		const addressti4FW9e = accounts[2]
		const byted4TiyE7 = "0x0a031808030d0e0c111d1e0c1b13060a031c0e060a0f070d191c030e150d0f0a"
		const byteHhQubE = "0x120312191d160e0c13201e1a160411041b18111b031c040d13171a1e161a1319"
		const uintTjHGCo = BigInt("31")
		const uintNpULj3 = BigInt("1743")
		const uintuBHF1K1 = BigInt("949")
		const addressZSqJ2g = accounts[4]
		const addressaXi4dzD = accounts[0]
		const addressaim4C6a = accounts[4]
		const uintpN23OnF = await FompislRrlW.allowance.call(addressAzzEZGs, addressPJDgFK, {from: accounts[0]});
		const boolzmJYwLN = await FompislRrlW.transferFrom.call(addressti4FW9e, addressZsTx6SA, uintellQQZ5, {from: accounts[2]});
		const addressmwZ9zp = await FompislRrlW.delegateBySig.call(addressZSqJ2g, uintuBHF1K1, uintNpULj3, uintTjHGCo, byteHhQubE, byted4TiyE7, {from: "0x0000000000000000000000000000000000000001"});
		const uint96XYgsonH = await FompislRrlW.getCurrentVotes.call(addressaXi4dzD, {from: accounts[4]});
		const addressiBs29io = await FompislRrlW.delegate.call(addressaim4C6a, {from: accounts[0]});

		assert.equal(boolzmJYwLN, true)
		assert.equal(uintpN23OnF, BigInt("0"))
		await expect(FompislRrlW.delegateBySig.call(addressZSqJ2g, uintuBHF1K1, uintNpULj3, uintTjHGCo, byteHhQubE, byted4TiyE7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressHzxSFiQ = accounts[2]
		const FompnmAox8X = await Fomp.new(addressHzxSFiQ, {from: accounts[1]});
		const addressnz9om7g = accounts[4]
		const addressx9r3E3F = "0x0000000000000000000000000000000000000000"
		const addressclJzjDr = accounts[0]
		const uintf0EdbHT = BigInt("891")
		const addressHHM7T9A = accounts[5]
		const addressSKpCi4W = accounts[3]
		const uintqhG2tpL = BigInt("1089")
		const addressdw300H2 = accounts[1]
		const addresscboOntm = accounts[4]
		const addressuANysen = await FompnmAox8X.delegate.call(addressnz9om7g, {from: accounts[2]});
		const uintisJQvRS = await FompnmAox8X.balanceOf.call(addressx9r3E3F, {from: accounts[1]});
		const uint96Fv9vg4d = await FompnmAox8X.getCurrentVotes.call(addressclJzjDr, {from: accounts[0]});
		const booll6rsZu1 = await FompnmAox8X.transferFrom.call(addressSKpCi4W, addressHHM7T9A, uintf0EdbHT, {from: accounts[4]});
		const boolpGGjJa4 = await FompnmAox8X.approve.call(addressdw300H2, uintqhG2tpL, {from: accounts[3]});
		const uintQ4cett5 = await FompnmAox8X.balanceOf.call(addresscboOntm, {from: accounts[4]});

		assert.equal(uint96Fv9vg4d, BigInt("0"))
		assert.equal(uintisJQvRS, BigInt("0"))
		await expect(FompnmAox8X.transferFrom.call(addressSKpCi4W, addressHHM7T9A, uintf0EdbHT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressjwfWEvk = accounts[2]
		const FompRJqfVWs = await Fomp.new(addressjwfWEvk, {from: accounts[2]});
		const addressmoHIR4M = accounts[4]
		const uintjYRFmil = BigInt("43")
		const addresshGvZr3A = accounts[2]
		const addressQjew1U5 = accounts[3]
		const uintToEAxDe = BigInt("1182")
		const addresse0cfC8g = accounts[3]
		const uintuJflaDK = BigInt("317")
		const addressu3nWSJI = accounts[4]
		const uint96lI31HDi = await FompRJqfVWs.getCurrentVotes.call(addressmoHIR4M, {from: accounts[4]});
		const uint96gnm2wLE = await FompRJqfVWs.getPriorVotes.call(addresshGvZr3A, uintjYRFmil, {from: accounts[5]});
		const uint96yC2mIkb = await FompRJqfVWs.getCurrentVotes.call(addressQjew1U5, {from: accounts[5]});
		const uint96ZirqfOR = await FompRJqfVWs.getPriorVotes.call(addresse0cfC8g, uintToEAxDe, {from: accounts[5]});
		const boolmtTyAbV = await FompRJqfVWs.transfer.call(addressu3nWSJI, uintuJflaDK, {from: accounts[1]});

		assert.equal(uint96ZirqfOR, BigInt("0"))
		assert.equal(uint96gnm2wLE, BigInt("0"))
		assert.equal(uint96lI31HDi, BigInt("0"))
		assert.equal(uint96yC2mIkb, BigInt("0"))
		await expect(FompRJqfVWs.transfer.call(addressu3nWSJI, uintuJflaDK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresszcZ1veA = "0x0000000000000000000000000000000000000001"
		const Fompp9CfZ4N = await Fomp.new(addresszcZ1veA, {from: "0x0000000000000000000000000000000000000001"});
		const addressAkkjAdQ = accounts[3]
		const addresswamkYNS = accounts[5]
		const addressnGR4yIA = accounts[3]
		const addresskuUICXs = accounts[4]
		const addressBg3pMzJ = accounts[5]
		const addressgQbjalO = accounts[4]
		const addressYSZu7nA = await Fompp9CfZ4N.delegate.call(addressAkkjAdQ, {from: accounts[3]});
		const uintTCuxdA = await Fompp9CfZ4N.balanceOf.call(addresswamkYNS, {from: "0x0000000000000000000000000000000000000001"});
		const uint96iFlxJEk = await Fompp9CfZ4N.getCurrentVotes.call(addressnGR4yIA, {from: "0x0000000000000000000000000000000000000001"});
		const uint96nvy3DuA = await Fompp9CfZ4N.getCurrentVotes.call(addresskuUICXs, {from: accounts[0]});
		const uintT6AMqwC = await Fompp9CfZ4N.allowance.call(addressgQbjalO, addressBg3pMzJ, {from: accounts[5]});
	});

	it('test for Fomp', async () => {
		const addresscmTYbZ = accounts[2]
		const FompavwfgpR = await Fomp.new(addresscmTYbZ, {from: accounts[1]});
		const addressNlwfNqc = accounts[0]
		const uinticnln4 = BigInt("291")
		const addressvWX7sA4 = "0x0000000000000000000000000000000000000001"
		const uintFzJkG6I = BigInt("31")
		const addressYY4x7b = accounts[0]
		const addressNAKdNm = "0x00000000000000000000000000000000000000-1"
		const uintUcxfty = BigInt("229")
		const addressY1jTRq0 = accounts[0]
		const uintrVhZFwo = BigInt("1676")
		const addressM8TTgMQ = accounts[0]
		const addresszbXbyun = accounts[3]
		const addressZmkpwPC = accounts[0]
		const addressaN4X6za = accounts[3]
		const addressHEhphB = accounts[3]
		const address9YLRIs = await FompavwfgpR.delegate.call(addressNlwfNqc, {from: accounts[2]});
		const boolF45hUlW = await FompavwfgpR.approve.call(addressvWX7sA4, uinticnln4, {from: accounts[1]});
		const uint96aT2AoHA = await FompavwfgpR.getPriorVotes.call(addressYY4x7b, uintFzJkG6I, {from: accounts[0]});
		const uint96wnTnEe7 = await FompavwfgpR.getCurrentVotes.call(addressNAKdNm, {from: accounts[0]});
		const boolByZEyte = await FompavwfgpR.approve.call(addressY1jTRq0, uintUcxfty, {from: accounts[4]});
		const boolJwdNEtj = await FompavwfgpR.transferFrom.call(addresszbXbyun, addressM8TTgMQ, uintrVhZFwo, {from: accounts[4]});
		const uint96NqHMmYC = await FompavwfgpR.getCurrentVotes.call(addressZmkpwPC, {from: accounts[3]});
		const uintjES0Gq = await FompavwfgpR.allowance.call(addressHEhphB, addressaN4X6za, {from: accounts[2]});

		assert.equal(boolF45hUlW, true)
		assert.equal(uint96aT2AoHA, BigInt("0"))
		await expect(FompavwfgpR.getCurrentVotes.call(addressNAKdNm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})